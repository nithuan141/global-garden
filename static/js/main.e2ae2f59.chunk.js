(this["webpackJsonpglobal-garden"]=this["webpackJsonpglobal-garden"]||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var a,s=n(2),c=n.n(s),r=n(11),i=n.n(r),l=(n(69),n(70),n(71),n(72),n(73),n(28)),o=n(15),j=n(16),d=n(30),b=n(29),h=n(112),x=n(105),O=n(126),g=n(106),m=n(107),p=n(113),u=n(127),f=n(128),v=n(114),y=n(115),N=n(116),w=n(117),k=n(124),C=n(55),S=n(25),I=n(23),L=n(125),T=n(103),F=n(104),A=n(108),D=n(109),M=n(110),U=n(111),G=n.p+"static/media/tree.c19a9df7.svg",P=[{uniqueId:101,lat:59.81921097726422,lng:10.75191402715559,owner:"Beckhan",planteddate:"30 Sep 2021",title:"LVM hackathone monument.",story:"This tree is planted as a monument for LVM hackathone.",imgUrl:"https://drive.google.com/uc?export=view&id=127Mrr3gd-1VGcU_JY5FYdnIQ2B8nBDPh"},{uniqueId:102,lat:59.903306,lng:10.757917,owner:"Geir Andersen",planteddate:"30 Sep 2021",title:"Oslo Los\xe6ter . Project no.1 Geir Andersen.",story:"This tree is planted as a monument for LVM hackathone in Oslo Los\xe6ter by Geir Andersen.",imgUrl:"https://drive.google.com/uc?export=view&id=127Mrr3gd-1VGcU_JY5FYdnIQ2B8nBDPh"}],B=new(function(){function e(){Object(o.a)(this,e),localStorage.getItem("treedata")||localStorage.setItem("treedata",JSON.stringify({data:P}))}return Object(j.a)(e,[{key:"getAllTree",value:function(){return JSON.parse(localStorage.getItem("treedata")).data}},{key:"addNewTree",value:function(e){var t=JSON.parse(localStorage.getItem("treedata")).data;return t.push(e),localStorage.setItem("treedata",JSON.stringify({data:t})),t}},{key:"getNextId",value:function(){return 101+JSON.parse(localStorage.getItem("treedata")).data.length}}]),e}()),Y=n(1),_=function(e){var t=e.open,n=e.onClose,a=Object(s.useState)({uniqueId:B.getNextId(),lat:void 0,lng:void 0,owner:"",planteddate:"",story:"",imgUrl:"",title:""}),c=Object(l.a)(a,2),r=c[0],i=c[1],o=function(e){var t=Object(I.a)(Object(I.a)({},r),{},Object(S.a)({},e.target.name,e.target.value));i(t)};return Object(Y.jsxs)(L.a,{isOpen:t,toggle:n,children:[Object(Y.jsx)(T.a,{toggle:n,children:"Submit the request to plant a Tree."}),Object(Y.jsx)(F.a,{children:Object(Y.jsxs)(x.a,{children:[Object(Y.jsx)(g.a,{children:Object(Y.jsx)(m.a,{children:Object(Y.jsxs)(A.a,{children:[Object(Y.jsx)(D.a,{for:"title",children:"Title"}),Object(Y.jsx)(M.a,{type:"text",name:"title",id:"title",value:r.title,onChange:o})]})})}),Object(Y.jsx)(g.a,{children:Object(Y.jsx)(m.a,{children:Object(Y.jsxs)(A.a,{children:[Object(Y.jsx)(D.a,{for:"story",name:"Location",children:"Location"}),Object(Y.jsx)(M.a,{type:"text"})]})})})," ",Object(Y.jsx)(D.a,{for:"story",children:"Cordinates"}),Object(Y.jsxs)(g.a,{children:[Object(Y.jsx)(m.a,{children:Object(Y.jsx)(A.a,{children:Object(Y.jsx)(M.a,{type:"text",placeholder:"Lattitude",name:"lat",id:"lat",value:r.lat,onChange:o})})}),Object(Y.jsx)(m.a,{children:Object(Y.jsx)(A.a,{children:Object(Y.jsx)(M.a,{type:"text",placeholder:"Longittude",name:"lng",id:"lng",value:r.lng,onChange:o})})})]}),Object(Y.jsx)("span",{style:{color:"green",fontSize:"0.75rem"},children:"*Please enter cordinates for time being, location API will integrate later."}),Object(Y.jsx)(g.a,{children:Object(Y.jsx)(m.a,{children:Object(Y.jsxs)(A.a,{children:[Object(Y.jsx)(D.a,{for:"story",children:"Owner"}),Object(Y.jsx)(M.a,{type:"text",name:"owner",id:"owner",value:r.owner,onChange:o})]})})}),Object(Y.jsx)(g.a,{children:Object(Y.jsx)(m.a,{children:Object(Y.jsxs)(A.a,{children:[Object(Y.jsx)(D.a,{for:"story",children:"Your story behind the tree"}),Object(Y.jsx)(M.a,{type:"textarea",name:"story",id:"story",value:r.story,onChange:o})]})})}),Object(Y.jsx)(g.a,{children:Object(Y.jsx)(m.a,{children:Object(Y.jsxs)(A.a,{children:[Object(Y.jsx)(D.a,{for:"story",children:"Planted Date"}),Object(Y.jsx)(M.a,{type:"date",name:"planteddate",id:"planteddate",value:r.planteddate,onChange:o})]})})}),Object(Y.jsx)(g.a,{children:Object(Y.jsx)(m.a,{children:Object(Y.jsxs)(A.a,{children:[Object(Y.jsx)(D.a,{for:"story",children:"Image URL"}),Object(Y.jsx)(M.a,{type:"text",name:"imgUrl",id:"imgUrl",value:r.imgUrl,onChange:o}),Object(Y.jsx)("span",{style:{color:"green",fontSize:"0.75rem"},children:"*Please upload the image in any public cloud (dropbox, google drive, onedrive) and paste the public url here."})]})})})]})}),Object(Y.jsxs)(U.a,{children:[Object(Y.jsx)(C.a,{color:"primary",onClick:function(e){B.addNewTree(r),alert("Successfully added!"),n()},children:"Submit"}),Object(Y.jsx)(C.a,{color:"secondary",onClick:n,children:"Close"})]})]})},J=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={collapseClasses:"",collapseOpen:!1},e.onExiting=function(){e.setState({collapseClasses:"collapsing-out"})},e.onExited=function(){e.setState({collapseClasses:""})},e.onLogin=function(t){t.preventDefault(),e.props.isLoggedIn?e.setState({openModal:!0}):(window.sessionStorage.setItem("logedin","Armin"),e.props.login())},e.closeModal=function(){e.setState({openModal:!1})},e.logOut=function(t){t.preventDefault(),window.sessionStorage.removeItem("logedin"),e.props.login()},e}return Object(j.a)(a,[{key:"render",value:function(){return Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsx)("header",{className:"header-global",children:Object(Y.jsx)(h.a,{className:"navbar-main navbar-transparent navbar-light headroom",expand:"lg",id:"navbar-main",children:Object(Y.jsxs)(x.a,{children:[Object(Y.jsxs)(O.a,{toggler:"#navbar_global",navbar:!0,className:this.state.collapseClasses,onExiting:this.onExiting,onExited:this.onExited,children:[Object(Y.jsx)("div",{className:"navbar-collapse-header",children:Object(Y.jsxs)(g.a,{children:[Object(Y.jsx)(m.a,{className:"collapse-brand",xs:"6",children:Object(Y.jsx)("img",{alt:"...",src:n(84)})}),Object(Y.jsx)(m.a,{className:"collapse-close",xs:"6",children:Object(Y.jsxs)("button",{className:"navbar-toggler",id:"navbar_global",children:[Object(Y.jsx)("span",{}),Object(Y.jsx)("span",{})]})})]})}),Object(Y.jsx)(p.a,{className:"navbar-nav-hover align-items-lg-center",navbar:!0,children:Object(Y.jsxs)(u.a,{nav:!0,children:[Object(Y.jsxs)(f.a,{nav:!0,children:[Object(Y.jsx)("i",{className:"ni ni-ui-04 d-lg-none mr-1"}),Object(Y.jsx)("span",{className:"nav-link-inner--text",children:"Global Garden"})]}),Object(Y.jsx)(v.a,{className:"dropdown-menu-xl",children:Object(Y.jsxs)("div",{className:"dropdown-menu-inner",children:[Object(Y.jsxs)(y.a,{className:"d-flex align-items-center",href:"https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview?ref=adsr-navbar",target:"_blank",children:[Object(Y.jsx)("div",{className:"icon icon-shape bg-gradient-primary rounded-circle text-white",children:Object(Y.jsx)("i",{className:"ni ni-spaceship"})}),Object(Y.jsxs)(y.a,{body:!0,className:"ml-3",children:[Object(Y.jsx)("h6",{className:"heading text-primary mb-md-1",children:"Getting started"}),Object(Y.jsx)("p",{className:"description d-none d-md-inline-block mb-0",children:"Register and plant a tree."})]})]}),Object(Y.jsxs)(y.a,{className:"d-flex align-items-center",href:"https://demos.creative-tim.com/argon-design-system-react/#/documentation/colors?ref=adsr-navbar",target:"_blank",children:[Object(Y.jsx)("div",{className:"icon icon-shape bg-gradient-success rounded-circle text-white",children:Object(Y.jsx)("i",{className:"ni ni-palette"})}),Object(Y.jsxs)(y.a,{body:!0,className:"ml-3",children:[Object(Y.jsx)("h6",{className:"heading text-primary mb-md-1",children:"Foundation"}),Object(Y.jsx)("p",{className:"description d-none d-md-inline-block mb-0",children:"About global garden foundation."})]})]}),Object(Y.jsxs)(y.a,{className:"d-flex align-items-center",href:"https://demos.creative-tim.com/argon-design-system-react/#/documentation/alert?ref=adsr-navbar",target:"_blank",children:[Object(Y.jsx)("div",{className:"icon icon-shape bg-gradient-warning rounded-circle text-white",children:Object(Y.jsx)("i",{className:"ni ni-ui-04"})}),Object(Y.jsxs)(y.a,{body:!0,className:"ml-3",children:[Object(Y.jsx)("h5",{className:"heading text-warning mb-md-1",children:"Trees"}),Object(Y.jsx)("p",{className:"description d-none d-md-inline-block mb-0",children:"Browse our planted trees."})]})]})]})})]})}),Object(Y.jsxs)(p.a,{className:"align-items-lg-center ml-lg-auto",navbar:!0,children:[Object(Y.jsxs)(N.a,{children:[Object(Y.jsxs)(w.a,{className:"nav-link-icon",href:"https://www.facebook.com/ggkunst",id:"tooltip333589074",target:"_blank",children:[Object(Y.jsx)("i",{className:"fa fa-facebook-square"}),Object(Y.jsx)("span",{className:"nav-link-inner--text d-lg-none ml-2",children:"Facebook"})]}),Object(Y.jsx)(k.a,{delay:0,target:"tooltip333589074",children:"Like us on Facebook"})]}),Object(Y.jsxs)(N.a,{children:[Object(Y.jsxs)(w.a,{className:"nav-link-icon",href:"https://www.instagram.com/ggkunst",id:"tooltip356693867",target:"_blank",children:[Object(Y.jsx)("i",{className:"fa fa-instagram"}),Object(Y.jsx)("span",{className:"nav-link-inner--text d-lg-none ml-2",children:"Instagram"})]}),Object(Y.jsx)(k.a,{delay:0,target:"tooltip356693867",children:"Follow us on Instagram"})]}),Object(Y.jsxs)(N.a,{children:[Object(Y.jsxs)(w.a,{className:"nav-link-icon",href:"https://twitter.com/ggkunst",id:"tooltip184698705",target:"_blank",children:[Object(Y.jsx)("i",{className:"fa fa-twitter-square"}),Object(Y.jsx)("span",{className:"nav-link-inner--text d-lg-none ml-2",children:"Twitter"})]}),Object(Y.jsx)(k.a,{delay:0,target:"tooltip184698705",children:"Follow us on Twitter"})]}),Object(Y.jsxs)(N.a,{className:"d-none d-lg-block ml-lg-4",children:[Object(Y.jsx)("span",{style:{color:"white",marginRight:"5px"},children:this.props.isLoggedIn?"Hello ".concat(this.props.isLoggedIn):""}),this.props.isLoggedIn&&Object(Y.jsx)(C.a,{onClick:this.logOut,children:"Log out"}),Object(Y.jsxs)(C.a,{className:"btn-neutral btn-icon",color:"default",href:"#",onClick:this.onLogin,children:[Object(Y.jsx)("span",{className:"btn-inner--icon",children:Object(Y.jsx)("i",{className:"fa fa-cloud-download mr-2"})}),Object(Y.jsx)("span",{className:"nav-link-inner--text ml-1",children:this.props.isLoggedIn?"Share a tree story":"Signin"})]})]})]})]}),Object(Y.jsx)(_,{open:this.state.openModal,onClose:this.closeModal})]})})})})}}]),a}(c.a.Component),q=J,E=(n(123),n(64)),z=n(59),V=n(60).a.div(a||(a=Object(z.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 30px;\n  height: 30px;\n  user-select: none;\n  transform: translate(-50%, -50%);\n  cursor: ",";\n  &:hover {\n    z-index: 1;\n  }\n"])),(function(e){return e.onClick?"pointer":"default"})),R=function(e){var t=e.story,n=e.onClick;return Object(Y.jsx)(V,{alt:t.owner,onClick:function(){n(t)},children:Object(Y.jsx)(oe,{})})},Q=n(118),W=n(119),H=function(e){var t=e.open,n=e.owner,a=e.onClose,s=e.story,c=e.planteddate,r=e.imgUrl,i=e.uniqueId,l=e.lat,o=e.lng,j=e.title;return Object(Y.jsxs)(L.a,{isOpen:t,toggle:a,children:[Object(Y.jsxs)(T.a,{toggle:a,children:[j," "]}),Object(Y.jsx)(F.a,{children:Object(Y.jsxs)(x.a,{children:[Object(Y.jsx)(g.a,{children:Object(Y.jsx)(m.a,{children:Object(Y.jsx)("img",{alt:"...",src:r,style:{height:"10rem",alignItems:"center"},align:"center"})})})," ",Object(Y.jsx)("br",{})," ",Object(Y.jsx)(g.a,{}),Object(Y.jsx)(Q.a,{body:!0,inverse:!0,color:"primary",children:Object(Y.jsxs)(W.a,{children:[" ",Object(Y.jsxs)(g.a,{children:[Object(Y.jsx)(m.a,{children:"ID "}),Object(Y.jsx)(m.a,{children:i})]}),Object(Y.jsxs)(g.a,{children:[Object(Y.jsx)(m.a,{children:"Location"}),Object(Y.jsx)(m.a,{children:"".concat(l,", ").concat(o)})]}),Object(Y.jsxs)(g.a,{children:[Object(Y.jsx)(m.a,{children:"Date "}),Object(Y.jsx)(m.a,{children:c})]}),Object(Y.jsxs)(g.a,{children:[Object(Y.jsx)(m.a,{children:"Owner "}),Object(Y.jsx)(m.a,{children:n})]})]})}),Object(Y.jsx)("br",{}),Object(Y.jsx)(g.a,{children:Object(Y.jsx)(m.a,{children:s})})]})}),Object(Y.jsx)(U.a,{children:Object(Y.jsx)(C.a,{color:"primary",onClick:a,children:"Close"})})]})},K=function(e){var t=e.text;return Object(Y.jsx)("div",{children:t})},Z=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={modalOpen:!1,story:void 0},e.modalClose=function(){e.setState({modalOpen:!1,story:void 0})},e.modalOpen=function(t){e.setState({modalOpen:!0,story:t})},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(Y.jsx)("div",{style:{height:"70vh",width:"100%"},children:Object(Y.jsxs)(E.a,{bootstrapURLKeys:{key:"AIzaSyDmdNYP71cM7GUjxc5mDrn09j0SowsSStM"},defaultCenter:this.props.center,defaultZoom:this.props.zoom,children:[Object(Y.jsx)(K,{lat:56.86587822348912,lng:24.27920080145046,text:"Trees "}),B.getAllTree().map((function(t){return Object(Y.jsx)(R,{story:t,lat:t.lat,lng:t.lng,onClick:e.modalOpen},"".concat(t.owner,"-").concat(t.uniqueId))})),this.state.story&&Object(Y.jsx)(H,Object(I.a)({open:this.state.modalOpen,onClose:this.modalClose},this.state.story))]})})}}]),n}(s.Component);Z.defaultProps={center:{lat:59.91921097726422,lng:10.75191402715559},zoom:11};var X=Z,$=n.p+"static/media/coin.18703011.svg",ee=n.p+"static/media/certificate.03a6823b.svg",te=n(120),ne=n(121),ae=n(122),se=function(){return Object(Y.jsx)(x.a,{children:Object(Y.jsxs)(g.a,{children:[Object(Y.jsx)(m.a,{children:Object(Y.jsx)(ce,{})}),Object(Y.jsx)(m.a,{children:Object(Y.jsx)(re,{})}),Object(Y.jsx)(m.a,{children:Object(Y.jsx)(ie,{})})]})})},ce=function(){return Object(Y.jsxs)(Q.a,{children:[Object(Y.jsxs)(te.a,{children:[Object(Y.jsx)(ne.a,{tag:"h5",children:"5"}),Object(Y.jsx)(ae.a,{tag:"h6",className:"mb-2 text-muted",children:"TCN Wallet"})]}),Object(Y.jsx)("img",{width:"100%",src:$,alt:"Card image cap",style:{height:"5rem"}}),Object(Y.jsx)(te.a,{children:Object(Y.jsx)(W.a,{children:"Your tree coin balance."})})]})},re=function(){return Object(Y.jsxs)(Q.a,{children:[Object(Y.jsxs)(te.a,{children:[Object(Y.jsx)(ne.a,{tag:"h5",children:"You own 5"}),Object(Y.jsx)(ae.a,{tag:"h6",className:"mb-2 text-muted",children:"Number of Trees"})]}),Object(Y.jsx)("img",{width:"100%",src:G,alt:"Card image cap",style:{height:"5rem"}}),Object(Y.jsx)(te.a,{children:Object(Y.jsx)(W.a,{children:"Your tree assets."})})]})},ie=function(){return Object(Y.jsxs)(Q.a,{children:[Object(Y.jsxs)(te.a,{children:[Object(Y.jsx)(ne.a,{tag:"h5",children:" 2 "}),Object(Y.jsx)(ae.a,{tag:"h6",className:"mb-2 text-muted",children:"Badges"})]}),Object(Y.jsx)("img",{width:"100%",src:ee,alt:"Card image cap",style:{height:"5rem"}}),Object(Y.jsx)(te.a,{children:Object(Y.jsx)(W.a,{children:"Your Global Garden badges."})})]})},le=function(e){var t=e.user;return Object(Y.jsx)("main",{children:Object(Y.jsx)("div",{className:"position-relative",children:Object(Y.jsxs)("section",{className:"section section-lg section-shaped pb-250",children:[Object(Y.jsx)(je,{}),Object(Y.jsx)("section",{style:{marginBottom:"10px"},children:t&&Object(Y.jsx)(se,{})}),Object(Y.jsx)("section",{children:Object(Y.jsx)(X,{user:t})})]})})})},oe=function(){return Object(Y.jsx)("span",{className:"btn-inner--icon mr-1",style:{minWidth:"25px"},children:Object(Y.jsx)("img",{alt:"...",src:G})})},je=function(){return Object(Y.jsxs)("div",{className:"shape shape-style-1 shape-default",children:[Object(Y.jsx)("span",{}),Object(Y.jsx)("span",{}),Object(Y.jsx)("span",{}),Object(Y.jsx)("span",{}),Object(Y.jsx)("span",{}),Object(Y.jsx)("span",{}),Object(Y.jsx)("span",{}),Object(Y.jsx)("span",{}),Object(Y.jsx)("span",{})]})},de=function(){var e=window.sessionStorage.getItem("logedin"),t=Object(s.useState)(Date.now),n=Object(l.a)(t,2),a=(n[0],n[1]);return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(q,{isLoggedIn:e,login:function(){a(Date.now)}}),Object(Y.jsx)(le,{user:e})]})};var be=function(){return Object(Y.jsx)("div",{className:"App",children:Object(Y.jsx)(de,{})})},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,129)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};i.a.render(Object(Y.jsx)(be,{}),document.getElementById("root")),he()},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/argon-react.128d71d3.png"}},[[101,1,2]]]);
//# sourceMappingURL=main.e2ae2f59.chunk.js.map