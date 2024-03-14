
import { useBlog } from "../hooks/index"
export const Blog=()=>{
    const [loading,setLoading]=useBlog();
    if(loading){
        return <div>
            loading...
        </div>
    }
    return(
        <div>
            helllooooo
        </div>
    )
}