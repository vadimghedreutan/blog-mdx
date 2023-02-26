import Link from "next/link"
import DarkModeBtn from "./ui/DarkModeBtn"

const Header = () => {
	return (
		<header className="py-10 px-5">
			<div className="flex items-center justify-between">
				<Link href="/">
					<h1 className=" font-kasei font-bold text-2xl text-red-600">
						🎧 Build for Mars
					</h1>
				</Link>
				<DarkModeBtn />
			</div>
		</header>
	)
}
export default Header
