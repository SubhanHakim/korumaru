import CardNav from '../CardNav';
import logo from '../../assets/Korumaru.png';

const items = [
    {
        label: "About",
        bgColor: "#0D0716",
        textColor: "#fff",
        links: [
            { label: "About Korumaru", ariaLabel: "About Company", href: "#about" },
        ]
    },
    {
        label: "How To Buy",
        bgColor: "#170D27",
        textColor: "#fff",
        links: [
            { label: "Pump.fun", ariaLabel: "Featured Projects", href: "#" },
        ]
    },
    {
        label: "Explore",
        bgColor: "#271E37",
        textColor: "#fff",
        links: [
            { label: "Roadmap", ariaLabel: "Email us", href: "#roadmap" },
            { label: "Tokenomics", ariaLabel: "Twitter", href: "#tokenomics" },
            { label: "Twitter", ariaLabel: "LinkedIn", href: "https://x.com/Korumaru_?s=20" }
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