import { useNavigate } from 'react-router-dom'

export default function Congratulations() {
  const navigate = useNavigate()

  return (
    <div
      style={{
        minHeight: '100vh',
        background: `
          radial-gradient(
            900px 500px at 15% 15%,
            rgba(255, 160, 200, 0.45),
            transparent 60%
          ),
          radial-gradient(
            900px 500px at 85% 25%,
            rgba(150, 200, 255, 0.45),
            transparent 60%
          ),
          linear-gradient(
            180deg,
            #faf7fb 0%,
            #f3f6fb 50%,
            #eef4f8 100%
          )
        `,
        fontFamily: "'Josefin Sans', system-ui, sans-serif",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
      }}
    >
      {/* 🎉 GLASS CARD */}
      <div
        style={{
          width: '100%',
          maxWidth: 420,
          padding: 28,
          textAlign: 'center',
  
          background: 'rgba(255, 255, 255, 0.35)',
          backdropFilter: 'blur(32px) saturate(180%)',
          WebkitBackdropFilter: 'blur(32px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.45)',
          boxShadow: `
            0 40px 90px rgba(0, 0, 0, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.6)
          `,
          borderRadius: 16,
        }}
      >
        <h2
          style={{
            marginTop: 0,
            fontSize: 22,
            fontWeight: 600,
            color: '#0a0a0a',
          }}
        >
          Congratulations!
        </h2>
  
        <p
          style={{
            marginTop: 12,
            fontSize: 14,
            color: '#555',
            fontWeight: 300,
            lineHeight: 1.6,
          }}
        >
          You completed all exhibits.
          <br />
          Please reach out to our staff to receive your eco-prize.
        </p>
  
        <button
          onClick={() => navigate('/home')}
          style={{
            marginTop: 16,
            width: '100%',
            padding: '12px 0',
            fontSize: 16,
            fontWeight: 500,
            fontFamily: "'Josefin Sans', system-ui, sans-serif",
            background: '#1c1c1c',
            color: '#ffffff',
            border: 'none',
            boxShadow: '0 6px 18px rgba(0, 0, 0, 0.25)',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          OK
        </button>
      </div>
    </div>
  )
}
