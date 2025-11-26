import ScrollFloat from "../ScrollFloat";
import AboutImage from "../../assets/About.jpeg";
import ScrollReveal from "../ScrollReveal";
import TiltedCard from "../TiltedCard";

function About() {
    return (
        <section
            id="about"
            className="mt-[200px] h-screen w-full px-6 md:px-20 py-16 flex flex-col gap-12 md:gap-20 items-center justify-center"
        >
            <div className="w-full text-center">
                <ScrollFloat
                    animationDuration={1}
                    ease="back.inOut(2)"
                    scrollStart="center bottom+=50%"
                    scrollEnd="bottom bottom-=40%"
                    stagger={0.03}
                    textClassName="text-xl"
                >
                    About Korumaru
                </ScrollFloat>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center w-full max-w-6xl">
                <div className="w-full max-w-md mx-auto">
                    {/* <div className="w-full aspect-4/5 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                        <img
                            src={AboutImage}
                            alt="About Korumaru"
                            className="w-full h-full object-cover"
                        />
                    </div> */}
                    <TiltedCard
                        imageSrc={AboutImage}
                        altText="About Korumaru"
                        captionText="About Korumaru"
                        containerHeight="340px"
                        containerWidth="450px"
                        imageHeight="340px"
                        imageWidth="450px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                    />
                </div>
                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={5}
                    blurStrength={10}
                    textClassName="text-sm md:text-base leading-relaxed text-white/80"
                >
                    Roll with Korumaru, the cosmic cat born in market chaos. Calm vibes, infinite memes, and a community built on energy and fun. Join the Korumaru universe and ride the chaos in style.
                </ScrollReveal>
            </div>
        </section>
    );
}

export default About;
