type CourseName = {name: string}

function Header({name}:CourseName) {
  return (
    <div>
        <h1>{name}</h1>
    </div>
  )
}

export default Header