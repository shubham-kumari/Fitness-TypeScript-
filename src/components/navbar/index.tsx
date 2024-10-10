// import React from 'react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import logo from '@/assets/Logo.png'

type Props = {}

const Navbar = (props: Props) => {
  const flexBetween = 'flex items-center justify-between'
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* LEFT SIDE */}
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={logo} alt="logo" />
          </div>
          {/* RIGHT SIDE */}
          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
              <p>Home</p>
              <p>Benifits</p>
              <p>Our Classes</p>
              <p>Conatact Us</p>
            </div>
            <div className={`${flexBetween}`}>
              <p>Sign In</p>
              <button>Become a member</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar