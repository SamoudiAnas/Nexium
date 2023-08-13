import TooltipIcon from "~/assets/svg/tooltip-icon.svg";

import { Button } from "@/components/atoms/Button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/molecules/Tooltip";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";

function PricingTable() {
  return (
    <div className="relative overflow-hidden before:absolute before:opacity-50 before:inset-0 before:z-10 before:-translate-y-28 before:bg-contain before:bg-no-repeat before:bg-[url('/assets/svg/hashes.svg')]">
      <div className="max-w-screen-lg mx-auto py-24 relative z-20">
        <h1 className="text-5xl text-center mb-8">
          Transparent Pricing for Exceptional Value
        </h1>
        <p className="text-center text-grey">
          Find the perfect plan for your needs with our straightforward pricing
          options. Discover competitive rates and unlock the exceptional value
          we offer for our top-notch services.
        </p>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="rounded-lg px-4 md:px-8 py-6 border border-gray-100 flex flex-col gap-6 items-center bg-gray-50">
            <h2 className="text-center text-2xl">Basic Plan</h2>
            <p>
              <span className="text-5xl font-semibold">$0</span>
              <span className="text-xl text-grey">/month</span>
            </p>

            <p className="text-base text-grey">Great fit for the startups</p>

            <Button variant="outline" className="w-full">
              Get Started
            </Button>

            <div className="w-full">
              <Tooltips />
              <p className="text-grey text-sm mb-4">Features</p>
              <div className="flex items-center gap-2 w-full mb-3">
                <CheckIcon className="w-5 h-5 rounded-full bg-main text-white flex-shrink-0 p-[.15rem]" />
                <p className="text-xs md:text-sm">Unlimited Bandwidth</p>
              </div>
              <div className="flex items-center gap-2 w-full mb-3">
                <CheckIcon className="w-5 h-5 rounded-full bg-main text-white flex-shrink-0 p-[.15rem]" />
                <p className="text-xs md:text-sm">Custom Domain</p>
              </div>
              <div className="flex items-center gap-2 w-full mb-3">
                <CheckIcon className="w-5 h-5 rounded-full bg-main text-white flex-shrink-0 p-[.15rem]" />
                <p className="text-xs md:text-sm">Secure SSL Certificate</p>
              </div>
              <div className="flex items-center gap-2 w-full mb-3">
                <Cross2Icon className="w-5  h-5  rounded-full bg-gray-400 text-white flex-shrink-0 p-[.15rem]" />
                <p className="text-xs md:text-sm">Priority Customer Support</p>
              </div>
              <div className="flex items-center gap-2 w-full mb-3">
                <Cross2Icon className="w-5  h-5  rounded-full bg-gray-400 text-white flex-shrink-0 p-[.15rem]" />
                <p className="text-xs md:text-sm">
                  Advanced Analytics and Reporting
                </p>
              </div>
              <div className="flex items-center gap-2 w-full mb-3">
                <Cross2Icon className="w-5  h-5  rounded-full bg-gray-400 text-white flex-shrink-0 p-[.15rem]" />
                <p className="text-xs md:text-sm">E-commerce Integration</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg px-4 md:px-8 py-6 border border-main/60 flex flex-col gap-6 items-center relative bg-gray-50">
            <span className="absolute left-1/2 -translate-y-1/2 top-0 -translate-x-1/2 bg-orange-100 text-main border border-main/70 py-1 px-4 rounded-full text-sm">
              Recommended
            </span>
            <h2 className="text-center text-2xl">Business Plan</h2>
            <p>
              <span className="text-5xl text-main font-semibold">$19</span>
              <span className="text-xl text-grey">/month</span>
            </p>

            <p className="text-base text-grey">Great fit for the startups</p>

            <Button className="w-full">Get Started</Button>

            <div className="w-full">
              <Tooltips />

              <p className="text-grey text-sm mb-4">Features</p>

              <div className="flex items-center gap-2 w-full mb-3">
                <CheckIcon className="w-5 h-5 rounded-full bg-main text-white flex-shrink-0 p-[.15rem]" />
                <p className="text-xs md:text-sm">Unlimited Bandwidth</p>
              </div>

              <div className="flex items-center gap-2 w-full mb-3">
                <CheckIcon className="w-5 h-5 rounded-full bg-main text-white flex-shrink-0 p-[.15rem]" />
                <p className="text-xs md:text-sm">Custom Domain</p>
              </div>

              <div className="flex items-center gap-2 w-full mb-3">
                <CheckIcon className="w-5 h-5 rounded-full bg-main text-white flex-shrink-0 p-[.15rem]" />
                <p className="text-xs md:text-sm">Secure SSL Certificate</p>
              </div>

              <div className="flex items-center gap-2 w-full mb-3">
                <CheckIcon className="w-5 h-5 rounded-full bg-main text-white flex-shrink-0 p-[.15rem]" />
                <p className="text-xs md:text-sm">Priority Customer Support</p>
              </div>

              <div className="flex items-center gap-2 w-full mb-3">
                <CheckIcon className="w-5 h-5 rounded-full bg-main text-white flex-shrink-0 p-[.15rem]" />
                <p className="text-xs md:text-sm">
                  Advanced Analytics and Reporting
                </p>
              </div>

              <div className="flex items-center gap-2 w-full mb-3">
                <Cross2Icon className="w-5  h-5  rounded-full bg-gray-400 text-white flex-shrink-0 p-[.15rem]" />
                <p className="text-xs md:text-sm">E-commerce Integration</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg px-4 md:px-8 py-6 border border-gray-100 flex flex-col gap-6 items-center bg-gray-50">
            <h2 className="text-center text-2xl">Enterprise Plan</h2>
            <p>
              <span className="text-5xl font-semibold">$29</span>
              <span className="text-xl text-grey">/month</span>
            </p>

            <p className="text-base text-grey">Great fit for the startups</p>

            <Button variant="outline" className="w-full">
              Get Started
            </Button>

            <div className="w-full">
              <Tooltips />
              <p className="text-grey text-sm mb-4">Features</p>
              <div className="flex items-center gap-2 w-full mb-3">
                <CheckIcon className="w-5 h-5 rounded-full bg-main text-white flex-shrink-0 p-[.15rem]" />
                <p className="text-xs md:text-sm">Unlimited Bandwidth</p>
              </div>
              <div className="flex items-center gap-2 w-full mb-3">
                <CheckIcon className="w-5 h-5 rounded-full bg-main text-white flex-shrink-0 p-[.15rem]" />
                <p className="text-xs md:text-sm">Custom Domain</p>
              </div>
              <div className="flex items-center gap-2 w-full mb-3">
                <CheckIcon className="w-5 h-5 rounded-full bg-main text-white flex-shrink-0 p-[.15rem]" />
                <p className="text-xs md:text-sm">Secure SSL Certificate</p>
              </div>
              <div className="flex items-center gap-2 w-full mb-3">
                <CheckIcon className="w-5 h-5 rounded-full bg-main text-white flex-shrink-0 p-[.15rem]" />
                <p className="text-xs md:text-sm">Priority Customer Support</p>
              </div>
              <div className="flex items-center gap-2 w-full mb-3">
                <CheckIcon className="w-5 h-5 rounded-full bg-main text-white flex-shrink-0 p-[.15rem]" />
                <p className="text-xs md:text-sm">
                  Advanced Analytics and Reporting
                </p>
              </div>
              <div className="flex items-center gap-2 w-full mb-3">
                <CheckIcon className="w-5 h-5 rounded-full bg-main text-white flex-shrink-0 p-[.15rem]" />
                <p className="text-xs md:text-sm">E-commerce Integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Tooltips = () => {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="py-2 px-3 rounded bg-main/10 flex items-center justify-between w-full mb-3 hover:cursor-pointer">
              <div className="flex items-center gap-1">
                <p className="text-xs md:text-sm text-main">
                  Responsive Website Design
                </p>
                <TooltipIcon className="w-4 h-4" />
              </div>
              <CheckIcon className="w-4 h-4 rounded-full bg-main text-white flex-shrink-0" />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <div>
              <h1 className="text-lg text-dark font-semibold">
                Responsive Website Design
              </h1>
              <p className="text-grey mt-4 text-sm">
                Responsive Website Design ensures your site looks and works
                great on any device. It automatically adjusts content and layout
                to provide an optimal user experience, whether visitors are
                using desktops, laptops, tablets, or smartphones
              </p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="py-2 px-3 rounded bg-main/10 flex items-center justify-between w-full mb-3 hover:cursor-pointer">
              <div className="flex items-center gap-1">
                <p className="text-xs md:text-sm text-main">
                  Basic SEO Optimization
                </p>
                <TooltipIcon className="w-4 h-4" />
              </div>
              <CheckIcon className="w-4 h-4 rounded-full bg-main text-white flex-shrink-0" />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <div>
              <h1 className="text-lg text-dark font-semibold">
                Basic SEO Optimization
              </h1>
              <p className="text-grey mt-4 text-sm">
                Basic SEO Optimization improves your website&apos;s visibility
                on search engines, helping more people find your content. It
                involves optimizing keywords, meta tags, and other factors to
                enhance your site&apos;s ranking and attract organic traffic.
              </p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="py-2 px-3 rounded bg-main/10 flex items-center justify-between w-full mb-3 hover:cursor-pointer">
              <div className="flex items-center gap-1">
                <p className="text-xs md:text-sm text-main">
                  24/7 Customer Support
                </p>
                <TooltipIcon className="w-4 h-4" />
              </div>
              <CheckIcon className="w-4 h-4 rounded-full bg-main text-white flex-shrink-0" />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <div>
              <h1 className="text-lg text-dark font-semibold">
                24/7 Customer Support
              </h1>
              <p className="text-grey mt-4 text-sm">
                24/7 Customer Support offers round-the-clock assistance to
                address your inquiries and concerns anytime, ensuring a seamless
                and responsive service experience no matter the time of day.
              </p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export { PricingTable };
