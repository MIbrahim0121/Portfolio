import React from "react";
// import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <div>
      <div className="!mt-20">
        <h1 className="text-4xl font-extrabold text-center !mt-7 underline ">
          About Me
        </h1>
      </div>
      <div className=" !mt-8 md:!ml-50 ">
        {/* <div className="left w-[15%] ">
          <img className="h-[230px] hidden md:block " src={profile} alt="" />
        </div> */}
        <div className="right  w-[100%] md:w-[80%] !p-10 !md:p-0 text-center ">
          <div>
            <p className="p !mb-7">
              I am a passionate Frontend Developer dedicated to crafting
              seamless digital experiences. My expertise lies in building
              user-friendly and interactive web applications. I enjoy solving
              complex problems and transforming ideas into functional designs.{" "}
            </p>
            <p className="p ">
              With a strong foundation in React, Next.js, and Tailwind CSS, I
              bring efficiency and creativity to every project. My goal is to
              continuously learn, innovate, and contribute to impactful web
              solutions.
            </p>
          </div>
          <div className="skills !mt-10 space-y-4">
            {[
              { name: "HTML & CSS", width: "w-[100%]" },
              { name: "JavaScript", width: "w-[80%]" },
              { name: "React.Js", width: "w-[90%]" },
              { name: "Tailwind CSS", width: "w-[100%]" },
              { name: "Redux", width: "w-[70%]" },
            ].map((skill, index) => (
              <div key={index} className="flex bar items-center !mt-2 gap-5">
                <h1 className="text-lg p w-40 ">{skill.name}</h1>
                <div className="w-full line bg-gray-700 rounded-full h-[3px]">
                  <div
                    className={`h-full ${skill.width} bg-gradient-to-r from-purple-500 to-orange-400 rounded-full`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
