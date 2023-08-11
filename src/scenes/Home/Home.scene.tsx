import { Button } from "@/components/atoms/Button";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const LandingPage = () => {
  return (
    <>
      <section id="hero" className="pt-28 max-w-5xl mx-auto">
        <h1 className="text-center tex-deeppurple lg:text-7xl">
          Revolutionizing the Future with Cutting-Edge Technology
        </h1>
        <p className="text-grey mt-8 text-center">
          Empowering Innovation for a Digital Tomorrow
        </p>

        <div className="flex justify-center gap-4 my-8">
          <Button
            className="bg-dark text-white text-base rounded-full px-8 hover:bg-dark/90"
            size="lg"
          >
            Demo
          </Button>
          <Button
            className="bg-main text-white text-base rounded-full px-8"
            size="lg"
          >
            Contact Us
          </Button>
        </div>

        <img
          src="/assets/imgs/dashboard_overview.png"
          alt="Dashboard overview"
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
              <Button
                className="bg-main text-white text-base rounded-full px-8"
                size="lg"
              >
                Contact Us
              </Button>
              <Button
                variant="link"
                className="text-dark underline underline-offset-2 hover:underline-offset-4 transition-all text-base rounded-full px-8"
                size="lg"
              >
                Demo
              </Button>
            </div>
          </div>
          <img
            src="/assets/imgs/dashboard_overview.png"
            alt="Dashboard overview"
          />
        </div>
      </section>

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
          <img src="/assets/imgs/Company logo.png" alt="descript logo" />
          <img src="/assets/imgs/Company logo-1.png" alt="shopify logo" />
          <img src="/assets/imgs/Company logo-2.png" alt="slack logo" />
          <img src="/assets/imgs/Company logo-3.png" alt="elastic logo" />
          <img src="/assets/imgs/Company logo-4.png" alt="loom logo" />
        </div>
      </section>

      <section id="testimonials" className="bg-gray-50 py-20">
        <div className="max-w-screen-lg mx-auto">
          <h1 className="text-4xl text-center mb-20">1M+ Global Customers</h1>

          <div className="grid md:grid-cols-2 items-center md:gap-8">
            <img src="/assets/imgs/dashboard_overview.png" alt="" />
            <div>
              <p className="text-grey mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                veritatis corrupti assumenda repudiandae distinctio eum fugit
                impedit, cum nisi quisquam. Doloribus, cumque! Accusantium quia
                sequi enim impedit vitae est corporis.
              </p>

              <h2 className="text-2xl text-dark">Sarah Thompson</h2>
              <h3 className="text-xl text-dark">CEO Thompson Enterprises</h3>

              <div className="flex justify-end gap-2">
                <button>
                  <span className="sr-only">View previous testimony</span>
                  <ArrowLeftIcon className="w-14 h-14 rounded-full border border-main p-3 text-main hover:cursor-pointer hover:bg-main hover:text-white" />
                </button>
                <button>
                  <span className="sr-only">View next testimony</span>
                  <ArrowRightIcon className="w-14 h-14 rounded-full border border-main p-3 text-main hover:cursor-pointer hover:bg-main hover:text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
