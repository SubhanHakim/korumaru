import CircularGallery from '@/components/CircularGallery'
import About from '@/components/partials/About'
import Footer from '@/components/partials/Footer'
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
            <div style={{ height: '600px', position: 'relative' }}>
                <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
            </div>
            <Footer />
        </>
    )
}

export default HomePage