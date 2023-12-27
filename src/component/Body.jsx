import React from "react";
import pic from "../assets/pic.jpg";
import GitHubIcon from '@mui/icons-material/GitHub';
const Body = () => {
  return (
    <>
      
      <div className="flex justify-center gap-24 items-center mt-40 ">
        <img src={pic} alt="image hai ye" className="w-72 rounded-full" />
        <div className="flex flex-col gap-3">
            <p className="text-xl font-bold">Hello I'm</p>
            <h1 className="text-5xl uppercase font-bold">Shivam Seth</h1>
            <p className="text-2xl font-bold">Frontend Developer </p>
            <div className="">
                <button className="border-2 border-black p-3 px-4 m-2 rounded-3xl font-bold">Download cv</button>
                <button className="border-2 border-gray-400 p-3 px-4 m-2 rounded-3xl font-bold bg-gray-400 text-white">Contact Info</button>
            </div>
            <div>
                <GitHubIcon/>
            </div>
        </div>
      </div>
    </>
  );
};

export default Body;
