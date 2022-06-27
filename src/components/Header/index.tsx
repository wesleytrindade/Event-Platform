import { Logo } from "./Logo";

export function Header() {
  return(
    <header className=" flex py-5 justify-center items-center w-full bg-gray-700 border-b border-gray-600" >
      <Logo/>
    </header>
  )
}
