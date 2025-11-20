import React, { useState } from "react";
import spider from "../Allimages/sami.jpg";
import { Members } from "../assets/Imagesapi";

function About() {
  const [current, setCurrent] = useState(0);

  const nextMember = () => setCurrent((current + 1) % Members.length);
  const prevMember = () =>
    setCurrent(current === 0 ? Members.length - 1 : current - 1);

  return (
    <div className="space-y-24 px-4 lg:px-16">

      {/* Our Story Section */}
      <section className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left my-12 gap-8">
        <div className="lg:w-1/2">
          <h1 className="text-gray-600 text-3xl font-bold py-3">Our Story</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Hi, my name is Sami, and I come from a small village called Bagodar. 
            I may not be the smartest person, but I have an unshakable determination 
            to reach my goals. I don’t know where life will take me, but I know one thing: 
            I will never stop and I will never give up. That’s why people call me a crazy dreamer—and I’m proud of it.
          </p>
        </div>

        <div className="hidden md:block lg:w-1/2">
          <img src={spider} alt="Sami" className="w-[300px] ml-20 rounded-lg object-contain shadow-lg" />
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="text-center space-y-8">
        <h1 className="text-gray-600 text-3xl font-bold">Vision & Mission</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
            <p className="text-gray-600">To create innovative solutions that make technology accessible to everyone and inspire people to chase their dreams fearlessly.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-600">Deliver high-quality projects, continuously learn, and build a community of motivated, creative, and skilled developers.</p>
          </div>
        </div>
      </section>

      {/* All Members Slider */}
      <section className="w-full mx-auto px-2 lg:px-16 relative rounded-lg shadow-lg overflow-hidden">
        <h1 className="text-center py-4 text-2xl font-semibold text-gray-500">Meet Our Team</h1>
        <div className="flex flex-col items-center p-6 relative">
          <img
            src={Members[current].img}
            alt={Members[current].name}
            className="w-40 h-56 rounded-lg object-cover shadow-md mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">{Members[current].name}</h2>
          <p className="text-gray-500">{Members[current].position}</p>

          {/* Navigation Buttons */}
          <button
            onClick={prevMember}
            className="absolute top-1/2 left-2 lg:left-36 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-800 transition"
          >
            &#10094;
          </button>
          <button
            onClick={nextMember}
            className="absolute top-1/2 right-2 lg:right-36 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-800 transition"
          >
            &#10095;
          </button>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="text-center space-y-6">
        <h1 className="text-gray-600 text-3xl font-bold">Fun Facts</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-600">50+</h2>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-green-600">20+</h2>
            <p className="text-gray-600">Team Members</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-yellow-600">5</h2>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-red-600">100%</h2>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center bg-gray-100 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">Join Our Journey</h1>
        <p className="text-gray-600 mb-6">Want to be a part of our amazing team or collaborate on exciting projects?</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>

    </div>
  );
}

export default About;
