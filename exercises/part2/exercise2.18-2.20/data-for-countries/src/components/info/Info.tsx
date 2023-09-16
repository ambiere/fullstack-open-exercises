import React from 'react'

type InfoPropsType = {
  children: React.ReactNode
  title: string
  style: CSSModuleClasses
}

function Info({ children, title, style }: InfoPropsType) {
  return (
    <div className={style.info}>
      <p>{title}</p>
      {children}
    </div>
  )
}

export default Info

Info.MainContent = ({ children }: { children: React.ReactNode }) => {
  return <h2>{children}</h2>
}

Info.ShowMoreButton = ({ children }: { children: React.ReactNode }) => {
  return <button>{children}</button>
}
