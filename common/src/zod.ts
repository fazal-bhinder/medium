import {z} from "zod";

export const signupInput = z.object({
    email: z.string().email(),
    passward: z.string().min(6),
    name: z.string().optional()
})
export const signinInput = z.object({
    email: z.string().email(),
    passward: z.string().min(6),
})

export const createBlog = z.object({
    title: z.string(),
    content: z.string()
})
export const updateBlog = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
})


export type SignupInput = z.infer<typeof  signupInput>
export type SigninInput = z.infer<typeof  signinInput>
export type CreateBlog = z.infer<typeof createBlog>
export type UpdateBlog = z.infer<typeof updateBlog> 