"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function alert(e,t,a){var l=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];(0,_modal2.default)({id:e,header:t||null,body:a?_react2.default.createElement("div",null,a,l&&_react2.default.createElement("div",{className:"text-center mt-2"},_react2.default.createElement("span",{className:"btn btn-primary",onClick:function(){_modal2.default.close(e)}},"Ok"))):null,dontAllowClose:!0,noFooter:!0})}Object.defineProperty(exports,"__esModule",{value:!0});var _react=require("react"),_react2=_interopRequireDefault(_react),_modal=require("./modal"),_modal2=_interopRequireDefault(_modal);exports.default=alert;