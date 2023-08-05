import { CodeBracketSquareIcon, ComputerDesktopIcon, EnvelopeIcon, HomeIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

export const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/tech-stack', label: 'Tech Stack' },
  { href: '/works', label: 'Works' },
  { href: '/contact', label: 'Contact' },
];

export const mobileLinks = [
  { href: '/', label: 'Home', Icon: HomeIcon },
  { href: '/about', label: 'About', Icon: InformationCircleIcon },
  { href: '/tech-stack', label: 'Techs', Icon: CodeBracketSquareIcon },
  { href: '/works', label: 'Works', Icon: ComputerDesktopIcon },
  { href: '/contact', label: 'Contact', Icon: EnvelopeIcon },
]
