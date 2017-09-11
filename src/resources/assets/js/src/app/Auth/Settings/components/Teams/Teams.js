"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_reduxConnect=require("rufUtils/redux-connect"),_reduxConnect2=_interopRequireDefault(_reduxConnect),_http=require("rufUtils/http"),_http2=_interopRequireDefault(_http),_reactstrap=require("reactstrap"),_image=require("rufUtils/image"),_image2=_interopRequireDefault(_image),_DMForm=require("rufUtils/DMForm"),_DMForm2=_interopRequireDefault(_DMForm),_classnames=require("classnames"),_classnames2=_interopRequireDefault(_classnames),_TeamMembers=require("./TeamMembers"),_TeamMembers2=_interopRequireDefault(_TeamMembers),_confirm=require("rufUtils/modals/confirm"),_confirm2=_interopRequireDefault(_confirm),_fontAwesome=require("font-awesome/css/font-awesome.css"),_fontAwesome2=_interopRequireDefault(_fontAwesome),_addNewTeamMember=require("../../../../../../../../../../../../../resources/assets/react-app/uiHooks/addNewTeamMember"),_addNewTeamMember2=_interopRequireDefault(_addNewTeamMember),Teams=function(e){function t(e,a){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a));return r.store=r.context.store,r.state={saving:{},collapse:null,modals:[],activeTab:"1"},r}return _inherits(t,e),_createClass(t,[{key:"componentWillMount",value:function(){if(!this.props.website.multiAccounts||!this.props.website.multiAccounts.label)return void this.props.router.replace("/settings");var e=this.props.router.params.teamTab,t=void 0;"users"==e&&(t="2"),"settings"==e&&(t="3"),t&&(this.setState({activeTab:t}),this.selectTeam(this.props.router.params.team||Object.keys(this.props.user.multiAccounts)[0]))}},{key:"saveTeamMember",value:function(e,t){var a=this;if(_addNewTeamMember2.default)(0,_addNewTeamMember2.default)(e).then(function(){a.saveTeamMember1(e,t)});else{var r=!1;Object.keys(this.props.user.multiAccounts[this.props.user.currentTeam.id].subscribed.products).map(function(e){a.props.user.multiAccounts[a.props.user.currentTeam.id].subscribed.products[e].willChargeForUsers&&(r=!0)}),r?(0,_confirm2.default)({id:"addUser",header:"Add User",message:"When the user confirms their account you will be charged for that user. Do you want to proceed?",confirmButtonText:"Yes",confirmFunc:this.saveTeamMember1.bind(this,e,t)}):this.saveTeamMember1(e,t)}}},{key:"saveTeamMember1",value:function(e,t){var a=this;return _confirm2.default.close("addUser"),t.team=e,_http2.default.post("/data/settings/addTeamMember",t).then(function(e){e.members&&(a.store.dispatch({type:"STORE_TEAM_MEMBERS",users:e.members}),a.store.dispatch({type:"TOASTR",message:[t.first_name+" was invited","User invited",{timeOut:5e3}]}))})}},{key:"stopProp",value:function(e){e.stopPropagation()}},{key:"addTeam",value:function(e){var t=this;return _http2.default.post("/data/settings/addTeam",e).then(function(a){t.store.dispatch({type:"STORE_TEAM",team:a.team}),t.store.dispatch({type:"TOASTR",message:[e.teamName+" was added",t.props.website.multiAccounts.label+" added",{timeOut:5e3}]})})}},{key:"editTeamName",value:function(e,t){var a=this;return t.team=e,_http2.default.put("/data/settings/editTeamName",t).then(function(e){a.store.dispatch({type:"STORE_TEAM",team:e.team}),a.store.dispatch({type:"TOASTR",message:["Name was changed to "+t.teamName,a.props.website.multiAccounts.label+" name changed",{timeOut:5e3}]})})}},{key:"selectTeam",value:function(e){var t=this;e==this.state.collapse&&(e=null),this.setState({collapse:e}),e&&_http2.default.post("/data/settings/getTeamMembers",{team:e}).then(function(e){t.store.dispatch({type:"STORE_TEAM_MEMBERS",users:e.members})})}},{key:"deleteUser",value:function(e,t,a){var r=this.props.user.multiAccounts[t].members[e][a],s=r.first_name;(0,_confirm2.default)({id:"delete"+e+"User",header:"Delete User",message:"Are you sure you want to delete "+s+"?",confirmButtonText:"Yes, delete "+s,confirmFunc:this.deleteUserHttp.bind(this,e,{uid:r.uid,tid:t},a,s)})}},{key:"deleteTeam",value:function(e){var t=this.props.user.multiAccounts[e],a=t.name;(0,_confirm2.default)({id:"deleteTeam",header:"Delete "+this.props.website.multiAccounts.label,message:"Are you sure you want to delete the "+this.props.website.multiAccounts.label+" "+a+"?",confirmButtonText:"Yes, delete "+this.props.website.multiAccounts.label,confirmFunc:this.deleteTeamHttp.bind(this,"/data/settings/deletedTeam",{tid:t.id},e,a)})}},{key:"deleteUserHttp",value:function(e,t,a,r){var s=this,l="/data/settings/deleted"+e.charAt(0).toUpperCase()+e.slice(1)+"User";_http2.default.delete(l,t).then(function(l){_confirm2.default.close("delete"+e+"User"),l.deleted?(s.store.dispatch({type:"DELETE_TEAM_USER",memberType:e,tid:t.tid,id:a}),s.store.dispatch({type:"TOASTR",message:[r+" was deleted","Deleted "+e+" user",{timeOut:5e3}]})):s.store.dispatch({type:"TOASTR",message:["There was an error deleting "+r+" try again","Error",{timeOut:5e3,state:"error"}]})})}},{key:"deleteTeamHttp",value:function(e,t,a,r){var s=this;_http2.default.delete(e,t).then(function(e){_confirm2.default.close("deleteTeam"),e.deleted?(s.store.dispatch({type:"DELETE_TEAM",tid:a}),s.store.dispatch({type:"TOASTR",message:[r+" was deleted","Delete team",{timeOut:5e3}]})):s.store.dispatch({type:"TOASTR",message:["There was an error deleting "+r+" try again","Error",{timeOut:5e3,state:"error"}]})})}},{key:"toggleTAB",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"numberOfTeamsOwned",value:function(){var e=0,t=this.props.user.multiAccounts;return Object.keys(t).map(function(a){t[a].owner&&e++}),e}},{key:"render",value:function(){var e=this,t=this.props.user.multiAccounts;return _react2.default.createElement("div",null,_react2.default.createElement("h3",null,"Add ",this.props.website.multiAccounts.label),_react2.default.createElement(_DMForm2.default,{form:{fields:[{name:"teamName",label:this.props.website.multiAccounts.label+" name",placeHolder:this.props.website.multiAccounts.label+" name",inputType:"text",dataType:"string",errorMessage:"You must enter a "+this.props.website.multiAccounts.label+" name",helpMessage:"Enter the name of the "+this.props.website.multiAccounts.label+" you want to add.",required:!0}],button:{text:"Add "+this.props.website.multiAccounts.label,class:"btn-primary",position:"left"},submit:this.addTeam.bind(e),clearFormAfterSubmit:!0}}),_react2.default.createElement("ul",{className:"list-group"},Object.keys(t).map(function(a,r){var s=t[a];return s.newTeamName||(s.newTeamName=s.name),_react2.default.createElement("li",{className:"list-group-item",key:a,onClick:e.selectTeam.bind(e,a)},_react2.default.createElement("h4",{className:"card-title card-header w-100"},_react2.default.createElement("i",{className:"fa fa-plus"})," ",s.name),_react2.default.createElement(_reactstrap.Collapse,{isOpen:e.state.collapse==a||!e.state.collapse&&0==r,className:"w-100"},_react2.default.createElement("div",{onClick:e.stopProp,className:"mt-1"},e.state.collapse==a&&(255!=s.role?_react2.default.createElement("div",{className:"text-center p-2"},"You need to contact your administrator to make changes to this ",e.props.website.multiAccounts.label,"."):_react2.default.createElement("div",null,_react2.default.createElement(_reactstrap.Nav,{tabs:!0},_react2.default.createElement(_reactstrap.NavItem,null,_react2.default.createElement(_reactstrap.NavLink,{className:(0,_classnames2.default)({active:"1"===e.state.activeTab}),onClick:function(){e.toggleTAB("1")}},e.props.website.multiAccounts.label)),e.props.website.multiAccounts.allowMultiUsers&&_react2.default.createElement(_reactstrap.NavItem,null,_react2.default.createElement(_reactstrap.NavLink,{className:(0,_classnames2.default)({active:"2"===e.state.activeTab}),onClick:function(){e.toggleTAB("2")}},"Users")),_react2.default.createElement(_reactstrap.NavItem,null,_react2.default.createElement(_reactstrap.NavLink,{className:(0,_classnames2.default)({active:"3"===e.state.activeTab}),onClick:function(){e.toggleTAB("3")}},"Settings"))),_react2.default.createElement(_reactstrap.TabContent,{activeTab:e.state.activeTab},_react2.default.createElement(_reactstrap.TabPane,{tabId:"1"},_react2.default.createElement(_reactstrap.Card,{className:"mt-1"},_react2.default.createElement(_reactstrap.CardBlock,null,_react2.default.createElement("h5",{className:"card-title"},"Edit ",e.props.website.multiAccounts.label," name"),_react2.default.createElement(_DMForm2.default,{form:{fields:[{name:"teamName",label:e.props.website.multiAccounts.label+" name",placeHolder:e.props.website.multiAccounts.label+" name",inputType:"text",dataType:"string",errorMessage:"You must enter a "+e.props.website.multiAccounts.label+" name",helpMessage:"",value:s.name,required:!0}],button:{text:"Save "+e.props.website.multiAccounts.label+" name",class:"btn-primary",position:"left"},submit:e.editTeamName.bind(e,a)}}))))),e.props.website.multiAccounts.allowMultiUsers&&_react2.default.createElement(_reactstrap.TabContent,{activeTab:e.state.activeTab},_react2.default.createElement(_reactstrap.TabPane,{tabId:"2"},_react2.default.createElement(_reactstrap.Card,{className:"mt-1"},_react2.default.createElement(_reactstrap.CardBlock,null,_react2.default.createElement("div",null,_react2.default.createElement("h5",{className:"card-title"},"Add user"),_react2.default.createElement(_DMForm2.default,{form:{fields:[{name:"first_name",label:"First name",placeHolder:"First name",inputType:"text",dataType:"string",errorMessage:"You must enter a name",helpMessage:"",required:!0},{name:"email",label:"Email address",placeHolder:"Email address",inputType:"email",dataType:"string",errorMessage:"You must enter a valid email address",helpMessage:"",required:!0},{name:"role",label:"Role",placeHolder:"Role",inputType:"select",dataType:"number",values:s.roles,errorMessage:"You must select a role",helpMessage:"",value:1,required:!0}],button:{text:"Add User",class:"btn-primary",position:"left"},submit:e.saveTeamMember.bind(e,a),clearFormAfterSubmit:!0}}),s.members?_react2.default.createElement("div",null,_react2.default.createElement("table",{className:"table table-hover w-100 mx-auto"},s.members.active&&Object.keys(s.members.active).length&&_react2.default.createElement(_TeamMembers2.default,{members:s.members.active,deleteUser:e.deleteUser.bind(e,"active",a),type:"Active",owner:s.owner}),s.members.invited&&Object.keys(s.members.invited).length>0&&_react2.default.createElement(_TeamMembers2.default,{members:s.members.invited,deleteUser:e.deleteUser.bind(e,"invited",a),type:"Invited"}))):_react2.default.createElement("div",{className:"text-center"},_react2.default.createElement("div",{className:"fa fa-3x fa-cog fa-spin"}))))))),_react2.default.createElement(_reactstrap.TabContent,{activeTab:e.state.activeTab},_react2.default.createElement(_reactstrap.TabPane,{tabId:"3"},_react2.default.createElement(_reactstrap.Card,{className:"mt-1"},_react2.default.createElement(_reactstrap.CardBlock,null,s.owner==e.props.user.id&&e.numberOfTeamsOwned()>1&&_react2.default.createElement("div",{className:"text-center"},_react2.default.createElement("button",{className:"btn btn-danger",onClick:e.deleteTeam.bind(e,a)},"Delete ",e.props.website.multiAccounts.label)))))))))))})))}}]),t}(_react2.default.Component);module.exports=(0,_reduxConnect2.default)(Teams,{user:"user",website:"website",toastr:"toastr"});