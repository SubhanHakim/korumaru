import Orb from "../Orb"
import korumaruImg from '../../assets/Korumaru.png';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaGlobe, FaSquareXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { useState } from "react";
import { FaRegClipboard } from "react-icons/fa";


function HeroSection() {
    const charRef = useRef<HTMLImageElement | null>(null);

    const contract = "Coming Soon"

    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(contract);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error("Copy failed", err);
        }
    };

    useEffect(() => {
        if (!charRef.current) return;
        const el = charRef.current;

        gsap.to(el, {
            y: -20,
            rotation: 1,
            duration: 3,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            transformOrigin: '50% 50%'
        });

        const onEnter = () => {
            gsap.to(el, {
                scale: 1.06,
                filter: 'drop-shadow(0 30px 70px rgba(91,130,255,0.9))',
                duration: 0.4,
                ease: 'power3.out'
            });
        };

        const onLeave = () => {
            gsap.to(el, {
                scale: 1,
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.45))',
                duration: 0.4,
                ease: 'power3.out'
            });
        };

        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);

        return () => {
            el.removeEventListener('mouseenter', onEnter);
            el.removeEventListener('mouseleave', onLeave);
        };
    }, []);
    return (
        <div style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, zIndex: 2, }}>
                <Orb
                    hoverIntensity={0.5}
                    rotateOnHover={true}
                    hue={0}
                    forceHoverState={false}
                />
            </div>
            <div
                className="hidden md:flex absolute left-24 top-[50%] z-50 flex-col gap-5 transform -translate-y-1/2"
            >
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all ease duration-300 hover:text-[#5b82ff] hover:scale-110 hover:drop-shadow-[0 0 12px rgba(91, 130, 255, 0.8)]"
                >
                    <span aria-hidden="true"
                        className="flex flex-col items-center justify-center leading-10 tracking-widest uppercase text-white font-extrabold"
                    >
                        {Array.from('Korumaru').map((ch, i) => (
                            <span key={i} className="block select-none" style={{ display: 'block' }}>
                                {ch}
                            </span>
                        ))}
                    </span>
                </a>
            </div>
            <div className="absolute md:right-24 md:left-auto md:top-[50%] md:bottom-auto md:translate-x-0 md:-translate-y-1/2 md:flex-col left-1/2 bottom-20 -translate-x-1/2 z-50 flex gap-6">
                <a
                    href="https://t.me/YOUR_TELEGRAM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all ease duration-300 hover:text-[#5b82ff] hover:scale-110 hover:drop-shadow-[0 0 12px rgba(91, 130, 255, 0.8)]"
                >
                    <FaTelegramPlane size={32} />
                </a>
                <a
                    href="https://discord.gg/YOUR_DISCORD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all ease duration-300 hover:text-[#5b82ff] hover:scale-110 hover:drop-shadow-[0 0 12px rgba(91, 130, 255, 0.8)]"
                >
                    <FaSquareXTwitter size={32} />
                </a>
                <a
                    href="https://YOUR_WEBSITE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all ease duration-300 hover:text-[#5b82ff] hover:scale-110 hover:drop-shadow-[0 0 12px rgba(91, 130, 255, 0.8)]"
                >
                    <FaGlobe size={32} />
                </a>
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-auto p-8"
            >
                <img
                    ref={charRef}
                    src={korumaruImg}
                    alt="Korumaru"
                    style={{
                        width: 'clamp(200px, 35vw, 520px)',
                        height: 'auto',
                        display: 'block',
                        objectFit: 'contain',
                        borderRadius: 12,
                        filter: 'drop-shadow(0 35px 80px rgba(91,130,255,1))',
                        cursor: 'pointer',
                        transition: 'filter 0.3s ease'
                    }}
                />
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-60">
                <button
                    onClick={handleCopy}
                    className=" flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-sm tracking-wide transition-all duration-300 hover:bg-[#5b82ff]/30 hover:border-[#5b82ff] active:scale-95
    "
                >
                    {copied ? "Copied!" : `CA: ${contract.slice(0, 6)}...${contract.slice(-4)}`}
                    <FaRegClipboard className="text-lg" />
                </button>
            </div>
        </div>
    )
}

export default HeroSection