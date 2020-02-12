    	import React from "react";
    	import '../../node_modules/bootstrap/dist/css/bootstrap.css'
        import '../../node_modules/font-awesome/css/font-awesome.min.css';
    	const TopicPills = () =>
        <ul class="nav nav-pills wbdv-topic-pill-list">
    				<li class="nav-item wbdv-topic-pill"><a class="nav-link" href="#">Topic 1</a></li>
    				<li class="nav-item wbdv-topic-pill"><a class="nav-link" href="#">Topic 2</a></li>
    				<li class="nav-item wbdv-topic-pill"><a class="nav-link active" href="#">Topic 3</a></li>
    				<li class="nav-item wbdv-topic-pill"><a class="nav-link" href="#">Topic 4</a></li>
    				<li class="nav-item"><a class="nav-link" href="#">
    				<button class="wbdv-button wbdv-topic-add-btn">
    				<i class="fa fa-plus-circle"></i>
    						</button></a></li>
    			</ul>



 export default TopicPills