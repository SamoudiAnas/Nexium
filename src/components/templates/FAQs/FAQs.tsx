import React from "react";

function FAQs() {
  return (
    <div>
      <section className="bg-gray-100 py-20">
        <div className="max-w-screen-lg mx-auto">
          <h1 className="text-center text-5xl mb-5">
            Answers to some of your questions
          </h1>
          <p className="text-grey text-center mb-12">
            Don&apos;t find the answers you were looking for? Contact us at{" "}
            <a
              href="mailto:contact@samoudianas.dev"
              className="text-main font-medium hover:underline"
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
                <h2 className="text-dark text-lg font-semibold py-4 px-6 border-b border-gray-200">
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
    </div>
  );
}

export { FAQs };
