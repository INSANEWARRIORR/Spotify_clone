import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//Signup is a functional component using the useState hook to manage form data (userDetails)
const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    day: "",
    username: "",
    year: "",
    month: "",
    password: "",
    gender: "",
  });

  //registerUser is an asynchronous function triggered on form submission (onSubmit).
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.account);
  const registerUser = async (e) => {
    e.preventDefault();
    console.log(userDetails);
    const index = months.indexOf(userDetails.month);
    let DOB = `${index}-${userDetails.day}-${userDetails.year}`;
    const { email, password, gender, username } = userDetails;
    let d = JSON.stringify({
      email,
      password,
      gender,
      DOB,
      username,
    });
    console.log(d);
    const res = await fetch("http://localhost:5000/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: d,
    });

    const data = await res.json();
    if (data.success) {
      setUserDetails({
        email: "",
        day: "",
        username: "",
        year: "",
        month: "",
        password: "",
        gender: "",
      });
      toast.success(data.message);
      navigate("/");
      localStorage.setItem("token", JSON.stringify(data.token));
    } else {
      toast.error(data.message);
    }
    console.log(data);
  };

  //onChange handles input changes in the form fields.
  const onChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    if (e.target.name === "gender") {
      if (e.target.id === "m") {
        setUserDetails({ ...userDetails, gender: "M" });
      }
      if (e.target.id === "f") {
        setUserDetails({ ...userDetails, gender: "F" });
      }
      if (e.target.id === "o") {
        setUserDetails({ ...userDetails, gender: "O" });
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="py-8 bg-black">
        <div className="logo flex justify-center">
          <Link to="/">
            <img
              src="/assets/Spotify_Green.png"
              className="mx-auto"
              width={200}
              alt="logo"
            />
          </Link>
        </div>
        <div className=" text-black flex justify-center">
          <div className="py-10 text-center w-1/2 mx-auto">
            <h1 className="text-3xl text-white tracking-tighter my-4 font-semibold">
              Sign up for free to start listening
            </h1>
            <span className="or__">or</span>
            <p className="my-4 text-white font-bold">
              Sign up with your email address
            </p>
            <form
              onSubmit={registerUser}
              className="text-center mx-auto w-3/4 "
            >
              <div className="w-4/5 mx-auto text-left py-4">
                <label
                  htmlFor="email"
                  className="font-semibold mb-2 text-sm inline-block text-white"
                >
                  What's your email?{" "}
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={userDetails.email}
                  onChange={onChange}
                  placeholder="Enter your email"
                  autoComplete="off"
                  className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"
                />
              </div>
              <div className="w-4/5 mx-auto text-left py-4">
                <label
                  htmlFor="password"
                  className="font-semibold mb-2 text-sm text-white inline-block "
                >
                  Create a password{" "}
                </label>
                <input
                  type="password"
                  id="password"
                  value={userDetails.password}
                  onChange={onChange}
                  name="password"
                  placeholder="Create a password"
                  autoComplete="off"
                  className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"
                />
              </div>
              <div className="w-4/5 mx-auto text-left py-4">
                <label
                  htmlFor="username"
                  className="font-semibold mb-2 text-sm text-white inline-block"
                >
                  What should we call you?{" "}
                </label>
                <input
                  type="text"
                  id="username"
                  value={userDetails.username}
                  onChange={onChange}
                  name="username"
                  placeholder="Create a password"
                  autoComplete="off"
                  className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"
                />
                <small className="text-white">
                  It will appear on your profile
                </small>
              </div>
              <div className="text-left"></div>
              <div className="w-4/5 mx-auto text-left py-4">
                <label
                  htmlFor="password"
                  className="font-semibold mb-2 text-sm text-white inline-block"
                >
                  What's your date of birth?
                </label>
                <div className="flex gap-8">
                  <div className="w-1/4">
                    <label
                      htmlFor="day"
                      className="ml-2 text-white inline-block"
                    >
                      Day
                    </label>
                    <input
                      type="text"
                      value={userDetails.day}
                      onChange={onChange}
                      id="day"
                      name="day"
                      placeholder="DD"
                      autoComplete="off"
                      className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"
                    />
                  </div>
                  <div className="w-2/4">
                    <label
                      htmlFor="month"
                      className="ml-2 text-white inline-block"
                    >
                      Month
                    </label>
                    <select
                      type="radio"
                      id="month"
                      value={userDetails.month}
                      onChange={onChange}
                      name="month"
                      placeholder="MM"
                      autoComplete="off"
                      className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"
                    >
                      {months.map((m) => {
                        return (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="w-1/4">
                    <label
                      htmlFor="year"
                      className="ml-2 text-white inline-block"
                    >
                      Year
                    </label>
                    <input
                      type="text"
                      id="year"
                      name="year"
                      value={userDetails.year}
                      onChange={onChange}
                      placeholder="YYYY"
                      autoComplete="off"
                      className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"
                    />
                  </div>
                </div>
                <div className="flex gap-8 mt-4">
                  <div className="text-white">
                    <input
                      type="radio"
                      id="m"
                      name="gender"
                      placeholder="gender"
                      autoComplete="off"
                      value={userDetails.gender}
                      checked={userDetails.gender === "M"}
                      onChange={onChange}
                    />
                    <label htmlFor="m" className="ml-2 inline-block">
                      Male
                    </label>
                  </div>
                  <div className="text-white">
                    <input
                      type="radio"
                      id="f"
                      name="gender"
                      placeholder="gender"
                      className=""
                      value={userDetails.gender}
                      checked={userDetails.gender === "F"}
                      onChange={onChange}
                    />
                    <label htmlFor="f" className="ml-2 inline-block">
                      Female
                    </label>
                  </div>
                  <div className="text-white">
                    <input
                      type="radio"
                      id="o"
                      name="gender"
                      placeholder="gender"
                      className="gender"
                      autoComplete="off"
                      value={userDetails.gender}
                      checked={userDetails.gender === "O"}
                      onChange={onChange}
                    />
                    <label htmlFor="o" className="ml-2 inline-block">
                      Prefer not to say
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-4/5 mx-auto text-left py-4">
                <div className="my-4 flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="green-checkbox relative"
                    name=""
                    id=""
                  />
                  <p className="text-sm text-white">
                    I would prefer not to receive marketing messages from
                    Spotify
                  </p>
                </div>
                <div className="my-4 flex items-center gap-4">
                  <div>
                  <input
                    type="checkbox"
                    className="green-checkbox relative"
                    name=""
                    id=""
                  />
                  </div>
                  <p className="text-sm text-white">
                    Share my registration data with Spotify's content providers
                    for marketing purposes.
                  </p>
                </div>
                <p className="my-4 text-xs text-white">
                  By clicking on sign-up, you agree to{" "}
                  <Link to="/" className="text-green-400">
                    Spotify's Terms and Condition
                  </Link>{" "}
                  of Use.
                </p>
                <p className="my-4 text-xs text-white">
                  To learn more about how Spotify collects, uses, shares and
                  protects your personal data, please see
                  <Link to="/" className="text-green-400 ">
                    Spotify's Privacy Policy.
                  </Link>{" "}
                </p>
              </div>

              <div className="w-full text-left py-4">
                <input
                  type="submit"
                  value="Sign up"
                  className="block cursor-pointer w-1/2 mx-auto outline-none bg-green-400 text-black p-3 hover:scale-105 translate-all duration-200 font-medium hover:font-semibold text-center rounded-full "
                />
              </div>
            </form>
            <div className="border-b border-gray-400 w-3/4 my-4 mx-auto"></div>
            <p className="pt-8">
              <span className="text-gray-300 font-semibold">
                Already have an account?{" "}
              </span>

              <Link
                to="/Login"
                className="text-green-400 hover:text-green-400/90 font-semibold underline mx-auto"
              >
                Log in here.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;