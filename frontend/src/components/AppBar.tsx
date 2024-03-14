import { Avatar } from "./BlogCord"
export const AppBar=()=>{
    return <div className="border-b flex justify-between px-10 py-4">
        <div>
            Medium
        </div>
        <div>
            <Avatar size={12} name="Arthur"/>
        </div>
    </div>
}