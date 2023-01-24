import { RatingButton } from './components/RatingButton';
import Star from './images/icon-star.svg';

function App() {
  return (
    <div className='App bg-custom-veryDarkBlue h-screen flex justify-center items-center font-overpass'>
      <div className='card bg-gradient h-[480px] w-[450px] rounded-2xl bg-custom-darkBlue p-8 flex flex-col gap-8'>
        <div className='star rounded-full bg-custom-darkBlue w-12 h-12 flex items-center justify-center     bg-opacity-50'>
          <img src={Star} alt='' />
        </div>

        <h1 className='font-700 text-custom-white text-3xl'>How did we do?</h1>
        <p className='text-custom-mediumGrey tracking-wide text-lg'>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!{' '}
        </p>

        <div className='buttons flex justify-around items-center'>
          {[1, 2, 3, 4, 5].map(rating => (
            <RatingButton key={rating} rating={rating} />
          ))}
        </div>

        <button className='bg-custom-orange text-center h-12 w-full rounded-full text-custom-white text-base uppercase font-700 tracking-widest hover:bg-custom-white hover:text-custom-orange transition duration-200'>
          sumbit
        </button>
      </div>
    </div>
  );
}

export default App;
