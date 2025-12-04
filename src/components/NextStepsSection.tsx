import { CheckmarkIcon } from './CheckmarkIcon';
import { ArrowNextIcon } from './ArrowNextIcon';

interface ChecklistItemProps {
  icon: 'complete' | 'pending';
  text: string;
}

function ChecklistItem({ icon, text }: ChecklistItemProps) {
  return (
    <div 
      className="flex items-center"
      style={{ 
        gap: '12px',
        minHeight: '32px'
      }}
    >
      {/* Icon */}
      <div className="flex-shrink-0">
        {icon === 'complete' ? <CheckmarkIcon /> : <ArrowNextIcon />}
      </div>
      
      {/* Text */}
      <p 
        className="text-[#C9C9D6]"
        style={{ 
          fontSize: '20px',
          fontWeight: 400,
          lineHeight: 1.4
        }}
      >
        {text}
      </p>
    </div>
  );
}

export function NextStepsSection() {
  return (
    <div 
      className="absolute left-0 right-0"
      style={{
        bottom: '40px', // Space for copyright footer
        height: '220px',
        backgroundColor: '#1A1A1E',
        borderTop: '1px solid rgba(149, 147, 255, 0.3)',
        padding: '32px'
      }}
    >
      {/* NEXT_TITLE */}
      <h2 
        className="text-[#F5F5F7]"
        style={{ 
          fontSize: '28px',
          fontWeight: 600,
          lineHeight: 1.3,
          marginBottom: '20px'
        }}
      >
        What's Next
      </h2>

      {/* NEXT_CHECKLIST */}
      <div 
        className="flex flex-col"
        style={{ gap: '16px' }}
      >
        {/* CHECKLIST ITEM 1 - Completed */}
        <ChecklistItem 
          icon="complete"
          text="Meet to review your requirements together"
        />

        {/* CHECKLIST ITEM 2 - Completed */}
        <ChecklistItem 
          icon="complete"
          text="Build and refine your customized workflow solution"
        />

        {/* CHECKLIST ITEM 3 - Pending */}
        <ChecklistItem 
          icon="pending"
          text="Walk through the final product and begin using it"
        />
      </div>
    </div>
  );
}
