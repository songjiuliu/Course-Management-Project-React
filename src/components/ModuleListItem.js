import React, {Component} from 'react';
import {updateCourse} from "../service/CourseService.js";
import {Link} from "react-router-dom";

export default class ModuleListItem
    extends Component {
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
            <tr class="wbdv-row wbdv-course">
                <td class="wbdv-row wbdv-title">
                    <i
                        class="fas fa-file-alt wbdv-row wbdv-icon"></i>
                    {!this.state.editing &&
                    <Link to={`/course-editor/${this.state.course._id}`}>
                        {this.state.course.title}
                    </Link>
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
                    }</td>
                <td class="wbdv-row wbdv-owner">{this.state.course.owner}</td>
                <td class="wbdv-row wbdv-modified-date">{this.state.course.time}</td>
                <td>{this.state.course.modified}</td>
                <td>
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
                    }}><i class="fa fa-check"> </i></button>
                </td>
                <td></td>
            </tr>
        );
    }
}
