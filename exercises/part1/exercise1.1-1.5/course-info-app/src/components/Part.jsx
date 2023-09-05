function Part({ part: { name, exercises } }) {
  return (
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  )
}

export default Part
