import React from "react";
import CourseTable from './CourseTable.js';
import CourseGrid from './CourseGrid.js';

import {deleteCourse, createCourse, findAllCourses, findCourseById, deleteCourse2} from "../service/CourseService.js"
import CourseEditor from "./CourseEditor/CourseEditor.js";
import CourseListComponent from "../components/CourseListComponent.js";


import {BrowserRouter as Router, Route, Link} from "react-router-dom";

var date = new Date()



class CourseManagementComponent extends React.Component {

    state = {
        choosecourse: '',
        newcoursetitle: '',
        countid: 1,
        layout: 'table',
        editingCourse: false,

        courses: []
//	 modules: [
//      {title: 'Module 1 - jQuery', id: 123, owner:"me",modified:"me",time:"9:00"},
//      {title: 'Module 2 - React', id: 234, owner:"me",modified:"me",time:"9:00"},
//      {title: 'Module 3 - Redux', id: 345, owner:"me",modified:"me",time:"9:00"},
//      {title: 'Module 4 - Angular', id: 456, owner:"me",modified:"me",time:"9:00"},
//      {title: 'Module 5 - Node.js', id: 567, owner:"me",modified:"me",time:"9:00"},
//	  {title: 'Module 6 - MongoDB', id: 678, owner:"me",modified:"me",time:"9:00"}]
    };

    componentDidMount = async () => {

        const allCourses = await findAllCourses()
        //alert('1111')
        this.setState({
            courses: allCourses
        })

    }
    currentcourse = (coursetitle) =>
        this.setState({
            choosecourse: coursetitle
        })
    deleteCourse = async (deletedCourse) => {
        const status = await deleteCourse(deletedCourse._id)
        const courses = await findAllCourses()
        this.setState({
            courses: courses
        })
        // this.setState(prevState => ({
        //     courses: prevState.courses.filter(course => course._id !== deletedCourse._id)
        // }))
    }
    showCourseEditor = () =>
        this.setState({
            editingCourse: true
        })


    hideCourseEditor = () =>
        this.setState({
            editingCourse: false
        })

    addCourse = async () => {
        const newCourse = {
            title: this.state.newcoursetitle,
            id: 123,
            owner: "me",
            modified: "me",
            time: date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
        }
        const actualCourse = await createCourse(newCourse)
        console.log(actualCourse)
        const allCourses = await findAllCourses()
        console.log(allCourses)
        this.setState({
            courses: allCourses
        })
        console.log(this.state.courses)
    }
    updateForm = (e) =>
        this.setState({
            newcoursetitle: e.target.value
        })
//	createModule = () => {
//		this.setState(
//			{
//				'modules': [this.state.module, ...this.state.modules]
//			})
//
//		this.setState(
//			(prevState) => {
//      return { countid: prevState.countid + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
//    })
//			//console.log(this.state.countid)
//    }
gettitle = async  (props)=>
{
    const result = await findCourseById(props.match.params.courseId)
    console.log(result)
    return result
}
    hideEditor = () =>
        this.setState({
            showEditor: false
        })

    toggle = () => {
        this.setState((prevState) => {
            if (prevState.layout === 'grid') {
                return {
                    layout: 'table'
                }
            } else {
                return {
                    layout: 'grid'
                }
            }
        })
    }

    render() {
        return (
            <div>

                <Router>

                    <Route
                        path="/course-editor/:courseId"
                        exact={true}
                        render={(props) => {
                            console.log(props)
                            return <CourseEditor {...props}
                                                 courseId={props.match.params.courseId}
                                                 courses={this.state.courses}/>
                        }
                        }/>

                    <Route
                        path="/course-editor/:courseId/module/:moduleId"
                        exact={true}
                        render={(props) =>
                            <CourseEditor
                                {...props}

                                moduleId={props.match.params.moduleId}
                                courseId={props.match.params.courseId}
                                courses={this.state.courses}
                                hideEditor={this.hideEditor}/>
                        }/>
                    <Route
                        path="/course-editor/:courseId/module/:moduleId/lesson/:lessonId"
                        exact={true}
                        render={(props) =>
                            <CourseEditor
                                {...props}
                                lessonId={props.match.params.lessonId}
                                moduleId={props.match.params.moduleId}
                                courseId={props.match.params.courseId}
                                courses={this.state.courses}
                                //topicId={props.match.params.topicId}
                                hideEditor={this.hideEditor}/>
                        }/>


                    <Route
                        path="/"
                        exact={true}
                        render={() =>
                            <CourseListComponent
                                toggle={this.toggle}
                                updateForm={this.updateForm}
                                newCourseTitle={this.state.newcoursetitle}
                                addCourse={this.addCourse}
                                layout={this.state.layout}
                                showCourseEditor={this.showCourseEditor}
                                deleteCourse={this.deleteCourse}
                                courses={this.state.courses}
                                currentcourse={this.currentcourse}
                            />
                        }/>
                </Router>

            </div>)
    }
}

export default CourseManagementComponent