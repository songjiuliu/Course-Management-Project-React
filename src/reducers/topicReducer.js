import {CREATE_TOPIC, DELETE_TOPIC, UPDATE_TOPIC} from "../actions/topicActions.js";

const initialState = {
    lessons: [
        {title: "topic 0000", _id: "000"},
        {title: "topic 123", _id: "123"},
        {title: "topic 234", _id: "234"},
        {title: "topic 345", _id: "345"},
        {title: "topic 456", _id: "456"}
    ]
}
const topicReducer = (state= initialState, action) => {
    switch (action.type) {
        // TODO: move all strings to constants
        case "FIND_TOPICS_FOR_LESSON": {
            //console.log(action.modules)
            return {
                topics: action.topics
            }
        }
        case 'UPDATE_TOPIC':
            return {
                topics: state.topics.map(topic =>
                    topic._id === action.topicId ? action.topic : topic
                )
            }
        case "FIND_ALL_TOPICS":
            return {
                topics: action.topics
            }
        case CREATE_TOPIC:
            return {
                topics: [
                    ...state.topics,
                    action.newTopic
                ]
            }
        case DELETE_TOPIC:
            return {
                topics: state.topics.filter(topic => topic._id !== action.topicId)
            }
        default:
            return state
    }
}

export default topicReducer