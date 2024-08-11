import { ImageResponse } from 'next/og'
import { Inter } from "next/font/google"

const inter = Inter({
    subsets: ['latin'],
    weight: '700'
})

export const runtime = 'edge'
export const alt = 'Olive Bishop - Software Developer Portfolio'
export const size = {
    width: 1200,
    height: 630
}
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#000000',
                    fontFamily: `${inter.style.fontFamily}, sans-serif`,
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Dynamic background */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(138,96,234,1) 35%)',
                        backgroundSize: '400% 400%',
                        animation: 'gradient 15s ease infinite',
                        opacity: 0.7,
                    }}
                />

                {/* Geometric shapes */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        style={{
                            position: 'absolute',
                            width: `${Math.random() * 50 + 20}px`,
                            height: `${Math.random() * 50 + 20}px`,
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            transform: `rotate(${Math.random() * 360}deg)`,
                            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
                        }}
                    />
                ))}

                {/* Content container */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '2rem',
                        maxWidth: '90%',
                        zIndex: 1,
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        borderRadius: '20px',
                        boxShadow: '0 0 40px rgba(255, 255, 255, 0.1)',
                    }}
                >
                    <h1
                        style={{
                            fontSize: '5.5rem',
                            color: '#FFFFFF',
                            marginBottom: '1rem',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                            letterSpacing: '0.1em',
                            fontWeight: 'bold',
                        }}
                    >
                        OLIVE BISHOP
                    </h1>
                    <p
                        style={{
                            fontSize: '2.6rem',
                            color: '#E2E8F0', 
                            marginBottom: '2rem',
                            maxWidth: '85%',
                            fontWeight: '500',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                        }}
                    >
                        Software Developer - Portfolio
                    </p>
                    <div
                        style={{
                            fontSize: '1.8rem',
                            color: '#FFFFFF', 
                            fontWeight: 'bold',
                            padding: '0.8rem 2rem',
                            background: 'linear-gradient(90deg, #FF3366, #4ECDC4)',
                            borderRadius: '50px',
                            boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                        }}
                    >
                        🌐 olivebishop.vercel.app
                    </div>
                </div>

                {/* Skill icons */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '30px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '20px',
                    }}
                >
                    {['💻', '🎨', '📱', '🚀', '🔧'].map((icon, index) => (
                        <div
                            key={index}
                            style={{
                                fontSize: '2.5rem',
                                color: '#FFFFFF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '60px',
                                height: '60px',
                                borderRadius: '15px',
                                background: 'rgba(255, 255, 255, 0.2)',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                transform: `rotate(${Math.random() * 20 - 10}deg)`,
                            }}
                        >
                            {icon}
                        </div>
                    ))}
                </div>
            </div>
        ),
        {
            ...size
        }
    )
}