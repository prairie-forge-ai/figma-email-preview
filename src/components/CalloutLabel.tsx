import { motion } from 'motion/react';

interface CalloutLabelProps {
  name: string;
  text: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  connectorPath: string;
  delay?: number;
}

export function CalloutLabel({ 
  name, 
  text, 
  position, 
  connectorPath, 
  delay = 0 
}: CalloutLabelProps) {
  return (
    <motion.div
      className="absolute z-10"
      style={position}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: 'easeOut' }}
    >
      <div className="relative">
        {/* Label Background and Text */}
        <div 
          className="backdrop-blur-sm"
          style={{
            backgroundColor: 'rgba(53, 51, 205, 0.15)',
            border: '1px solid #3533CD',
            borderRadius: '8px',
            padding: '6px 12px',
            whiteSpace: 'nowrap'
          }}
        >
          <span 
            className="text-[#F5F5F7]"
            style={{ fontSize: '16px', fontWeight: 500 }}
          >
            {text}
          </span>
        </div>

        {/* CONNECTOR Line */}
        <svg
          className="absolute pointer-events-none"
          style={{
            left: position.right ? 'auto' : '50%',
            right: position.right ? '50%' : 'auto',
            top: position.bottom ? 'auto' : '50%',
            bottom: position.bottom ? '50%' : 'auto',
            width: '250px',
            height: '150px',
            overflow: 'visible'
          }}
        >
          {/* Connector path */}
          <motion.path
            d={connectorPath}
            stroke="#9593FF"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: delay + 0.2, duration: 0.6, ease: 'easeOut' }}
          />
          
          {/* End dot */}
          <motion.circle
            cx={connectorPath.split(' ').pop()?.split(',')[0] || 0}
            cy={connectorPath.split(',').pop() || 0}
            r="3"
            fill="#9593FF"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: delay + 0.7, duration: 0.2 }}
          />
        </svg>
      </div>
    </motion.div>
  );
}
