import { useEffect } from "react";
import { useState } from "react";
import CourseDetail from "../CourseDetail/CourseDetail";
import Button from "../Button/Button";

const CourseDetails = ({ handleCourseBook }) => {
  const [courseDetails, setCourseDetails] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  useEffect(() => {
    fetch("fake.json")
      .then((res) => res.json())
      .then((data) => setCourseDetails(data));
  }, []);

  return (
    <>
      <div className="md:w-2/3 mr-10">
        <div className="grid grid-cols-3 gap-5 ">
          {courseDetails.slice(0, showAll ? 9 : 6).map((courseDetail) => (
            <CourseDetail
              key={courseDetail.id}
              courseDetail={courseDetail}
              handleCourseBook={handleCourseBook}
            ></CourseDetail>
          ))}
        </div>
        {!showAll && (
          <p className="text-center" onClick={handleShowAll}>
            <Button>See All</Button>
          </p>
        )}
      </div>
    </>
  );
};

export default CourseDetails;
