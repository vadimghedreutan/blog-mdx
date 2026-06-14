"use client"

import { useSyncExternalStore } from "react"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import useSound from "use-sound"

const subscribe = () => () => {}

/** Avoid hydration mismatch without triggering setState-in-effect lint rule. */
const useIsMounted = () =>
	useSyncExternalStore(subscribe, () => true, () => false)

const DarkModeBtn = () => {
	const mounted = useIsMounted()
	const { systemTheme, theme, setTheme } = useTheme()
	// Sound assets must live in /public; path updated from relative ./sound/... form.
	const [play] = useSound("/sound/bubble-sound.mp3", { volume: 0.5 })

	if (!mounted) {
		return null
	}

	const currentTheme = theme === "system" ? systemTheme : theme

	const toggleTheme = () => {
		setTheme(currentTheme === "dark" ? "light" : "dark")
		play()
	}

	return (
		<button
			type="button"
			onClick={toggleTheme}
			aria-label={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
			className="rounded-md p-1 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
		>
			{currentTheme === "dark" ? (
				<SunIcon className="h-6 w-6 cursor-pointer text-yellow-400" />
			) : (
				<MoonIcon className="h-6 w-6 cursor-pointer text-slate-700" />
			)}
		</button>
	)
}

export default DarkModeBtn
