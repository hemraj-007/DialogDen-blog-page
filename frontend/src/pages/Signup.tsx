import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"
export const Signup=()=>{
    return <div>
        <div className="gird grid-cols-2">
            <div>
                <Auth/>
            </div>
            <div className="invisible md:visible">
            <Quote/>
            </div>
        </div>
    </div>
}