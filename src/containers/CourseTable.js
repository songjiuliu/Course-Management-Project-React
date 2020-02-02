import React from 'react'
import ModuleListItem from '../components/ModuleListItem.js';


const CourseTable = ({courses, deleteCourse, showCourseEditor,choosecourse}) =>
<tbody>
{
//console.log(modules)
courses.map(function(course, index) {
                    return <ModuleListItem
                        showCourseEditor={showCourseEditor}
                        deleteCourse={deleteCourse}
                        key={course._id}
                        course={course}
                        choosecourse={choosecourse}
                        />
                })
                }
</tbody>

export default CourseTable;

