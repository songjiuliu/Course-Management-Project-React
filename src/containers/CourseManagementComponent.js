import React from "react";
import CourseTable from './CourseTable.js';
import CourseGrid from './CourseGrid.js';
import {deleteCourse, createCourse, findAllCourses} from "../service/CourseService.js"
import CourseEditor from "./CourseEditor/CourseEditor.js";
var date = new Date()
class CourseManagementComponent extends React.Component {

	state = {
	    choosecourse:'',
		newcoursetitle:'',
		countid:1,
		layout: 'table',
		editingCourse:false,

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

          addCourse = async () =>
          {
              const newCourse = {
                  title: this.state.newcoursetitle,
                  id: 123, owner:"me",modified:"me",time: date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
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
	render(){
		return(
		<div>
		{
            this.state.editingCourse && <CourseEditor hideCourseEditor={this.hideCourseEditor} coursetitle={this.state.choosecourse}/>
        }
		 {!this.state.editingCourse &&
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
		<input onChange={this.updateForm}
        value={this.state.newcoursetitle} className="form-control" placeholder=" New Course Title" />
		<button  onClick= {this.addCourse}  className="btn btn-primary btn-block">
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
				{this.state.layout === 'table' &&
				<td><button class="wbdv-button wbdv-grid-layout" onClick={this.toggle}>
						<i class="fa fa-th"></i>
					</button></td>
					}
				{this.state.layout === 'grid' &&
				<td><button class="wbdv-button wbdv-list-layout" onClick={this.toggle}>
						<i class="fa fa-list"></i>
					</button></td>
					}
			</tr>
		</thead>
	{console.log(this.state.courses) }
	{this.state.layout === 'table' && <CourseTable showCourseEditor={this.showCourseEditor}
    deleteCourse={this.deleteCourse} courses={this.state.courses} choosecourse={this.currentcourse} />}
    {this.state.layout === 'grid' && <CourseGrid showCourseEditor={this.showCourseEditor}
    deleteCourse={this.deleteCourse} courses={this.state.courses} choosecourse={this.currentcourse} />}
	</table>
	<button class="wbdv-button wbdv-add-course">
		<i class="fa fa-plus-circle"></i>
	</button>
	</div>
	}
	</div>)
	}
}
export default CourseManagementComponent