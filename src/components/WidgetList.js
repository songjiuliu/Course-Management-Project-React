import React from "react";
    	import '../../node_modules/bootstrap/dist/css/bootstrap.css'
        import '../../node_modules/font-awesome/css/font-awesome.min.css';
    	const WidgetList = () =>
    	<div>
                <div class="row">
    			<div class="col-sm-8"></div>

    				<button class="col-sm-1">SAVE</button>
    				<h4 class="col-sm-2">PREVIEW</h4>
    				<button class="col-sm-1">
    					<i class="fa fa-toggle-on"></i>
    				</button>

    			</div>
    			<div class="row">
    				<h2 class="col-sm-4">Heading widget</h2>
    				<button class="col-sm-2">
    					<i class="fa fa-chevron-up"></i>
    				</button>
    				<button class="col-sm-2">
    					<i class="fa fa-chevron-down"></i>
    				</button>
    				<select class="col-sm-2">
    					<option value="Heading 1">Heading 1</option>
    					<option value="Heading 2">Heading 2</option>
    					<option value="Heading 3">Heading 3</option>
    				</select>
    				<button class="col-sm-2">
    					<i class="fa fa-window-close"></i>
    				</button>
    			</div>
    			<div class="form-group row">
    				<div class="col-sm-10">
    					<input class="form-control wbdv-field wbdv-username"
    						value="Heading text"/>
    				</div>
    			</div>
    			<div class="form-group row">
    				<div class="col-sm-10">
    					<select class="col-sm-10">
    						<option value="Heading 1">Heading 1</option>
    						<option value="Heading 2">Heading 2</option>
    						<option value="Heading 3">Heading 3</option>
    					</select>
    				</div>
    			</div>
    			<div class="form-group row">
    				<div class="col-sm-10">
    					<input class="form-control wbdv-field wbdv-password"
    						value="Widget Name"/>
    				</div>
    			</div>
    			<h4>Preview</h4>
    			<h2>Heading text</h2>
    			<button class="wbdv-new-page-btn">
    				<i class="fa fa-plus-circle"></i>
    			</button>
</div>
  export default WidgetList