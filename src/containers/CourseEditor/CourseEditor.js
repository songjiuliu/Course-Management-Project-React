import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import ModuleList from '../../components/ModuleList.js'
import LessonTabs from '../../components/LessonTabs.js'
import WidgetList from '../../components/WidgetList.js'
import TopicPills from '../../components/TopicPills.js'
const CourseEditor = ({hideCourseEditor,coursetitle}) =>
	<div class="row">
    		<ModuleList hideCourseEditor = {hideCourseEditor} coursetitle={coursetitle}/>
    		<div class="col-sm-8">
    		<LessonTabs />
    		<TopicPills />
    		<WidgetList />
    		</div>
    	</div>
export default CourseEditor