//    	import React from "react";
//  //    	import '../../node_modules/bootstrap/dist/css/bootstrap.css'
//  //        import '../../node_modules/font-awesome/css/font-awesome.min.css';
//  //    	const TopicPills = () =>
//  //        <ul class="nav nav-pills wbdv-topic-pill-list">
//  //    				<li class="nav-item wbdv-topic-pill"><a class="nav-link" href="#">Topic 1</a></li>
//  //    				<li class="nav-item wbdv-topic-pill"><a class="nav-link" href="#">Topic 2</a></li>
//  //    				<li class="nav-item wbdv-topic-pill"><a class="nav-link active" href="#">Topic 3</a></li>
//  //    				<li class="nav-item wbdv-topic-pill"><a class="nav-link" href="#">Topic 4</a></li>
//  //    				<li class="nav-item"><a class="nav-link" href="#">
//  //    				<button class="wbdv-button wbdv-topic-add-btn">
//  //    				<i class="fa fa-plus-circle"></i>
//  //    						</button></a></li>
//  //    			</ul>
//  //
//  //
//  //
//  // export default TopicPills
import React from "react";
import {TOPICS_API_URL, LESSONS_TOPICS_API_URL} from "../common/constants";
import {updateTopic} from "../service/TopicService";
import {connect} from "react-redux";

class TopicPills extends React.Component {

    componentDidMount() {
        console.log(this.props)
        this.props.findTopicsForLesson(this.props.lessonId)


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props)
        if (this.props.lessonId !== prevProps.lessonId) {
            this.props.findTopicsForLesson(this.props.lessonId)
        }
    }

    state = {
        selectedTopicId: '',
        editingTopicId: '',
        topic: {
            title: '',
            _id: ''
        }
    }

    render() {
        return (
            <div>
                <h3>topics</h3>
                <ul class="list-group">
                    <div class="row">
                        {
                            this.props.topics && this.props.topics.map(topic =>
                                <div class="row">
                                    <li class="list-group-item list-group-item-primary"
                                        onClick={() => {
                                            this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topic._id}`)
                                            // this.setState({
                                            //     selectedTopicId: topic._id
                                            // })
                                        }}
                                        className={this.props.topicId === topic._id ? "list-group-item active" : "list-group-item"}
                                        key={topic._id}>
                                        <a className={`nav-link
                                            ${(this.state.editingTopicId === topic._id || this.props.topicId === topic._id) ? 'active' : ''}`}>
                                            {this.state.editingTopicId !== topic._id &&
                                            <span>{topic.title}</span>}
                                            {this.state.editingTopicId === topic._id &&
                                            <input
                                                onChange={(e) => {
                                                    const newTitle = e.target.value
                                                    this.setState(prevState => ({
                                                        topic: {
                                                            ...prevState.topic,
                                                            title: newTitle
                                                        }
                                                    }))
                                                }}
                                                value={this.state.topic.title}/>
                                            }</a>
                                    </li>

                                    {
                                        (this.state.editingTopicId === topic._id || this.props.topicId === topic._id) &&
                                        <li class="list-group-item list-group-item-primary">
                                            <button type="button" class="btn btn-outline-secondary" onClick={() => {
                                                this.props.updateTopic(this.state.topic)
                                                    .then(() =>
                                                        this.setState({
                                                            editingTopicId: ''
                                                        })
                                                    )
                                            }
                                            }>
                                                Save
                                            </button>
                                            <button type="button" class="btn btn-outline-secondary" onClick={
                                                () => {
                                                    this.props.deleteTopic(topic._id)
                                                    this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`)
                                                }}>
                                                <i className="fa fa-trash"></i>
                                            </button>
                                            <button type="button" class="btn btn-outline-secondary" onClick={() => {
                                                this.setState({
                                                    topic: topic,
                                                    editingTopicId: topic._id
                                                })
                                            }}>
                                                <i className="fa fa-pencil"></i>
                                            </button>

                                        </li>
                                    }
                                </div>
                            )
                        }
                        {this.props.lessonId &&
                        <li class="list-group-item list-group-item-primary">
                            <button type="button" className="btn btn-outline-secondary"
                                    onClick={() => this.props.addTopic(this.props.lessonId)}>+
                            </button>
                        </li>
                        }
                    </div>
                </ul>
            </div>
        )
    }
}


const stateToPropertyMapper = (state) => ({
    topics: state.topics.topics
})

const dispatcherToPropertyMapper = (dispatcher) => ({
    findTopicsForLesson: lessonId =>
        fetch(LESSONS_TOPICS_API_URL(lessonId))
            .then(response => response.json())
            .then(topics => dispatcher({
                type: 'FIND_TOPICS_FOR_LESSON',
                topics: topics
            })),
    updateTopic: async (topic) => {
        const actualTopic = await updateTopic(topic)
        dispatcher({
            type: 'UPDATE_TOPIC',
            topic: topic,
            topicId: topic._id
        })
    },
    addTopic: (lessonId) =>
        fetch(LESSONS_TOPICS_API_URL(lessonId), {
            method: 'POST',
            body: JSON.stringify({title: 'New Topic'}),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(actualTopic =>
                dispatcher({
                    type: 'CREATE_TOPIC',
                    newTopic: actualTopic
                })),
    deleteTopic: (topicId) =>
        fetch(`${TOPICS_API_URL}/${topicId}`, {
            method: 'DELETE'
        }).then(response => response.json())
            .then(status =>
                dispatcher({
                    type: 'DELETE_TOPIC',
                    topicId: topicId
                })),
    findAllTopics: () =>
        fetch(TOPICS_API_URL)
            .then(response => response.json())
            .then(topics =>
                dispatcher({
                    type: 'FIND_ALL_TOPICS',
                    topics: topics
                })
            )
})

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
)(TopicPills)

