interface HeaderProps {
  clientName: string;
}

export function Header({ clientName }: HeaderProps) {
  return (
    <div className="relative">
      {/* HEADER Container */}
      <div 
        className="flex items-center justify-between"
        style={{ 
          height: '120px',
          paddingLeft: '32px',
          paddingRight: '32px'
        }}
      >
        {/* HEADER_TITLE */}
        <h1 
          className="text-[#F5F5F7]"
          style={{ 
            fontSize: '32px',
            fontWeight: 500,
            lineHeight: 1.2
          }}
        >
          {clientName} Automation – UI Preview
        </h1>

        {/* HEADER_BRAND - Using Comfortaa font */}
        <div 
          className="text-[#F5F5F7]"
          style={{ 
            fontFamily: "'Comfortaa', sans-serif",
            fontSize: '24px',
            fontWeight: 400,
            letterSpacing: '-0.01em'
          }}
        >
          prairie.forge
        </div>
      </div>

      {/* HEADER_DIVIDER */}
      <div 
        style={{
          height: '1px',
          width: '100%',
          backgroundColor: 'rgba(201, 201, 214, 0.2)'
        }}
      />
    </div>
  );
}