import ScrollFloat from '../ScrollFloat'
import SpotlightCard from '../SpotlightCard'

function Tokenomics() {
    return (
        <section id='tokenomics' className="h-screen w-full px-6 md:px-20 py-16 flex flex-col gap-12 md:gap-20 items-center justify-center">
            <div className="w-full text-center">
                <ScrollFloat
                    animationDuration={1}
                    ease="back.inOut(2)"
                    scrollStart="center bottom+=50%"
                    scrollEnd="bottom bottom-=40%"
                    stagger={0.03}
                    textClassName="text-xl"
                >
                    Tokenomics
                </ScrollFloat>
            </div>
            <div className="grid grid-cols-1 gap-4 md:gap-6 items-center w-full max-w-6xl">
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(91, 130, 255, 0.25)">
                    <div className="flex flex-col gap-10 w-full max-w-3xl mx-auto">
                        <div className="grid grid-cols-2 gap-8 text-center">
                            <div className="flex flex-col gap-3">
                                <h2 className=" text-[0.9rem] md:text-[1.1rem] font-extrabold uppercase tracking-[0.4em]text-white drop-shadow-[0_0_14px_rgba(91,130,255,0.9)]">
                                    TAX
                                </h2>
                                <p className=" text-3xl md:text-4xl font-black text-white tracking-wider">
                                    0 / 0
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h2 className="text-[0.9rem] md:text-[1.1rem] font-extrabold uppercase tracking-[0.4em] text-white drop-shadow-[0_0_14px_rgba(91,130,255,0.9)]">
                                    LP
                                </h2>
                                <p className=" text-3xl md:text-4xl font-black text-[#5b82ff] tracking-wider">
                                    BURNT
                                </p>
                            </div>

                        </div>
                        <div className="flex flex-col gap-4 text-center">

                            <h2 className=" text-[1rem] md:text-[1.2rem] font-extrabold uppercase tracking-[0.45em] text-white drop-shadow-[0_0_16px_rgba(139,92,246,0.9)]
    ">
                                Total Supply
                            </h2>

                            <p className=" text-4xl md:text-5xl font-black text-transparent tracking-widest bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text
    ">
                                1,000,000,000
                            </p>

                        </div>

                    </div>

                </SpotlightCard>

            </div>
        </section>
    )
}

export default Tokenomics