"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),_scriptjs=require("scriptjs"),_scriptjs2=_interopRequireDefault(_scriptjs),_livePusher=require("./livePusher"),_livePusher2=_interopRequireDefault(_livePusher),_http=require("./utils/http"),_http2=_interopRequireDefault(_http),_config=require("../../../../../../../../resources/assets/react-app/config"),_config2=_interopRequireDefault(_config),pusher=function(){function e(){_classCallCheck(this,e),this.livePusherChannel=this.livePusherChannel.bind(this),this.livePusherLeave=this.livePusherLeave.bind(this),this.checkIfPusherNeedsStarting=this.checkIfPusherNeedsStarting.bind(this),this.livePusherPrivate=this.livePusherPrivate.bind(this),this.livePusherPresence=this.livePusherPresence.bind(this),this.livePusherListen=this.livePusherListen.bind(this),this.subscribed_channels={},this.cipns=null}return _createClass(e,[{key:"livePusherChannel",value:function(e){return this.livePusherListen("channel",e)}},{key:"livePusherPrivate",value:function(e){return this.livePusherListen("private",e)}},{key:"livePusherPresence",value:function(e){return this.livePusherListen("presence",e)}},{key:"livePusherLeave",value:function(e,t){return this.livePusherListen("leave",e)}},{key:"livePusherListen",value:function(e,t){var i=this;return{action:e,channel:t,whisper:function(e,t){return i.eee(this,e,t,"whisper")},listenForWhisper:function(e,t){return i.eee(this,e,t,"listenForWhisper")},listen:function(e,t){return i.eee(this,e,t,"listen")}}}},{key:"eee",value:function(e,t,i,s){var r=this;return window.reduxStore.getState().website.livePusher.app_id&&(this.cipns?this.cipns.then(function(){r.gotCIPNS(e.action,e.channel,t,i,s)}):this.cipns=this.checkIfPusherNeedsStarting().then(function(){r.gotCIPNS(e.action,e.channel,t,i,s)})),this.livePusherListen(e.action,e.channel)}},{key:"gotCIPNS",value:function(e,t,i,s,r){return this.livepusher[e](t)[r](i,s)}},{key:"saveSocketId",value:function(e){window.reduxStore.dispatch({type:"STORE_USER",user:{socketId:e}})}},{key:"checkIfPusherNeedsStarting",value:function(){var e=this;return new Promise(function(t,i){var s=window.reduxStore.getState(),r=(s.user,s.website),n=!0;if(!e.livepusher){var u="https://api.livepusher.com:6001";(0,_scriptjs2.default)(u+"/livePusher/socket.io.js",function(){e.livepusher=new _livePusher2.default({broadcaster:"socket.io",host:u,path:"/livePusher",auth:{},appId:r.livePusher.app_id,authPrivate:function(e,t){return _http2.default.post("/broadcasting/auth",{socket_id:e,channel_name:t}).then(function(e){return e.auth})}}),t(!0)}),n=!1}n&&t(!0)})}}]),e}(),pus=new pusher;module.exports={channel:pus.livePusherChannel,private:pus.livePusherPrivate,leave:pus.livePusherLeave,presence:pus.livePusherPresence};