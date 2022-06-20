import React from "react";

const Footer = () => {
  return (
    <div className="bg-Blue w-full px-16">
      <div className="flex flex-wrap justify-around">
        <div className="grid text-white">
          <div>
            <h1 className="font-bold text-3xl mt-2 py-6">9IJAKIDS</h1>
          </div>
          <div className="font-normal text-base">
            <p className="py-2">9ijakids lane</p>
            <p className="py-2">9ijakids@test.com</p>
            <p className="py-2">Phone 9ijakids</p>
          </div>
        </div>
        <div className="grid text-white text-base mt-2 py-6 font-normal">
          <ul>
            <li className="font-bold">Community</li>
            <li>Learners</li>
            <li>Partners</li>
            <li>Developers</li>
            <li>Beta Testers</li>
            <li>Translators</li>
            <li>Blog</li>
            <li>Tech blog</li>
            <li>Teaching center</li>
          </ul>
        </div>
        <div className="grid text-white text-base mt-2 py-6 font-normal">
          <ul>
            <li className="font-bold">Information</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="grid text-white text-base mt-2 py-6 font-normal">
          <ul>
            <li className="font-bold">More</li>
            <li>Learners</li>
            <li>Partners</li>
            <li>Developers</li>
            <li>Beta Testers</li>
            <li>Translators</li>
            <li>Blog</li>
            <li>Tech blog</li>
            <li>Teaching center</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
