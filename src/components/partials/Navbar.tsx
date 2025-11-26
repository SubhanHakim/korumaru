import CardNav from '../CardNav';
import logo from '../../assets/Korumaru.png';

const items = [
    {
        label: "About",
        bgColor: "#0D0716",
        textColor: "#fff",
        links: [
            { label: "Company", ariaLabel: "About Company", href: "/company" },
            { label: "Careers", ariaLabel: "About Careers", href: "/careers" }
        ]
    },
    {
        label: "How To Buy",
        bgColor: "#170D27",
        textColor: "#fff",
        links: [
            { label: "Featured", ariaLabel: "Featured Projects", href: "/projects/featured" },
            { label: "Case Studies", ariaLabel: "Project Case Studies", href: "/projects/case-studies" }
        ]
    },
    {
        label: "Explore",
        bgColor: "#271E37",
        textColor: "#fff",
        links: [
            { label: "Roadmap", ariaLabel: "Email us", href: "mailto:hello@example.com" },
            { label: "Tokenomics", ariaLabel: "Twitter", href: "https://twitter.com/your" },
            { label: "Twitter", ariaLabel: "LinkedIn", href: "https://linkedin.com/in/your" }
        ]
    }
];




function Navbar() {
    return (
        <CardNav
            logo={logo}
            logoAlt="Korumaru"
            items={items}
            menuColor="#000"
            buttonBgColor="#111"
            buttonTextColor="#fff"
            ease="power3.out"
            className="w-full bg-transparent"
        />
    );
}

export default Navbar