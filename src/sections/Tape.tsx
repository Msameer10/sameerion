import StarIcon from '@/assets/icons/star.svg'
import { Fragment } from 'react';

const words = [
  "Relentless",
  "Ingenious",
  "Tenacious",
  "Pioneering",
  "Resolute",
  "Electric",
  "Uncharted",
  "Voyager",
  "Eccentric",
  "Calculated",
  "Unyielding",
  "Tactical",
  "Adaptive"
];

export const TapeSection = () => {
  return <div>
    <div className='py-16 lg:py-24 overflow-x-clip'>
      <div className='bg-gradient-to-r from-purple-600 to-rose-600 rotate-3 -mx-1'>
        <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          <div className='flex flex-none gap-4 py-3 pr-4 animate-move-right [animation-duration:30s]'>
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map(word => (
                <div key={word} className='inline-flex gap-4 items center'>
                  <span className='text-gray-900 uppercase font-extrabold text-sm'>{word}</span>
                  <StarIcon className="size-6 text-gray-900 -rotate-12"/>
                </div>
            ))}
              </Fragment>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  </div>;
};
