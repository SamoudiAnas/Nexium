import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Integrity from "~/assets/svg/integrity.svg";
import Innovation from "~/assets/svg/innovation.svg";
import Collaboration from "~/assets/svg/collaboration.svg";
import CustomerCentric from "~/assets/svg/customer-centric.svg";
import Sustainability from "~/assets/svg/sustainability.svg";
import Excellence from "~/assets/svg/excellence.svg";

import Testimonials from "@/scenes/Home/components/Testimonials";
import { Button } from "@/components/atoms/Button";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="relative before:absolute before:inset-0 before:z-10 before:-translate-y-28 before:bg-contain before:bg-no-repeat before:bg-[url('/assets/svg/hashes.svg')] before:opacity-50">
        <section id="hero" className="pt-28 max-w-5xl mx-auto relative z-20">
          <h1 className="text-center tex-deeppurple lg:text-5xl">
            To revolutionize industries through innovative technology solutions,
            driving positive change and empowering individuals and businesses
          </h1>
          <p className="text-grey mt-8 text-center">
            At FutureSphere our mission is to empower individuals and businesses
            through innovative technology solutions that enrich lives, foster
            growth, and drive positive change. We are dedicated to pushing the
            boundaries of what's possible, creating transformative experiences
            that make a lasting impact in a rapidly evolving digital landscape.
          </p>

          <div className="flex justify-center gap-4 my-8">
            <Button className="rounded-full px-8" size="lg">
              Contact Us
            </Button>
            <Button variant="outline" className="rounded-full px-8" size="lg">
              Demo
            </Button>
          </div>

          <Image
            src="/assets/imgs/about.png"
            alt="Dashboard overview"
            width={1000}
            height={1000}
            fetchPriority="high"
            className="rounded-2xl"
          />
        </section>
      </div>

      <div className="bg-gray-100 py-20 mt-24">
        <section
          id="our-story"
          className="max-w-screen-lg mx-auto grid md:grid-cols-2 items-center gap-8 md:gap-16 "
        >
          <div>
            <h1 className="text-4xl mb-6">Our Story</h1>
            <p className="text-grey">
              In 2010, our founder, Vasily, faced a daunting challenge -
              preparing for the Law School Admission Test (LSAT) while juggling
              an internship and evening classes in different cities. The lack of
              time and a conducive study environment made it incredibly
              difficult for him to achieve his dream of becoming a lawyer.
              <br />
              <br />
              During a train ride, a moment of inspiration struck Vasily. He
              wished for a convenient study tool on his phone to help him
              prepare for the LSAT. However, such an app didn't exist at the
              time. Determined to overcome this hurdle, Vasily took matters into
              his own hands and developed one of the earliest and most
              comprehensive LSAT apps on the market. The app quickly gained
              popularity, becoming the #1 paid LSAT app for over a year.
            </p>
          </div>
          <Image
            src="/assets/imgs/about-1.jpg"
            alt="Dashboard overview"
            width={1000}
            height={1000}
            fetchPriority="high"
            className="rounded-2xl"
          />
          <Image
            src="/assets/imgs/about-2.jpg"
            alt="Dashboard overview"
            width={1000}
            height={1000}
            fetchPriority="high"
            className="rounded-2xl"
          />
          <div>
            <p className="text-grey">
              This success prompted Vasily to establish FutureSphere, an app
              development company with a strong focus on creating profitable and
              impactful applications. Building on their initial achievement,
              FutureSphere expanded their educational app portfolio to include
              exams such as SAT, GMAT, MCAT, and more, catering to the needs of
              a broader audience.
              <br />
              <br />
              As time went on, it became evident that the industry had much more
              to offer than just exam-focused applications. People began
              approaching FutureSphere, seeking guidance on how to develop their
              own apps, what it takes to succeed, and how to navigate the
              complex world of mobile applications. In response to this growing
              demand for expertise and support, FutureSphere expanded its
              services and evolved into a comprehensive resource for aspiring
              app creators - a company known as FutureSphere.
            </p>
          </div>
        </section>
      </div>

      <div className="relative before:absolute before:inset-0 before:z-10 before:-translate-y-28 before:bg-contain before:bg-no-repeat before:bg-[url('/assets/svg/hashes.svg')] before:opacity-50">
        <section id="hero" className="pt-28 max-w-5xl mx-auto relative z-20">
          <h1 className="text-center tex-deeppurple lg:text-7xl">
            Guided by Integrity and Purpose
          </h1>
          <p className="text-grey mt-8  text-center max-w-3xl mx-auto">
            At FutureSphere, we are driven by a strong set of values that shape
            every aspect of our business, ensuring transparency, ethical
            practices, and a shared commitment to making a positive impact.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 bg-white border border-main/50 py-16 rounded-2xl my-24">
            <div className="flex flex-col items-center gap-4 px-12">
              <Integrity className="text-main w-10 h-10" />
              <h3 className="font-semibold text-2xl">Integrity</h3>
              <p className="text-grey text-center mt-2">
                Upholding honesty and ethical conduct in everything we do,
                building trust with our stakeholders.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 border-y border-main/50 md:border-y-0 md:border-x px-12">
              <Innovation className="text-main w-10 h-10" />
              <h3 className="font-semibold text-2xl">Innovation</h3>
              <p className="text-grey text-center mt-2">
                Embracing a culture of creativity and continuous improvement to
                drive groundbreaking solutions.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 px-12">
              <Collaboration className="text-main w-10 h-10" />
              <h3 className="font-semibold text-2xl">Collaboration</h3>
              <p className="text-grey text-center mt-2">
                Fostering a collaborative environment that encourages teamwork,
                diversity, and shared success.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 px-12">
              <CustomerCentric className="text-main w-10 h-10" />
              <h3 className="font-semibold text-2xl">Customer-centric</h3>
              <p className="text-grey text-center mt-2">
                Putting our customers at the heart of everything we do,
                delivering exceptional experiences and exceeding their
                expectations.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 border-y border-main/50 md:border-y-0 md:border-x px-12">
              <Sustainability className="text-main w-10 h-10" />
              <h3 className="font-semibold text-2xl">Sustainability</h3>
              <p className="text-grey text-center mt-2">
                Operating with a focus on environmental and social
                responsibility, striving for a more sustainable future.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 px-12">
              <Excellence className="text-main w-10 h-10" />
              <h3 className="font-semibold text-2xl">Excellence</h3>
              <p className="text-grey text-center mt-2">
                Pursuing excellence in all aspects of our work, setting high
                standards and striving for continuous growth and improvement.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Testimonials />

      <section id="trusted-by" className="max-w-5xl mx-auto py-20 pb-28">
        <h1 className="text-4xl text-center mb-5">
          Trusted by Industry Leaders
        </h1>
        <p className="text-grey text-center max-w-[72ch] mx-auto mb-16">
          Join our roster of satisfied clients and experience the exceptional
          results and service that have earned us the trust of industry leaders
          worldwide
        </p>

        <div className="flex justify-center flex-wrap gap-4 md:gap-8 xl:gap-24">
          <Image
            src="/assets/imgs/Company logo.png"
            alt="descript logo"
            width={300}
            height={300}
            fetchPriority="low"
            className="w-32"
          />
          <Image
            src="/assets/imgs/Company logo-1.png"
            alt="shopify logo"
            width={300}
            height={300}
            fetchPriority="low"
            className="w-32"
          />
          <Image
            src="/assets/imgs/Company logo-2.png"
            alt="slack logo"
            width={300}
            height={300}
            fetchPriority="low"
            className="w-32"
          />
          <Image
            src="/assets/imgs/Company logo-3.png"
            alt="elastic logo"
            width={300}
            height={300}
            fetchPriority="low"
            className="w-32"
          />
          <Image
            src="/assets/imgs/Company logo-4.png"
            alt="loom logo"
            width={300}
            height={300}
            fetchPriority="low"
            className="w-32"
          />
        </div>
      </section>
    </>
  );
};

export default About;
