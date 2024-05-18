const Course = ({ course }) => {
  const { title} = course;
  return (
    <div>
      <div>
        <h2 className="text-gray-600">{title}</h2>
        
      </div>
    
    </div>
  );
};

export default Course;
