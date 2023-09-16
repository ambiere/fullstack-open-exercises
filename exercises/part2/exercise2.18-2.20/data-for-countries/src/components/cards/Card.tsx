type CardPropsType = {
  title: string
  children?: React.ReactNode
  style: CSSModuleClasses
}
function Card({ children, title, style }: CardPropsType) {
  return (
    <div className={style.card}>
      <span>{title}</span>
      {children}
    </div>
  )
}

export default Card

Card.MainContent = ({ children }: { children: React.ReactNode }) => {
  return <h1>{children}</h1>
}
Card.MinorContent = ({ children }: { children: React.ReactNode }) => {
  return <h2>{children}</h2>
}
