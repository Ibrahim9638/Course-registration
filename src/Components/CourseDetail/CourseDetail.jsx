import { FaDollarSign, FaBookOpen } from "react-icons/fa";

const CourseDetail = ({ courseDetail, handleCourseBook }) => {
  const { img, title, course_details, price, credit } = courseDetail;

  return (
    <div className=" bg-white flex flex-col justify-between py-5 px-4 my-5 rounded">
      <img className="w-full mb-3" src={img} alt="" />
      <div className="flex flex-col justify-between">
        <h2 className="text-[18px] font-semibold mb-3">{title}</h2>
        <p className="text-gray-600 text-justify mb-3">{course_details}</p>
      </div>

      <div className="flex flex-col justify-between">
        <div className="flex justify-between mb-3 font-semibold">
          <div className="flex items-center text-gray-600 mb-3">
            <p>Price: {price}</p>
            <span className="text-sm">
              <FaDollarSign />
            </span>
          </div>
          <div className="flex items-center text-gray-600 mb-3">
            <span className="text-sm mr-2">
              <FaBookOpen />
            </span>
            <p>Credit: {credit}</p>
          </div>
        </div>
        <div>
          <button onClick={()=>handleCourseBook(courseDetail, credit, price)} className="bg-blue-500 text-white w-full text-xl p-2 rounded">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
