import React from "react";

const Services = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="heading">
        <h1 className="text-4xl font-extrabold text-center !mt-8 underline">
          MY Services
        </h1>
      </div>
      <div className="cont !m-auto w-[85%] grid md:grid-cols-3  grid-cols-1 ">
        <div className="box  w-[75%] border-white border-2 !ml-11 !p-6 !mt-8 ">
          <h2 className="font-semibold   ">01</h2>
          <h1 className="name font-bold text-lg"> Frontend Development</h1>
          <p>
            I create responsive, interactive, and modern UIs using React,
            Next.js, Tailwind CSS, and JavaScript, ensuring smooth user
            experiences.
          </p>
        </div>
        <div className="box w-[75%] border-white border-2 !ml-11 !p-6 !mt-8 ">
          <h2 className="font-semibold   ">02</h2>
          <h1 className="name font-bold text-lg"> Web App Development</h1>
          <p>
            I build fast, scalable, and user-friendly web applications with
            React and Next.js, integrating APIs and optimizing performance.
          </p>
        </div>
        <div className="box w-[75%] border-white border-2 !p-6 !mt-8 !ml-11">
          <h2 className="font-semibold   ">03</h2>
          <h1 className="name font-bold text-lg"> E-commerce Website Development</h1>
          <p>
            I develop online stores with custom product pages, shopping carts,
            and payment integrations, ensuring a seamless shopping experience.
          </p>
        </div>
        <div className="box w-[75%] border-white border-2 !p-6 !mt-8 !ml-11">
          <h2 className="font-semibold   ">04</h2>
          <h1 className="name font-bold text-lg"> Website UI/UX Design</h1>
          <p>
            I design visually appealing, mobile-friendly, and interactive
            websites, focusing on smooth navigation and engaging user
            interfaces.
          </p>
        </div>
        <div className="box w-[75%] border-white border-2 !p-6 !mt-8 !ml-11">
          <h2 className="font-semibold   ">05</h2>
          <h1 className="name font-bold text-lg">
            {" "}
            Portfolio & Business Website Development
          </h1>
          <p>
            I create professional portfolios and business websites that are
            SEO-friendly, fast, and tailored to showcase your brand effectively.
          </p>
        </div>
        <div className="box w-[75%] border-white border-2 !p-6 !mt-8 !ml-11">
          <h2 className="font-semibold   ">06</h2>
          <h1 className="name font-bold text-lg"> Landing Page Development</h1>
          <p>
            I design high-converting landing pages with optimized performance,
            fast loading times, and engaging UI elements for better user
            retention.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
