import About from '@/components/partials/About'
import HeroSection from '@/components/partials/HeroSection'
import Navbar from '@/components/partials/Navbar'
import Roadmap from '@/components/partials/Roadmap'

function HomePage() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <About />
            <Roadmap />
        </>
    )
}

export default HomePage