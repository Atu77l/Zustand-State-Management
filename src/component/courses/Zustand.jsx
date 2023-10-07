import CourseForm from './CoursesForm';
import CourseList from './CourseList';

function Zustand() {
  return (
    <div className="main-container">
      <h1 style={{
        fontSize: "2.5rem",
        marginBottom: "2rem"
      }}> My Course list</h1>
      <CourseForm/>
      <CourseList/>
    </div>
  );
}

export default Zustand;