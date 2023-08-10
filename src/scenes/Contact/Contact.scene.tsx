import GradientBox from "~/assets/svg/gradient-box.svg";

import { ContactForm } from "./components/ContactForm";
import CommonLayout from "@/layouts/CommonLayout";

export default function Contact() {
  return (
    <CommonLayout>
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
          <ContactForm />

          <GradientBox />
        </section>
      </main>
    </CommonLayout>
  );
}
