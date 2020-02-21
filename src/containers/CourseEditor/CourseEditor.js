import React from "react";
import ModuleList from "../../components/ModuleListComponent";
import LessonTabs from "../../components/LessonTabs";
import {Link} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import modules from '../../reducers/moduleReducer'
import lessons from '../../reducers/lessonReducer'
import widgets from '../../reducers/widgetReducer'
import topics from '../../reducers/topicReducer'

import ModuleListContainer from "../../containers/ModuleListContainer";
import WidgetList from "../../components/WidgetList";
import TopicPills from "../../components/TopicPills";

const reducers = combineReducers({
    modules, lessons, widgets , topics
})

const gettitle = (courses,target) => {
    for(let i =0;i<courses.length;i++){
        if(courses[i]._id==target)
            return courses[i].title
    }
    return ""
}
const store = createStore(reducers)

const CourseEditor = ({hideEditor, match, courseId, moduleId, history,courses,lessonId,topicId}) =>
    <Provider store={store}>
        <div>
            <button type="button" class="btn btn-outline-dark"  onClick={() => {
                history.push("/")
            }}>
                <i className="fa fa-times"></i>
            </button>

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
                        moduleId={moduleId}
                        history={history}
                        courseId={courseId}
                        lessonId={lessonId}
                    />
                    <TopicPills
                        moduleId={moduleId}
                        lessonId={lessonId}
                        history={history}
                        courseId={courseId}
                        topicId={topicId}
                    />
                    <WidgetList
                        topicId={topicId}
                        history={history}
                    />
                </div>
            </div>
        </div>
    </Provider>
export default CourseEditor