(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},128:function(e){e.exports={a:"https://react-native-community.github.io/upgrade-helper"}},135:function(e,n,t){e.exports=t(229)},140:function(e,n,t){},156:function(e,n,t){var r={"./":47,"./0.57.0":94,"./0.57.0.js":94,"./0.58.0":95,"./0.58.0.js":95,"./0.59.0":96,"./0.59.0.js":96,"./index":47,"./index.js":47};function o(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=156},229:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(7),i=t.n(a),c=(t(140),t(16)),u=t(19),s=t(8),l=t(10),f=t(230),d=t(115),p=t(93),m=t(44),b=t.n(m),v=t(64),g=t(232),h=t(14),j=t.n(h),O=t(116),E=t.n(O),V=t(22),w=t(47),x="react-native-community/rn-diff-purge",y=w.versions.map(function(e){return Object(V.a)({},t(156)("./".concat(e)).default,{version:e})}),C="https://raw.githubusercontent.com/".concat(x,"/master/RELEASES"),D=function(e){var n=e.fromVersion,t=e.toVersion;return"https://raw.githubusercontent.com/".concat(x,"/diffs/diffs/").concat(n,"..").concat(t,".diff")},k=function(e){return e.replace(/RnDiffApp\//,"")},S=function(e){var n=e.fromVersion,t=e.toVersion,r=j.a.valid(j.a.coerce(t));return y.filter(function(e){var t=e.version;return j.a.lte(t,r)&&j.a.gt(t,n)})},N=function(e){var n=e.version;return"https://github.com/react-native-community/releases/blob/master/CHANGELOG.md#".concat(n.replace(".",""))},R=t(231);function T(){var e=Object(s.a)(["\n  width: 100%;\n"]);return T=function(){return e},e}function P(){var e=Object(s.a)(["\n  width: 100%;\n"]);return P=function(){return e},e}var z=R.a.Option,A=l.a.div(P()),L=Object(l.a)(R.a)(T()),I=function(e){var n=e.title,t=e.options,r=Object(u.a)(e,["title","options"]);return o.a.createElement(A,null,o.a.createElement("h4",null,n),o.a.createElement(L,Object.assign({size:"large"},r),t.map(function(e){return o.a.createElement(z,{key:e,value:e},e)})))};function M(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  height: auto;\n  overflow: hidden;\n  margin-top: 25px;\n"]);return M=function(){return e},e}function K(){var e=Object(s.a)(["\n  padding-left: 5px;\n"]);return K=function(){return e},e}function B(){var e=Object(s.a)(["\n  padding-right: 5px;\n"]);return B=function(){return e},e}function F(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return F=function(){return e},e}var U=l.a.div(F()),G=Object(l.a)(I)(B()),H=Object(l.a)(I)(K()),W=l.a.div(M()),_=function(e){var n=e.version,t=e.versionToCompare;return 0===j.a.compare(j.a.valid(j.a.coerce(n)),j.a.valid(j.a.coerce(t)))},J=function(e){var n=e.releasedVersions,t=e.toVersion,r=e.latestVersion,o=null!==j.a.prerelease(t),a=null!==j.a.prerelease(r);return n.filter(function(e){return null===j.a.prerelease(e)||o&&_({version:t,versionToCompare:e})||a&&_({version:r,versionToCompare:e})})},Y=function(e){var n=e.releasedVersions,t=e.minVersion,r=e.maxVersion;return n.filter(function(e){return e.length>0&&(r&&j.a.lt(e,r)||t&&j.a.gt(e,t))})},$=function(e){var n=e.releasedVersions,t=e.versionToCompare;return n.find(function(e){return j.a.lt(e,t)&&"minor"===j.a.diff(j.a.valid(j.a.coerce(e)),j.a.valid(j.a.coerce(t)))})},q=function(e){var n=e.version,t=e.allVersions,r=e.minVersion;try{return n&&t.includes(n)&&(!r||r&&j.a.gt(n,r))}catch(o){return!1}},Q=function(e){var n=e.showDiff,t=Object(r.useState)(!0),a=Object(c.a)(t,2),i=a[0],u=a[1],s=Object(r.useState)([]),l=Object(c.a)(s,2),f=l[0],d=l[1],p=Object(r.useState)([]),m=Object(c.a)(p,2),h=m[0],j=m[1],O=Object(r.useState)([]),V=Object(c.a)(O,2),w=V[0],x=V[1],y=Object(r.useState)(!1),D=Object(c.a)(y,2),k=D[0],S=D[1],N=Object(r.useState)(""),R=Object(c.a)(N,2),T=R[0],P=R[1],z=Object(r.useState)(""),A=Object(c.a)(z,2),L=A[0],I=A[1],M=Object(r.useRef)(null);Object(r.useEffect)(function(){var e=function(){if(window.location.search){var e=E.a.parse(window.location.search);return{fromVersion:e.from,toVersion:e.to}}if(window.location.pathname){var n=window.location.pathname.replace(/\//,"").split(".."),t=Object(c.a)(n,2);return{fromVersion:t[0],toVersion:t[1]}}}();!function(){var n=Object(v.a)(b.a.mark(function n(){var t,r,o,a,i,c,s,l,f;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(C);case 2:return t=n.sent,n.next=5,t.text();case 5:r=n.sent.split("\n"),o=q({version:e.fromVersion,allVersions:r}),a=q({version:e.toVersion,allVersions:r,minVersion:e.fromVersion}),i=r[0],c=a?e.toVersion:i,s=J({releasedVersions:r,toVersion:c,latestVersion:i}),d(s),l=o?e.fromVersion:$({releasedVersions:s,versionToCompare:c}),j(Y({releasedVersions:s,maxVersion:c})),x(Y({releasedVersions:s,minVersion:l})),P(l),I(c),u(!1),S(f=o&&a),f&&M.current.props.onClick();case 21:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}()()},[P,I]),Object(r.useEffect)(function(){i||(j(Y({releasedVersions:f,maxVersion:L})),x(Y({releasedVersions:f,minVersion:T})))},[i,f,T,L,k]);var K=function(e){var t=e.fromVersion,r=e.toVersion;n({fromVersion:t,toVersion:r}),function(e){var n=e.fromVersion,t=e.toVersion,r=window.location.search?"?from=".concat(n,"&to=").concat(t):"".concat(n,"..").concat(t);window.history.replaceState(null,null,"".concat(window.location.href).concat(r))}({fromVersion:T,toVersion:L})};return o.a.createElement(r.Fragment,null,o.a.createElement(U,null,o.a.createElement(G,{title:"What's your current React Native version?",loading:i,value:T,options:h,onChange:function(e){return P(e)}}),o.a.createElement(H,{title:"To which version would you like to update?",loading:i,value:L,options:w,onChange:function(e){return I(e)}})),o.a.createElement(W,null,o.a.createElement(g.a,{ref:M,type:"primary",size:"large",onClick:function(){return K({fromVersion:T,toVersion:L})}},"Show me how to upgrade!")))},X=t(69),Z=t(31),ee=(t(212),t(18)),ne=t(233);function te(){var e=Object(s.a)(["\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,\n    monospace;\n  font-size: 12px;\n  color: #24292e;\n  line-height: 32px;\n  background-color: #fafbfc;\n  border-bottom: 1px solid #e1e4e8;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  padding: 5px 10px;\n"]);return te=function(){return e},e}function re(){var e=Object(s.a)(["\n  color: #24292e;\n  margin-right: 2px;\n  font-size: 10px;\n  transform: ",";\n  transition: transform 0.2s ease-in-out;\n  transform-origin: center;\n  line-height: 0;\n  height: auto;\n  &:hover,\n  &:focus {\n    color: #24292e;\n  }\n"]);return re=function(){return e},e}function oe(){var e=Object(s.a)(["\n  font-size: 13px;\n  line-height: 0;\n  border-width: 0px;\n  width: 20px;\n  height: 20px;\n  margin: 5px 8px 0;\n  &,\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"]);return oe=function(){return e},e}function ae(){var e=Object(s.a)(["\n  color: #24292e;\n  font-size: 12px;\n  border-width: 0;\n  &:hover,\n  &:focus {\n    color: #24292e;\n  }\n"]);return ae=function(){return e},e}function ie(){var e=Object(s.a)(["\n  float: right;\n"]);return ie=function(){return e},e}function ce(){var e=Object(s.a)(["\n  font-size: 10px;\n  margin: 0 5px;\n  color: #f78206;\n"]);return ce=function(){return e},e}var ue=Object(l.a)(function(e){return o.a.createElement(ee.a,Object.assign({},e,{type:"right"}))})(ce()),se=function(e){var n=e.oldPath,t=e.newPath,r=e.type,a=k(n),i=k(t);return"delete"===r?o.a.createElement("span",null,a):a!==i&&"add"!==r?o.a.createElement("span",null,a," ",o.a.createElement(ue,null)," ",i):o.a.createElement("span",null,i)},le=function(e){var n=e.type,t=Object(u.a)(e,["type"]);return o.a.createElement(ne.a,Object.assign({},t,{color:{add:"blue",modify:"green",delete:"red",rename:"orange"}[n]}),{add:"ADDED",modify:"MODIFIED",delete:"DELETED",rename:"RENAMED"}[n])},fe=function(e){var n=e.visible,t=Object(u.a)(e,["visible"]);return n?o.a.createElement(ne.a,Object.assign({},t,{color:"cyan"}),"BINARY"):null},de=Object(l.a)(function(e){return o.a.createElement("div",e)})(ie()),pe=Object(l.a)(function(e){var n=e.visible,t=e.toVersion,r=e.newPath,a=Object(u.a)(e,["visible","toVersion","newPath"]);return n?o.a.createElement(g.a,Object.assign({},a,{type:"ghost",shape:"circle",icon:"download",onClick:function(){return window.location=function(e){var n=e.version,t=e.path;return"https://github.com/".concat(x,"/raw/release/").concat(n,"/").concat(t)}({version:t,path:r})}})):null})(ae()),me=Object(l.a)(function(e){var n=e.diffKey,t=(e.isDiffCompleted,e.onCompleteDiff),r=Object(u.a)(e,["diffKey","isDiffCompleted","onCompleteDiff"]);return o.a.createElement(g.a,Object.assign({},r,{type:"ghost",shape:"circle",icon:"check",onClick:function(){return t(n)}}))})(oe(),function(e){return e.isDiffCompleted?"#52c41a":"#24292e"}),be=Object(l.a)(function(e){var n=e.visible,t=(e.isDiffCollapsed,Object(u.a)(e,["visible","isDiffCollapsed"]));return n?o.a.createElement(g.a,Object.assign({},t,{type:"link",icon:"down"})):null})(re(),function(e){return e.isDiffCollapsed?"rotate(-90deg)":"initial"}),ve=Object(l.a)(function(e){var n=e.oldPath,t=e.newPath,a=e.toVersion,i=e.type,c=e.diffKey,s=e.hasDiff,l=e.isDiffCollapsed,f=e.setIsDiffCollapsed,d=e.isDiffCompleted,p=e.onCompleteDiff,m=Object(u.a)(e,["oldPath","newPath","toVersion","type","diffKey","hasDiff","isDiffCollapsed","setIsDiffCollapsed","isDiffCompleted","onCompleteDiff"]);return o.a.createElement("div",m,o.a.createElement(be,{visible:s,isDiffCollapsed:l,onClick:function(){return f(!l)}}),o.a.createElement(se,{oldPath:n,newPath:t,type:i})," ",o.a.createElement(le,{type:i}),o.a.createElement(fe,{visible:!s}),o.a.createElement(de,null,o.a.createElement(r.Fragment,null,o.a.createElement(pe,{visible:!s,toVersion:a,newPath:t}),o.a.createElement(me,{diffKey:c,isDiffCompleted:d,onCompleteDiff:p}))))})(te()),ge=t(60),he=t(125);function je(){var e=Object(s.a)(["\n          margin-bottom: 0;\n        "]);return je=function(){return e},e}function Oe(){var e=Object(s.a)(["\n  font-style: normal;\n  background-color: rgba(27, 31, 35, 0.07);\n  border-radius: 3px;\n  font-size: 85%;\n  margin: 0;\n  padding: 0.2em 0.4em;\n"]);return Oe=function(){return e},e}function Ee(){var e=Object(s.a)(["\n  text-decoration: none;\n  color: #045dc1;\n"]);return Ee=function(){return e},e}var Ve=Object(l.a)(function(e){return o.a.createElement("a",Object.assign({target:"_blank"},e,{rel:"noopener"}))})(Ee()),we=l.a.em(Oe()),xe=function(e){var n=e.forceBlock,t=e.options,r=void 0===t?{}:t,a=Object(u.a)(e,["forceBlock","options"]);return o.a.createElement(he.a,Object.assign({},a,{options:Object(V.a)({},r,{forceBlock:n,overrides:Object(V.a)({},r.overrides,{a:Ve,em:we,code:we,p:l.a.p(je())})})}))};function ye(){var e=Object(s.a)(["\n  margin: 10px;\n  border: 1px solid #ddd;\n  padding: 16px;\n  border-radius: 3px;\n  color: #000;\n"]);return ye=function(){return e},e}var Ce=l.a.div(ye()),De={ADD:"I",DELETE:"D",NEUTRAL:"N"},ke=function(e){var n=e.newPath,t=e.fromVersion,r=e.toVersion,a=k(n);return S({fromVersion:t,toVersion:r}).filter(function(e){var n=e.comments;return n&&n.length>0&&n.some(function(e){return e.fileName===a})}).reduce(function(e,n){var t=n.comments.reduce(function(e,n){var t=n.fileName,r=n.lineChangeType,i=n.lineNumber,c=n.content;return t!==a?e:Object(V.a)({},e,Object(ge.a)({},function(e){var n=e.lineChangeType,t=e.lineNumber;return"".concat(De[n.toUpperCase()]).concat(t)}({lineChangeType:r,lineNumber:i}),o.a.createElement(Se,{content:c})))},{});return Object(V.a)({},e,t)},{})},Se=function(e){var n=e.content;return o.a.createElement(Ce,null,o.a.createElement(xe,null,n.props.children))};function Ne(){var e=Object(s.a)(["\n  .diff-gutter-col {\n    width: 30px;\n  }\n\n  tr.diff-line {\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,\n      monospace;\n  }\n\n  td.diff-gutter {\n    color: rgba(27, 31, 35, 0.3);\n    padding: 0;\n    text-align: center;\n    font-size: 12px;\n    cursor: auto;\n  }\n\n  td.diff-gutter .diff-line-normal {\n    background-color: #cdffd8;\n    border-color: #bef5cb;\n  }\n\n  td.diff-gutter:hover {\n    cursor: pointer;\n    color: rgba(27, 31, 35, 0.6);\n  }\n\n  td.diff-code {\n    font-size: 12px;\n    color: #24292e;\n  }\n\n  td.diff-code-insert .diff-code-edit {\n    background-color: #acf2bd;\n  }\n\n  td.diff-gutter-omit:before {\n    width: 0;\n    background-color: transparent;\n  }\n"]);return Ne=function(){return e},e}function Re(){var e=Object(s.a)(["\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  margin-bottom: 16px;\n  margin-top: 16px;\n"]);return Re=function(){return e},e}var Te=l.a.div(Re()),Pe=Object(l.a)(Z.a)(Ne()),ze=o.a.memo(function(e){var n=e.oldPath,t=e.newPath,a=e.type,i=e.hunks,u=e.fromVersion,s=e.toVersion,l=e.diffKey,f=e.isDiffCompleted,d=e.onCompleteDiff,p=e.selectedChanges,m=e.onToggleChangeSelection,b=Object(r.useState)(function(e){var n=e.type,t=e.hunks;return"delete"===n||t.length>5||void 0}({type:a,hunks:i})),v=Object(c.a)(b,2),g=v[0],h=v[1];return f&&void 0===g&&h(!0),o.a.createElement(Te,null,o.a.createElement(ve,{oldPath:n,newPath:t,toVersion:s,type:a,diffKey:l,hasDiff:i.length>0,isDiffCollapsed:g,setIsDiffCollapsed:h,isDiffCompleted:f,onCompleteDiff:d}),!g&&o.a.createElement(Pe,{viewType:"split",diffType:a,hunks:i,widgets:ke({newPath:t,fromVersion:u,toVersion:s}),selectedChanges:p},function(e){var n={enhancers:[Object(Z.c)(e)]},t=Object(Z.e)(e,n);return e.map(function(e){return o.a.createElement(Z.b,{key:e.content,hunk:e,tokens:t,gutterEvents:{onClick:m}})})}))},function(e,n){return e.isDiffCompleted===n.isDiffCompleted}),Ae=t(127),Le=t.n(Ae);function Ie(){var e=Object(s.a)(["\n  width: 60px;\n  margin: 15px 0;\n  animation: "," 3s linear infinite;\n"]);return Ie=function(){return e},e}function Me(){var e=Object(s.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);return Me=function(){return e},e}var Ke=Object(l.b)(Me()),Be=Object(l.a)(function(e){return o.a.createElement("img",Object.assign({alt:"Loading",title:"Loading"},e,{src:Le.a}))})(Ie(),Ke),Fe=t(61),Ue=t(62),Ge=t(70),He=t(63),We=t(71);function _e(){var e=Object(s.a)(["\n  padding-inline-start: 18px;\n  margin: 10px 0 0;\n"]);return _e=function(){return e},e}function Je(){var e=Object(s.a)(["\n  margin: 15px 0;\n  background-color: #e1e4e8;\n  height: 0.25em;\n  border: 0;\n"]);return Je=function(){return e},e}function Ye(){var e=Object(s.a)(["\n  float: right;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 12px;\n  border-width: 0px;\n  width: 20px;\n  height: 20px;\n  margin-right: 8px;\n  &,\n  &:hover,\n  &:focus {\n    color: #24292e;\n  }\n"]);return Ye=function(){return e},e}function $e(){var e=Object(s.a)(["\n  margin: 0px 10px;\n"]);return $e=function(){return e},e}function qe(){var e=Object(s.a)(["\n  padding: 24px;\n  color: rgba(0, 0, 0, 0.65);\n  border: 1px solid #e8e8e8;\n  border-radius: 3px;\n"]);return qe=function(){return e},e}function Qe(){var e=Object(s.a)(["\n  position: relative;\n  margin-top: 16px;\n  color: rgba(0, 0, 0, 0.65);\n  max-height: ","\n  overflow: hidden;\n  transition: max-height 0.4s ease-out;\n"]);return Qe=function(){return e},e}var Xe=l.a.div(Qe(),function(e){return e.isVisible?"800px":0}),Ze=l.a.div(qe()),en=Object(l.a)(function(e){return o.a.createElement("span",Object.assign({},e,{role:"img","aria-label":"Close useful content section"}),"\ud83d\udce3")})($e()),nn=Object(l.a)(function(e){var n=e.toggleVisibility,t=Object(u.a)(e,["toggleVisibility"]);return o.a.createElement(g.a,Object.assign({},t,{type:"ghost",shape:"circle",icon:"close",onClick:n}))})(Ye()),tn=l.a.hr(Je()),rn=l.a.ol(_e()),on=function(e){function n(){var e,t;Object(Fe.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=Object(Ge.a)(this,(e=Object(He.a)(n)).call.apply(e,[this].concat(o)))).state={isVisible:!0},t.handleToggleVisibility=function(){return t.setState(function(e){return{isVisible:!e.isVisible}})},t}return Object(We.a)(n,e),Object(Ue.a)(n,[{key:"shouldComponentUpdate",value:function(e,n){var t=this.props.isLoading&&!e.isLoading,r=this.state.isVisible&&!n.isVisible;return t||r}},{key:"render",value:function(){var e=this.props,n=e.fromVersion,t=e.toVersion,a=this.state.isVisible,i=S({fromVersion:n,toVersion:t});if(!i.some(function(e){return!!e.usefulContent}))return null;var c=i.length>1;return o.a.createElement(Xe,{isVisible:a},o.a.createElement(Ze,null,o.a.createElement("h2",null,o.a.createElement(en,null)," Useful content for upgrading"),o.a.createElement(nn,{toggleVisibility:this.handleToggleVisibility}),i.map(function(e,n){var t=e.usefulContent,a=e.version.slice(0,4),i=[].concat(Object(X.a)(t.links),[{title:"React Native ".concat(a," changelog"),url:N({version:a})}]);return o.a.createElement(r.Fragment,{key:n},n>0&&o.a.createElement(tn,null),c&&o.a.createElement("h3",null,"Release ",a),o.a.createElement("span",null,t.description),o.a.createElement(rn,null,i.map(function(e,n){var t=e.url,r=e.title;return o.a.createElement("li",{key:"".concat(t).concat(n)},o.a.createElement(Ve,{href:t},r))})))})))}}]),n}(r.Component);function an(){var e=Object(s.a)(["\n  width: 90%;\n"]);return an=function(){return e},e}var cn=l.a.div(an()),un=Object(Z.f)({multiple:!0})(function(e){var n=e.showDiff,t=e.fromVersion,a=e.toVersion,i=e.selectedChanges,u=e.onToggleChangeSelection,s=Object(r.useState)(!0),l=Object(c.a)(s,2),f=l[0],d=l[1],p=Object(r.useState)(null),m=Object(c.a)(p,2),g=m[0],h=m[1],j=Object(r.useState)([]),O=Object(c.a)(j,2),E=O[0],V=O[1],w=function(e){if(E.includes(e))return V(function(n){return n.filter(function(n){return n!==e})});V(function(n){return[].concat(Object(X.a)(n),[e])})};return Object(r.useEffect)(function(){n&&function(){var e=Object(v.a)(b.a.mark(function e(){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,fetch(D({fromVersion:t,toVersion:a}));case 3:return e.next=5,e.sent.text();case 5:n=e.sent,h(Object(Z.d)(n).sort(function(e){return e.newPath.includes("package.json")?-1:1})),d(!1);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[t,n,a]),n?f?o.a.createElement(Be,null):o.a.createElement(cn,null,o.a.createElement(on,{isLoading:f,fromVersion:t,toVersion:a}),g.map(function(e){var n=function(e){var n=e.oldRevision,t=e.newRevision;return"".concat(n).concat(t)}(e);return o.a.createElement(ze,Object.assign({key:"".concat(e.oldRevision).concat(e.newRevision)},e,{type:"new"===e.type?"add":e.type,diffKey:n,fromVersion:t,toVersion:a,isDiffCompleted:E.includes(n),onCompleteDiff:w,selectedChanges:i,onToggleChangeSelection:u}))})):null}),sn=t(128);function ln(){var e=Object(s.a)(["\n  margin-bottom: 5px;\n  margin-left: 15px;\n"]);return ln=function(){return e},e}function fn(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n"]);return fn=function(){return e},e}function dn(){var e=Object(s.a)(["\n  width: 90%;\n  border-radius: 3px;\n"]);return dn=function(){return e},e}function pn(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding-top: 30px;\n"]);return pn=function(){return e},e}var mn=l.a.div(pn()),bn=Object(l.a)(f.a)(dn()),vn=l.a.div(fn()),gn=Object(l.a)(function(e){var n=e.className,t=Object(u.a)(e,["className"]);return o.a.createElement("div",{className:n},o.a.createElement(d.a,t))})(ln()),hn=function(){var e=Object(r.useState)(""),n=Object(c.a)(e,2),t=n[0],a=n[1],i=Object(r.useState)(""),u=Object(c.a)(i,2),s=u[0],l=u[1],f=Object(r.useState)(!1),d=Object(c.a)(f,2),m=d[0],b=d[1];Object(r.useEffect)(function(){p.a.initialize("UA-136307971-1"),p.a.pageview("/")},[]);return o.a.createElement(mn,null,o.a.createElement(bn,null,o.a.createElement(vn,null,o.a.createElement("a",{href:sn.a},o.a.createElement("h1",null,"React Native upgrade guide")),o.a.createElement(gn,{href:"https://github.com/react-native-community/upgrade-helper","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star react-native-community/upgrade-helper on GitHub"},"Star")),o.a.createElement(Q,{showDiff:function(e){var n=e.fromVersion,t=e.toVersion;n!==t&&(a(n),l(t),b(!0))}})),o.a.createElement(un,{showDiff:m,fromVersion:t,toVersion:s}))},jn=function(e){return o.a.createElement(hn,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(jn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},47:function(e,n,t){"use strict";t.r(n),t.d(n,"versions",function(){return r});var r=["0.59.0","0.58.0","0.57.0"]},94:function(e,n,t){"use strict";t.r(n),n.default={usefulContent:{description:"React Native 0.57 includes 599 commits by 73 different contributors, it has improvements to Accessibility APIs, Babel 7 stable support and more.",links:[{title:"Tutorial on upgrading to React Native 0.57",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.57/"}]}}},95:function(e,n,t){"use strict";t.r(n),n.default={usefulContent:{description:"React Native 0.58 is the first release of 2019, it includes work for modernizing and strengthening flow types for core components and  numerous crash fixes and resolutions for unexpected behaviors.",links:[{title:"Tutorial on upgrading to React Native 0.58",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.58/"}]}}},96:function(e,n,t){"use strict";t.r(n),n.default={usefulContent:{description:"React Native 0.59 includes React Hooks, performance gains on Android and lots of cool stuff.",links:[{title:"Official blog post about the major changes on React Native 0.59",url:"https://facebook.github.io/react-native/blog/2019/03/12/releasing-react-native-059"},{title:"Tutorial on upgrading to React Native 0.59",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.59/"}]}}}},[[135,1,2]]]);
//# sourceMappingURL=main.5a1db756.chunk.js.map