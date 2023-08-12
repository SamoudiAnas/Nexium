import GradientBox from "~/assets/svg/gradient-box.svg";

import Suitecase from "~/assets/svg/suitecase.svg";
import Partner from "~/assets/svg/partner.svg";
import CustomerSupport from "~/assets/svg/customer-support.svg";

import { ContactForm } from "./components/ContactForm";
import FAQs from "./components/FAQs";

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

      <section className="max-w-screen-lg mx-auto grid grid-cols-[3fr_1fr] gap-12 mb-16">
        <div>
          <ContactForm />
          <div className="grid md:grid-cols-3 gap-4 md:gap-0 max-w-screen-lg mx-auto rounded-2xl p-4 border border-main/20 mt-8">
            <div>
              <Suitecase className="mx-auto w-16 mb-4" />
              <h2 className="font-semibold text-dark text-center">
                Sales and Business
              </h2>
              <p className="text-sm text-grey text-center">
                contact@samoudianas.dev
              </p>
            </div>

            <div className="md:border-x md:border-main/20">
              <Partner className="mx-auto w-16 mb-4" />
              <h2 className="font-semibold text-dark text-center">Partners</h2>
              <p className="text-sm text-grey text-center">
                partners1234@gmail.com
              </p>
            </div>

            <div>
              <CustomerSupport className="mx-auto w-16 mb-4" />
              <h2 className="font-semibold text-dark text-center">
                Customer Support
              </h2>
              <p className="text-sm text-grey text-center">support@gmail.com</p>
            </div>
          </div>
        </div>

        <GradientBox />
      </section>

      <FAQs />
    </main>
  );
}
