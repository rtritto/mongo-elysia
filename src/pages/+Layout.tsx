import type { Component, JSXElement } from 'solid-js'

import '@/layouts/styles.css'
import NavBar from '@/components/NavBar'

export const Layout: Component<{ children: JSXElement }> = (props) => {
  return (
    <div class="container mx-auto max-w-screen-xl px-6">
      <NavBar />

      <main class="relative">
        {props.children}
      </main>
    </div>
  )
}