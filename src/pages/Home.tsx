import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import exhibit1 from '../assets/exhibit1.jpg'
import exhibit2 from '../assets/exhibit2.jpg'
import exhibit3 from '../assets/exhibit3.jpg'

type Exhibit = {
  id: number
  title: string
  description: string
  image: string
}

const exhibits: Exhibit[] = [
  {
    id: 1,
    title: 'SIM Mateo',
    description:
      'Explore how a mini city balances clean and fossil energy choices.',
    image: exhibit1,
  },
  {
    id: 2,
    title: 'Exploring Wind Turbines',
    description:
      'Learn how wind turbines convert air movement into clean energy.',
    image: exhibit2,
  },
  {
    id: 3,
    title: 'Power of Recycling',
    description:
      'Discover how recycling reduces waste and protects natural resources.',
    image: exhibit3,
  },
]

export default function Home() {
  const navigate = useNavigate()
  const location = useLocation()
  const [completedCount, setCompletedCount] = useState(0)

  useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem('completedExhibits') || '{}'
    )

    const count = Object.keys(stored).length
    setCompletedCount(count)

    const hasShownCongrats =
      localStorage.getItem('hasShownCongrats') === 'true'

    if (count === exhibits.length && !hasShownCongrats) {
      localStorage.setItem('hasShownCongrats', 'true')
      navigate('/congratulations')
    }
  }, [location.pathname, navigate])

  const totalExhibits = exhibits.length
  const progress = completedCount / totalExhibits

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
        alignItems: 'flex-start',
        padding: 24,
      }}
    >
      {/* 🔮 OUTER GLASS CONTAINER */}
      <div
        style={{
          width: '100%',
          maxWidth: 460,
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
  
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
        {/* INTRO */}
        <div style={{ textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 600,
              margin: 0,
              color: '#0a0a0a',
            }}
          >
            Hey explorer!
          </h2>
          <p
            style={{
              marginTop: 12,
              fontSize: 14,
              color: '#555',
            }}
          >
            Complete all exhibits to earn your eco-prize
          </p>
        </div>
  
        {/* PROGRESS */}
        <div
          style={{
            marginTop: -16,
            background: 'rgba(255, 255, 255, 0.95)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            padding: 16,
            borderRadius: 8,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 14,
              fontWeight: 600,
              marginBottom: 8,
              color: '#0a0a0a',
            }}
          >
            <span>Overall Progress</span>
            <span>
              {completedCount}/{totalExhibits}
            </span>
          </div>
  
          <div
            style={{
              height: 8,
              background: '#e3e3e3',
              overflow: 'hidden',
              borderRadius: 4,
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${progress * 100}%`,
                background: '#0a0a0a',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        </div>
  
        {/* EXHIBIT CARDS */}
        {exhibits.map((exhibit) => (
          <div
            key={exhibit.id}
            style={{
                background: 'rgba(255, 255, 255, 0.95)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 8,
            }}
          >
            <img
              src={exhibit.image}
              alt={exhibit.title}
              style={{
                width: '100%',
                height: 180,
                objectFit: 'cover',
              }}
            />
  
            <div
              style={{
                padding: 16,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <h3
                style={{
                  fontSize: 18,
                  margin: 0,
                  fontWeight: 600,
                  color: '#0a0a0a',
                }}
              >
                {exhibit.title}
              </h3>
  
              <p
                style={{
                  fontSize: 14,
                  margin: 0,
                  fontWeight: 300,
                  color: '#555',
                }}
              >
                {exhibit.description}
              </p>
  
              <button
                onClick={() => navigate(`/exhibit/${exhibit.id}`)}
                style={{
                  marginTop: 8,
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
                Try exhibit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
