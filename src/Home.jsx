import React from "react";
import Footer from "./Footer";

import aboutImg from "../src/assets/aboutus.jpg";
// import TestimonialSlider from "./Testimonial";

const Home = () => {
  return (
    <>
      <div className="relative min-h-screen flex justify-center items-center bg-home bg-cover bg-no-repeat bg-fixed">
        <div className="absolute inset-0 bg-black opacity-50 brightness-75"></div>

        <div className="relative z-10 pt-40 text-center">
          <h1 className="text-4xl text-white font-serif pb-8">
            Transforming Ideas into Reality
          </h1>
          <h1 className="text-xl text-white font-serif pb-7">
            Your Trusted Partner for Exceptional Services
          </h1>
          <h1 className="text-md text-white font-serif pb-16">
            Get Started Today!
          </h1>
          <div className="flex justify-center items-center">
            <button className="border border-white bg-black text-white rounded px-4 py-2 hover:bg-transparent font-bold font-serif hover:border-black hover:text-white">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="  text-5xl text-center pt-20 font-serif cursor-pointer  ">
          Who We Are
        </h1>
      </div>
      <div className="  flex mx-32 pt-20 gap-20 ">
        <img className="w-[20rem] h-[25rem] rounded-xl" src={aboutImg} alt="" />
        <p className="pt-20">
          we specialize in delivering top-notch services tailored to meet the
          unique needs of our clients. With a team of experienced professionals,
          we are dedicated to ensuring your satisfaction every step of the way.
          Our mission is to provide innovative solutions that drive results and
          foster growth. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Laboriosam molestias aperiam voluptates in officiis earum
          recusandae, voluptatum accusamus voluptatem voluptate provident
          deleniti velit dolore, aspernatur praesentium doloribus neque est
          exercitationem.With a team of experienced professionals, we are
          dedicated to ensuring your satisfaction every step of the way.
        </p>
      </div>

      <div className="pt-16 pb-20 ">
        <h1 className="text-5xl text-center font-serif">
          Why Partner with Us?
        </h1>
        <div className="text-lg flex flex-col justify-center pl-60 pt-10 space-y-5 font-serif ">
          <p>
            ✔ Expertise: Our team consists of industry experts with years of
            experience.
          </p>
          <p>
            {" "}
            ✔ Personalized Approach: We take the time to understand your unique
            needs and tailor our services accordingly.
          </p>
          <p>
            ✔ Quality Assurance: We prioritize quality in everything we do,
            ensuring you receive the best possible service.
          </p>
          <p>
            ✔ Customer Satisfaction: Our goal is to exceed your expectations and
            deliver results that matter.
          </p>
        </div>
      </div>
      {/* 
      <div className="pt-16 pb-20 ">
        <h1 className="text-5xl text-center font-serif">
          What Our Clients Say
        </h1>
      </div> */}

      <div className="pt-16 pb-20 ">
        <h1 className="text-5xl text-center font-serif">Our Success Stories</h1>
        <div className="flex flex-col justify-center pt-10">
          <h1 className="text-lg font-serif text-center px-28">
            Explore our portfolio to see how we’ve helped businesses like yours
            achieve their goals. From successful marketing campaigns to stunning
            websites, our results speak for themselves.
          </h1>
          <a
            href="#"
            className="underline text-center text-lg text-blue-600 pt-6 "
          >
            View Our Work
          </a>
        </div>
      </div>

      <div className="pt-16 pb-20 ">
        <h1 className="text-5xl text-center font-serif">
          Ready to Elevate Your Business?
        </h1>
        <h1 className="text-lg text-center pt-10 font-serif">
          Let us help you achieve your business goals with our expert services.
          Contact us today to discuss how we can work together.
        </h1>
        <div className="flex justify-center items-center pt-10 pb-5">
          <button className="bg-black border rounded text-white font-bold hover:text-black px-8 text-lg py-2 hover:bg-white hover:border-black">
            Contact Us
          </button>
        </div>
      </div>
      <div>{/* <TestimonialSlider /> */}</div>

      <Footer />
    </>
  );
};

export default Home;
