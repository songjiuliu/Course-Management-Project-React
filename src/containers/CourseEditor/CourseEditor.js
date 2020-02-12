// import React from "react";
// import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
// import '../../../node_modules/font-awesome/css/font-awesome.min.css'
// import ModuleList from '../../components/ModuleList.js'
// import LessonTabs from '../../components/LessonTabs.js'
// import WidgetList from '../../components/WidgetList.js'
// import TopicPills from '../../components/TopicPills.js'
// import ModuleListContainer from "../../containers/ModuleListContainer.js";
// import {combineReducers, createStore} from "redux";
// import {Provider} from "react-redux";
import moduleReducer from "../../reducers/moduleReducer";
import lessonReducer from "../../reducers/lessonReducer";
import ModuleListComponent from "../../components/ModuleListComponent";
//
// const rootReducer = combineReducers({
//     modules: moduleReducer,
//     lessons: lessonReducer
// })
//
//
// const gettitlefunc =(courses, title)=>{
//     console.log(courses)
//     let i =0
//  for(i=0; i<courses.length; i++) {
//      if (courses[i]._id == title) {
//          return courses[i].title
//      }
//  }
// return ""
// }
//
// const store = createStore(rootReducer)
// const CourseEditor = ({hideCourseEditor, match, history, courseId, moduleId, lessonId, coursetitle}) =>
//     <Provider store={store}>
//         <div class="row">
//             <div class="col-sm-4">
//                 <ul class="list-group wbdv-module-list">
//                     <li class="list-group-item navbar-dark bg-dark">
//                         <h4
//                             class="navbar-dark bg-dark wbdv-course-title">
//                             <button class="navbar-dark bg-dark wbdv-course-editor wbdv-close"
//                                     onClick={() => history.push("/")}>
//                                 <i class="fa fa-window-close"></i>
//                             </button>
//                         </h4>
//                         {
//                             //gettitlefunc(coursetitle,match.params.courseId)
//
//                         }
//
//
//                     </li>
//
//                     <ModuleListContainer
//                         moduleId={moduleId}
//                         history={history}
//                         courseId={courseId}
//                     />
//                 </ul>
//             </div>
//             <div class="col-sm-8">
//                 <LessonTabs moduleId={moduleId}/>
//                 <TopicPills lessonId={lessonId}
//                             moduleId={moduleId}
//                             courseId={courseId}/>
//                 <WidgetList/>
//
//             </div>
//         </div>
//     </Provider>
// export default CourseEditor
import React from "react";
import ModuleList from "../../components/ModuleListComponent";
import LessonTabs from "../../components/LessonTabs";
import {Link} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import modules from '../../reducers/moduleReducer'
import lessons from '../../reducers/lessonReducer'
import widgets from '../../reducers/widgetReducer'
import ModuleListContainer from "../../containers/ModuleListContainer";
import WidgetList from "../../components/WidgetList";

const reducers = combineReducers({
    modules, lessons, widgets
})

const gettitle = (courses,target) => {
    for(let i =0;i<courses.length;i++){
        if(courses[i]._id==target)
            return courses[i].title
    }
    return ""
}
const store = createStore(reducers)

const CourseEditor = ({hideEditor, match, courseId, moduleId, history,courses}) =>
    <Provider store={store}>
        <div>
            <button onClick={() => {
                history.push("/")
            }}>
                Close
            </button>
            <Link to="/">
                Back
            </Link>
            <h3>Course Editor {gettitle(courses,courseId)}</h3>
            <div className="row">
                <div className="col-3">
                    <ModuleListContainer
                        moduleId={moduleId}
                        history={history}
                        courseId={courseId}/>
                </div>
                <div className="col-9">
                    <LessonTabs
                        moduleId={moduleId}/>
                    {/*<TopicPills/>*/}
                    <WidgetList/>
                </div>
            </div>
        </div>
    </Provider>
export default CourseEditor