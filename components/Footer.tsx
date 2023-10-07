import { Github, Linkedin } from "lucide-react"

function Footer() {
  return (
    <div className="mt-20 dark:text-slate-400 text-slate-600 px-10 py-4 text-xs flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
            <a href="https://github.com/mariak-fla" target="_blank" className="link drop-shadow-md">
                <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/mariak-fla/" target="_blank" className="link drop-shadow-md">
                <Linkedin size={16} />
            </a>
            &copy; Maria Almeida
        </div>

        <p className="max-w-[35vw]">Baseado no party game <a href="https://www.amazon.com.br/Dont-Get-Got-Edição-2021/dp/B0937J6ZH9" target="_blank" className="italic font-bold link">Don't Get Got</a></p>
    </div>
  )
}

export default Footer