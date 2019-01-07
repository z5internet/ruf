"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _redux=require("redux"),_config=require("../../../../../../../../resources/assets/react-app/config"),_config2=_interopRequireDefault(_config),_reducers=require("../../../../../../../../resources/assets/react-app/reducers"),_reducers2=_interopRequireDefault(_reducers),_extend=require("./utils/extend"),_extend2=_interopRequireDefault(_extend),_deepExtend=require("deep-extend"),_deepExtend2=_interopRequireDefault(_deepExtend),_headerFooterHeight=require("./utils/headerFooterHeight"),_headerFooterHeight2=_interopRequireDefault(_headerFooterHeight),combined={},reqc=require.context("../../../../../../",!0,/^\.\/[^\/]*\/src\/resources\/assets\/js\/src\/reducers.js$/);if(_config2.default&&_config2.default.addons)for(var i=0;i<_config2.default.addons.length;i++){var reduc=reqc("./"+_config2.default.addons[i]+"/src/resources/assets/js/src/reducers.js").default;for(var ii in reduc)combined[ii]=reduc[ii]}if(_reducers2.default)for(var _ii in _reducers2.default)combined[_ii]=_reducers2.default[_ii];var user=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case"STORE_USER":return e=(0,_extend2.default)(e,t.user),Object.assign({},e);case"REPLACE_USER":return e=t.user,Object.assign({},e);case"LOGOUT":return{};case"STORE_TEAM":return e.multiAccounts[t.team.id]=t.team,Object.assign({},e);case"DELETE_TEAM":return delete e.multiAccounts[t.tid],Object.assign({},e);case"DELETE_TEAM_USER":return delete e.multiAccounts[t.tid].members[t.memberType][t.id],Object.assign({},e);case"STORE_TEAM_MEMBERS":var r={active:1,invited:1};for(var i in r)for(var s in t.users[i]){var a=t.users[i][s],n=a.tid,d=e.multiAccounts[n];d.members||(d.members={}),d.members[i]||(d.members[i]={}),d.members[i][a.uid]=a}return Object.assign({},e);default:return e}},website=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"STORE_WEBSITE":return Object.assign({},t.website);default:return e}},toastr=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"TOASTR":return t.message.slice(0);default:return e}},modals=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case"addModal":return e[t.modal.id]=t.modal,Object.assign({},e);case"closeModal":return e[t.modal]&&(e[t.modal].close=!0),Object.assign({},e);default:return e}},referrals=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case"saveReferralData":var r=t.data;for(var i in r)"data"!=i&&(e[i]=r[i]);e.data||(e.data=[]);for(var s=0;s<r.data.length;s++)e.data[r.from+s-1]=r.data[s];return Object.assign({},e);default:return e}},uiNotifications=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case"addUiNotifications":return e=(0,_extend2.default)(e,t.data.uiNotifications),Object.assign({},e);case"modifyUiNotifications":return Object.keys(t.data.uiNotifications).map(function(r){Object.keys(e.notifications).map(function(i,s){i==r&&(e.notifications[i]=Object.assign(e.notifications[i],t.data.uiNotifications[r]))})}),Object.assign({},e);default:return e}},users=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case"STORE_FEED":case"STORE_USERS":case"UPDATE_FEED":case"addUiNotifications":case"addUsers":return(0,_deepExtend2.default)(e,t.data.users),Object.assign({},e);default:return e}},usersByUsernames=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case"STORE_FEED":case"addUiNotifications":var r=t.data.users;if(r)for(var i=Object.keys(r),s=0;s<i.length;s++){var a=i[s];r[a]&&(e[r[a].u]=a)}return Object.assign({},e);default:return e}},heightOfInnerInnerWindow=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";switch(arguments[1].type){case"SET_WINDOW_HEIGHT_100":var t=document.getElementById("appRoot");if(!t)return"";var r=window.innerHeight-t.getBoundingClientRect().top-(0,_headerFooterHeight2.default)().footer,i=document.getElementsByTagName("body")[0];return i.style.minHeight="auto",i.style.position="fixed",i.style.width="100vw",r+"px";case"CLEAR_WINDOW_HEIGHT":var s=document.getElementsByTagName("body")[0];return s.style.minHeight="",s.style.position="",s.style.width="","";default:return e}};combined.user=user,combined.users=users,combined.usersByUsernames=usersByUsernames,combined.website=website,combined.toastr=toastr,combined.modals=modals,combined.referrals=referrals,combined.uiNotifications=uiNotifications,combined.heightOfInnerInnerWindow=heightOfInnerInnerWindow;var reducers=(0,_redux.combineReducers)(combined);exports.default=reducers;