import { Switch } from '@headlessui/react'
import { Moon, SunMedium } from 'lucide-react'
import { useState, useEffect } from 'react'

function DarkLightModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkMode", "enabled");
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "disabled");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="flex gap-3 items-center">
      {isDarkMode ? <Moon size={22} className='dark:text-slate-200' /> : <SunMedium size={22} className='text-slate-700' />}
          <Switch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            className={`${isDarkMode ? 'bg-amber-900' : 'bg-amber-600'}
            relative inline-flex h-6 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${isDarkMode ? 'translate-x-4' : 'translate-x-0'}
              pointer-events-none inline-block h-5 w-5 transform rounded-full bg-slate-50 shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </div>
  )
}

export default DarkLightModeToggle