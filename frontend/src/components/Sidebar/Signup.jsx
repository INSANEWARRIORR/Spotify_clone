import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="fixed bottom-0 signup_bar text-sm items-center flex px-4 py-2 mx-2 justify-between">
      <div>
        <p className=" uppercase">preview on spotify</p>
        <p className="font-bold">
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>
      </div>
      <Link to={"/signup"}className="rounded-full text-black mt-4 px-8 text-lg  py-2 bg-white font-semibold">
        Sign Up free
      </Link>
    </div>
  );
};

export default Signup;
