import { Info } from "lucide-react"
import { CustomButton, GameRules, DarkLightModeToggle } from "./"
import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div className="fixed top-0 w-full flex justify-between px-10 py-4 text-md items-center border-b dark:border-white/50 border-black/25 backdrop-blur-md bg-white/5 dark:bg-black/5">
        <CustomButton
          title="Como jogar?"
          containerStyles="bg-amber-600 hover:bg-amber-700 duration-200 px-5 py-.75 rounded-full"
          textStyles="gap-2 text-slate-200"
          rightIcon={<Info size={16} className="text-slate-200" />}
          handleClick={() => setIsOpen(true)}
        />

        <DarkLightModeToggle />
      </div>

    <GameRules isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </div>
  )
}

export default Navbar