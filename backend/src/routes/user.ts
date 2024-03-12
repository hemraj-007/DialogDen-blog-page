import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt';
import { use } from 'hono/jsx';
import { siginInput,signupInput } from "hemraj_bhatia_meduim777";


export const userRouter=new Hono<{
    Bindings:{
      DATABASE_URL:string
      JWT_SECRET:string
    }
  }>();

userRouter.post('/signup',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
    
      const body = await c.req.json();
      const {success}=siginInput.safeParse(body)
      if(!success){
        c.status(411);
        return c.json({
            msg:'invalid inputs'
        })
      }
    
      const user = await prisma.user.create({
        data: {
          name:body.name,  
          email: body.email,
          password: body.password,
        },
      });
    
      const token = await sign({ id: user.id }, c.env.JWT_SECRET)
    
      return c.json({
        jwt: token
      })
    
  });
  
  
userRouter.post('/signin',async (c)=>{
  const body =await c.req.json();
  const {success}=siginInput.safeParse(body);
  if(!success){
    c.status(411);
    return c.json('invalid input')
  }
    const prisma=new PrismaClient({
      datasourceUrl:c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
  
    try{
    const user=await prisma.user.findFirst({
      where:{
        name:body.name,
        email:body.email,
        password:body.password,
      }
    })
    if(!user){
      c.status(403);
      return c.json({error:'user not found'});
    }
    const jwt =await sign({id:user.id},c.env.JWT_SECRET);
    return c.text(jwt)
    }catch(e){
      console.log(e);
      c.status(411);
      return c.text('invalid');
    }
  });