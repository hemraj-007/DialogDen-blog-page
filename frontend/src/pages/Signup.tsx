import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

export const Signup = () => {
  return (
    <div className="grid grid-cols-2 w-full min-h-screen">
      <div className="flex justify-center">
        <Auth type="signup" />
      </div>
      <div className="w-full">
        <Quote />
      </div>
    </div>
  );
};
