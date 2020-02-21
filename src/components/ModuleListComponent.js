import React from "react";
import ModuleListItem from "./ModuleList.js";

export default class ModuleListComponent extends React.Component {

    componentDidMount() {
        console.log(this.props.courseId)
        this.props.findModulesForCourse(this.props.courseId)
    }

    state = {
        activeModuleId: this.props.moduleId,
        editingModuleId: ''
    }

    render() {
        return (
            <ul class="list-group">
                {
                    this.props.modules && this.props.modules.map(module =>
                        <ModuleListItem
                            key={module._id}
                            edit={() => {
                                const moduleId = module._id
                                this.props.history.push(`/course-editor/${this.props.courseId}/module/${moduleId}`)
                                this.setState({
                                    editingModuleId: module._id
                                })
                            }}
                            select={() => {
                                const moduleId = module._id
                                this.props.history.push(`/course-editor/${this.props.courseId}/module/${moduleId}`)
                                this.setState({
                                    activeModuleId: module._id
                                })
                            }}
                            save={() => {
                                const moduleId = module._id
                                this.props.history.push(`/course-editor/`)
                                this.props.history.push(`/course-editor/${this.props.courseId}/module/${moduleId}`)
                                this.setState({
                                    editingModuleId: ''
                                })
                            }
                            }
                            editing={module._id === this.state.editingModuleId}
                            active={module._id === this.state.activeModuleId}
                            module={module}
                            courseId={this.props.courseId}
                            history={this.props.history}
                        />)
                }
                <li class="list-group-item">
                    <button type="button" class="btn btn-outline-secondary" onClick={
                        () => this.props.createModule(this.props.courseId, {title: 'New Module'})
                    }>
                        Add
                    </button>
                </li>
            </ul>
        );
    }
}