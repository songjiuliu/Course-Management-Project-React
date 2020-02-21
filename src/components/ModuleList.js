import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import {COURSES_MODULES_API_URL, MODULES_API_URL} from "../common/constants";
import moduleService, {findModuleForCourse} from '../service/ModuleService.js'
import {connect} from "react-redux";

import ModuleService from "../service/ModuleService";
import LessonTabs from "./LessonTabs";

let newTitle = ""

const updateModule = (moduleId, newtitle) => {
    fetch(`${MODULES_API_URL}/${moduleId}`, {
        method: 'PUT',
        body: JSON.stringify({title: newtitle}),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

const ModuleList = ({save, edit, editing, module, deleteModule, active, select, updateModule, courseId,history}) =>
    <li class="list-group-item list-group-item-primary"
        onClick={select}
        className={`list-group-item ${active ? 'active' : ''}`}>
        {!editing && module.title}

        {editing &&
        <span>
            <button type="button" class="btn btn-outline-secondary" onClick={() => {
                deleteModule(module._id)
                history.push("/")
            }
            }
            >
                Delete
            </button>
            <input
                onChange={(e) => {
                    newTitle = e.target.value
                }}
            />
            <button type="button" class="btn btn-outline-secondary" onClick={(event) => {
                updateModule({title: newTitle}, module._id)
                //deleteModule("")
                save()
            }
            }>
                Save
            </button>
        </span>}
        {!editing && <button type="button" class="btn btn-outline-dark" onClick={edit}>
            Edit
        </button>}
    </li>


// class ModuleList extends React.Component {
//     state = {
//         editing1: false,
//         moduletitle: "",
//         currentid: "",
//         choosemodule: ""
//
//     }
//
//     componentDidMount() {
//         this.props.findModuleForCourse(this.props.courseId)
//         console.log(this.props.modules)
//
//     }
//
//     onItemClick(event,moduleid) {
//
//         event.currentTarget.style.backgroundColor = '#c63';
//
//
//         this.props.sendmoduleid({id:moduleid})
//         //alert(moduleid)
//         console.log(this.props.moduleforlesson)
//
//     }
//
//     render() {
//         return (
//             <div>
//                 {
//                     this.props.modules && this.props.modules.map(module =>
//                         <li onClick={
//                             // (event) => {
//                             // //this.setState({choosemodule: module._id})
//                             // this.onItemClick(event,module._id)
//                             // //this.props.sendmoduleid(module._id)
//
//                        // }
//                             this.props.select
//
//
//                         } class="list-group-item list-group-item-dark wbdv-module-item" key={module._id}>
//                             <div class="row">
//                                 <div class="col-sm-6 wbdv-module-item-title">
//                                     {console.log(this.props.editing)}
//                                     {console.log(module.title)}
//                                     {this.state.currentid != module._id &&
//                                     module.title
//                                     }
//                                     {
//                                         this.state.editing1 && this.state.currentid == module._id &&
//                                         <input
//                                             onChange={(e) => this.setState({
//                                                 moduletitle: e.target.value
//                                             })}
//                                             value={this.state.moduletitle}/>
//                                     }
//                                 </div>
//                                 <div class="col-sm-2">
//                                     <button class="wbdv-module-item-delete-btn fa fa-trash" onClick={
//                                         () => this.props.deleteModule(module._id)}>
//                                     </button>
//                                 </div>
//                                 <div class="col-sm-2">
//                                     <button className="fa fa-pencil" onClick={() => {
//                                         this.setState({editing1: true, currentid: module._id})
//                                         //this.props.changeediting(this.props.editing)
//
//                                     }}>
//                                     </button>
//                                 </div>
//                                 <div className="col-sm-2">
//                                     <button className="fa fa-check" onClick={() => {
//
//                                         //alert(this.state.courseId)
//                                         this.props.updateModule(module._id, this.state.moduletitle, this.props.courseId)
//                                         //this.props.changeediting(this.props.editing)
//                                         this.setState({editing1: false, currentid: ""})
//
//                                         //this.props.findModuleForCourse(this.props.courseId)
//                                     }}>
//                                     </button>
//                                 </div>
//                             </div>
//                         </li>
//                     )}
//                 <li class="list-group-item list-group-item-dark wbdv-module-item">
//                     <div class="row">
//                         <div class="col-sm-2">
//                             <button class="wbdv-module-item-add-btn"
//                                     onClick={() => this.props.createModule(this.props.courseId)}>
//                                 <i class="fa fa-plus-circle"></i>
//                             </button>
//                         </div>
//                     </div>
//                 </li>
//             </div>
//
//
//         );
//     }
// }

// const stateToPropertyMapper = (state) => {
//
//     return {
//         modules: state.modules.modules,
//         editing: state.modules.editing,
//         moduleforlesson:state.modules.moduleforlesson
//     }
// }
const stateToPropertyMapper = (state) => ({})
const dispatchToPropertyMapper = (dispatch) => ({
    deleteModule: (moduleId) => {
        fetch(`${MODULES_API_URL}/${moduleId}`, {
            method: 'DELETE'
        }).then(response => response.json())
            .then(status => dispatch({
                type: 'DELETE_MODULE',
                moduleId: moduleId
            }))
    },
    updateModule: (module, moduleId) => {
        fetch(`${MODULES_API_URL}/${moduleId}`, {
            method: 'PUT',
            body: JSON.stringify(module),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json()).then(status => {
            dispatch({
                type: 'UPDATE_MODULE',
                moduleId: moduleId,
                module: module
            })
        })


    }
})

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(ModuleList)