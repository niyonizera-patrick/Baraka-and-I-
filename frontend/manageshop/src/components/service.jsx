import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Create modern, responsive websites for your business.',
      img: '/path-to-your-image/web-development.jpg',
    },
    {
      title: 'Mobile App Development',
      description: 'Develop mobile applications tailored to your needs.',
      img: '/path-to-your-image/mobile-app.jpg',
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your website’s ranking on search engines.',
      img: '/path-to-your-image/seo.jpg',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-blue-600">Our Services</h1>
        <p className="text-gray-600 mt-2">We offer a range of top-notch services for you.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-md rounded-md p-4">
            <img src={service.img} alt={service.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
