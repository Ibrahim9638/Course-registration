import { useEffect } from "react";
import { useState } from "react";
import CourseDetail from "../CourseDetail/CourseDetail";

const CourseDetails = () => {
  const [courseDetails, setCourseDetails] = useState([]);

  useEffect(() => {
    fetch("fake.json")
      .then((res) => res.json())
      .then((data) => setCourseDetails(data));
  }, []);
  return (
    <div className="md:w-2/3 mr-10">
      <div className="grid grid-cols-3 gap-5 ">
        {courseDetails.map((courseDetail) => (
          <CourseDetail
            key={courseDetail.id}
            courseDetail={courseDetail}
          ></CourseDetail>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
