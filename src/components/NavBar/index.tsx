import type { Component } from 'solid-js'

import NavBarDesktop from './NavBarContent'

const NavBar: Component = () => {
  return (
    <header class="sticky top-0 z-50">
      <nav class="bg-gray-800 text-neutral-content shadow-lg">
        <div class="hidden md:flex">
          <NavBarDesktop />
        </div>

        <div class="md:hidden">
          {/* TODO <NavBarMobile /> */}Mobile
        </div>
      </nav>
    </header>
  )
}

export default NavBar