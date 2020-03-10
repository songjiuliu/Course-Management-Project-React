import React from "react";
import {connect} from "react-redux";
import {WIDGETS_API_URL, TOPICS_WIDGETS_API_URL, TOPICS_API_URL} from "../common/constants";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ImageWidget from "./ImageWidget";
import ListWidget from "./ListWidget";

class WidgetList extends React.Component {

    state = {
        widget: {
            title: '',
            size: 1,
            type: 'HEADING',
            id: '',
            text: ''
        },
        editingId: ''
    }
    save = (widget) => {
        this.setState(prevState => {
            return {
                widget: widget,
                editingId: ''
            }
        })
        console.log(widget)
        this.props.updateWidget(widget.id, widget)

    }

    componentDidMount() {
        //console.log(this.props)
        if (this.props.topicId)
            this.props.findWidgetsForTopic(this.props.topicId)
        console.log(this.state.widgets)

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //console.log(this.props)
        if (this.props.topicId !== prevProps.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId)
        }
        console.log(this.state.widgets)
    }

    render() {
        return (

            <ul class="list-group">
                <div>
                {
                    this.props.topicId&&this.props.widgets && this.props.widgets.map(widget =>
                        <li class="list-group-item list-group-item-info" key={widget.id}>
                            {
                                <h3>Heading Widget</h3> && widget.type === "HEADING"
                            }
                            {
                                <h3>Paragraph Widget</h3> && widget.type === "PARAGRAPH"
                            }
                            <button type="button" type="button" class="btn btn-outline-secondary" onClick={() =>
                                this.props.deleteWidget(widget.id)}>
                                <i className="fa fa-times">
                                </i>
                            </button>
                            <button type="button" class="btn btn-outline-secondary" onClick={() =>
                                this.setState({
                                    widget: widget,
                                    editingId: widget.id
                                })}>
                                <i className="fa fa-ellipsis-h"
                                ></i>
                            </button>

                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    save={this.save}
                                    editing={widget.id === this.state.editingId}
                                    widget={widget}/>
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    save={this.save}
                                    editing={widget.id === this.state.editingId}
                                    widget={widget}/>
                            }
                            {
                                widget.type === "IMAGE" &&
                                <ImageWidget
                                    save={this.save}
                                    editing={widget.id === this.state.editingId}
                                    widget={widget}/>
                            }
                            {
                                widget.type === "LIST" &&
                                <ListWidget
                                    save={this.save}
                                    editing={widget.id === this.state.editingId}
                                    widget={widget}/>
                            }
                        </li>
                    )
                }
                </div>
                {this.props.topicId&&
                    <li class="list-group-item list-group-item-info">
                        <button
                            type="button" class="btn btn-info"
                            onClick={() => this.props.addWidget(this.props.topicId)
                            }>
                            <i className="fa fa-plus-circle"> </i>
                        </button>
                    </li>
                }
            </ul>

        )
    }

}


const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets
})

const dispatcherToPropertyMapper = (dispatcher) => ({
    findWidgetsForTopic: topicId =>
        fetch(TOPICS_WIDGETS_API_URL(topicId))
            .then(response => response.json())
            .then(widgets => dispatcher({
                type: 'FIND_WIDGETS_FOR_TOPIC',
                widgets: widgets
            })),
    updateWidget: (wid, widget) =>
        fetch(`http://localhost:8080/api/widgets/${wid}`, {
            method: "PUT",
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(status => dispatcher({
                type: 'UPDATE_WIDGET',
                widget: widget
            })),
    addWidget: (topicId) => {
        //let date = new Date();
        //date = date.getTime() + "";
        fetch(TOPICS_WIDGETS_API_URL(topicId), {
            method: 'POST',
            body: JSON.stringify({
                title: 'New Widget',
                size: 2,
                type: "HEADING",
                text: 'text'
            }),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(actualWidget =>
                dispatcher({
                    type: 'CREATE_WIDGET',
                    newWidget: actualWidget
                }))
    },
    deleteWidget: (widgetId) =>
        fetch(`${WIDGETS_API_URL}/${widgetId}`, {
            method: 'DELETE'
        }).then(response => response.json())
            .then(status =>
                dispatcher({
                    type: 'DELETE_WIDGET',
                    widgetId: widgetId
                })),
    // findAllTopics: () =>
    //    fetch(TOPICS_API_URL)
    //        .then(response => response.json())
    //        .then(topics =>
    //            dispatcher({
    //                type: 'FIND_ALL_TOPICS',
    //                topics: topics
    //            })
    //        )
})

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
)(WidgetList)
