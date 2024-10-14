import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper"; // Correct import for Swiper modules
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    quote:
      "This company provided exceptional service, and I couldn't be happier with the results!",
    name: "John Doe",
    position: "CEO, Company",
  },
  {
    id: 2,
    quote:
      "A truly professional team that went above and beyond to meet our needs.",
    name: "Jane Smith",
    position: "Marketing Manager",
  },
  {
    id: 3,
    quote:
      "I was impressed by their attention to detail and commitment to delivering on time.",
    name: "Samuel Green",
    position: "Project Manager",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">
        What Our Clients Say
      </h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true} // This enables navigation buttons
        modules={[Pagination, Navigation]} // Make sure to include Pagination and Navigation here
        className="w-full max-w-4xl mx-auto"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <p className="text-lg italic text-gray-700 mb-4">
                "{testimonial.quote}"
              </p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
