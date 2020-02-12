import CourseTable from '../containers/CourseTable.js';
import CourseGrid from '../containers/CourseGrid.js';
import React from "react";

const CourseListComponent =
    ({
         toggle,
         updateForm,
         newCourseTitle,
         addCourse,
         layout,
         showCourseEditor,
         deleteCourse,
         courses,
         currentcourse
     }) =>
        <div>
            <div class="row">
                <nav class="navbar navbar-light light-blue lighten-4 col-sm-2">
                    <button
                        class="wbdv-field wbdv-hamburger
    			 navbar-toggler toggler-example"
                        type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent1" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="dark-blue-text"><i class="fa fa-bars fa-1x"></i></span>
                    </button>
                </nav>
                <h4 class="col-sm-4 wbdv-label wbdv-course-manager">Course Manager</h4>
                <input onChange={updateForm}
                       value={newCourseTitle} className="form-control" placeholder=" New Course Title"/>
                <button onClick={addCourse} className="btn btn-primary btn-block">
                    <i class="fa fa-plus-circle"></i>
                </button>
            </div>
            <table class="table table-striped">
                <thead class="wbdv-field wbdv-new-course">
                <tr>
                    <td class="wbdv-header wbdv-title">Title</td>
                    <td class="wbdv-header wbdv-owner">Owner
                        <button>
                            <i class="fa fa-sort-up wbdv-header wbdv-sort"></i>
                        </button>
                    </td>
                    <td class="">Date</td>
                    <td class="wbdv-header wbdv-last-modified">Last Modified</td>
                    {layout === 'table' &&
                    <td>
                        <button class="wbdv-button wbdv-grid-layout" onClick={toggle}>
                            <i class="fa fa-th"></i>
                        </button>
                    </td>
                    }
                    {layout === 'grid' &&
                    <td>
                        <button class="wbdv-button wbdv-list-layout" onClick={toggle}>
                            <i class="fa fa-list"></i>
                        </button>
                    </td>
                    }
                </tr>
                </thead>
                {console.log(courses)}
                {layout === 'table' && <CourseTable showCourseEditor={showCourseEditor}
                                                    deleteCourse={deleteCourse} courses={courses}
                                                    choosecourse={currentcourse}/>}
                {layout === 'grid' && <CourseGrid showCourseEditor={showCourseEditor}
                                                  deleteCourse={deleteCourse} courses={courses}
                                                  choosecourse={currentcourse}/>}
            </table>
            <button class="wbdv-button wbdv-add-course">
                <i class="fa fa-plus-circle"></i>
            </button>
        </div>
export default CourseListComponent