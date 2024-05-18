import Course from "../Course/Course";

const CourseBooking = ({ courseBooking, creditHour, totalPrice, remainHr }) => {
  return (
    <div className="md:w-1/3 h-1/2 bg-white  py-5 px-4 my-5 rounded">
      <p className="text-blue-500 font-bold mb-3">Credit Hour Remaining {remainHr} hr</p>
      <hr />
      <h1 className="text-xl font-bold mt-4">Course Name:</h1>
      {courseBooking.map((course, idx) => (
        <Course key={idx} course={course}></Course>
      ))}
      <div className="my-5 text-gray-600 ">
        <hr/>
        <p className="mb-4 mt-4 font-bold">Total Credit Hour: {creditHour}</p>
        <hr />
      </div>
      <div className="text-gray-600 font-bold">
        <p>Total Price:  {totalPrice} USD</p>
      </div>
    </div>
  );
};

export default CourseBooking;
