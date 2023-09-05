import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

type Parts = { name: string; exercises: number; id: number }
type CourseType = {
  course: {
    id: number
    name: string
    parts: Parts[]
  }[]
}

function Course({ course }: CourseType) {
  return (
    <div>
      {course.map((course) => (
        <div key={crypto.randomUUID()}>
          <Header name={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      ))}
    </div>
  )
}

export default Course
