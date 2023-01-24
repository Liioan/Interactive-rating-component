import { useStateInfo } from '../context/StateInfoContext';

interface props {
  rating: number;
}

export function RatingButton({ rating }: props) {
  const context = useStateInfo();
  if (!context) return null;

  const { SelectedRating, SetSelectedRating } = context;
  const handleClick = () => {
    if (SelectedRating === rating) {
      SetSelectedRating(0);
    } else {
      SetSelectedRating(rating);
    }
  };

  return (
    <button
      className={`w-12 h-12 bg-custom-darkBlue text-custom-mediumGrey font-700 rounded-full flex justify-center items-center p-0 hover:bg-custom-orange hover:text-custom-white transition duration-200 ${
        SelectedRating === rating
          ? 'bg-custom-mediumGrey !text-custom-white'
          : ''
      }`}
      onClick={handleClick}
    >
      {rating}
    </button>
  );
}
