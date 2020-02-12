import React from "react"
import {updateCourse} from "../service/CourseService.js";

export default class CourseCard extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        course: this.props.course,
        showCourseEditor: this.props.showCourseEditor,
        choosecourse: this.props.choosecourse
    }

    myshowcourseeditor = () => {
        this.state.showCourseEditor()
        this.state.choosecourse(this.state.course.title)
    }

    render() {
        return (
            <div className="card" styles={{width: '18rem'}}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <h5 className="card-title">
                        {!this.state.editing &&
                        <a href="#" onClick={this.myshowcourseeditor}>
                            {this.state.course.title}
                        </a>
                        }
                        {
                            this.state.editing &&
                            <input
                                onChange={(e) => this.setState({
                                    course: {
                                        ...this.state.course,
                                        title: e.target.value
                                    }
                                })}
                                value={this.state.course.title}/>
                        }</h5>
                    <p className="card-text"><h6>owner:</h6>{this.state.course.owner}</p>
                    <p className="card-text"><h6>time:</h6>{this.state.course.time}</p>
                    <p className="card-text"><h6>last modified:</h6>{this.state.course.modified}</p>
                    <button class="wbdv-row wbdv-button wbdv-delete"
                            onClick={() => this.props.deleteCourse(this.props.course)}>
                        <i class="fa fa-trash"></i></button>
                    <button class="wbdv-button wbdv-list-layout" onClick={() => this.setState({editing: true})}>
                        <i class="fa fa-pencil"></i>
                    </button>
                    <button onClick={(e) => {
                        updateCourse(this.state.course._id, this.state.course).then(status => {
                        })
                        this.setState({
                            editing: false
                        })
                    }}>Save
                    </button>
                </div>
            </div>)
    }

}
