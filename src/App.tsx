import { useState, useEffect } from 'react';
import { Frame1Static } from './components/Frame1Static';
import { Frame2Interaction } from './components/Frame2Interaction';
import { Frame3Overlay } from './components/Frame3Overlay';
import { motion, AnimatePresence } from 'motion/react';
import { projectConfig } from './config/project-config';

export default function App() {
  const [currentFrame, setCurrentFrame] = useState<1 | 2 | 3>(1);
  const [isAnimating, setIsAnimating] = useState(false);

  // Use config for all settings
  const config = projectConfig;

  useEffect(() => {
    if (!isAnimating) return;

    let timer: NodeJS.Timeout;

    if (currentFrame === 1) {
      timer = setTimeout(() => setCurrentFrame(2), config.animation.frame1Duration);
    } else if (currentFrame === 2) {
      timer = setTimeout(() => setCurrentFrame(3), config.animation.frame2Duration);
    } else if (currentFrame === 3) {
      timer = setTimeout(() => setCurrentFrame(1), config.animation.frame3Duration);
    }

    return () => clearTimeout(timer);
  }, [currentFrame, isAnimating, config.animation]);

  const handleReset = () => {
    setIsAnimating(false);
    setCurrentFrame(1);
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-8">
      <div className="space-y-6">
        {/* Control Panel */}
        <div className="flex gap-4 justify-center items-center">
          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className="px-6 py-3 bg-[#3533CD] text-[#F5F5F7] rounded-lg hover:bg-[#4945dd] transition-colors"
          >
            {isAnimating ? 'Stop Animation' : 'Start Animation'}
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-neutral-700 text-[#F5F5F7] rounded-lg hover:bg-neutral-600 transition-colors"
          >
            Reset
          </button>
          <div className="text-neutral-400 text-sm">
            Frame: {currentFrame} of 3
          </div>
        </div>

        {/* Frame Container - MAIN_PREVIEW_FRAME */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {currentFrame === 1 && (
              <motion.div
                key="frame1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <Frame1Static config={config} />
              </motion.div>
            )}
            {currentFrame === 2 && (
              <motion.div
                key="frame2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <Frame2Interaction config={config} />
              </motion.div>
            )}
            {currentFrame === 3 && (
              <motion.div
                key="frame3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <Frame3Overlay config={config} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Instructions */}
        <div className="text-center text-neutral-400 max-w-3xl mx-auto space-y-2">
          <p>Click "Start Animation" to preview the automated sequence.</p>
          <p className="text-sm">Update project settings in <code className="bg-neutral-800 px-2 py-1 rounded">/config/project-config.ts</code></p>
          <p className="text-sm text-[#3533CD]">
            Prairie Forge — Practical Automation for Modern Professionals
          </p>
        </div>
      </div>
    </div>
  );
}