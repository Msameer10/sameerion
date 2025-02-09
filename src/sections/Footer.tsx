import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'

const footerLinks = [
  {
    title:'LinkedIn',
    href:'https://www.linkedin.com/in/msameer10',
  },
  {
    title:'Github',
    href:'https://www.github.com/msameer10',
  },
  {
    title:'X',
    href:'https://www.x.com/mo_sameer10',
  },
  {
    title:'Instagram',
    href:'https://www.instagram.com/msameer10',
  },
]

export const Footer = () => {
  return (
    <footer className='relative z-0 overflow-x-clip'>
      <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-rose-600/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>
      <div className="container">
        <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
          <div className='text-white/60 text-center'>SAMEERION - built with determination, a pinch of procrastination, and some questionable life decisions (and also maybe a bit of Googling)</div>
            <div className='flex flex-col gap-8 items-center'>
              <div className='text-white/60'>&copy; Sameerion 2025. All rights reserved.</div>
              <nav className='flex flex-col md:flex-row items-center gap-8'>
                {footerLinks.map(link => (
                  <a href={link.href} key={link.title} className='inline-flex items-center gap-1.5' target="_blank" rel="noopener noreferrer">
                    <span className='font-semibold'>{link.title}</span>
                    <ArrowUpRightIcon className="size-4"/>
                  </a>
                ))}
              </nav>
            </div>
        </div>
      </div>
    </footer>
  );
};
