import React, { useState } from "react";
import { motion } from "motion/react";
import toast from "react-hot-toast";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
function Contact() {
  const [inputfield, setinputfield] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setinputfield((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { email, name, message } = inputfield;
    if (!email || !name || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "8888c6f9-191a-4a8c-ac3d-1f1931abf1d7");
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());
      if (res.success) {
        toast.success("Your message has been sent!");
        setinputfield({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (err) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-[#EEEEEE] p-4 pt-6">
        <h1 className="flex text-center justify-center text-xl font-semibold">
          Contact us
        </h1>
        <div>
          <p className=" flex lg:pt-6 pt-3 text-xl text-gray-500 justify-center text-center">
            fuck you agar tu message kiya bhi to answer nhi milega
            <br /> mai thoda extra likh rha hu becouse mujhe jdyda line show
            karni thi
          </p>
        </div>
      </div>
      <hr />
      <div className="min-h-screen px-10 lg:grid lg:grid-cols-2 items-center justify-center font-serif lg:gap-10 bg-gradient-to-r bg-[#E4E4E4] p-4">
        <motion.form
          animate={{
            x: 0,
            rotate: 0,
            scale: 1,
          }}
          initial={{ x: 200, rotate: -5, scale: 0.9 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          onSubmit={onSubmit}
          className=" rounded-xl  p-8 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6  text-center">
            Send Us Message
          </h2>

          {/* Name Input */}
          <div className="">
            <div className="relative mb-4 ">
              <input
                type="text"
                name="name"
                value={inputfield.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="peer block w-full bg-[#F2F2F2] rounded-lg border border-gray-300 p-3 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:outline-none transition"
              />
            </div>

            {/* Email Input */}
            <div className="relative mb-4">
              <input
                type="email"
                name="email"
                value={inputfield.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="peer block w-full bg-[#F2F2F2] rounded-lg border border-gray-300 p-3 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:outline-none transition"
              />
            </div>

            {/* Message Textarea */}
            <div className="relative mb-4">
              <textarea
                name="message"
                value={inputfield.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                className="peer block w-full bg-[#F2F2F2] rounded-lg border border-gray-300 p-3 h-32 resize-none focus:border-purple-500 focus:ring focus:ring-purple-200 focus:outline-none transition"
              ></textarea>
            </div>

            <button
              className={`w-full p-2 text-white  rounded-lg text-lg font-serif transition ${
                loading ? "bg-gray-500" : "bg-green-500 hover:bg-green-600"
              } `}
            >
              {loading ? "Send Message..." : "Send Message"}
            </button>
          </div>
        </motion.form>
        <div className="max-w-[448px] text-gray-600">
          <h1 className="flex justify-center text-xl font-bold font-serif">
            Get in touch
          </h1>
          <div>
            <p>
              agar apko hamari dukan se koi sikayat hai to kripya mujhe na
              parreshan karen mai thodi na sabka theka liya hu lena hai to lo
              warna G marao🥰 ye balle balle shaba shaba
            </p>
          </div>
          <div className="py-3 flex gap-3">
            <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center text-center">
              <FaLocationDot className="border-gray-500 text-white" />
            </div>
            <div>
              <h1>address</h1>
              <p>main street Asansol</p>
            </div>
          </div>
          <div className="py-3 flex gap-3">
            <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center text-center">
              <FaLocationDot className="border-gray-500 text-white" />
            </div>
            <div>
              <h1>phone</h1>
              <p>+9112345678910</p>
            </div>
          </div>
          <div className="py-3 flex gap-3">
            <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center text-center">
              <FaLocationDot className="border-gray-500 text-white" />
            </div>
            <div>
              <h1>email</h1>
              <p>fuckyou@gmail.com</p>
            </div>
          </div>
          <hr className="text-black " />
          <div>
            <h1 className="text-xl py-2 font-serif font-semibold">
              Follow us{" "}
            </h1>
            <div className="flex gap-4 py-4">
              <FaSquareInstagram />
              <FaFacebook />
              <FaLinkedinIn />
              <FaTwitter />
            </div>
          </div>
        </div>
  <div className="flex items-center justify-center">
  <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.0710693099377!2d86.95951857485342!3d23.70915597869856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f154c5557cb%3A0x42f21a1b31ec3f9e!2sWebel%20IT%20Park%20Asansol%20Branch!5e0!3m2!1sen!2sin!4v1763638028177!5m2!1sen!2sin"
      className="w-full h-full"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
 
      </div>
    </>
  );
}

export default Contact;
