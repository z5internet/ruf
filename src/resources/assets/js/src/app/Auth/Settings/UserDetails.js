"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_reduxConnect=require("rufUtils/redux-connect"),_reduxConnect2=_interopRequireDefault(_reduxConnect),_http=require("rufUtils/http"),_http2=_interopRequireDefault(_http),_modal=require("rufUtils/modals/modal"),_modal2=_interopRequireDefault(_modal),_DMForm=require("rufUtils/DMForm"),_DMForm2=_interopRequireDefault(_DMForm),_propTypes=require("prop-types"),_propTypes2=_interopRequireDefault(_propTypes),_customUserDetails=require("resources/assets/react-app/uiHooks/customUserDetails"),_customUserDetails2=_interopRequireDefault(_customUserDetails),UserDetails=function(e){function t(e,r){_classCallCheck(this,t);var a=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));return a.store=a.context.store,a}return _inherits(t,e),_createClass(t,[{key:"saveProfile",value:function(e){var t=this;return _http2.default.put("/data/settings",{settings:e}).then(function(r){if(r.user&&r.user.id){var a=e.email;t.props.user.email!=a?(0,_modal2.default)({id:"verify_new_email",header:"Verify",body:_react2.default.createElement("div",{className:"text-center"},"A verification email has been sent to ",a,". Your email will not be changed until you click on the verification link in the email.")}):t.store.dispatch({type:"TOASTR",message:["Your settings have been saved.","Success",{timeOut:5e3}]}),t.store.dispatch({type:"STORE_USER",user:e.user})}})}},{key:"render",value:function(){return _react2.default.createElement("div",null,_react2.default.createElement(_DMForm2.default,{form:{fields:[{name:"first_name",label:"First name",inputType:"text",dataType:"string",errorMessage:"You must enter a first name",helpMessage:"",required:!0,value:this.props.user.first_name},{name:"last_name",label:"Last name",inputType:"text",dataType:"string",errorMessage:"You must enter a last name",helpMessage:"",required:!0,value:this.props.user.last_name},{name:"email",label:"Email address",inputType:"email",dataType:"string",errorMessage:"You must enter a valid email address",helpMessage:"",required:!0,value:this.props.user.email}],button:{text:"Save",class:"btn-primary",position:"left"},submit:this.saveProfile.bind(this)}}),_customUserDetails2.default&&_react2.default.createElement(_customUserDetails2.default,null))}}]),t}(_react2.default.Component);UserDetails.contextTypes={store:_propTypes2.default.object},exports.default=(0,_reduxConnect2.default)(UserDetails,{user:"user",toastr:"toastr"});