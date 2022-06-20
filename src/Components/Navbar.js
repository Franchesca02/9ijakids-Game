import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-wrap justify-between bg-Grey w-full px-4 py-6">
        <div>
          <h1 className="font-bold text-Blue mt-2">9IJAKIDS</h1>
        </div>
        <div className="flex flex-wrap">
          <ul className="flex flex-wrap justify-between px-4 text-Blue mt-2 text-base">
            <li className="px-4">Home</li>
            <li className="px-4">About</li>
            <li className="px-4">Games</li>
            <li className="px-4">Competitions</li>
          </ul>
          <div>
            <button className="w-[100px] h-[40px] text-Blue text-base bg-yellow-400 rounded-lg">
              Register
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
