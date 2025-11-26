import About from '@/components/partials/About'
import Footer from '@/components/partials/footer'
import HeroSection from '@/components/partials/HeroSection'
import Navbar from '@/components/partials/Navbar'
import Roadmap from '@/components/partials/Roadmap'
import Tokenomics from '@/components/partials/Tokenomics'

function HomePage() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <About />
            <Roadmap />
            <Tokenomics />
            <Footer />
        </>
    )
}

export default HomePage