export const markdownText = `
  代码分割是 \`webpack\` 所提供了一种能力，可以让模块生成独立的 JS 文件，
  主要是为了减小 \`bundle.js\` 的体积，所以各个框架都有提供组件动态加载的写法。
  
  在 React 中，我们可以使用 \`React.lazy\` 来动态加载一个组件，比如我们下面有一个组件，它会在页面加载的 2 秒之后再加载进来。
  
  不过 React.lazy 似乎一定要搭配 \`Suspense\`, 不然 React 会报错。
  
  \`Suspense\` 中可以放多个异步组件，是等所有异步组件都加载完成了，\`fallback\` 才会消失。
  **另外我们引入的是同一个组件，也就是说是同一份 js, 所以我们并不会重复请求。**
  
  路由功能是非常值得做代码分割的。这个 Demos 里刚好有 \`react-router-dom\` 库，所以你在切换路由的时候，可以看到短暂的 Loading.
  
  **要注意：React.lazy 只支持 default 导出。**
`;

export const code1 = `
const Test = lazy(
  () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(import("./Test"));
      }, 2000);
    })
);

<Suspense fallback={<div>Loading...</div>}>
  <Test />
</Suspense>
`;

export const code2 = `
const lazyExample = time =>
  lazy(
    () =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(import("./Test"));
        }, time);
      })
  );

const Test = lazyExample(2000);

const TestFour = lazyExample(4000);
<Suspense fallback={<div>加载 2 个异步组件</div>}>
  <Test />
  <TestFour />
</Suspense>
`;

export const code3 = `
const routesConfig = [
  {
    path: "/codeScript/",
    name: "代码分割",
    component: lazy(() => import("./pages/CodeScript"))
  },
  {
    path: "/context/",
    name: "Context",
    component: lazy(() => import("./pages/Context"))
  }
];
<Suspense fallback={<div>加载路由中~~~~~~~...</div>}>
  {routesConfig.map(({ path, component }) => {
    return <Route key={path} path={path} exact component={component} />
  })}
</Suspense>
`;

export const code4 = `
const lazyExample = (time, path) =>
  lazy(
    () =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(import(\`\${path}\`));
        }, time);
      })
  );

const Modal = lazyExample(2000, "./Modal");

// showModal 默认是 false

 <div>
  <button
    onClick={() =>
      this.setState(prevState => ({ showModal: !prevState.showModal }))
    }
  >
    点击加载组件，可以看到 network 的请求
  </button>
  <Suspense fallback={<div>loading</div>}>
    {showModal && <Modal />}
  </Suspense>
</div>
`;
