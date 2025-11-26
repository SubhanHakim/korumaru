import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import logo from "../../assets/Korumaru.png";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-white/10 bg-black/40 backdrop-blur-xl">
            <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 md:py-10 flex flex-col gap-6">
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
                    <div className="text-center md:text-left space-y-2">
                        <div className="inline-flex items-center gap-3">
                            <div className="w-12">
                                <img src={logo} alt="Korumaru Logo" />
                            </div>
                            <span className="text-lg md:text-xl font-extrabold tracking-[0.35em] uppercase text-white">
                                Korumaru
                            </span>
                        </div>
                        <p className="text-xs md:text-sm text-white/60 max-w-md">
                            The cosmic cat born from chaos. Calm vibes, infinite memes, and a community that rides the storm together.
                        </p>
                    </div>
                    <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-xs md:text-sm text-white/65">
                        <a href="#about" className="hover:text-white hover:underline underline-offset-4 transition-colors">
                            About
                        </a>
                        <a href="#how-to-buy" className="hover:text-white hover:underline underline-offset-4 transition-colors">
                            How to Buy
                        </a>
                        <a href="#roadmap" className="hover:text-white hover:underline underline-offset-4 transition-colors">
                            Roadmap
                        </a>
                        <a href="#tokenomics" className="hover:text-white hover:underline underline-offset-4 transition-colors">
                            Tokenomics
                        </a>
                    </nav>
                    <div className="flex items-center justify-center gap-4">
                        <a
                            href="https://x.com/Korumaru_?s=20"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-white hover:scale-110 transition-transform duration-200"
                        >
                            <FaSquareXTwitter className="text-2xl" />
                        </a>
                        <a
                            href="https://t.me/YOUR_TELEGRAM"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-white hover:scale-110 transition-transform duration-200"
                        >
                            <FaTelegramPlane className="text-2xl" />
                        </a>
                        <a
                            href="https://YOUR_WEBSITE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-white hover:scale-110 transition-transform duration-200"
                        >
                            <FaGlobe className="text-2xl" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-4 border-t border-white/5 text-[11px] md:text-xs text-white/45">
                    <span>© {year} Korumaru. All rights reserved.</span>
                    <span className="text-[10px] md:text-xs">
                        This is a meme coin with no intrinsic value or expectation of financial return.
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
