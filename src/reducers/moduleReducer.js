// import {CREATE_MODULE} from "../actions/moduleActions";
//
//
// const moduleReducer = (state = {modules: []}, action) => {
//     switch(action.type) {
//         case CREATE_MODULE:
//             return {
//                 modules: [
//                     ...state.modules,
//                     action.module
//                 ]
//             }
//         case "FIND_MODULES_FOR_COURSE":
//             return {
//                 modules: action.modules
//             }
//             break;
//         case "DELETE_MODULE":
//             return {
//                 modules: state.modules.filter(module =>
//                     module._id !== action.moduleId
//                 )
//             }
//             break;
//         default:
//             return state
//     }
// }
//
// export default moduleReducer

import {CREATE_MODULE, FIND_MODULES_FOR_COURSE} from "../actions/moduleActions";



const moduleReducer = (state = {modules: []}, action) => {
    switch(action.type) {
        case CREATE_MODULE:
            return {
                modules: [
                    ...state.modules,
                    action.module
                ]
            }
        case FIND_MODULES_FOR_COURSE:
            return {
                modules: action.modules
            }
            break;
        case "DELETE_MODULE":
            return {
                modules: state.modules.filter(module =>
                    module._id !== action.moduleId
                )
            }
            break;
        default:
            return state
    }
}

export default moduleReducer