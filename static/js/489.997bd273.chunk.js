"use strict";(self.webpackChunkdata_intell=self.webpackChunkdata_intell||[]).push([[489],{13524:function(e,t,a){var n=a(43144),s=a(15671),l=(0,n.Z)((function e(){(0,s.Z)(this,e)}));l.BASE_URL="https://insightbackendservice.azurewebsites.net/api/";var r=(0,n.Z)((function e(){(0,s.Z)(this,e)}));r.ADMIN_SIGN_UP_URL=l.BASE_URL+"users/create_account",r.ADMIN_LOGIN_URL=l.BASE_URL+"users/login",r.ADD_NEW_CLIENT_URL=l.BASE_URL+"users/client/register",r.CLIENT_ADMIN_SIGN_UP_URL=l.BASE_URL+"users/client/create_account",r.CLIENT_ADMIN_LOGIN_URL=l.BASE_URL+"users/clientAdmin/login",r.GET_ALL_CLIENTS_URL=l.BASE_URL+"users/clients",r.GET_ALL_APP_CLIENTS_URL=l.BASE_URL+"users/clients_only",r.DELETE_CLIENT_INFO_URL=l.BASE_URL+"users/delete/clientInfo",r.GET_CLIENT_REPORTS_URL=l.BASE_URL+"users/client/reports",r.ADD_CLIENT_USER_URL=l.BASE_URL+"users/clientUser/register",r.UPDATE_CLIENT_INFO_URL=l.BASE_URL+"users/update/clientInfo",r.UPDATE_CLIENT_USER_INFO_URL=l.BASE_URL+"users/update/clientUsersInfo",r.DELETE_CLIENT_USER_INFO_URL=l.BASE_URL+"users/clientUser/deleteInfo",r.GET_ALL_CLIENT_USERS_URL=l.BASE_URL+"users/clientUsers",r.ASSIGN_REPORTS_TO_USERS_URL=l.BASE_URL+"users/client_reports/assignReports",r.GET_ALL_ASIGNED_REPORTS_URL=l.BASE_URL+"users/client_reports/assignments",r.DELETE_ASSIGNMENT_INFO_URL=l.BASE_URL+"users/client_reports/assignments/deleteInfo",r.ACCESS_TOKEN_URL=l.BASE_URL+"users/accessToken",r.GET_ALL_INTEL_ADMINS_URL=l.BASE_URL+"users/intelAdmins",r.CHANGE_PASSWORD=l.BASE_URL+"users/intelAdmin/change_password/",r.FORGOT_PASSWORD_URL=l.BASE_URL+"users/intelAdmin/forgot_password",r.RESET_PASSWORD_URL=l.BASE_URL+"users/intelAdmin/reset_password",t.Z=r},99375:function(e,t,a){var n=a(43144),s=a(15671),l=a(30456),r=localStorage.IntellUserToken,c=(0,l.Z)(r),o=c.client_id,i=c.email,m=c.id,d=c.username,E=c.user_status,u=c.user_type,h=(0,n.Z)((function e(){(0,s.Z)(this,e)}));h.UserEmail=i,h.UserId=m,h.UserName=d,h.UserType=u,h.UserStatus=E,h.ClientId=o,t.Z=h},59489:function(e,t,a){a.r(t),a.d(t,{default:function(){return B}});var n=a(45987),s=a(15671),l=a(43144),r=a(60136),c=a(48347),o=a(72791),i=a(91523),m=a(79271),d=a(47976),E=a(55146),u=a(22761),h=a(20387),_=a(57493),N=a(52919),p=a(75662),L=a(63455);a.p;var v=a(30456),Z=a(4942),S=a(97326),g=a(49196),w=a(37345),U=a(66919),f=a(27988),R=a(73002),A=a(54555),k=a(13524),I=(a(91820),function(e){(0,r.Z)(a,e);var t=(0,c.Z)(a);function a(e){var n;return(0,s.Z)(this,a),(n=t.call(this,e)).state={id:"",old_password:"",new_password:"",token:"",email:"",message:"",isLoaded:!1},n.handleUpdateItem=n.handleUpdateItem.bind((0,S.Z)(n)),n.onChange=n.onChange.bind((0,S.Z)(n)),n}return(0,l.Z)(a,[{key:"componentDidMount",value:function(){var e=localStorage.IntellUserToken,t=(0,v.Z)(e);this.setState({id:t.id,email:t.email})}},{key:"onChange",value:function(e){this.setState((0,Z.Z)({},e.target.name,e.target.value))}},{key:"handleUpdateItem",value:function(e){var t=this;e.preventDefault();var a={old_password:this.state.old_password,new_password:this.state.new_password,email:this.state.email};fetch(k.Z.CHANGE_PASSWORD+"".concat(this.state.id),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){t.setState({message:e.message,isLoaded:!0}),console.log([t.state.message])}),(function(e){t.setState({message:"Failed.. Try again!!"})}));this.state.isLoaded}},{key:"render",value:function(){var e=this.state;e.regions,e.handleUpdateItem;return o.createElement(g.Z,Object.assign({},this.props,{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),o.createElement(g.Z.Header,{closeButton:!0},o.createElement(g.Z.Title,{id:"contained-modal-title-vcenter"},o.createElement("h5",null,"Change Account Password"))),o.createElement(g.Z.Body,null,o.createElement(U.Z,{row:!0,className:"my-0"},o.createElement(f.Z,{xs:"12"},o.createElement(U.Z,null,o.createElement(R.Z,{htmlFor:"old_password",className:"lable"},"Current Password"),o.createElement(A.Z,{type:"text",name:"old_password",placeholder:"Enter New Password",value:this.state.old_password,onChange:this.onChange}))),o.createElement(f.Z,{xs:"12"},o.createElement(U.Z,null,o.createElement(R.Z,{htmlFor:"new_password",className:"lable"},"New Password"),o.createElement(A.Z,{type:"text",name:"new_password",value:this.state.new_password,onChange:this.onChange,placeholder:"Enter New Password"})))),o.createElement("hr",null),o.createElement("h6",null,o.createElement("span",{className:"error-msg"},this.state.message))),o.createElement(g.Z.Footer,null,o.createElement("div",{className:"d-inline"},o.createElement(w.Z,{block:!0,color:"danger",size:"sm",className:"btn-pill bg-danger",onClick:this.props.onHide},"Close")),o.createElement("div",{className:"d-inline"},o.createElement(w.Z,{block:!0,color:"success",size:"sm",className:"btn-pill bg-success",onClick:this.handleUpdateItem},"Save"))))}}]),a}(o.Component)),C=a(99375),T=["children"],b=function(e){(0,r.Z)(a,e);var t=(0,c.Z)(a);function a(e){var n;return(0,s.Z)(this,a),(n=t.call(this,e)).state={username:"",email:"",token:"",passwordModalShow:!1},n}return(0,l.Z)(a,[{key:"componentDidMount",value:function(){var e=localStorage.IntellUserToken;if(e){var t=(0,v.Z)(e);this.setState({username:t.username,email:t.email})}else this.props.history.push("/login")}},{key:"logOut",value:function(e){e.preventDefault(),localStorage.removeItem("IntellUserToken"),this.props.history.push("/login")}},{key:"render",value:function(){var e=this,t=function(){return e.setState({passwordModalShow:!1})},a=this.props;a.children,(0,n.Z)(a,T),this.state.username;return"IntellAdmin"==C.Z.UserType?o.createElement(o.Fragment,null,o.createElement(p.NB,{className:"d-lg-none",display:"md",mobile:!0}),o.createElement(p.wv,{full:{src:L,width:150,height:54,alt:"G-paid Logo"}}),o.createElement(p.NB,{className:"d-md-down-none",display:"lg"}),o.createElement(d.Z,{className:"d-md-down-none",navbar:!0},o.createElement(E.Z,{className:"px-3"},o.createElement(i.NavLink,{to:"/dashboard",className:"nav-link"},"Dashboard")),o.createElement(E.Z,{className:"px-3"},o.createElement(i.Link,{to:"/clients",className:"nav-link"},o.createElement("i",{className:"icon-diamond"}," Clients"))),o.createElement(u.Z,{nav:!0,direction:"down"},o.createElement(h.Z,{nav:!0},o.createElement(E.Z,{className:"px-3"},o.createElement(i.NavLink,{to:"#",className:"nav-link fa fa-wrench"}," Settings"))),o.createElement(_.Z,{right:!0},o.createElement(N.Z,{onClick:function(){return e.setState({passwordModalShow:!0})}},o.createElement("i",{className:"fa fa-shield"})," Change Password"),o.createElement(N.Z,{onClick:this.logOut.bind(this)},o.createElement("i",{className:"fa fa-lock"})," Logout")))),o.createElement(d.Z,{className:"ml-auto",navbar:!0},o.createElement(u.Z,{nav:!0,direction:"down"},o.createElement(h.Z,{nav:!0},o.createElement(E.Z,{className:"d-md-down-none"},o.createElement(i.NavLink,{to:"#",className:"nav-link fa fa-user"}," ",this.state.username))))),o.createElement("div",{className:"right-coner"}),o.createElement(I,{show:this.state.passwordModalShow,onHide:t})):"ClientAdmin"==C.Z.UserType?o.createElement(o.Fragment,null,o.createElement(p.NB,{className:"d-lg-none",display:"md",mobile:!0}),o.createElement(p.wv,{full:{src:L,width:150,height:54,alt:"G-paid Logo"}}),o.createElement(p.NB,{className:"d-md-down-none",display:"lg"}),o.createElement(d.Z,{className:"d-md-down-none",navbar:!0},o.createElement(E.Z,{className:"px-3"},o.createElement(i.NavLink,{to:"/dashboard",className:"nav-link"},"Dashboard")),o.createElement(E.Z,{className:"px-3"},o.createElement(i.Link,{to:"/users",className:"nav-link"},o.createElement("i",{className:"icon-people"}," Users"))),o.createElement(E.Z,{className:"px-3"},o.createElement(i.Link,{to:"/assignments",className:"nav-link"},o.createElement("i",{className:"icon-note"}," Assignments"))),o.createElement(u.Z,{nav:!0,direction:"down"},o.createElement(h.Z,{nav:!0},o.createElement(E.Z,{className:"px-3"},o.createElement(i.NavLink,{to:"#",className:"nav-link fa fa-wrench"}," Settings"))),o.createElement(_.Z,{right:!0},o.createElement(N.Z,{onClick:function(){return e.setState({passwordModalShow:!0})}},o.createElement("i",{className:"fa fa-shield"})," Change Password"),o.createElement(N.Z,{onClick:this.logOut.bind(this)},o.createElement("i",{className:"fa fa-lock"})," Logout")))),o.createElement(d.Z,{className:"ml-auto",navbar:!0},o.createElement(u.Z,{nav:!0,direction:"down"},o.createElement(h.Z,{nav:!0},o.createElement(E.Z,{className:"d-md-down-none"},o.createElement(i.NavLink,{to:"#",className:"nav-link fa fa-home"}," ",this.state.username))))),o.createElement("div",{className:"right-coner"}),o.createElement(I,{show:this.state.passwordModalShow,onHide:t})):"ClientUser"==C.Z.UserType?o.createElement(o.Fragment,null,o.createElement(p.NB,{className:"d-lg-none",display:"md",mobile:!0}),o.createElement(p.wv,{full:{src:L,width:150,height:54,alt:"G-paid Logo"}}),o.createElement(p.NB,{className:"d-md-down-none",display:"lg"}),o.createElement(d.Z,{className:"d-md-down-none",navbar:!0},o.createElement(E.Z,{className:"px-3"},o.createElement(i.NavLink,{to:"/dashboard",className:"nav-link"},"Dashboard")),o.createElement(u.Z,{nav:!0,direction:"down"},o.createElement(h.Z,{nav:!0},o.createElement(E.Z,{className:"px-3"},o.createElement(i.NavLink,{to:"#",className:"nav-link fa fa-wrench"}," Settings"))),o.createElement(_.Z,{right:!0},o.createElement(N.Z,{onClick:function(){return e.setState({passwordModalShow:!0})}},o.createElement("i",{className:"fa fa-shield"})," Change Password"),o.createElement(N.Z,{onClick:this.logOut.bind(this)},o.createElement("i",{className:"fa fa-lock"})," Logout")))),o.createElement(d.Z,{className:"ml-auto",navbar:!0},o.createElement(u.Z,{nav:!0,direction:"down"},o.createElement(h.Z,{nav:!0},o.createElement(E.Z,{className:"d-md-down-none"},o.createElement(i.NavLink,{to:"#",className:"nav-link fa fa-home"}," ",this.state.username))))),o.createElement("div",{className:"right-coner"}),o.createElement(I,{show:this.state.passwordModalShow,onHide:t})):void 0}}]),a}(o.Component);b.defaultProps={};var B=(0,m.EN)(b)},91820:function(){},63455:function(e,t,a){e.exports=a.p+"static/media/di2.41ec860c805c24d18738.png"}}]);
//# sourceMappingURL=489.997bd273.chunk.js.map