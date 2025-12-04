import { Header } from './Header';
import { UIContainer } from './UIContainer';
import { NextStepsSection } from './NextStepsSection';
import { FooterCopyright } from './FooterCopyright';
import { motion } from 'motion/react';
import { ProjectConfig } from '../config/project-config';

interface Frame3OverlayProps {
  config: ProjectConfig;
}

export function Frame3Overlay({ config }: Frame3OverlayProps) {
  return (
    <div 
      className="relative overflow-hidden rounded-2xl shadow-2xl"
      style={{ 
        width: '1200px', 
        height: '820px',
        background: 'linear-gradient(135deg, #000000 0%, #0a0a1a 40%, #1a1a3e 100%)'
      }}
    >
      {/* HEADER */}
      <Header clientName={config.clientName} />

      {/* UI_CONTAINER - dimmed */}
      <div className="px-8" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
        <UIContainer
          showLabels={false}
          interactionState="overlay"
          config={config}
        />
      </div>

      {/* NEXT_STEPS_SECTION */}
      <NextStepsSection />

      {/* FOOTER COPYRIGHT */}
      <FooterCopyright />

      {/* OVERLAY_DARK with OVERLAY_STATUS */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <motion.div
          className="text-center space-y-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          {/* Title */}
          <h2 
            className="text-[#F5F5F7]"
            style={{ fontSize: '42px', fontWeight: 600, lineHeight: 1.2 }}
          >
            Build Complete
          </h2>
          {/* Subtitle */}
          <p 
            className="text-[#C9C9D6]"
            style={{ fontSize: '24px', fontWeight: 400 }}
          >
            Ready When You Are
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}