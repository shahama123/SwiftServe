import React from "react";
import ServiceCard from "./ServiceCard";
import {
  MdElectricalServices,
  MdOutlineDesignServices,
  MdOutlineMedicalServices,
} from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { SiAmazonwebservices } from "react-icons/si";
import { FcServices } from "react-icons/fc";
import Footer from "./Footer";

const Services = () => {
  return (
    <>
      <div>
        <section className="bg-gray-50 pt-32 pb-5">
          <h1 className="text-6xl text-center pb-28 font-serif cursor-pointer ">
            Services
          </h1>
          <div className="container mx-auto px-4 ">
            <div className="flex flex-wrap justify-center gap-8 ">
              <ServiceCard
                icon={<GrServices size={40} />}
                title="Mobile Development"
                description="Build cutting-edge mobile applications. Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident."
              />
              <ServiceCard
                icon={<MdOutlineMedicalServices size={40} />}
                title="Mobility Services"
                description="Empowering mobility solutions. Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident."
              />
              <ServiceCard
                icon={<MdOutlineDesignServices size={40} />}
                title="Software Consulting"
                description="Expert consulting for software solutions. Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident."
              />

              <ServiceCard
                title="Mobile Development"
                icon={<SiAmazonwebservices size={40} />}
                description="Build cutting-edge mobile applications. Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident."
              />
              <ServiceCard
                icon={<MdElectricalServices size={40} />}
                title="Mobility Services"
                description="Empowering mobility solutions. Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident."
              />
              <ServiceCard
                icon={<FcServices size={40} />}
                title="Software Consulting"
                description="Expert consulting for software solutions. Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident."
              />
            </div>
          </div>
        </section>
        <div className="flex justify-center items-center pb-20">
          <button className="bg-black border text-white font-bold hover:text-black px-8 text-lg py-2 hover:bg-white hover:border-black">
            View More
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
