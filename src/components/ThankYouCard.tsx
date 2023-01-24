import { useStateInfo } from '../context/StateInfoContext';

import Hero from '../images/illustration-thank-you.svg';

export function ThankYouCard() {
  const cotnext = useStateInfo();
  if (!cotnext) return null;
  const { SelectedRating } = cotnext;

  return (
    <>
      <div className='flex flex-col gap-8'>
        <img src={Hero} alt='' />
        <span className='bg-custom-darkBlue text-custom-orange px-4 py-1 text-center rounded-full'>
          You selected {SelectedRating} out of 5
        </span>
      </div>
      <div className='flex flex-col gap-5'>
        <h2 className='text-3xl text-custom-white text-center'>Thank you!</h2>
        <p className='text-custom-mediumGrey text-center text-lg'>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </>
  );
}
