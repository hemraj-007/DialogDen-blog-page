import z from 'zod'

export const siginInput=z.object({
    name:z.string().optional(),
    email:z.string().email(),
    password:z.string().min(6)
});

export const signupInput=z.object({
    name:z.string().optional(),
    email:z.string().email(),
    password:z.string().min(6)
});

export const createBlogInput=z.object({
    title:z.string(),
    content:z.string(),
});

export const updateBlogInput=z.object({
    title:z.string(),
    content:z.string(),
    id:z.number()
});


export type SigninInput=z.infer<typeof siginInput>
export type SignupInput=z.infer<typeof signupInput>
export type CreateBlogInput=z.infer<typeof createBlogInput>
export type updateBlogInput=z.infer<typeof updateBlogInput>
