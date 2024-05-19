import { useState } from "react";
import "./App.css";
import CourseBooking from "./Components/CourseBooking/CourseBooking";
import CourseDetails from "./Components/CourseDetails/CourseDetails";
import Header from "./Components/Header/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [courseBooking, setCourseBooking] = useState([]);
  const [creditHour, setCreditHour] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [remaining, setRemaining] = useState(20);

  const handleCourseBook = (courseDetail, credit, price) => {
    if (remaining >= 1 && remaining <= 20) {
      const newCourseBooking = [...courseBooking, courseDetail];
      setCourseBooking(newCourseBooking);

      const totalCreditHour = creditHour + credit;
      setCreditHour(totalCreditHour);

      const NewTotalPrice = totalPrice + price;
      setTotalPrice(NewTotalPrice);

      setRemaining(remaining - creditHour);
    } else {
      toast("Credit is over");
    }
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex justify-between mx-12 p-4">
        <CourseDetails handleCourseBook={handleCourseBook}></CourseDetails>
        <CourseBooking
          courseBooking={courseBooking}
          creditHour={creditHour}
          totalPrice={totalPrice}
          remainHr={remaining}
        ></CourseBooking>
        
      </div>
      
      <ToastContainer />
    </>
  );
}

export default App;
