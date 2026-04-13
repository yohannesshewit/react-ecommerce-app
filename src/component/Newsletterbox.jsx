import React, { useState } from "react";

const Newsletterbox = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log(email); // you can send to backend here
    setEmail(""); // clear input after submit
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>

      <p className="text-gray-400 mt-3">
        Lorem ipsum simply text of the printing and typesetting industry.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full sm:flex-1 outline-none"
        />

        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default Newsletterbox;
