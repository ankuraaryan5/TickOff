import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="w-full h-screen bg-[#629994]">
      <nav className="flex justify-between items-center w-full h-20 navbar bg-[#352043] text-white text-3xl font-bold">
        <div className="w-1/4 h-full flex justify-center items-center">
          <h1 className="text-3xl font-bold">TickOff</h1>
        </div>
        <div className="w-1/4 h-full flex justify-center items-center gap-2">
          <h1 className="text-xl font-bold">About</h1>
          <h1 className="text-xl font-bold">Contact</h1>
        </div>
        <div className="w-1/4 h-full flex justify-center items-center gap-4">
          <Link to={"/login"}>
            <button className="text-xl rounded-full border-2 border-[#E3D5E6] p-2 hover:bg-[#E3D5E6]">
              {" "}
              Login
            </button>
          </Link>
          <Link to={"/signup"}>
            <button className="text-2xl rounded-full border-2 border-[#4E4E4E] p-2 hover:bg-[#E3D5E6]">
              SignUp
            </button>
          </Link>
        </div>
      </nav>
      <div className="body w-full h-full flex flex-col justify-center" style={{background:'URL(../../images/img4.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className="text-center p-10 font-bold font-sans text-violet-500">
        <h1>Welcome To TickOff</h1>
        <p>
          Discover a new way to interact and manage your to-dos with TickOff.
        </p>
        </div>
        <div className="text-center p-10 text-black">
          <h2 className="text-3xl font-semibold">Key Features</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Create and manage your to-dos with ease</li>
            <li>Interact with others based on shared tasks</li>
            <li>Join communities focused on specific goals</li>
            <li>Share your progress and celebrate achievements</li>
          </ul>
        </div>
        <div className="text-center p-10 text-teal-300 font-sans font-bold">
          <h2 className="text-3xl font-semibold">Join the TickOff Community</h2>
          <p className="mt-2">
            Sign up today and start interacting with like-minded individuals.
            Together, we can achieve more!
          </p>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Home;
