(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{176:function(e,n,t){var a={".":[36],"./":[36],"./Modal":[68,1],"./Modal.js":[68,1],"./Test":[69,2],"./Test.js":[69,2],"./index":[36],"./index.js":[36],"./str":[51],"./str.js":[51]};function o(e){if(!t.o(a,e))return Promise.resolve().then(function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=a[e],o=n[0];return Promise.all(n.slice(1).map(t.e)).then(function(){return t(o)})}o.keys=function(){return Object.keys(a)},o.id=176,e.exports=o},32:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var a=t(0),o=t.n(a),r=t(43),l=t.n(r),c=function(e){var n=e.text;return o.a.createElement(l.a,{source:n})}},33:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var a=t(0),o=t.n(a),r=function(e){var n=e.children;return o.a.createElement("div",{style:{border:"1px solid black",padding:"32px",marginBottom:"20px"}},n)}},34:function(e,n,t){"use strict";t.d(n,"a",function(){return s});var a=t(0),o=t.n(a),r=t(53),l=t(177),c=t(50);r.a.registerLanguage("jsx",c.a);var s=function(e){var n=e.codeString;return o.a.createElement(r.a,{language:"jsx",style:l.a},n)}},36:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return w});var a=t(40),o=t(41),r=t(52),l=t(42),c=t(54),s=t(0),u=t.n(s),i=t(32),d=t(33),m=t(34),p=t(51),f=function(e,n){return Object(s.lazy)(function(){return new Promise(function(a){setTimeout(function(){a(t(176)("".concat(n)))},e)})})},v=f(2e3,"./Modal"),E=f(2e3,"./Test"),h=f(4e3,"./Test"),w=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(l.a)(n).call(this,e))).state={showModal:!1},t}return Object(c.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){var e=this,n=this.state.showModal;return u.a.createElement("div",null,u.a.createElement(i.a,{text:p.markdownText}),u.a.createElement(d.a,null,u.a.createElement(s.Suspense,{fallback:u.a.createElement("div",null,"Loading...")},u.a.createElement(E,null)),u.a.createElement(m.a,{codeString:p.code1})),u.a.createElement(d.a,null,u.a.createElement(s.Suspense,{fallback:u.a.createElement("div",null,"\u52a0\u8f7d 2 \u4e2a\u5f02\u6b65\u7ec4\u4ef6(\u53ef\u4ee5\u548c\u4e0a\u9762\u7684\u7ec4\u4ef6\u505a\u5bf9\u6bd4\uff0c\u4e0a\u9762\u7684 2 \u79d2\uff0c\u8fd9\u91cc\u7684 4 \u79d2)")},u.a.createElement(E,null),u.a.createElement(h,null)),u.a.createElement(m.a,{codeString:p.code2})),u.a.createElement(d.a,null,"\u5728 Route \u4e2d\u4f7f\u7528\u4ee3\u7801\u5206\u5272",u.a.createElement(m.a,{codeString:p.code3})),u.a.createElement(d.a,null,"\u6211\u4eec\u8fd8\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a\u6309\u94ae\u6765\u89e6\u53d1\u52a0\u8f7d\u7ec4\u4ef6\u7684\u52a8\u4f5c"),u.a.createElement("div",null,u.a.createElement("button",{onClick:function(){return e.setState(function(e){return{showModal:!e.showModal}})}},"\u70b9\u51fb\u52a0\u8f7d\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u770b\u5230 network \u7684\u8bf7\u6c42"),u.a.createElement(s.Suspense,{fallback:u.a.createElement("div",null,"loading")},n&&u.a.createElement(v,null))),u.a.createElement(m.a,{codeString:p.code4}))}}]),n}(s.PureComponent)},51:function(e,n,t){"use strict";t.r(n),t.d(n,"markdownText",function(){return a}),t.d(n,"code1",function(){return o}),t.d(n,"code2",function(){return r}),t.d(n,"code3",function(){return l}),t.d(n,"code4",function(){return c});var a="\n  \u4ee3\u7801\u5206\u5272\u662f `webpack` \u6240\u63d0\u4f9b\u4e86\u4e00\u79cd\u80fd\u529b\uff0c\u53ef\u4ee5\u8ba9\u6a21\u5757\u751f\u6210\u72ec\u7acb\u7684 JS \u6587\u4ef6\uff0c\n  \u4e3b\u8981\u662f\u4e3a\u4e86\u51cf\u5c0f `bundle.js` \u7684\u4f53\u79ef\uff0c\u6240\u4ee5\u5404\u4e2a\u6846\u67b6\u90fd\u6709\u63d0\u4f9b\u7ec4\u4ef6\u52a8\u6001\u52a0\u8f7d\u7684\u5199\u6cd5\u3002\n  \n  \u5728 React \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 `React.lazy` \u6765\u52a8\u6001\u52a0\u8f7d\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u6bd4\u5982\u6211\u4eec\u4e0b\u9762\u6709\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u5b83\u4f1a\u5728\u9875\u9762\u52a0\u8f7d\u7684 2 \u79d2\u4e4b\u540e\u518d\u52a0\u8f7d\u8fdb\u6765\u3002\n  \n  \u4e0d\u8fc7 React.lazy \u4f3c\u4e4e\u4e00\u5b9a\u8981\u642d\u914d `Suspense`, \u4e0d\u7136 React \u4f1a\u62a5\u9519\u3002\n  \n  `Suspense` \u4e2d\u53ef\u4ee5\u653e\u591a\u4e2a\u5f02\u6b65\u7ec4\u4ef6\uff0c\u662f\u7b49\u6240\u6709\u5f02\u6b65\u7ec4\u4ef6\u90fd\u52a0\u8f7d\u5b8c\u6210\u4e86\uff0c`fallback` \u624d\u4f1a\u6d88\u5931\u3002\n  **\u53e6\u5916\u6211\u4eec\u5f15\u5165\u7684\u662f\u540c\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u4e5f\u5c31\u662f\u8bf4\u662f\u540c\u4e00\u4efd js, \u6240\u4ee5\u6211\u4eec\u5e76\u4e0d\u4f1a\u91cd\u590d\u8bf7\u6c42\u3002**\n  \n  \u8def\u7531\u529f\u80fd\u662f\u975e\u5e38\u503c\u5f97\u505a\u4ee3\u7801\u5206\u5272\u7684\u3002\u8fd9\u4e2a Demos \u91cc\u521a\u597d\u6709 `react-router-dom` \u5e93\uff0c\u6240\u4ee5\u4f60\u5728\u5207\u6362\u8def\u7531\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u770b\u5230\u77ed\u6682\u7684 Loading.\n  \n  **\u8981\u6ce8\u610f\uff1aReact.lazy \u53ea\u652f\u6301 default \u5bfc\u51fa\u3002**\n",o='\nconst Test = lazy(\n  () =>\n    new Promise(resolve => {\n      setTimeout(() => {\n        resolve(import("./Test"));\n      }, 2000);\n    })\n);\n\n<Suspense fallback={<div>Loading...</div>}>\n  <Test />\n</Suspense>\n',r='\nconst lazyExample = time =>\n  lazy(\n    () =>\n      new Promise(resolve => {\n        setTimeout(() => {\n          resolve(import("./Test"));\n        }, time);\n      })\n  );\n\nconst Test = lazyExample(2000);\n\nconst TestFour = lazyExample(4000);\n<Suspense fallback={<div>\u52a0\u8f7d 2 \u4e2a\u5f02\u6b65\u7ec4\u4ef6</div>}>\n  <Test />\n  <TestFour />\n</Suspense>\n',l='\nconst routesConfig = [\n  {\n    path: "/codeScript/",\n    name: "\u4ee3\u7801\u5206\u5272",\n    component: lazy(() => import("./pages/CodeScript"))\n  },\n  {\n    path: "/context/",\n    name: "Context",\n    component: lazy(() => import("./pages/Context"))\n  }\n];\n<Suspense fallback={<div>\u52a0\u8f7d\u8def\u7531\u4e2d~~~~~~~...</div>}>\n  {routesConfig.map(({ path, component }) => {\n    return <Route key={path} path={path} exact component={component} />\n  })}\n</Suspense>\n',c='\nconst lazyExample = (time, path) =>\n  lazy(\n    () =>\n      new Promise(resolve => {\n        setTimeout(() => {\n          resolve(import(`${path}`));\n        }, time);\n      })\n  );\n\nconst Modal = lazyExample(2000, "./Modal");\n\n// showModal \u9ed8\u8ba4\u662f false\n\n <div>\n  <button\n    onClick={() =>\n      this.setState(prevState => ({ showModal: !prevState.showModal }))\n    }\n  >\n    \u70b9\u51fb\u52a0\u8f7d\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u770b\u5230 network \u7684\u8bf7\u6c42\n  </button>\n  <Suspense fallback={<div>loading</div>}>\n    {showModal && <Modal />}\n  </Suspense>\n</div>\n'}}]);
//# sourceMappingURL=6.46c7229a.chunk.js.map