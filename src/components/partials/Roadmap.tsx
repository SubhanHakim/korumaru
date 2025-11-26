import ScrollFloat from "../ScrollFloat"
import SpotlightCard from "../SpotlightCard"

const ROADMAP_ITEMS = [
  {
    title: "Cosmic Awakening",
    description: "Korumaru awakens in the digital abyss, gathering a community born from chaos.",
  },
  {
    title: "Stellar Playground",
    description: "Memes, creations, and culture begin shaping the cosmic identity.",
  },
  {
    title: "Astral Evolution",
    description: "Utilities and ideas evolve into real experiences.",
  },
  {
    title: "Infinite Universe",
    description: "An expanding ecosystem powered by community and creativity.",
  }
]

function Roadmap() {
  return (
    <section id="roadmap" className="mt-[100px] h-screen w-full px-6 md:px-20 py-16 flex flex-col gap-12 md:gap-20 items-center justify-center">
      <div className="w-full text-center">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          textClassName="text-xl"
        >
          Roadmap
        </ScrollFloat>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-center w-full max-w-6xl">
        {ROADMAP_ITEMS.map((item, index) => {
          return (
            <SpotlightCard key={index} className="custom-spotlight-card" spotlightColor="rgba(91, 130, 255, 0.25)">
              <div className="flex flex-col gap-6 text-center">

                <h2 className=" text-[0.95rem] md:text-[1.05rem] font-bold uppercase tracking-[0.35em] text-white drop-shadow-[0_0_12px_rgba(91,130,255,0.8)]
    ">
                  {item.title}
                </h2>

                <p className="text-sm md:text-[0.9rem] leading-relaxed text-white/75 max-w-[90%] mx-auto
    ">
                  {item.description}
                </p>

              </div>
            </SpotlightCard>
          )
        })}
      </div>
    </section>
  )
}

export default Roadmap