import GradientBox from "~/assets/svg/gradient-box.svg";

import Suitecase from "~/assets/svg/suitecase.svg";
import Partner from "~/assets/svg/partner.svg";
import CustomerSupport from "~/assets/svg/customer-support.svg";

import { ContactForm } from "./components/ContactForm";

export default function Contact() {
  return (
    <main>
      <section className="max-w-screen-lg mx-auto py-24">
        <h1 className="text-5xl text-dark text-center mb-4">Contact Us</h1>
        <p className="text-center text-grey">
          At FutureSphere our mission is to empower individuals and businesses
          through innovative technology solutions that enrich lives, foster
          growth, and drive positive change.
        </p>
      </section>

      <section className="max-w-screen-lg mx-auto grid grid-cols-[3fr_1fr] gap-12">
        <div>
          <ContactForm />
        </div>

        <GradientBox />
      </section>

      <section className="bg-gray-100 py-20">
        <div className="max-w-screen-lg mx-auto">
          <h1 className="text-center text-5xl mb-5">
            Answers to some of your questions
          </h1>
          <p className="text-grey text-center mb-12">
            Don&apos;t find the answers you were looking for? Contact us at{" "}
            <a
              href="mailto:contact@samoudianas.dev"
              className="text-main font-medium"
            >
              contact@samoudianas.dev
            </a>
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {[1, 2, 3, 4].map((_, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-md bg-white"
              >
                <h2 className="text-main py-4 px-6 border-b border-gray-200">
                  What is included in the startup website template?
                </h2>
                <p className="text-grey py-4 px-6  pr-8 pb-8">
                  Yes, our startup website template is designed with SEO best
                  practices in mind. It includes clean code structure, fast
                  loading times, meta tag optimization, and schema markup
                  implementation. These elements contribute to better search
                  engine visibility, helping your website rank higher in search
                  results and attract more organic traffic.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-3 gap-4 md:gap-0 max-w-screen-lg mx-auto rounded-2xl p-4 border border-main/20 my-16">
        <div>
          <Suitecase className="mx-auto w-16 mb-4" />
          <h2 className="text-lg font-semibold text-dark text-center">
            Sales and Business
          </h2>
          <p className="text-base text-grey text-center">
            contact@samoudianas.dev
          </p>
        </div>

        <div className="md:border-x md:border-main/20">
          <Partner className="mx-auto w-16 mb-4" />
          <h2 className="text-lg font-semibold text-dark text-center">
            Partners
          </h2>
          <p className="text-base text-grey text-center">
            partners1234@gmail.com
          </p>
        </div>

        <div>
          <CustomerSupport className="mx-auto w-16 mb-4" />
          <h2 className="text-lg font-semibold text-dark text-center">
            Customer Support
          </h2>
          <p className="text-base text-grey text-center">support@gmail.com</p>
        </div>
      </div>
    </main>
  );
}
