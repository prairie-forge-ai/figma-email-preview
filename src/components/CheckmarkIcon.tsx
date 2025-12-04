export function CheckmarkIcon() {
  return (
    <div 
      className="relative flex items-center justify-center"
      style={{ width: '24px', height: '24px' }}
    >
      {/* Green Circle */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: '#2ECC71' }}
      />
      
      {/* White Checkmark */}
      <svg 
        width="14" 
        height="11" 
        viewBox="0 0 14 11" 
        fill="none" 
        className="relative z-10"
      >
        <path 
          d="M1 5.5L5 9.5L13 1.5" 
          stroke="#FFFFFF" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
