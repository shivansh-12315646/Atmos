export default function PremiumBackground() {
  return (
    <>
      {/* Aurora Effect Background */}
      <div className="aurora-bg fixed inset-0 -z-10" />
      
      {/* Morphing Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Blob 1 */}
        <div 
          className="blob absolute w-96 h-96 -top-48 -left-48 opacity-30"
          style={{ 
            background: 'linear-gradient(135deg, #84cc16, #22c55e)',
            animation: 'morph 10s ease-in-out infinite, floatSoft 8s ease-in-out infinite'
          }}
        />
        
        {/* Blob 2 */}
        <div 
          className="blob absolute w-96 h-96 top-1/4 -right-48 opacity-20"
          style={{ 
            background: 'linear-gradient(135deg, #06b6d4, #0ea5e9)',
            animation: 'morph 12s ease-in-out infinite reverse, floatSoft 10s ease-in-out infinite 1s'
          }}
        />
        
        {/* Blob 3 */}
        <div 
          className="blob absolute w-96 h-96 bottom-1/4 left-1/4 opacity-25"
          style={{ 
            background: 'linear-gradient(135deg, #22c55e, #06b6d4)',
            animation: 'morph 15s ease-in-out infinite, floatSoft 12s ease-in-out infinite 2s'
          }}
        />
        
        {/* Blob 4 */}
        <div 
          className="blob absolute w-80 h-80 bottom-0 right-1/4 opacity-20"
          style={{ 
            background: 'linear-gradient(135deg, #0ea5e9, #84cc16)',
            animation: 'morph 11s ease-in-out infinite reverse, floatSoft 9s ease-in-out infinite 3s'
          }}
        />
      </div>

      {/* Grain/Noise Texture Overlay */}
      <div className="fixed inset-0 -z-10 opacity-50 pointer-events-none noise-texture" />
      
      {/* Gradient Mesh */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-white via-atmos-forest-50/30 to-atmos-ocean-50/30 pointer-events-none" />
    </>
  );
}
