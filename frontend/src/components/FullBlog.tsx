import { Blog } from "../hooks/hooks"
import { Appbar } from "./AppBar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: {blog: Blog})=>{
    return <div>
            <Appbar/>
                <div className="flex justify-center">
                    <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-lg pt-12">
                        <div className="col-span-8">
                            <div className="text-5xl font-extrabold">
                                {blog.title}
                            </div>
                            <div className="text-slate-500 pt-2">
                                Post on 2nd Dec 2023
                            </div>
                            <div className="pt-4">
                                {blog.content}
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="text-slate-600 text-lg">
                                Author
                            </div>
                            <div className="flex">
                                <div className="pr-4 flex flex-col justify-center">
                                    <Avatar name={blog.author.name || "Anonymus"}/>
                                </div>
                                <div>
                                    <div className="text-xl font-extrabold">
                                        {blog.author.name || "Anonymus"}
                                    </div>  
                                    <div className="pt-2 text-slate-500">
                                        Random jibrish about the author becuase currently we don't have any author 
                                    </div>  
                                </div>    
                            </div>                         
                        </div>
                    </div>
                </div>
            </div>
}