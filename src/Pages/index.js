import { useState, useEffect } from "react";
import axios from "axios";
import Banner from "../Assets/Top Banner.png";
import Timer from "../Assets/Timer.png";
import News from "../Assets/Newsletter.png";

const Home = () => {
  const [catalogue, setCatalogue] = useState();
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState();
  const fetchData = () => {
    setIsLoading(true);
    axios
      .get("http://bit.ly/TeaserTask")
      .then((response) => {
        setCatalogue(response.data);
        setIsLoading(false);
        console.log(response);
      })
      .catch((error) => {
        setIsLoading(false);
        return error;
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="w-full mt-2 bg-Gray">
      <div className="flex justify-between w-[80%] mx-auto">
        <div className="text-Blue w-[70%]">
          <p className="text-2xl font-medium">Learning is fun</p>
          <h3 className="text-3xl font-bold mt-2">Learn New Skills Online</h3>
          <h3 className="text-3xl font-bold">Find Best Courses</h3>
          <div className="mt-4 flex">
            <button className="w-[120px] h-[40px] rounded-lg bg-yellow-500 text-Blue text-base">
              Register
            </button>
            <button className="mx-2 w-[120px] h-[40px] rounded-lg bg-white text-Blue text-base border border-slate-900">
              Login
            </button>
          </div>
        </div>
        <div>
          <img src={Banner} alt="banner" className="w-[80%] px-10" />
        </div>
      </div>
      <div className="mt-8">
        <img src={Timer} alt="timer" />
      </div>
      <div className="text-center mt-4">
        <h1 className="font-bold text-3xl text-Blue">Popular Games</h1>
      </div>
      <div className="text-center">
        <h1 className="font-bold text-2xl text-Blue italic mt-4">
          (Card Items Here...)
        </h1>
        <div>
          {catalogue === {}
            ? "LOADING"
            : catalogue &&
              catalogue?.search?.map((data) => (
                <div>
                  <img src={data.GameImage} alt="icon" />
                </div>
              ))}
        </div>
      </div>
      <div className="flex mt-8 w-[80%] mx-auto">
        <div>
          <img src={News} alt="newsletter" className="w-[80%]" />
        </div>
        <div className="mt-2 w-[70%]">
          <p className="font-medium text-Yellow text-base">Subscribe now</p>
          <h3 className="font-bold text-3xl text-Blue">Be in the Know...</h3>
          <div className="flex rounded w-[300px] h-[35px] border-Blue border bg-white justify-between px-2 mt-8">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="outline-0 border-none"
            />
            <button className="bg-Yellow text-sm rounded-lg w-[120px] h-[33px] border">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
