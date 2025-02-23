import React from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d7a9f826-0874-478b-97b0-6211b5b8e899");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Message sent successfully!");
    } else {
      toast.error("Failed to send message. Try again later.");
    }
  };

  return (
    <div id="contact" className="!mt-20">
      <ToastContainer />
      <div className="heading">
        <h1 className="text-4xl font-extrabold text-center !mt-8 underline">
          Get In Touch
        </h1>
      </div>
      <div className="min-h-screen flex items-center justify-center text-white p-6 md:!mt-6">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="!mt-8 !pl-5">
            <h2 className="md:text-5xl text-3xl font-bold name !pb-6">
              Let's Talk
            </h2>
            <p className="mt-4 text-gray-200 !mb-4">
              I'm currently available to take on new projects, so feel free to send me a
              message about anything that you want me to work on. You can contact anytime.
            </p>
            <div className="mt-6 space-y-4 !mb-4">
              <p className="flex items-center gap-3 !mb-3">
                <span className="text-xl">📧</span> hafizibraheemsheikh295@gmail.com
              </p>
              <p className="flex items-center gap-3 !mb-3">
                <span className="text-xl">📞</span> +92 311 7187653
              </p>
              <p className="flex items-center gap-3 !mb-3">
                <span className="text-xl">📍</span>LAHORE,Pakistan
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <form onSubmit={onSubmit} className="space-y-4 !ml-7 flex flex-col gap-4 md:!mt-5">
              <label className="name" htmlFor="">Name</label>
              <input type="text" name="name" placeholder="Enter your name" className="md:w-full w-[93%] !p-4 bg-gray-700 text-white rounded-md outline-none" />
              <label className="name" htmlFor="">Email</label>
              <input type="email" name="email" placeholder="Enter your email" className="md:w-full w-[93%] !p-4 bg-gray-700 text-white rounded-md outline-none" />
              <label className="name" htmlFor="">Message</label>
              <textarea name="message" placeholder="Enter your message" className="md:w-full w-[93%] !p-4 bg-gray-700 text-white rounded-md outline-none h-32"></textarea>
              <button type="submit" className="md:w-[53%] w-[53%] !p-4 cursor-pointer btn text-white rounded-4xl !m-auto hover:bg-purple-700 transition">Submit now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;