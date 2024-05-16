import { useState } from 'react'
import './App.css'
import CourseBooking from './Components/CourseBooking/CourseBooking'
import CourseDetails from './Components/CourseDetails/CourseDetails'
import Header from './Components/Header/Header'

function App() {
  const [courseBooking, setCourseBooking] = useState([]);

  const handleCourseBook = courseDetail =>{
    const newCourseBooking = [...courseBooking, courseDetail];
    setCourseBooking(newCourseBooking);
  }

  return (
    <>
    <Header></Header>
    <div className='md:flex justify-between mx-12 p-4'>
      <CourseDetails handleCourseBook={handleCourseBook}></CourseDetails>
      <CourseBooking courseBooking={courseBooking}></CourseBooking>
    </div>
    </>
  )
}

export default App
