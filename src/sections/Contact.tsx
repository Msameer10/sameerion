import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'

export const ContactSection = () => {
  return (
    <div id='contact' className='py-16 pt-12 lg:py-24 lg:pt-20'>
      <div className='container'>
        <div className='bg-gradient-to-r from-purple-600 to-rose-600 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden'>
          <div 
            className='absolute inset-0 opacity-5' 
            style={{ backgroundImage: `url(${grainImage.src})`, zIndex: 0 }} 
          ></div>
          <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center md:justify-between relative z-10'>
            <div>
              <h2 className='font-serif text-2xl md:text-3xl'>Let&apos;s Connect sometime</h2>
              <p className='text-sm md:text-base mt-2'>
                Whether it&apos;s a collaboration or a casual conversation, I&apos;m excited to hear from you!
              </p>
            </div>
            <div className='relative z-20'>
              <a href="mailto:mohammadsameer0409@gmail.com">
                <button className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500'>
                  <span className='font-semibold'>Contact Me</span>
                  <ArrowUpRightIcon className="size-4"/>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
