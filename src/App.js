import './App.css';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'

function App() {
  const [page, setPage] = useState(0)

  const pages = [
    <div>
      Page 1
    </div>,

    <div>
      Page 2
    </div>,

    <div>
      Page 3
    </div>,
  ];

  return (
    <AnimatePresence mode="wait" initial={false}>
      <div className="h-screen flex flex-col justify-center items-center">
        <motion.div
          key={page}
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 3 }}
        >
          {pages[page]}
        </motion.div>

        <div className="flex gap-3">
          <button
            className="mt-3 px-2 py-1 rounded bg-gray-300 hover:bg-gray-400"
            onClick={() =>
              setPage((page) => (page - 1 + pages.length) % pages.length)
            }
          >
            Prev Page
          </button>

          <button
            className="mt-3 px-2 py-1 rounded bg-gray-300 hover:bg-gray-400"
            onClick={() => setPage((page) => (page + 1) % pages.length)}
          >
            Next Page
          </button>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
