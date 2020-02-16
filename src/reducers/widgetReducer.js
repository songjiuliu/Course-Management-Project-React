//import {CREATE_WIDGET, DELETE_, UPDATE_TOPIC} from "../actions/topicActions.js";

const initialState = {
    widgets: []
}
const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        // TODO: move all strings to constants
        case "FIND_WIDGETS_FOR_TOPIC": {
            //console.log(action.modules)
            return {
                widgets: action.widgets
            }
        }
        case 'UPDATE_WIDGET':

            return {
                widgets: state.widgets.map(widget => widget.id === action.widget.id ? action.widget : widget)
            }

        case "FIND_ALL_WIDGETS":
            return {
                widgets: action.widgets
            }
        case "CREATE_WIDGET":
            return {
                widgets: [
                    ...state.widgets,
                    action.newWidget
                ]
            }
        case "DELETE_WIDGET":
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        default:
            return state
    }
}

export default widgetReducer