import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import {connect} from "react-redux";
import {LESSONS_API_URL, MODULES_LESSONS_API_URL} from "../common/constants";
import {createLesson, deleteLesson} from "../actions/lessonActions.js";
import {updateLesson} from '../service/LessonService.js'
import {withRouter} from "react-router-dom";

class LessonTabs extends React.Component {

    componentDidMount() {
        console.log(this.props)
        //this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}`);
        this.props.findLessonsForModule(this.props.moduleId)
        //alert('122')


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.moduleId !== prevProps.moduleId) {
            //alert('11111')
            this.props.findLessonsForModule(this.props.moduleId)
            //this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}`);
        }

    }

    state = {
        alreadydelete: '',
        selectedLessonId: '',
        editingLessonId: '',
        lesson: {
            title: '',
            _id: ''
        },

    }

    deletefunction(lessonId) {
        this.props.deleteLesson(lessonId)

        this.props.history.push("/")
        console.log(this.props.history)
    }


    render() {
        return (
            <div>
            <h3>Lessons</h3>
            <ul class="list-group">

                <div class="row">
                    {
                        this.props.lessons && this.props.lessons.map(lesson =>
                            <div class="row">
                                <li class="list-group-item list-group-item-success"
                                    onClick={() => {
                                        // this.setState({
                                        //     selectedLessonId: lesson._id
                                        // })
                                        this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${lesson._id}`)
                                    }}
                                    className={this.props.lessonId === lesson._id ? "list-group-item active" : "list-group-item"}
                                    key={lesson._id}>
                                    <a className={`nav-link
                                            ${(this.state.editingLessonId === lesson._id || this.props.lessonId === lesson._id) ? 'active' : ''}`}>
                                        {this.state.editingLessonId !== lesson._id &&
                                        <span>{lesson.title}</span>}
                                        {this.state.editingLessonId === lesson._id &&
                                        <input
                                            onChange={(e) => {
                                                const newTitle = e.target.value
                                                this.setState(prevState => ({
                                                    lesson: {
                                                        ...prevState.lesson,
                                                        title: newTitle
                                                    }
                                                }))
                                            }}
                                            value={this.state.lesson.title}/>}
                                    </a>
                                </li>

                                {
                                    (this.state.editingLessonId === lesson._id || this.props.lessonId === lesson._id) &&
                                    <li className="list-group-item list-group-item-success">
                                        <button type="button" className="btn btn-outline-secondary" onClick={() => {
                                            this.props.updateLesson(this.state.lesson)
                                                .then(() =>
                                                    this.setState({
                                                        editingLessonId: ''
                                                    })
                                                )
                                            //this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}`)
                                            //this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${lesson._id}`)

                                        }
                                        }>
                                            Save
                                        </button>
                                        <button type="button" className="btn btn-outline-secondary" onClick={
                                            () => {
                                                this.deletefunction(lesson._id)
                                                this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}`)
                                            }
                                            //this.props.history.push("/")
                                        }>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                        <button type="button" className="btn btn-outline-secondary" onClick={() => {
                                            this.setState({
                                                lesson: lesson,
                                                editingLessonId: lesson._id
                                            })
                                        }}>
                                            <i className="fa fa-pencil"></i>
                                        </button>
                                    </li>
                                }
                            </div>
                        )
                    }
                    {this.props.moduleId &&
                    <button type="button" className="btn btn-outline-secondary"
                            onClick={() => this.props.addLesson(this.props.moduleId)}>
                        <i className="fa fa-plus-circle"></i>
                    </button>
                    }
                </div>
            </ul>
            </div>
        )
    }
}


const stateToPropertyMapper = (state) => ({
    lessons: state.lessons.lessons
})

const dispatcherToPropertyMapper = (dispatcher) => ({
    findLessonsForModule: moduleId =>
        fetch(MODULES_LESSONS_API_URL(moduleId))
            .then(response => response.json())
            .then(lessons => dispatcher({
                type: 'FIND_LESSONS_FOR_MODULE',
                lessons: lessons
            })),
    updateLesson: async (lesson) => {
        const actualLesson = await updateLesson(lesson)
        dispatcher({
            type: 'UPDATE_LESSON',
            lesson: lesson
            //lessonId: actualLesson._id
        })
    },
    addLesson: (moduleId) =>
        fetch(MODULES_LESSONS_API_URL(moduleId), {
            method: 'POST',
            body: JSON.stringify({title: 'New Lesson'}),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(actualLesson =>
                dispatcher({
                    type: 'CREATE_LESSON',
                    newLesson: actualLesson
                })),
    deleteLesson: (lessonId, props) => {
        fetch(`${LESSONS_API_URL}/${lessonId}`, {
            method: 'DELETE'
        }).then(response => response.json())
            .then(status =>
                dispatcher({
                    type: 'DELETE_LESSON',
                    lessonId: lessonId
                }))

    },
    findAllLessons: () =>
        fetch(LESSONS_API_URL)
            .then(response => response.json())
            .then(lessons =>
                dispatcher({
                    type: 'FIND_ALL_LESSONS',
                    lessons: lessons
                })
            )
})

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
)(LessonTabs)