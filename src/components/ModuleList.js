    	import React from "react";
    	import '../../node_modules/bootstrap/dist/css/bootstrap.css'
        import '../../node_modules/font-awesome/css/font-awesome.min.css';
    	const ModuleList = ({hideCourseEditor,coursetitle}) =>
    		<div class="col-sm-4">
    			<ul class="list-group wbdv-module-list">
    				<li class="list-group-item navbar-dark bg-dark"><h4
    						class="navbar-dark bg-dark wbdv-course-title">
    						<button class="navbar-dark bg-dark wbdv-course-editor wbdv-close" onClick={hideCourseEditor}>
    							<i class="fa fa-window-close"></i>
    						</button>
    						{coursetitle}
    					</h4></li>
    				<li class="list-group-item list-group-item-dark wbdv-module-item"><div
    						class="row">
    						<div class="col-sm-10 wbdv-module-item-title">Module 1-jQuery</div>
    						<div class="col-sm-2">
    							<button class="wbdv-module-item-delete-btn">
    								<i class="fa fa-window-close"></i>
    							</button>
    						</div>
    					</div></li>
    				<li class="list-group-item list-group-item-dark active wbdv-module-item"><div
    						class="row">
    						<div class="col-sm-10 wbdv-module-item-title">Module 2-React</div>
    						<div class="col-sm-2">
    							<button class="wbdv-module-item-delete-btn">
    								<i class="fa fa-window-close"></i>
    							</button>
    						</div>
    					</div></li>
    				<li class="list-group-item list-group-item-dark wbdv-module-item"><div
    						class="row">
    						<div class="col-sm-10 wbdv-module-item-title">Module 3-Redux</div>
    						<div class="col-sm-2">
    							<button class="wbdv-module-item-delete-btn">
    								<i class="fa fa-window-close"></i>
    							</button>
    						</div>
    					</div></li>
    				<li class="list-group-item list-group-item-dark wbdv-module-item"><div
    						class="row">
    						<div class="col-sm-10 wbdv-module-item-title">Module 4-Native</div>
    						<div class="col-sm-2">
    							<button class="wbdv-module-item-delete-btn">
    								<i class="fa fa-window-close"></i>
    							</button>
    						</div>
    					</div></li>
    				<li class="list-group-item list-group-item-dark wbdv-module-item"><div
    						class="row">
    						<div class="col-sm-10 wbdv-module-item-title">Module 5-Angular</div>
    						<div class="col-sm-2">
    							<button class="wbdv-module-item-delete-btn">
    								<i class="fa fa-window-close"></i>
    							</button>
    						</div>
    					</div></li>
    				<li class="list-group-item list-group-item-dark wbdv-module-item"><div
    						class="row">
    						<div class="col-sm-10 wbdv-module-item-title">Module 6-Node</div>
    						<div class="col-sm-2">
    							<button class="wbdv-module-item-delete-btn">
    								<i class="fa fa-window-close"></i>
    							</button>
    						</div>
    					</div></li>
    				<li class="list-group-item list-group-item-dark wbdv-module-item"><div
    						class="row">
    						<div class="col-sm-10 wbdv-module-item-title">Module 7-Mongo</div>
    						<div class="col-sm-2">
    							<button class="wbdv-module-item-delete-btn">
    								<i class="fa fa-window-close"></i>
    							</button>
    						</div>
    					</div></li>
    					<li class="list-group-item list-group-item-dark wbdv-module-item"><div
    						class="row">
    						<div class="col-sm-2">
    							<button class="wbdv-module-item-add-btn">
    								<i class="fa fa-plus-circle"></i>
    							</button>
    						</div>
    					</div></li>
    			</ul>
    		</div>
 export default ModuleList