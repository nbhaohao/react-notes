import React, { Suspense, lazy, PureComponent } from "react";
import { MarkdownViewer } from "../../components/MarkdownViewer";
import { Block } from "../../components/Block";
import { CodeViewer } from "../../components/CodeViewer";
import { markdownText, code1, code2, code3, code4 } from "./str";

const lazyExample = (time, path) =>
  lazy(
    () =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(import(`${path}`));
        }, time);
      })
  );

const Modal = lazyExample(2000, "./Modal");

const Test = lazyExample(2000, "./Test");

const TestFour = lazyExample(4000, "./Test");

class CodeScript extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  render() {
    const { showModal } = this.state;
    return (
      <div>
        <MarkdownViewer text={markdownText} />
        <Block>
          <Suspense fallback={<div>Loading...</div>}>
            <Test />
          </Suspense>
          <CodeViewer codeString={code1} />
        </Block>
        <Block>
          <Suspense
            fallback={
              <div>
                加载 2 个异步组件(可以和上面的组件做对比，上面的 2 秒，这里的 4
                秒)
              </div>
            }
          >
            <Test />
            <TestFour />
          </Suspense>
          <CodeViewer codeString={code2} />
        </Block>
        <Block>
          在 Route 中使用代码分割
          <CodeViewer codeString={code3} />
        </Block>
        <Block>我们还可以通过一个按钮来触发加载组件的动作</Block>
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
        <CodeViewer codeString={code4} />
      </div>
    );
  }
}

export { CodeScript as default };
