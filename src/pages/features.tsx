import Integrity from "~/assets/svg/integrity.svg";
import Innovation from "~/assets/svg/innovation.svg";
import Collaboration from "~/assets/svg/collaboration.svg";
import CustomerCentric from "~/assets/svg/customer-centric.svg";
import Sustainability from "~/assets/svg/sustainability.svg";
import Excellence from "~/assets/svg/excellence.svg";

export default function About() {
  return (
    <>
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
    </>
  );
}
