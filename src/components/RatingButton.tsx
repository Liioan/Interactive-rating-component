interface props {
  rating: number;
}

export function RatingButton({ rating }: props) {
  return (
    <button className='w-12 h-12 bg-custom-darkBlue text-custom-mediumGrey font-700 rounded-full flex justify-center items-center p-0 hover:bg-custom-orange hover:text-custom-white transition duration-200'>
      {rating}
    </button>
  );
}
