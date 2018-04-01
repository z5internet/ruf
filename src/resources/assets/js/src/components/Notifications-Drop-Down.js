"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_reduxConnect=require("rufUtils/redux-connect"),_reduxConnect2=_interopRequireDefault(_reduxConnect),_http=require("rufUtils/http"),_http2=_interopRequireDefault(_http),_reactstrap=require("reactstrap"),_reactRouterDom=require("react-router-dom"),_classnames=require("classnames"),_classnames2=_interopRequireDefault(_classnames),_propTypes=require("prop-types"),_propTypes2=_interopRequireDefault(_propTypes);require("./Notifications-Drop-Down.scss");var _RenderNotifications=require("../app/Auth/Notifications/RenderNotifications"),_RenderNotifications2=_interopRequireDefault(_RenderNotifications),_Loading=require("rufUtils/Loading"),_Loading2=_interopRequireDefault(_Loading),Notifications=function(e){function t(e,i){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return n.store=i.store,n.state={dropdownOpen:!1,loaded:!1},n.receivedNotification=n.receivedNotification.bind(n),n.toggle=n.toggle.bind(n),n}return _inherits(t,e),_createClass(t,[{key:"componentDidMount",value:function(){var e=this;this.getData().then(function(){e.addUserChannel()})}},{key:"componentWillUnmount",value:function(){this.unmounted=!0}},{key:"getData",value:function(e){var t=this;return _http2.default.get("/data/uiNotifications").then(function(e){t.store.dispatch({type:"addUiNotifications",data:e}),t.unmounted||t.setState({loaded:!0})})}},{key:"receivedNotification",value:function(e){this.store.dispatch({type:"addUiNotifications",data:e.data})}},{key:"addUserChannel",value:function(){this.context.pusher.private("USER_"+this.props.user.id).listen(".uiNotification",this.receivedNotification)}},{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"getNotificationCount",value:function(){var e=this.props.uiNotifications,t=0;return e.notifications&&e.notifications.map(function(e){e.r||t++}),t}},{key:"render",value:function(){var e=this.getNotificationCount();return _react2.default.createElement(_reactstrap.Dropdown,{nav:!0,isOpen:this.state.dropdownOpen,toggle:this.toggle},_react2.default.createElement(_reactstrap.DropdownToggle,{tag:"a",style:{color:"#fff"},className:"nav-link"},_react2.default.createElement("span",{className:(0,_classnames2.default)(e?"comment-badge":""),"data-count":e},_react2.default.createElement("i",{className:"fa fa-bell fa-inverse"}))),this.state.loaded?_react2.default.createElement(_reactstrap.DropdownMenu,{right:!0,className:"notifications notification_dropdownmenu p-0"},_react2.default.createElement(_reactstrap.DropdownItem,{header:!0},"Notifications"),_react2.default.createElement(_RenderNotifications2.default,{notifications:this.props.uiNotifications.notifications,toggle:this.toggle,tag:"dropdown"}),_react2.default.createElement(_reactstrap.DropdownItem,{header:!0,className:"text-center"},Object.keys(this.props.uiNotifications.notifications).length>0&&_react2.default.createElement(_reactRouterDom.Link,{to:"/notifications",onClick:this.toggle},"See all"))):_react2.default.createElement(_reactstrap.DropdownMenu,{right:!0,className:"notifications notification_dropdownmenu p-3 text-center"},_react2.default.createElement(_Loading2.default,null)))}}]),t}(_react.Component);Notifications.contextTypes={pusher:_propTypes2.default.object},module.exports=(0,_reduxConnect2.default)(Notifications,{user:"user",uiNotifications:"uiNotifications"});