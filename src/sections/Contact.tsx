import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 to-rose-600 px-10 py-8 text-center text-gray-900 md:text-left">
          <div
            className="absolute inset-0 opacity-5"
            style={{ backgroundImage: `url(${grainImage.src})`, zIndex: 0 }}
          />
          <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">Let&apos;s Connect</h2>
              <p className="mt-2 text-sm md:text-base">
                Open to opportunities, collaborations, and professional conversations.
              </p>
            </div>
            <div className="relative z-20">
              <a href="mailto:mo.sameerion@gmail.com">
                <button className="inline-flex h-12 w-max items-center gap-2 rounded-xl border border-gray-900 bg-gray-900 px-6 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500">
                  <span className="font-semibold">Contact Me</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
