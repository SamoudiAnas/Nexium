import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React, { useState } from "react";

const testimonials = [
  {
    id: "1",
    picture: "/assets/imgs/test-img-1.jpg",
    name: "Sarah Thompson",
    job: "CEO Thompson Enterprises",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam veritatis corrupti assumenda repudiandae distinctio eum fugit impedit, cum nisi quisquam. Doloribus, cumque! Accusantium quia sequi enim impedit vitae est corporis.",
  },
  {
    id: "2",
    picture: "/assets/imgs/test-img-2.jpg",
    name: "Quisque Hendrerit",
    job: "CEO Thompson Enterprises",
    body: "Phasellus placerat dui augue, nec vestibulum nulla auctor non. In molestie metus ut ante euismod condimentum. Phasellus vestibulum condimentum justo, id euismod elit gravida non. Mauris elit leo, aliquet fringilla hendrerit quis, molestie sit amet est. Mauris imperdiet lacinia porta. In accumsan auctor pellentesque. Vivamus molestie ex at quam sodales bibendum. Donec ornare feugiat lorem. Praesent sapien ex, euismod in nunc eu, viverra consequat lacus.",
  },
  {
    id: "3",
    picture: "/assets/imgs/test-img-3.jpg",
    name: "Maecenas scelerisque",
    job: "CEO Thompson Enterprises",
    body: "Aliquam egestas, quam gravida placerat ornare, est nunc aliquam turpis, non iaculis lacus nisi sed erat. Integer vitae dui id nisl bibendum sodales vel ac purus. Donec quis aliquam ante. In quis tortor sit amet ligula venenatis iaculis sit amet at erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ",
  },
  {
    id: "4",
    picture: "/assets/imgs/test-img-4.jpg",
    name: "Donec eu nibh",
    job: "CEO Thompson Enterprises",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam veritatis corrupti assumenda repudiandae distinctio eum fugit impedit, cum nisi quisquam. Doloribus, cumque! Accusantium quia sequi enim impedit vitae est corporis.",
  },
];

const IMG_HEIGHT = 400; //25rem
const MAX_SLIDE_IDX = testimonials.length - 1;

export default function Testimonials() {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex === MAX_SLIDE_IDX) return;
    setSlideIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (slideIndex === 0) return;
    setSlideIndex((prev) => prev - 1);
  };

  return (
    <section id="testimonials" className="bg-gray-50 py-20">
      <div className="max-w-screen-lg mx-auto grid grid-cols-2 items-center gap-16">
        <div className="overflow-hidden" style={{ height: `${IMG_HEIGHT}px` }}>
          <div
            className="transition-all duration-300"
            style={{ transform: `translateY(${slideIndex * -IMG_HEIGHT}px)` }}
          >
            {testimonials.map((img, idx) => (
              <div
                key={idx}
                className="w-full"
                style={{ height: `${IMG_HEIGHT}px` }}
              >
                <Image
                  src={img.picture}
                  alt={img.name}
                  width={1000}
                  height={1000}
                  fetchPriority="low"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className=" text-5xl text-main mb-8">
            Testimonials <span className="text-center text-8xl">{"❞"}</span>
          </div>
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-all duration-300"
              style={{ transform: `translateX(${slideIndex * -100}%)` }}
            >
              {testimonials.map((content, idx) => (
                <div key={idx} className="min-w-full">
                  <p className="text-grey mb-5">{content.body}</p>
                  <h2 className="text-2xl text-dark">{content.name}</h2>
                  <h3 className="text-xl text-dark">{content.job}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button onClick={prevSlide} className="focus:rounded-full">
              <span className="sr-only">View previous testimony</span>
              <ArrowLeftIcon className="w-14 h-14 rounded-full border border-main p-3 text-main hover:cursor-pointer hover:bg-main hover:text-white" />
            </button>
            <button onClick={nextSlide} className="focus:rounded-full">
              <span className="sr-only">View next testimony</span>
              <ArrowRightIcon className="w-14 h-14 rounded-full border border-main p-3 text-main hover:cursor-pointer hover:bg-main hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
