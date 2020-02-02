import React from 'react'
import CourseCard from '../components/CourseCard.js';

const CourseGrid = ({courses, deleteCourse, showCourseEditor,choosecourse }) =>
<tbody>
<div className="container-fluid">
<div className="card-deck">
{
courses.map(function(course, index) {
                    return <CourseCard
                        showCourseEditor={showCourseEditor}
                        deleteCourse={deleteCourse}
                        key={course._id}
                        course={course}
                        choosecourse={choosecourse}/>


                })
}
</div>
</div>
</tbody>

export default CourseGrid;