import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsPersonVcard } from 'react-icons/bs'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-full flex flex-col items-center bg-gray-100 text-[#343553] py-5">
      <div className="flex-1">
        <h4 className="font-bold text-xl tracking-tight">André Correia</h4>
      </div>

      <h1 className="font-bold text-8xl tracking-wide">Work in progress</h1>

      <div className="flex flex-1 flex-col justify-end items-center">
        <div className="flex flex-col items-center pb-20 text-xl">
          <p>My exciting new website will launch soon</p>
          <p>Come back and check it out.</p>
        </div>
        <div className="flex gap-10">
          <Link
            href="https://www.linkedin.com/in/andrefbcorreia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn cursor="pointer" size={24} />
          </Link>
          <Link
            href="https://github.com/andrefbcorreia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub cursor="pointer" size={24} />
          </Link>
          <Link
            href="https://we.tl/t-O87Ppklx7i"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsPersonVcard cursor="pointer" size={24} />
          </Link>
        </div>
      </div>
    </div>
  )
}
