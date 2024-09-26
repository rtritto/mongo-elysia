import type { Component, JSXElement } from 'solid-js'

// import { usePageContext } from './usePageContext'

const Link: Component<{
  href: string
  children: JSXElement
}> = (props) => {
  // const pageContext = usePageContext()
  // const isActive = () => props.href === '/'
  //   ? pageContext.urlPathname === props.href
  //   : pageContext.urlPathname.startsWith(props.href)
  // const classNames = () => ['navitem', isActive() ? 'is-active' : null].filter(Boolean).join(' ')
  return (
    <a href={props.href} /* class={classNames()} */ >
      {props.children}
    </a>
  )
}

export default Link