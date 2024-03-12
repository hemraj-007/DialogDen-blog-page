export const Quote = () => {
    return (
      <div className="h-screen flex">
        {/* Left side - white space */}
        <div className="w-1/2 bg-white"></div>
  
        {/* Right side - Quote */}
        <div className="w-1/2 bg-slate-200 flex justify-center items-center">
          <div className="max-w-lg mr-10">
            <div className="text-3xl font-bold mb-4">
              "The customer service I received was exceptional. The support team went above and beyond to address my concerns."
            </div>
            <div className="text-xl font-semibold">
              Jules Winfield
            </div>
            <div className="text-xl font-semibold">
              CEO, Acme Inc
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  