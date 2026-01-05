import LightRays from './LightRays'
import TextPressure from './TextPressure'

const Hero = () => {
  return (
    <div style={{ 
      width: '100%', 
      height: '100vh', // Forces everything to fit in exactly one window height
      position: 'relative',
      background: '#000', 
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start', // Allows us to control top-down spacing
      alignItems: 'center'
    }}>
      {/* 1. Background Layer */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#424242ff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      {/* 2. Content Layer */}
      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        width: '100%',        
        maxWidth: '1200px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        padding: '20vh 20px 20px 20px', // Using vh for padding moves NIVASTU up/down relative to screen size
        textAlign: 'center',
        height: '100%' // Ensures child elements can use flex to stay visible
      }}>
        
        {/* SEO Hidden H1 */}
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: '0' }}>
          Nivastu Interiors - Premium Interior Design Services
        </h1>

        {/* First Line: NIVASTU */}
        <div style={{ 
          width: '70%', 
          maxWidth: '700px',
          display: 'flex',
          alignItems: 'center', 
          justifyContent: 'center',
          paddingBottom: '5px',
          overflow: 'visible'
        }}>
          <TextPressure
            text="NIVASTU"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            minFontSize={32} 
          />
        </div>

        {/* Second Line: INTERIORS */}
        <div style={{ 
          width: '100%', 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '5px'
        }}>
          <span style={{
            color: '#ffffff',
            fontSize: 'clamp(12px, 1.2vw, 16px)', 
            fontWeight: '300',
            letterSpacing: '1.2em', 
            textTransform: 'uppercase',
            fontFamily: 'sans-serif',
            opacity: 0.8,
            marginRight: '-1.2em', 
            textAlign: 'center'
          }}>
            INTERIOR STUDIO
          </span>
        </div>

        {/* 3. Description & Button Layer */}
        <div style={{
          marginTop: '5vh', // Responsive gap
          maxWidth: '650px',
          padding: '0 20px'
        }}>
          <p style={{
            color: '#a1a1a1',
            fontSize: 'clamp(0.9rem, 1.1vw, 1.1rem)',
            lineHeight: '1.6',
            fontWeight: '300',
            fontFamily: 'sans-serif',
            margin: '0 auto'
          }}>
            Transforming spaces into timeless masterpieces. <strong>Nivastu Interiors</strong> provides expert 
            interior design consultancy and residential planning, blending luxury with functionality.
          </p>
          
          <div style={{ marginTop: '30px' }}>
            <button style={{
              background: 'transparent',
              border: '1px solid #ffffff66',
              color: '#fff',
              padding: '12px 32px',
              fontSize: '0.85rem',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              transition: 'all 0.3s ease',
              outline: 'none'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#fff';
              e.target.style.color = '#000';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#fff';
            }}
            >
              Explore Our Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;