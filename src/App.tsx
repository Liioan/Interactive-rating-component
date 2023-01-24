import { useStateInfo } from './context/StateInfoContext';
import { motion, AnimatePresence } from 'framer-motion';

import { RatingCard } from './components/RatingCard';
import { ThankYouCard } from './components/ThankYouCard';

function App() {
  const context = useStateInfo();
  if (!context) return null;
  const { IsSubmited } = context;

  return (
    <div className='App bg-custom-veryDarkBlue h-screen flex justify-center items-center font-overpass'>
      <div className='card bg-gradient h-[480px] w-[450px] rounded-2xl bg-custom-darkBlue p-8  '>
        <AnimatePresence>
          {!IsSubmited && (
            <motion.div
              className='flex flex-col gap-8 '
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
              className='flex flex-col gap-10 items-center'
              initial={{ opacity: 0, translateX: '-100%' }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1, ease: 'anticipate', delay: 1 }}
            >
              <ThankYouCard />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
