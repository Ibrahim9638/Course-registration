import SingleCourse from "../SingleCourse/SingleCourse";

const CourseBooking = ({courseBooking}) => {
    return (
        <div className="md:w-1/3 bg-white  py-5 px-4 my-5 rounded">
           <p className="text-blue-500 font-bold mb-3">Credit Hour Remaining  hr</p>
           <hr />
           <h1 className="text-xl font-bold mt-4">Course Name</h1>
           {
            courseBooking.map((singleCourse, idx)=> <SingleCourse
            key={idx}
            singleCourse={singleCourse}
            ></SingleCourse>)
           } 
        </div>
    );
};

export default CourseBooking;