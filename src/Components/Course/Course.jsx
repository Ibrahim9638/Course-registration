const Course = ({ course}) => {
  const { title} = course;
  return (
    <div>
      <div>
        <h2 className="text-gray-600 my-4 py-4 px-2 rounded bg-slate-200"> {title}</h2>
        
      </div>
    
    </div>
  );
};

export default Course;
