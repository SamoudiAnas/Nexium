import { PricingTable } from "@/components/templates/PricingTable";
import { Testimonials } from "@/components/templates/Testimonials";
import { Button } from "@/components/atoms/Button";

import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <>
      <div className="relative before:absolute before:inset-0 before:z-10 before:-translate-y-28 before:bg-contain before:bg-no-repeat before:bg-[url('/assets/svg/hashes.svg')] before:opacity-50">
        <section id="hero" className="pt-28 max-w-5xl mx-auto relative z-20">
          <h1 className="text-center tex-deeppurple lg:text-7xl">
            Revolutionizing the Future with Cutting-Edge Technology
          </h1>
          <p className="text-grey mt-8 text-center">
            Empowering Innovation for a Digital Tomorrow
          </p>

          <div className="flex justify-center gap-4 my-8">
            <Link href="/contact">
              <Button className="rounded-full px-8" size="lg">
                Contact Us
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" className="rounded-full px-8" size="lg">
                Demo
              </Button>
            </Link>
          </div>

          <Image
            src="/assets/imgs/dashboard_overview.png"
            alt="Dashboard overview"
            width={1000}
            height={1000}
            fetchPriority="high"
          />

          <div className="grid md:grid-cols-3 gap-4 md:gap-0 bg-gray-50 rounded-2xl p-4 border border-main/20 mt-12 mb-24">
            <div>
              <h2 className="text-5xl font-semibold text-main text-center">
                50K
              </h2>
              <p className="text-2xl font-semibold text-dark text-center">
                New users per month
              </p>
            </div>

            <div className="md:border-x md:border-main/20">
              <h2 className="text-5xl font-semibold text-main text-center">
                150K
              </h2>
              <p className="text-2xl font-semibold text-dark text-center">
                Active Users
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-semibold text-main text-center">
                98%
              </h2>
              <p className="text-2xl font-semibold text-dark text-center">
                Satisfied Customers
              </p>
            </div>
          </div>
        </section>
      </div>

      <section id="features" className="bg-gray-100 py-16">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 items-center gap-8 md:gap-16">
          <div>
            <h1 className="text-4xl max-w-[22ch] mb-4">
              Empowering the world through transformative technology solutions
            </h1>
            <p className="text-grey">
              We are dedicated to empowering individuals, businesses, and
              communities by providing innovative and cutting-edge technology
              solutions that unlock new possibilities and drive positive change.
              Our mission is to make technology accessible, reliable, and
              impactful, enabling our customers to thrive in the digital era and
              shape a better future for all.
            </p>
            <div className="flex my-8">
              <Link href="/login">
                <Button
                  variant="link"
                  className="text-dark underline underline-offset-2 hover:underline-offset-4 transition-all text-base rounded-full px-8"
                  size="lg"
                >
                  Demo
                </Button>
              </Link>
            </div>
          </div>
          <Image
            src="/assets/imgs/dashboard_overview.png"
            alt="Dashboard overview"
            width={1000}
            height={1000}
            fetchPriority="low"
          />
        </div>
      </section>

      <PricingTable />

      <Testimonials />

      <section id="trusted-by" className="max-w-5xl mx-auto py-28">
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

export default LandingPage;
