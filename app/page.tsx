import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsPersonVcard } from 'react-icons/bs'
import Link from 'next/link'

const socialIcons = [
  {
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/andrefbcorreia/',
  },
  {
    icon: FaGithub,
    href: 'https://github.com/andrefbcorreia',
  },
  {
    icon: BsPersonVcard,
    href: 'https://we.tl/t-O87Ppklx7i',
  },
]

export default function Page() {
  return (
    <div className="h-screen flex flex-col items-center bg-gray-100 text-[#343553] py-5">
      <div className="flex-1">
        <h4 className="font-bold text-xl tracking-tight">André Correia</h4>
      </div>

      <h1 className="font-bold text-5xl md:text-6xl lg:text-8xl tracking-wide">
        Work in progress
      </h1>

      <div className="flex flex-1 flex-col justify-end items-center">
        <div className="flex flex-col items-center pb-24 text-sm md:text-lg lg:text-xl">
          <p>My new website will launch soon</p>
          <p>Come back and check it out.</p>
        </div>
        <div className="flex gap-10">
          {socialIcons.map(({ icon: Icon, href }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon cursor="pointer" size={24} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
