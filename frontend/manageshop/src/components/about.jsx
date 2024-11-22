import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-blue-600 text-center">About Us</h1>
        <div className="flex flex-col md:flex-row items-center mt-8">
          <div className="md:w-1/2">
            <img src="/path-to-your-image/about-us.jpg" alt="About Us" className="w-full rounded-md" />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10">
            <p className="text-gray-700 text-lg">
              We are a team of professionals dedicated to delivering exceptional services to our clients.
              With years of experience in web and app development, we pride ourselves on our ability to exceed
              expectations and deliver results that make a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
