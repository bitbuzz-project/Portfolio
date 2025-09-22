export const navItems = [
  { name: "About", link: "/#about" },
  { name: "Projects", link: "/#projects" },
  { name: "Testimonials", link: "/#testimonials" },
  { name: "Contact", link: "/#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Web3 enthusiast with a passion for blockchain development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building decentralized solutions",
    description: "DeFi & Smart Contracts",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "KnoxFS - Decentralized File Storage",
    des: "Developed smart contracts and frontend website for KnoxFS.com, a decentralized file storage solution on BNB Smart Chain with Web3 integration.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://knoxfs.com",
  },
  {
    id: 2,
    title: "Crypto Trading & Automation Bot",
    des: "Built and deployed a Node.js bot on Base Chain using ethers.js for automated token swaps, balance checks, and price fetching with optimized gas usage.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "#",
  },
  {
    id: 3,
    title: "Ebonds.Finance - DeFi Bonds Platform",
    des: "Contributed to a decentralized bonds protocol enabling fixed-income DeFi investments with front-end integration and smart contract optimization.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://ebonds.finance",
  },
  {
    id: 4,
    title: "Wallet Value Tracker Dashboard",
    des: "Developed a bot that aggregates wallet balances and live token prices using on-chain and API data with USD/ETH conversion and Telegram alerts.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "#",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Harris was exceptional. His deep understanding of blockchain technology and smart contract development delivered outstanding results for our DeFi project. His expertise in Web3 integration and attention to security details made him an invaluable partner.",
    name: "Ahmed Benali",
    title: "CTO of BlockChain Innovations",
  },
  {
    quote:
      "Harris combines technical excellence with practical blockchain solutions. His work on our tokenization project exceeded expectations, demonstrating mastery in Solidity, ethers.js, and DApp development. A true Web3 professional.",
    name: "Sarah El-Mansouri",
    title: "Founder of DeFi Solutions Morocco",
  },
];

export const companies = [
  {
    id: 1,
    name: "ethereum",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "solidity",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "web3",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "nodejs",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "react",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web3 & Blockchain Projects (Freelance)",
    desc: "2018 to 2025 - Developing bots, decentralized applications, and backend services on Base, Ethereum, and Arbitrum networks using Node.js, ethers.js, and Web3 APIs.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "KnoxFS - Lead Developer",
    desc: "Led development of smart contracts and frontend website for decentralized file storage solution on BNB Smart Chain with MetaMask integration.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Ebonds.Finance - Contributor",
    desc: "Contributed to DeFi bonds platform with front-end smart contract integration, UI optimization, and real-time data visualization using The Graph.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Blockchain Automation Specialist",
    desc: "Specialized in trading bots, token swap automation, wallet tracking, and gas optimization across multiple blockchain networks.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/harrisbtbz", // Update with your actual GitHub username
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/harrisbtbz", // Update with your actual Twitter handle
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/harrisbtbz", // Update with your actual LinkedIn profile
  },
];