import { Link } from "react-router-dom";

interface BlogCardProp {
    authorName:string;
    title:string;
    content:string;
    publishDate:string;
    id:number
}

export const BlogCard=({authorName,title,content,publishDate,id}:BlogCardProp)=>{
    return <Link to={`/blog/${id}`}>
     <div className="p-4 border-b border-slate-500 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
            <div className="flex justify-center flex-col">
            <Avatar size={20} name={authorName}/>
            </div>
            <div className="font-semibold">{authorName}</div>
            <div className="pl-2 font-thin">
                
            {publishDate}
            </div>
        </div>
        <div className="text-xl font-bold">
            {title}
        </div>
        <div className="font-thin">
            {content.slice(0,100)+"..."}
        </div>
        <div className="font-thin">
            {`${Math.ceil(content.length/100)} minutes`}
        </div>
        
    </div>
    </Link>
}

export function Avatar({ name, size = 4 }: { name: string; size: number }) {
    // Define a base size for width and height, adjust this based on your Tailwind config
    const baseSize = 2; // Assuming the base size is 16px for `w-1` and `h-1`
    const calculatedSize = baseSize * size;

    return (
        <div
            style={{
                width: `${calculatedSize}px`,
                height: `${calculatedSize}px`,
            }}
            className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
        >
            <span className="text-xs font-extralight text-gray-600 dark:text-gray-300">
                {name[0]}
            </span>
        </div>
    );
}
