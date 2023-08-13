import SignUp from "~/assets/svg/sign-up.svg";
import SecondStepIcon from "~/assets/svg/second-step.svg";
import ThirdStepIcon from "~/assets/svg/third-step.svg";

export default function Features() {
  return (
    <>
      <div className="relative before:absolute before:inset-0 before:z-10 before:-translate-y-28 before:bg-contain before:bg-no-repeat before:bg-[url('/assets/svg/hashes.svg')] before:opacity-50">
        <section id="hero" className="pt-28 max-w-5xl mx-auto relative z-20">
          <h1 className="text-center tex-deeppurple lg:text-7xl">
            How <span className="text-main">signing up</span> with The Design
            Project works!?
          </h1>
          <p className="text-grey mt-8  text-center max-w-3xl mx-auto">
            Take a minute to imagine how you&apos;d feel watching your user
            count grow, and retention rates stay consistently high. When you
            prioritize effective UX, better retention and growth are natural
            consequences. Backed by countless hours of research and testing, TDP
            blends UX, UI, and Product design into a deliciously smooth process
            that fuels productivity and success.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 bg-white border border-main/50 py-16 rounded-2xl my-24">
            <div className="flex flex-col items-center gap-4 px-12">
              <div className="w-24 h-24 rounded-full bg-main text-white  flex justify-center items-center">
                <SignUp />
              </div>{" "}
              <h3 className="font-semibold text-main text-2xl text-center mb-4 mt-3">
                Sign up for one of our services
              </h3>
              <p className="text-grey text-center">
                Upholding honesty and ethical conduct in everything we do,
                building trust with our stakeholders.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 px-12 border-y border-main/50 md:border-y-0 md:border-x ">
              <div className="w-24 h-24 rounded-full bg-main text-white  flex justify-center items-center ">
                <SecondStepIcon />
              </div>
              <h3 className="font-semibold text-main text-2xl text-center mb-4 mt-3">
                Meet your perfect match
              </h3>
              <p className="text-grey text-center">
                Stay connected anytime, anywhere with our robust and reliable
                network infrastructure.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 px-12">
              <div className="w-24 h-24 rounded-full bg-main text-white  flex justify-center items-center">
                <ThirdStepIcon />
              </div>
              <h3 className="font-semibold text-main text-2xl text-center mb-4 mt-3">
                Intuitive User Interface
              </h3>
              <p className="text-grey text-center">
                Enjoy a seamless and intuitive user experience with our sleek
                and user-friendly interface.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
