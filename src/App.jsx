import './App.css'
import CourseBooking from './Components/CourseBooking/CourseBooking'
import CourseDetails from './Components/CourseDetails/CourseDetails'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
    <Header></Header>
    <div className='md:flex justify-between mx-12 p-4'>
      <CourseDetails></CourseDetails>
      <CourseBooking></CourseBooking>
    </div>
    </>
  )
}

export default App
