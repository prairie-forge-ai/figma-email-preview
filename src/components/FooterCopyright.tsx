export function FooterCopyright() {
  return (
    <div 
      className="absolute bottom-0 left-0 right-0 flex items-center justify-center"
      style={{
        height: '40px',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderTop: '1px solid rgba(201, 201, 214, 0.1)'
      }}
    >
      <p 
        className="text-[#C9C9D6]"
        style={{ 
          fontSize: '12px',
          fontWeight: 400,
          letterSpacing: '0.02em'
        }}
      >
        © Prairie Forge LLC, 2025. All rights reserved.
      </p>
    </div>
  );
}
