import React, { useRef } from "react";
import { toast, Toaster } from "sonner";

const NewsLetter = () => {
  const subsRef = useRef(null);

  const handleSubmit = (e) => {
    // have to call this onSubmit from the form. but after I set it up on the backend.
    e.preventDefault();
    const email = e.target.subEmail.value;
    const subcriber = { email };
    fetch("ekhane link boshbe subcriber add korar", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(subcriber),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          subsRef.current.reset();
          toast.success("You have subscribed successfully!");
        }
      });
  };
  return (
    <div>
      <div className="bg-greenC bg-opacity-40 rounded-2xl">
      <div className="flex flex-col gap-8 items-center py-8 w-full">
        <div>
          <p className="text-2xl md:text-4xl text-primary font-semibold text-center md:text-start">
            Subscribe to our Newsletter
          </p>
        </div>
        <div className="rounded-full p-1 border border-primary flex items-center gap-2">
          <form ref={subsRef}>
            <input
              className="rounded-l-full px-3 md:px-7 py-3 bg-transparent text-primary text-sm md:text-base placeholder:text-greenA"
              type="email"
              name="subEmail"
              placeholder="Enter your email address"
            />
            <input
              type="submit"
              value="Subscribe"
              className="text-white text-sm md:text-base md:font-semibold px-7 py-3 rounded-full bg-primary hover:shadow-lg hover:text-greenC
              cursor-pointer transition-all"
            />
          </form>
        </div>
      </div>
      <Toaster position="top-center" expand={false} richColors />
    </div>
    </div>
  );
};

export default NewsLetter;
