import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt';
import { use } from 'hono/jsx';
import { CreateBlogInput } from "hemraj_bhatia_blogpost";

export const blogRouter=new Hono<{
    Bindings:{
      DATABASE_URL:string
      JWT_SECRET:string
    },
    Variables:{
        userId:string
    }
  }>()

blogRouter.use('/*',async (c,next)=>{
    const authHeader= await c.req.header("authorization")||"";
    const user=await verify(authHeader,c.env.JWT_SECRET);
    if(user){
        c.set("userId",user.id);
        await next();
    }else{
        c.status(403);
        return c.json({
            msg:'not logged in'
        })
    }
});

blogRouter.post('/',async (c)=>{
    const body =await c.req.json();
    const authorId=c.get("userId")
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog=await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:Number(authorId)
        }
    })
    return c.json({
        id:blog.id
    })
  });
  
blogRouter.put('/',async (c)=>{
    const body =await c.req.json();
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog=await prisma.post.update({
        where:{
            id:body.Id
        },data:{
            title:body.title,
            content:body.content
        }
    })
    return c.json({
        id:blog.id
    })
  });
  
blogRouter.get('/:id',async (c)=>{
    const id =c.req.param('id');
    const prisma=new PrismaClient({
        datasourceUrl:c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
    const blog=await prisma.post.findFirst({
        where:{
            id:Number(id)
        }, select: {
            id: true,
            title: true,
            content: true,
            author: {
                select: {
                    name: true
                }
            }
        }
    })
    return c.json({
        blog
    })
}catch(e){
    console.log(e);
    c.status(411);
    return c.json({
        msg:'error'
    })
}
  });

blogRouter.get('/bulk',async (c)=>{
    const body =await c.req.json();
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const posts=await prisma.post.findMany({
        select:{
            content:true,
            title:true,
            id:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    })
    return c.json({
        posts
    })
})