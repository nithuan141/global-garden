(this["webpackJsonpglobal-garden"]=this["webpackJsonpglobal-garden"]||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n,s=a(2),c=a.n(s),r=a(11),i=a.n(r),l=(a(69),a(70),a(71),a(72),a(73),a(28)),o=a(15),j=a(16),d=a(30),b=a(29),h=a(112),x=a(105),O=a(126),g=a(106),m=a(107),p=a(113),u=a(127),f=a(128),v=a(114),y=a(115),N=a(116),w=a(117),k=a(124),C=a(55),S=a(25),I=a(23),L=a(125),T=a(103),F=a(104),A=a(108),D=a(109),M=a(110),P=a(111),U=a.p+"static/media/tree.c19a9df7.svg",_=[{uniqueId:101,lat:59.81921097726422,lng:10.75191402715559,owner:"Beckhan",planteddate:"30 Sep 2021",title:"LVM hackathone monument.",story:"This tree is planted as a monument for LVM hackathone.",imgUrl:"https://drive.google.com/uc?export=view&id=127Mrr3gd-1VGcU_JY5FYdnIQ2B8nBDPh"},{uniqueId:102,lat:59.903306,lng:10.757917,owner:"Geir Andersen",planteddate:"30 Sep 2021",title:"Oslo Los\xe6ter . Project no.1 Geir Andersen.",story:"This tree is planted as a monument for LVM hackathone in Oslo Los\xe6ter by Geir Andersen.",imgUrl:"https://drive.google.com/uc?export=view&id=127Mrr3gd-1VGcU_JY5FYdnIQ2B8nBDPh"}],B=new(function(){function e(){Object(o.a)(this,e),localStorage.getItem("treedata")||localStorage.setItem("treedata",JSON.stringify({data:_}))}return Object(j.a)(e,[{key:"getAllTree",value:function(){return JSON.parse(localStorage.getItem("treedata")).data}},{key:"addNewTree",value:function(e){var t=JSON.parse(localStorage.getItem("treedata")).data;return t.push(e),localStorage.setItem("treedata",JSON.stringify({data:t})),t}},{key:"getNextId",value:function(){return 101+JSON.parse(localStorage.getItem("treedata")).data.length}}]),e}()),G=a(1),J=function(e){var t=e.open,a=e.onClose,n=Object(s.useState)({uniqueId:B.getNextId(),lat:void 0,lng:void 0,owner:"",planteddate:"",story:"",imgUrl:"",title:""}),c=Object(l.a)(n,2),r=c[0],i=c[1],o=function(e){var t=Object(I.a)(Object(I.a)({},r),{},Object(S.a)({},e.target.name,e.target.value));i(t)};return Object(G.jsxs)(L.a,{isOpen:t,toggle:a,children:[Object(G.jsx)(T.a,{toggle:a,children:"Submit the request to plant a Tree."}),Object(G.jsx)(F.a,{children:Object(G.jsxs)(x.a,{children:[Object(G.jsx)(g.a,{children:Object(G.jsx)(m.a,{children:Object(G.jsxs)(A.a,{children:[Object(G.jsx)(D.a,{for:"title",children:"Title"}),Object(G.jsx)(M.a,{type:"text",name:"title",id:"title",value:r.title,onChange:o})]})})}),Object(G.jsx)(g.a,{children:Object(G.jsx)(m.a,{children:Object(G.jsxs)(A.a,{children:[Object(G.jsx)(D.a,{for:"story",name:"Location",children:"Location"}),Object(G.jsx)(M.a,{type:"text"})]})})})," ",Object(G.jsx)(D.a,{for:"story",children:"Cordinates"}),Object(G.jsxs)(g.a,{children:[Object(G.jsx)(m.a,{children:Object(G.jsx)(A.a,{children:Object(G.jsx)(M.a,{type:"text",placeholder:"Lattitude",name:"lat",id:"lat",value:r.lat,onChange:o})})}),Object(G.jsx)(m.a,{children:Object(G.jsx)(A.a,{children:Object(G.jsx)(M.a,{type:"text",placeholder:"Longittude",name:"lng",id:"lng",value:r.lng,onChange:o})})})]}),Object(G.jsx)("span",{style:{color:"green",fontSize:"0.75rem"},children:"*Please enter cordinates for time being, location API will integrate later."}),Object(G.jsx)(g.a,{children:Object(G.jsx)(m.a,{children:Object(G.jsxs)(A.a,{children:[Object(G.jsx)(D.a,{for:"story",children:"Owner"}),Object(G.jsx)(M.a,{type:"text",name:"owner",id:"owner",value:r.owner,onChange:o})]})})}),Object(G.jsx)(g.a,{children:Object(G.jsx)(m.a,{children:Object(G.jsxs)(A.a,{children:[Object(G.jsx)(D.a,{for:"story",children:"Your story behind the tree"}),Object(G.jsx)(M.a,{type:"textarea",name:"story",id:"story",value:r.story,onChange:o})]})})}),Object(G.jsx)(g.a,{children:Object(G.jsx)(m.a,{children:Object(G.jsxs)(A.a,{children:[Object(G.jsx)(D.a,{for:"story",children:"Planted Date"}),Object(G.jsx)(M.a,{type:"date",name:"planteddate",id:"planteddate",value:r.planteddate,onChange:o})]})})}),Object(G.jsx)(g.a,{children:Object(G.jsx)(m.a,{children:Object(G.jsxs)(A.a,{children:[Object(G.jsx)(D.a,{for:"story",children:"Image URL"}),Object(G.jsx)(M.a,{type:"text",name:"imgUrl",id:"imgUrl",value:r.imgUrl,onChange:o}),Object(G.jsx)("span",{style:{color:"green",fontSize:"0.75rem"},children:"*Please upload the image in any public cloud (dropbox, google drive, onedrive) and paste the public url here."})]})})})]})}),Object(G.jsxs)(P.a,{children:[Object(G.jsx)(C.a,{color:"primary",onClick:function(e){B.addNewTree(r),alert("Successfully added!"),a()},children:"Submit"}),Object(G.jsx)(C.a,{color:"secondary",onClick:a,children:"Close"})]})]})},Y=a.p+"static/media/logo.ad6334bc.JPG",q=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={collapseClasses:"",collapseOpen:!1},e.onExiting=function(){e.setState({collapseClasses:"collapsing-out"})},e.onExited=function(){e.setState({collapseClasses:""})},e.onLogin=function(t){t.preventDefault(),e.props.isLoggedIn?e.setState({openModal:!0}):(window.sessionStorage.setItem("logedin","Armin"),e.props.login())},e.closeModal=function(){e.setState({openModal:!1})},e.logOut=function(t){t.preventDefault(),window.sessionStorage.removeItem("logedin"),e.props.login()},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(G.jsx)(G.Fragment,{children:Object(G.jsx)("header",{className:"header-global",children:Object(G.jsx)(h.a,{className:"navbar-main navbar-transparent navbar-light headroom",expand:"lg",id:"navbar-main",children:Object(G.jsxs)(x.a,{children:[Object(G.jsxs)(O.a,{toggler:"#navbar_global",navbar:!0,className:this.state.collapseClasses,onExiting:this.onExiting,onExited:this.onExited,children:[Object(G.jsx)("div",{className:"navbar-collapse-header",children:Object(G.jsxs)(g.a,{children:[Object(G.jsx)(m.a,{className:"collapse-brand",xs:"6",children:Object(G.jsx)("img",{alt:"...",src:a(84)})}),Object(G.jsx)(m.a,{className:"collapse-close",xs:"6",children:Object(G.jsxs)("button",{className:"navbar-toggler",id:"navbar_global",children:[Object(G.jsx)("span",{}),Object(G.jsx)("span",{})]})})]})}),Object(G.jsx)(p.a,{className:"navbar-nav-hover align-items-lg-center",navbar:!0,children:Object(G.jsxs)(u.a,{nav:!0,children:[Object(G.jsxs)(f.a,{nav:!0,children:[Object(G.jsx)("i",{className:"ni ni-ui-04 d-lg-none mr-1"}),Object(G.jsx)("img",{src:Y,style:{marginTop:"-15px"}})]}),Object(G.jsx)(v.a,{className:"dropdown-menu-xl",children:Object(G.jsxs)("div",{className:"dropdown-menu-inner",children:[Object(G.jsxs)(y.a,{className:"d-flex align-items-center",href:"https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview?ref=adsr-navbar",target:"_blank",children:[Object(G.jsx)("div",{className:"icon icon-shape bg-gradient-primary rounded-circle text-white",children:Object(G.jsx)("i",{className:"ni ni-spaceship"})}),Object(G.jsxs)(y.a,{body:!0,className:"ml-3",children:[Object(G.jsx)("h6",{className:"heading text-primary mb-md-1",children:"Getting started"}),Object(G.jsx)("p",{className:"description d-none d-md-inline-block mb-0",children:"Register and plant a tree."})]})]}),Object(G.jsxs)(y.a,{className:"d-flex align-items-center",href:"https://demos.creative-tim.com/argon-design-system-react/#/documentation/colors?ref=adsr-navbar",target:"_blank",children:[Object(G.jsx)("div",{className:"icon icon-shape bg-gradient-success rounded-circle text-white",children:Object(G.jsx)("i",{className:"ni ni-palette"})}),Object(G.jsxs)(y.a,{body:!0,className:"ml-3",children:[Object(G.jsx)("h6",{className:"heading text-primary mb-md-1",children:"Foundation"}),Object(G.jsx)("p",{className:"description d-none d-md-inline-block mb-0",children:"About global garden foundation."})]})]}),Object(G.jsxs)(y.a,{className:"d-flex align-items-center",href:"https://demos.creative-tim.com/argon-design-system-react/#/documentation/alert?ref=adsr-navbar",target:"_blank",children:[Object(G.jsx)("div",{className:"icon icon-shape bg-gradient-warning rounded-circle text-white",children:Object(G.jsx)("i",{className:"ni ni-ui-04"})}),Object(G.jsxs)(y.a,{body:!0,className:"ml-3",children:[Object(G.jsx)("h5",{className:"heading text-warning mb-md-1",children:"Trees"}),Object(G.jsx)("p",{className:"description d-none d-md-inline-block mb-0",children:"Browse our planted trees."})]})]})]})})]})}),Object(G.jsxs)(p.a,{className:"align-items-lg-center ml-lg-auto",navbar:!0,children:[Object(G.jsxs)(N.a,{children:[Object(G.jsxs)(w.a,{className:"nav-link-icon",href:"https://www.facebook.com/ggkunst",id:"tooltip333589074",target:"_blank",children:[Object(G.jsx)("i",{className:"fa fa-facebook-square"}),Object(G.jsx)("span",{className:"nav-link-inner--text d-lg-none ml-2",children:"Facebook"})]}),Object(G.jsx)(k.a,{delay:0,target:"tooltip333589074",children:"Like us on Facebook"})]}),Object(G.jsxs)(N.a,{children:[Object(G.jsxs)(w.a,{className:"nav-link-icon",href:"https://www.instagram.com/ggkunst",id:"tooltip356693867",target:"_blank",children:[Object(G.jsx)("i",{className:"fa fa-instagram"}),Object(G.jsx)("span",{className:"nav-link-inner--text d-lg-none ml-2",children:"Instagram"})]}),Object(G.jsx)(k.a,{delay:0,target:"tooltip356693867",children:"Follow us on Instagram"})]}),Object(G.jsxs)(N.a,{children:[Object(G.jsxs)(w.a,{className:"nav-link-icon",href:"https://twitter.com/ggkunst",id:"tooltip184698705",target:"_blank",children:[Object(G.jsx)("i",{className:"fa fa-twitter-square"}),Object(G.jsx)("span",{className:"nav-link-inner--text d-lg-none ml-2",children:"Twitter"})]}),Object(G.jsx)(k.a,{delay:0,target:"tooltip184698705",children:"Follow us on Twitter"})]}),Object(G.jsxs)(N.a,{className:"d-none d-lg-block ml-lg-4",children:[Object(G.jsx)("span",{style:{color:"white",marginRight:"5px"},children:this.props.isLoggedIn?"Hello ".concat(this.props.isLoggedIn):""}),this.props.isLoggedIn&&Object(G.jsx)(C.a,{onClick:this.logOut,children:"Log out"}),Object(G.jsxs)(C.a,{className:"btn-neutral btn-icon",color:"default",href:"#",onClick:this.onLogin,children:[Object(G.jsx)("span",{className:"btn-inner--icon",children:Object(G.jsx)("i",{className:"fa fa-cloud-download mr-2"})}),Object(G.jsx)("span",{className:"nav-link-inner--text ml-1",children:this.props.isLoggedIn?"Share a tree story":"Signin"})]})]})]})]}),Object(G.jsx)(J,{open:this.state.openModal,onClose:this.closeModal})]})})})})}}]),n}(c.a.Component),E=q,z=(a(123),a(64)),V=a(59),R=a(60).a.div(n||(n=Object(V.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 30px;\n  height: 30px;\n  user-select: none;\n  transform: translate(-50%, -50%);\n  cursor: ",";\n  &:hover {\n    z-index: 1;\n  }\n"])),(function(e){return e.onClick?"pointer":"default"})),Q=function(e){var t=e.story,a=e.onClick;return Object(G.jsx)(R,{alt:t.owner,onClick:function(){a(t)},children:Object(G.jsx)(de,{})})},H=a(118),K=a(119),W=function(e){var t=e.open,a=e.owner,n=e.onClose,s=e.story,c=e.planteddate,r=e.imgUrl,i=e.uniqueId,l=e.lat,o=e.lng,j=e.title;return Object(G.jsxs)(L.a,{isOpen:t,toggle:n,children:[Object(G.jsxs)(T.a,{toggle:n,children:[j," "]}),Object(G.jsx)(F.a,{children:Object(G.jsxs)(x.a,{children:[Object(G.jsx)(g.a,{children:Object(G.jsx)(m.a,{children:Object(G.jsx)("img",{alt:"...",src:r,style:{height:"10rem",alignItems:"center"},align:"center"})})})," ",Object(G.jsx)("br",{})," ",Object(G.jsx)(g.a,{}),Object(G.jsx)(H.a,{body:!0,inverse:!0,color:"primary",children:Object(G.jsxs)(K.a,{children:[" ",Object(G.jsxs)(g.a,{children:[Object(G.jsx)(m.a,{children:"ID "}),Object(G.jsx)(m.a,{children:i})]}),Object(G.jsxs)(g.a,{children:[Object(G.jsx)(m.a,{children:"Location"}),Object(G.jsx)(m.a,{children:"".concat(l,", ").concat(o)})]}),Object(G.jsxs)(g.a,{children:[Object(G.jsx)(m.a,{children:"Date "}),Object(G.jsx)(m.a,{children:c})]}),Object(G.jsxs)(g.a,{children:[Object(G.jsx)(m.a,{children:"Owner "}),Object(G.jsx)(m.a,{children:a})]})]})}),Object(G.jsx)("br",{}),Object(G.jsx)(g.a,{children:Object(G.jsx)(m.a,{children:s})})]})}),Object(G.jsx)(P.a,{children:Object(G.jsx)(C.a,{color:"primary",onClick:n,children:"Close"})})]})},Z=function(e){var t=e.text;return Object(G.jsx)("div",{children:t})},X=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={modalOpen:!1,story:void 0},e.modalClose=function(){e.setState({modalOpen:!1,story:void 0})},e.modalOpen=function(t){e.setState({modalOpen:!0,story:t})},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this;return Object(G.jsx)("div",{style:{height:"70vh",width:"100%"},children:Object(G.jsxs)(z.a,{bootstrapURLKeys:{key:"AIzaSyDmdNYP71cM7GUjxc5mDrn09j0SowsSStM"},defaultCenter:this.props.center,defaultZoom:this.props.zoom,children:[Object(G.jsx)(Z,{lat:56.86587822348912,lng:24.27920080145046,text:"Trees "}),B.getAllTree().map((function(t){return Object(G.jsx)(Q,{story:t,lat:t.lat,lng:t.lng,onClick:e.modalOpen},"".concat(t.owner,"-").concat(t.uniqueId))})),this.state.story&&Object(G.jsx)(W,Object(I.a)({open:this.state.modalOpen,onClose:this.modalClose},this.state.story))]})})}}]),a}(s.Component);X.defaultProps={center:{lat:59.91921097726422,lng:10.75191402715559},zoom:11};var $=X,ee=a.p+"static/media/gg_map_icon.4f31e7cc.png",te=a.p+"static/media/coin.18703011.svg",ae=a.p+"static/media/certificate.03a6823b.svg",ne=a(120),se=a(121),ce=a(122),re=function(){return Object(G.jsxs)(x.a,{children:[Object(G.jsx)("br",{}),Object(G.jsxs)(g.a,{children:[Object(G.jsx)(m.a,{children:Object(G.jsx)(ie,{})}),Object(G.jsx)(m.a,{children:Object(G.jsx)(le,{})}),Object(G.jsx)(m.a,{children:Object(G.jsx)(oe,{})})]})]})},ie=function(){return Object(G.jsxs)(H.a,{children:[Object(G.jsxs)(ne.a,{children:[Object(G.jsx)(se.a,{tag:"h5",children:"5"}),Object(G.jsx)(ce.a,{tag:"h6",className:"mb-2 text-muted",children:"TCN Wallet"})]}),Object(G.jsx)("img",{width:"100%",src:te,alt:"Card image cap",style:{height:"5rem"}}),Object(G.jsx)(ne.a,{children:Object(G.jsx)(K.a,{children:"Your tree coin balance."})})]})},le=function(){return Object(G.jsxs)(H.a,{children:[Object(G.jsxs)(ne.a,{children:[Object(G.jsx)(se.a,{tag:"h5",children:"You own 5"}),Object(G.jsx)(ce.a,{tag:"h6",className:"mb-2 text-muted",children:"Number of Trees"})]}),Object(G.jsx)("img",{width:"100%",src:U,alt:"Card image cap",style:{height:"5rem"}}),Object(G.jsx)(ne.a,{children:Object(G.jsx)(K.a,{children:"Your tree assets."})})]})},oe=function(){return Object(G.jsxs)(H.a,{children:[Object(G.jsxs)(ne.a,{children:[Object(G.jsx)(se.a,{tag:"h5",children:" 2 "}),Object(G.jsx)(ce.a,{tag:"h6",className:"mb-2 text-muted",children:"Badges"})]}),Object(G.jsx)("img",{width:"100%",src:ae,alt:"Card image cap",style:{height:"5rem"}}),Object(G.jsx)(ne.a,{children:Object(G.jsx)(K.a,{children:"Your Global Garden badges."})})]})},je=function(e){var t=e.user;return Object(G.jsx)("main",{children:Object(G.jsx)("div",{className:"position-relative",children:Object(G.jsxs)("section",{className:"section section-lg section-shaped pb-250",children:[Object(G.jsx)(be,{}),Object(G.jsx)("section",{style:{marginBottom:"10px"},children:t&&Object(G.jsx)(re,{})}),Object(G.jsx)("section",{children:Object(G.jsx)($,{user:t})})]})})})},de=function(){return Object(G.jsx)("span",{className:"btn-inner--icon mr-1",style:{height:"2.5rem"},children:Object(G.jsx)("img",{alt:"...",src:ee,style:{height:"2.5rem"}})})},be=function(){return Object(G.jsxs)("div",{className:"shape shape-style-1 shape-default",children:[Object(G.jsx)("span",{}),Object(G.jsx)("span",{}),Object(G.jsx)("span",{}),Object(G.jsx)("span",{}),Object(G.jsx)("span",{}),Object(G.jsx)("span",{}),Object(G.jsx)("span",{}),Object(G.jsx)("span",{}),Object(G.jsx)("span",{})]})},he=function(){var e=window.sessionStorage.getItem("logedin"),t=Object(s.useState)(Date.now),a=Object(l.a)(t,2),n=(a[0],a[1]);return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(E,{isLoggedIn:e,login:function(){n(Date.now)}}),Object(G.jsx)(je,{user:e})]})};var xe=function(){return Object(G.jsx)("div",{className:"App",children:Object(G.jsx)(he,{})})},Oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,129)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};i.a.render(Object(G.jsx)(xe,{}),document.getElementById("root")),Oe()},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/argon-react.128d71d3.png"}},[[101,1,2]]]);
//# sourceMappingURL=main.77a9aa77.chunk.js.map