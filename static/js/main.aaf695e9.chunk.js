(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r(3),s=r(6),i=r(5),o=r(4),l=r(1),c=r.n(l),u=r(9),d=r.n(u),h=(r(14),r(0)),m=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){return Object(n.a)(this,r),t.call(this,e)}return Object(a.a)(r,[{key:"render",value:function(){return Object(h.jsx)("div",{id:"headerContainer",className:"headerText",children:"Login or Sign Up To Continue!"})}}]),r}(c.a.Component),b=r(7);var j=function(e){return Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{backgroundColor:e.backgroundColor,fill:"black",x:"0px",y:"0px",width:"18px",height:"18px"},viewBox:"0 0 24 24",children:[Object(h.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(h.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})]})},p=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){return Object(n.a)(this,r),t.call(this,e)}return Object(a.a)(r,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"formInputElement",style:{display:"flex"},children:[Object(h.jsx)("div",{style:{backgroundColor:"white",width:"40px",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(h.jsx)(j,{backgroundColor:"white"})}),Object(h.jsx)("input",{type:"text",id:"formEmailInput",name:"userEmail",placeholder:"Email",value:this.props.value,onChange:this.props.onChange})]})}}]),r}(c.a.Component);var f=function(e){return Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{backgroundColor:e.backgroundColor,fill:"black",x:"0px",y:"0px",width:"20px",height:"20px"},viewBox:"0 0 24 24",children:[Object(h.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(h.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"})]})};var g=function(e){return Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",onClick:e.onClick,style:{backgroundColor:e.backgroundColor,fill:"black",x:"0px",y:"0px",width:"18px",height:"18px"},viewBox:"0 0 24 24",children:[Object(h.jsx)("path",{d:"M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z",fill:"none"}),Object(h.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"})]})};var v=function(e){return Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",onClick:e.onClick,style:{backgroundColor:e.backgroundColor,fill:"black",x:"0px",y:"0px",width:"18px",height:"18px"},viewBox:"0 0 24 24",children:Object(h.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"})})};var O=function(e){return e.passwordVisible?Object(h.jsx)(v,{backgroundColor:"white",onClick:e.onClick}):Object(h.jsx)(g,{backgroundColor:"white",onClick:e.onClick})},x=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).state={passwordVisible:!1},a.handleClick=a.handleClick.bind(Object(s.a)(a)),a}return Object(a.a)(r,[{key:"handleClick",value:function(e){this.setState((function(e){return{passwordVisible:!e.passwordVisible}}))}},{key:"render",value:function(){var e=this.state.passwordVisible?"text":"password";return Object(h.jsxs)("div",{className:"formInputElement",style:{display:"flex"},children:[Object(h.jsx)("div",{style:{backgroundColor:"white",width:"40px",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(h.jsx)(f,{backgroundColor:"white"})}),Object(h.jsx)("input",{type:e,id:"formPasswordInput",name:"userPassword",placeholder:"Password",value:this.props.value,onChange:this.props.onChange}),Object(h.jsx)("div",{style:{backgroundColor:"white",width:"40px",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(h.jsx)(O,{passwordVisible:this.state.passwordVisible,onClick:this.handleClick})})]})}}]),r}(c.a.Component),k=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){return Object(n.a)(this,r),t.call(this,e)}return Object(a.a)(r,[{key:"render",value:function(){return Object(h.jsx)("button",{type:"submit",id:"loginFormSubmitButton",form:"loginForm",children:"Submit"})}}]),r}(c.a.Component),C=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){return Object(n.a)(this,r),t.call(this,e)}return Object(a.a)(r,[{key:"render",value:function(){return"empty"===this.props.inputError?Object(h.jsx)("div",{className:"formErrorMessageContainer",children:Object(h.jsx)("div",{children:"* enter email address"})}):"invalid"===this.props.inputError&&"sign up form"===this.props.formType?Object(h.jsx)("div",{className:"formErrorMessageContainer",children:Object(h.jsx)("div",{children:"* invalid email address"})}):null}}]),r}(c.a.Component),E=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){return Object(n.a)(this,r),t.call(this,e)}return Object(a.a)(r,[{key:"render",value:function(){return"empty"===this.props.inputError?Object(h.jsx)("div",{className:"formErrorMessageContainer",children:Object(h.jsx)("div",{children:"* enter password"})}):"invalid"===this.props.inputError&&"sign up form"===this.props.formType?Object(h.jsx)("div",{className:"formErrorMessageContainer",children:Object(h.jsx)("div",{children:"* password must be 8 to 64 characters and contain at least 1 digit and 1 letter"})}):null}}]),r}(c.a.Component),w=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){return Object(n.a)(this,r),t.call(this,e)}return Object(a.a)(r,[{key:"render",value:function(){return"email already registered"===this.props.inputError?Object(h.jsx)("div",{className:"formErrorMessageContainer submitErrorMessageContainer",children:Object(h.jsx)("div",{children:"* email address is already registered"})}):"no database match"===this.props.inputError?Object(h.jsx)("div",{className:"formErrorMessageContainer submitErrorMessageContainer",children:Object(h.jsx)("div",{children:"* could not login with email and password combination"})}):null}}]),r}(c.a.Component),S={users:[{username:"Mike",email:"mike@gmail.com",password:"mikePa55word"},{username:"Molly",email:"molly@gmail.com",password:"mollyPa55word"}]},y={checkIfEmailIsValidAndPrintError:function(e){return""===e?"empty":/(?=^(.{1,64})[@](.{1,})[\.]([^\.]{1,})$)(?=^.{0,254}$)/.test(e)?"":"invalid"},checkIfUsernameIsValidAndPrintError:function(e){return""===e?"empty":/^[A-Za-z0-9]{3,24}$/.test(e)?"":"invalid"},checkIfPasswordIsValidAndPrintError:function(e){return""===e?"empty":/(?=^.{8,64}$)(?=.*\d)(?=.*[A-Za-z])/.test(e)?"":"invalid"},validateInputUpdateErrorAndReturnIfValid:function(e,t,r){var n=!0;if("userEmail"===t){var a=y.checkIfEmailIsValidAndPrintError(e);r.setState({userEmailInputError:a}),a&&(n=!1)}else if("userPassword"===t){var s=y.checkIfPasswordIsValidAndPrintError(e);r.setState({userPasswordInputError:s}),s&&(n=!1)}else if("username"===t){var i=y.checkIfUsernameIsValidAndPrintError(e);r.setState({usernameInputError:i}),i&&(n=!1)}return n},validateAllInputsUpdateErrorsAndReturnIfSubmitValid:function(e){var t=!0;return void 0!==e.state.userEmail&&(this.validateInputUpdateErrorAndReturnIfValid(e.state.userEmail,"userEmail",e)||(t=!1)),void 0!==e.state.userPassword&&(this.validateInputUpdateErrorAndReturnIfValid(e.state.userPassword,"userPassword",e)||(t=!1)),void 0!==e.state.userPassword&&(this.validateInputUpdateErrorAndReturnIfValid(e.state.username,"username",e)||(t=!1)),t},isSignUpEmailUnique:function(e){var t=!0;return S.users.map((function(r){if(r.email===e.state.userEmail)return t=!1})),t},doLoginEmailAndPasswordMatchDatabase:function(e){var t=!1;return S.users.map((function(r){if(r.email===e.state.userEmail&&r.password===e.state.userPassword)return t=!0})),t},checkEmailAndPasswordAgainstDatabaseUpdateSubmitErrorAndReturnIfMatch:function(e){var t=this.doLoginEmailAndPasswordMatchDatabase(e);return console.log("doEmailAndPasswordMatchDatabase:",t),t?(e.setState({submitError:""}),!0):""===e.state.userEmail||""===e.state.userPassword?(e.setState({submitError:"empty field"}),!1):(e.setState({submitError:"no database match"}),!1)},checkEmailAgainstDatabaseUpdateSubmitErrorAndReturnIfUnique:function(e){return this.isSignUpEmailUnique(e)?(e.setState({submitError:""}),S.users.push({username:e.state.username,email:e.state.userEmail,password:e.state.userPassword}),console.log("database:",S),!0):(e.setState({submitError:"email already registered"}),!1)}},I=y,P=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).state={userEmail:"",userPassword:"",userEmailInputError:"",userPasswordInputError:"",submitError:""},a.handleChange=a.handleChange.bind(Object(s.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(s.a)(a)),a}return Object(a.a)(r,[{key:"handleChange",value:function(e){var t=e.target.value,r=e.target.name;this.setState(Object(b.a)({},r,t),(function(){I.validateInputUpdateErrorAndReturnIfValid(t,r,this)}))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=!0;if(I.validateAllInputsUpdateErrorsAndReturnIfSubmitValid(this)||(console.log("login submit is invalid"),t=!1),I.checkEmailAndPasswordAgainstDatabaseUpdateSubmitErrorAndReturnIfMatch(this)||(console.log("no email and password match in database; submit failed"),t=!1),!t)return this.props.setFormShakeState(!1),null;this.props.setFormShakeState(!0),console.log("login submit is valid")}},{key:"render",value:function(){return Object(h.jsxs)("form",{id:"loginForm",className:this.props.showHide,method:"POST",action:"",onSubmit:this.handleSubmit,children:[Object(h.jsx)(p,{onChange:this.handleChange,value:this.state.userEmail}),Object(h.jsx)(C,{inputError:this.state.userEmailInputError,formType:"login form"}),Object(h.jsx)(x,{onChange:this.handleChange,value:this.state.userPassword}),Object(h.jsx)(E,{inputError:this.state.userPasswordInputError,formType:"login form"}),Object(h.jsx)(k,{}),Object(h.jsx)(w,{inputError:this.state.submitError})]})}}]),r}(c.a.Component);var F=function(e){return Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{backgroundColor:e.backgroundColor,fill:"black",x:"0px",y:"0px",width:"20px",height:"20px"},viewBox:"0 0 24 24",children:[Object(h.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(h.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"})]})},A=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){return Object(n.a)(this,r),t.call(this,e)}return Object(a.a)(r,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"formInputElement",style:{display:"flex"},children:[Object(h.jsx)("div",{style:{backgroundColor:"white",width:"40px",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(h.jsx)(F,{backgroundColor:"white"})}),Object(h.jsx)("input",{type:"text",id:"formUsernameInput",name:"username",placeholder:"Username",value:this.props.value,onChange:this.props.onChange})]})}}]),r}(c.a.Component),M=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){return Object(n.a)(this,r),t.call(this,e)}return Object(a.a)(r,[{key:"render",value:function(){return Object(h.jsx)("button",{type:"submit",id:"signUpFormSubmitButton",form:"signUpForm",children:"Submit"})}}]),r}(c.a.Component),N=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){return Object(n.a)(this,r),t.call(this,e)}return Object(a.a)(r,[{key:"render",value:function(){return"empty"===this.props.inputError?Object(h.jsx)("div",{className:"formErrorMessageContainer",children:Object(h.jsx)("div",{children:"* enter username"})}):"invalid"===this.props.inputError?Object(h.jsx)("div",{className:"formErrorMessageContainer",children:Object(h.jsx)("div",{children:"* username must be 3 to 24 characters and contain only letters and/or numbers"})}):null}}]),r}(c.a.Component),U=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).state={username:"",userEmail:"",userPassword:"",usernameInputError:"",userEmailInputError:"",userPasswordInputError:"",submitError:""},a.handleChange=a.handleChange.bind(Object(s.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(s.a)(a)),a}return Object(a.a)(r,[{key:"handleChange",value:function(e){var t=e.target.value,r=e.target.name;this.setState(Object(b.a)({},r,t),(function(){I.validateInputUpdateErrorAndReturnIfValid(t,r,this)}))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=!0;return I.validateAllInputsUpdateErrorsAndReturnIfSubmitValid(this)?I.checkEmailAgainstDatabaseUpdateSubmitErrorAndReturnIfUnique(this)?(this.props.setFormShakeState(t),void console.log("sign up email is unique; submit succeeded")):(console.log("sign up email is not unique; submit failed"),t=!1,this.props.setFormShakeState(t),null):(console.log("sign up submit is invalid"),t=!1,this.props.setFormShakeState(t),null)}},{key:"render",value:function(){return Object(h.jsxs)("form",{id:"signUpForm",className:this.props.showHide,method:"POST",action:"",onSubmit:this.handleSubmit,children:[Object(h.jsx)(A,{onChange:this.handleChange,value:this.state.username}),Object(h.jsx)(N,{inputError:this.state.usernameInputError}),Object(h.jsx)(p,{onChange:this.handleChange,value:this.state.userEmail}),Object(h.jsx)(C,{inputError:this.state.userEmailInputError,formType:"sign up form"}),Object(h.jsx)(x,{onChange:this.handleChange,value:this.state.userPassword}),Object(h.jsx)(E,{inputError:this.state.userPasswordInputError,formType:"sign up form"}),Object(h.jsx)(M,{}),Object(h.jsx)(w,{inputError:this.state.submitError})]})}}]),r}(c.a.Component);var V=function(e){return Object(h.jsx)("div",{id:"loginFormSelectButton",className:"formSelectButton","data-is-form-selected":e.isFormSelected,onClick:e.onClick,children:Object(h.jsx)("div",{children:"Login"})})};var z=function(e){return Object(h.jsx)("div",{id:"signUpFormSelectButton",className:"formSelectButton","data-is-form-selected":e.isFormSelected,onClick:e.onClick,children:Object(h.jsx)("div",{children:"Sign Up"})})},B=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).state={formName:"login form",formShake:!0},a.handleFormSelectButtonClick=a.handleFormSelectButtonClick.bind(Object(s.a)(a)),a.setFormShakeState=a.setFormShakeState.bind(Object(s.a)(a)),a}return Object(a.a)(r,[{key:"handleFormSelectButtonClick",value:function(e){"loginFormSelectButton"===e.currentTarget.id?this.setState({formName:"login form"}):this.setState({formName:"sign up form"})}},{key:"setFormShakeState",value:function(e){var t=this;e?this.setState({formShake:!1}):(this.setState({formShake:!1}),setTimeout((function(){t.setState({formShake:!1})}),0))}},{key:"render",value:function(){return Object(h.jsxs)("div",{id:"formBody","data-shake":this.state.formShake,children:[Object(h.jsx)(V,{onClick:this.handleFormSelectButtonClick,isFormSelected:"login form"===this.state.formName}),Object(h.jsx)(z,{onClick:this.handleFormSelectButtonClick,isFormSelected:"sign up form"===this.state.formName}),Object(h.jsx)(P,{showHide:"login form"===this.state.formName?"show":"hide",setFormShakeState:this.setFormShakeState}),Object(h.jsx)(U,{showHide:"sign up form"===this.state.formName?"show":"hide",setFormShakeState:this.setFormShakeState})]})}}]),r}(c.a.Component),H=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){return Object(n.a)(this,r),t.call(this,e)}return Object(a.a)(r,[{key:"render",value:function(){return Object(h.jsx)("div",{id:"bodyContainer",children:Object(h.jsx)(B,{})})}}]),r}(c.a.Component),T=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,17)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),s(e),i(e)}))},R=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).state={loggedIn:!1,userName:""},a.logIn=a.logIn.bind(Object(s.a)(a)),a.logOut=a.logOut.bind(Object(s.a)(a)),a}return Object(a.a)(r,[{key:"logIn",value:function(e){this.setState({loggedIn:!0,userName:e})}},{key:"logOut",value:function(){this.setState({loggedIn:!1,userName:""})}},{key:"render",value:function(){return Object(h.jsxs)("div",{id:"pageContainer",children:[Object(h.jsx)(m,{loggedIn:this.state.loggedIn,userName:this.state.userName,logOut:this.logOut}),Object(h.jsx)(H,{loggedIn:this.state.loggedIn,userName:this.state.userName,logIn:this.logIn})]})}}]),r}(c.a.Component);d.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(R,{})}),document.getElementById("root")),T()}},[[16,1,2]]]);
//# sourceMappingURL=main.aaf695e9.chunk.js.map