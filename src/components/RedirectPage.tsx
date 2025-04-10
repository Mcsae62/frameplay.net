
import React from 'react';
import { ArrowRight, Gamepad2 } from 'lucide-react';

const RedirectPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen blue-bg p-6 text-center">
      <div className="max-w-2xl">
        <Gamepad2 className="w-16 h-16 orange-text mb-6 mx-auto" />
        
        <h1 className="text-3xl md:text-4xl font-bold mb-6 orange-text">
          Game Content Has Moved to JoyInGames.com
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 orange-text">
          Welcome to click and visit. Future content will transform into STEAM game recommendations. Stay tuned!
        </p>
        
        <a 
          href="https://joyingames.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Visit JoyInGames.com
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default RedirectPage;
