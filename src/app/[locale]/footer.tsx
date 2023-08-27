import { Codepen, Dribbble, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="flex justify-between items-center border-omniforeground py-6 border-t w-full">
      <small className="text-omniforeground">
        © 2023,{' '}
        <a
          className=" text-omniforeground hover:text-omnicyan"
          href="https://github.com/anacvignola"
        >
          Ana Claudia Vignola
        </a>
      </small>
      <nav className="flex items-center max-w-md">
        <a
          className="flex items-center justify-center p-2 text-omniforeground hover:text-omnicyan"
          href="https://dribbble.com/anacvignola/"
          target="_blank"
        >
          <Dribbble size={20} />
        </a>
        <a
          className="flex items-center justify-center p-2 text-omniforeground hover:text-omnicyan"
          href="mailto:anacvignola@riseup.net"
          target="_blank"
        >
          <Mail size={20} />
        </a>
        <a
          className="flex items-center justify-center p-2 text-omniforeground hover:text-omnicyan"
          href="https://github.com/anacvignola"
          target="_blank"
        >
          <Github size={20} />
        </a>
        <a
          className="flex items-center justify-center p-2 text-omniforeground hover:text-omnicyan"
          href="https://codepen.io/anacvignola"
          target="_blank"
        >
          <Codepen size={20} />
        </a>
        <a
          className="flex items-center justify-center p-2 text-omniforeground hover:text-omnicyan"
          href="https://www.linkedin.com/in/anacvignola"
          target="_blank"
        >
          <Linkedin size={20} />
        </a>
      </nav>
    </footer>
  )
}
