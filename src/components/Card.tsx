import { useStateInfo } from '../context/StateInfoContext';
import { motion, AnimatePresence } from 'framer-motion';

import { RatingCard } from '../components/RatingCard';
import { ThankYouCard } from '../components/ThankYouCard';

export function Card() {
  const context = useStateInfo();
  if (!context) return null;
  const { IsSubmited } = context;

  return (
    <div className='card bg-gradient h-[450px] w-[430px] rounded-3xl bg-custom-darkBlue p-8  '>
      <AnimatePresence>
        {!IsSubmited && (
          <motion.div
            className='flex flex-col gap-6 '
            initial={{ opacity: 0, translateX: '-100%' }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: '100%' }}
            transition={{ duration: 1, ease: 'anticipate' }}
          >
            <RatingCard />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {IsSubmited && (
          <motion.div
            className='flex flex-col gap-8 items-center'
            initial={{ opacity: 0, translateX: '-100%' }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1, ease: 'anticipate', delay: 1 }}
          >
            <ThankYouCard />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
