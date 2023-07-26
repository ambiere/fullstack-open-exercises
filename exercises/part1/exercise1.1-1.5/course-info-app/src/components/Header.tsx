type CourseName = {courseName: string}

function Header({courseName}:CourseName) {
  return (
    <div>
        <h1>{courseName}</h1>
    </div>
  )
}

export default Header