import React from "react";
import aboutImg from "../src/assets/aboutus.jpg";
import Marquee from "react-fast-marquee";
import CountUp from "react-countup";

import img1 from "../src/assets/services/img1.jpg";
import img2 from "../src/assets/services/img2.jpg";
import img3 from "../src/assets/services/img3.jpg";
import img4 from "../src/assets/services/img4.jpg";
import img5 from "../src/assets/services/img5.jpg";
import img6 from "../src/assets/services/img6.jpg";
import img7 from "../src/assets/services/img7.jpg";
import img8 from "../src/assets/services/img8.jpg";
import img9 from "../src/assets/services/img9.jpg";
import img10 from "../src/assets/services/img10.jpg";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div>
        <h1 className="  text-6xl text-center pt-28 font-serif cursor-pointer  ">
          About Us
        </h1>
        <div className="  flex mx-32 pt-20 gap-20 ">
          <img
            className="w-[20rem] h-[25rem] rounded-xl"
            src={aboutImg}
            alt=""
          />
          <p className="pt-20">
            we specialize in delivering top-notch services tailored to meet the
            unique needs of our clients. With a team of experienced
            professionals, we are dedicated to ensuring your satisfaction every
            step of the way. Our mission is to provide innovative solutions that
            drive results and foster growth. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Laboriosam molestias aperiam
            voluptates in officiis earum recusandae, voluptatum accusamus
            voluptatem voluptate provident deleniti velit dolore, aspernatur
            praesentium doloribus neque est exercitationem.With a team of
            experienced professionals, we are dedicated to ensuring your
            satisfaction every step of the way.
          </p>
        </div>
        <div className="flex justify-center items-center space-x-20 pt-32 pb-10 ">
          <div>
            <CountUp
              className="text-black text-5xl text-center font-bold"
              start={990}
              end={1000}
              duration={5}
              separator=","
              suffix="+"
            />
            <p className="text-2xl text-center">Happy Costumers</p>
          </div>

          <div>
            {" "}
            <h1 className="text-black text-5xl text-center  font-bold">24/7</h1>
            <p className="text-2xl text-center  ">Customer Support</p>
          </div>
        </div>

        <div className="my-20 ">
          <Marquee className="text-5xl  mb-20 font-bold">
            Seamless Booking Experience Just for You * Discover Hidden Gems
            Around the World *
          </Marquee>

          <Marquee direction="right">
            <img
              src={img1}
              alt="Image 1"
              className="w-60 h-60  rounded-3xl hover:scale-110 mx-3  transition-transform"
            />

            <img
              src={img2}
              alt="Image 2"
              className="w-60 h-60   rounded-3xl hover:scale-110 mx-3  transition-transform"
            />

            <img
              src={img3}
              alt="Image 3"
              className="w-60 h-60   rounded-3xl hover:scale-110 mx-3  transition-transform"
            />
            <img
              src={img4}
              alt="Image 4"
              className="w-60 h-60  rounded-3xl hover:scale-110 mx-3  transition-transform"
            />
            <img
              src={img5}
              alt="Image 5"
              className="w-60 h-60  rounded-3xl hover:scale-110 mx-3  transition-transform"
            />
            <img
              src={img7}
              alt="Image 7"
              className="w-60 h-60  rounded-3xl hover:scale-110 mx-3  transition-transform"
            />
            <img
              src={img6}
              alt="Image 6"
              className="w-60 h-60  rounded-3xl hover:scale-110 mx-3  transition-transform"
            />
            <img
              src={img7}
              alt="Image 7"
              className="w-60 h-60  rounded-3xl hover:scale-110 mx-3  transition-transform"
            />
            <img
              src={img8}
              alt="Image 8"
              className="w-60 h-60  rounded-3xl hover:scale-110 mx-3  transition-transform"
            />
            <img
              src={img9}
              alt="Image 9"
              className="w-60 h-60  rounded-3xl hover:scale-110 mx-3  transition-transform"
            />
            <img
              src={img10}
              alt="Image 10"
              className="w-60 h-60  rounded-3xl hover:scale-110 mx-3  transition-transform"
            />
            <img
              src={img7}
              alt="Image 7"
              className="w-60 h-60  rounded-3xl hover:scale-110 mx-3  transition-transform"
            />
          </Marquee>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
