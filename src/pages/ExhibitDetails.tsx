import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

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
    image: '/exhibit1.jpg',
  },
  {
    id: 2,
    title: 'Exploring Wind Turbines',
    description:
      'Learn how wind turbines convert air movement into clean energy.',
    image: '/exhibit2.jpg',
  },
  {
    id: 3,
    title: 'Power of Recycling',
    description:
      'Discover how recycling reduces waste and protects natural resources.',
    image: '/exhibit3.jpg',
  },
]

export default function ExhibitDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const exhibitId = Number(id)

  const exhibit = exhibits.find((e) => e.id === exhibitId)
  if (!exhibit) return null

  const [isCompleted, setIsCompleted] = useState(false)

  // Load completion state
  useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem('completedExhibits') || '{}'
    )
    setIsCompleted(!!stored[exhibitId])
  }, [exhibitId])

  const handleToggle = () => {
    const stored = JSON.parse(
      localStorage.getItem('completedExhibits') || '{}'
    )
  
    if (isCompleted) {
      // UN-complete → stay on page
      delete stored[exhibitId]
      localStorage.setItem('completedExhibits', JSON.stringify(stored))
      setIsCompleted(false)
    } else {
      // Complete
      stored[exhibitId] = true
      localStorage.setItem('completedExhibits', JSON.stringify(stored))
      setIsCompleted(true)
  
      const completedCount = Object.keys(stored).length
  
      // ✅ ONLY CHANGE: if this was the last exhibit, go to congratulations
      if (completedCount === exhibits.length) {
        navigate('/congratulations')
      } else {
        navigate('/home')
      }
    }
  }  

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
      {/* 🔮 OUTER GLASS CONTAINER (same as Home) */}
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
          alignSelf: 'flex-start',
        }}
      >
        {/* HEADER */}
        <div
          style={{
            position: 'relative',
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={() => navigate('/home')}
            style={{
              position: 'absolute',
              left: 0,
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              color: '#0a0a0a',
            }}
            aria-label="Back"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
  
          <h2
            style={{
              fontSize: 20,
              fontWeight: 600,
              margin: 0,
              color: '#0a0a0a',
              textAlign: 'center',
            }}
          >
            {exhibit.title}
          </h2>
        </div>
  
        {/* MAIN CARD */}
        <div
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
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: 14,
                margin: 0,
                color: '#555',
                fontWeight: 300,
                lineHeight: 1.5,
              }}
            >
              {exhibit.description}
            </p>
          </div>
        </div>
  
        {/* STEPS */}
        {[1, 2, 3, 4].map((step) => (
          <div
            key={step}
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              padding: 16,
              borderRadius: 8,
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: 12,
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  background: '#f0f0f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 13,
                  fontWeight: 500,
                  color: '#0a0a0a',
                  flexShrink: 0,
                }}
              >
                {step}
              </div>
  
              <p
                style={{
                  fontSize: 14,
                  margin: 0,
                  color: '#555',
                  fontWeight: 300,
                  lineHeight: 1.5,
                }}
              >
                {exhibit.description}
              </p>
            </div>
          </div>
        ))}
  
        {/* ACTION BUTTON */}
        <button
          onClick={handleToggle}
          style={{
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
          {isCompleted ? 'Completed' : 'Complete'}
        </button>
      </div>
    </div>
  )  
}
