import {CREATE_TOPIC, DELETE_TOPIC, UPDATE_TOPIC} from "../actions/topicActions.js";

const initialState = {
    topics: [
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
                    topic.id === action.topicId ? action.topic : topic
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
                topics: state.topics.filter(topic => topic.id !== action.topicId)
            }
        default:
            return state
    }
}

export default topicReducer