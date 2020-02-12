import {CREATE_LESSON, DELETE_LESSON, UPDATE_LESSON} from "../actions/lessonActions.js";

const initialState = {
    lessons: [
        {title: "Lesson 0000", _id: "000"},
        {title: "Lesson 123", _id: "123"},
        {title: "Lesson 234", _id: "234"},
        {title: "Lesson 345", _id: "345"},
        {title: "Lesson 456", _id: "456"}
    ]
}
const lessonReducer = (state= initialState, action) => {
    switch (action.type) {
        // TODO: move all strings to constants
        case "FIND_LESSONS_FOR_MODULE": {
            //console.log(action.modules)
            return {
                lessons: action.lessons
            }
        }
        case 'UPDATE_LESSON':
            return {
                lessons: state.lessons.map(lesson =>
                    lesson._id === action.lessonId ? action.lesson : lesson
                )
            }
        case "FIND_ALL_LESSONS":
            return {
                lessons: action.lessons
            }
        case CREATE_LESSON:
            return {
                lessons: [
                    ...state.lessons,
                    action.newLesson
                ]
            }
        case DELETE_LESSON:
            return {
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
            }
        default:
            return state
    }
}

    export default lessonReducer