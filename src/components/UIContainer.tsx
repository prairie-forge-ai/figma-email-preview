import { motion } from 'motion/react';
import { CalloutLabel } from './CalloutLabel';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProjectConfig } from '../config/project-config';

interface UIContainerProps {
  showLabels: boolean;
  interactionState: 'static' | 'interaction' | 'overlay';
  config: ProjectConfig;
}

export function UIContainer({ showLabels, interactionState, config }: UIContainerProps) {
  return (
    <div 
      className="relative"
      style={{ 
        height: '520px',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        borderRadius: '16px',
        border: '1px solid rgba(53, 51, 205, 0.25)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
        padding: '24px'
      }}
    >
      {/* UI_SCREENSHOT - Using the config screenshots */}
      <div className="relative h-full flex items-center justify-center gap-6">
        {/* Left Screenshot */}
        <motion.div 
          className="relative rounded-lg overflow-hidden shadow-xl"
          style={{ width: '500px', height: '450px' }}
          animate={{
            scale: interactionState === 'interaction' ? 1.02 : 1,
            x: interactionState === 'interaction' ? -10 : 0,
            opacity: interactionState === 'overlay' ? 0.4 : 1
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <ImageWithFallback
            src={config.screenshots.left}
            alt="UI Preview - Primary"
            className="w-full h-full object-cover"
          />
          
          {/* Highlight effect for interaction state */}
          {interactionState === 'interaction' && (
            <motion.div
              className="absolute inset-0 border-2 border-[#9593FF] pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{ borderRadius: '8px' }}
            />
          )}
        </motion.div>

        {/* Right Screenshot */}
        <motion.div 
          className="relative rounded-lg overflow-hidden shadow-xl"
          style={{ width: '500px', height: '450px' }}
          animate={{
            scale: interactionState === 'interaction' ? 0.98 : 1,
            x: interactionState === 'interaction' ? 10 : 0,
            opacity: interactionState === 'overlay' ? 0.4 : 1
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <ImageWithFallback
            src={config.screenshots.right}
            alt="UI Preview - Secondary"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Callout Labels - Using config labels */}
      {showLabels && (
        <>
          {/* LABEL_1 */}
          <CalloutLabel
            name="LABEL_1"
            text={config.labels.label1.text}
            position={config.labels.label1.position}
            connectorPath="M 0 0 Q 80 50, 200 120"
            delay={0}
          />

          {/* LABEL_2 */}
          <CalloutLabel
            name="LABEL_2"
            text={config.labels.label2.text}
            position={config.labels.label2.position}
            connectorPath="M 0 0 Q -60 40, -140 90"
            delay={0.15}
          />

          {/* LABEL_3 */}
          <CalloutLabel
            name="LABEL_3"
            text={config.labels.label3.text}
            position={config.labels.label3.position}
            connectorPath="M 0 0 Q 90 -60, 180 -110"
            delay={0.3}
          />
        </>
      )}
    </div>
  );
}