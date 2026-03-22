import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/mosameer100/",
  },
  {
    title: "GitHub",
    href: "https://www.github.com/msameer10",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-0 overflow-x-clip">
      <div className="absolute bottom-0 left-1/2 -z-10 h-[400px] w-[1600px] -translate-x-1/2 bg-rose-600/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]" />
      <div className="container">
        <div className="flex flex-col items-center gap-6 border-t border-white/15 py-6 text-sm md:flex-row md:justify-between">
          <div className="text-center text-white/60">Sameerion</div>
          <div className="text-white/60">&copy; Sameerion {currentYear}. All rights reserved.</div>
          <nav className="flex flex-col items-center gap-6 md:flex-row">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
