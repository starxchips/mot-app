import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type OnboardingPage = {
  title: string
  description: string
  image: string
}

const pages: OnboardingPage[] = [
  {
    title: 'Learn & Explore',
    description:
      'Discover interactive exhibits that explain sustainability concepts through hands-on exploration.',
    image: '/onboarding1.svg',
  },
  {
    title: 'Take Action',
    description:
      'Engage with real-world actions and challenges that encourage sustainable habits.',
    image: '/onboarding2.svg',
  },
  {
    title: 'Win & Reflect',
    description:
      'Complete all exhibits and reflect on what you learned about our shared future.',
    image: '/onboarding3.svg',
  },
]

export default function Onboarding() {
  const [currentPage, setCurrentPage] = useState(0)
  const navigate = useNavigate()

  const page = pages[currentPage]
  const isLast = currentPage === pages.length - 1

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
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      {/* 🔮 GLASS CONTAINER */}
      <div
        style={{
          width: '100%',
          maxWidth: 420,
          padding: 28,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 20,

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
        <img
  src={page.image}
  alt={page.title}
  style={{
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: 12, // optional, matches glass softness
  }}
/>


        <h1
          style={{
            fontSize: 24,
            fontWeight: 600,
            margin: 0,
            color: '#0a0a0a',
          }}
        >
          {page.title}
        </h1>

        <p
          style={{
            fontSize: 15,
            fontWeight: 300,
            lineHeight: 1.6,
            margin: 0,
            color: '#555',
          }}
        >
          {page.description}
        </p>

        {/* DOTS */}
        <div
          style={{
            display: 'flex',
            gap: 8,
            marginTop: 8,
          }}
        >
          {pages.map((_, index) => (
            <span
              key={index}
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background:
                  index === currentPage ? '#0a0a0a' : '#d0d0d0',
                transition: 'background 0.2s ease',
              }}
            />
          ))}
        </div>

        <button
  onClick={() => {
    if (isLast) {
      navigate('/home')
    } else {
      setCurrentPage((p) => p + 1)
    }
  }}
  style={{
    marginTop: 16,
    width: '100%',            // ✅ FULL WIDTH
    padding: '14px 0',        // ✅ matches Home buttons
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "'Josefin Sans', system-ui, sans-serif",
    background: '#1c1c1c',
    color: '#ffffff',
    border: 'none',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.25)',
    borderRadius: 6,
    cursor: 'pointer',
  }}
>
  {isLast ? 'Start Exploring' : 'Next'}
</button>

      </div>
    </div>
  )
}
