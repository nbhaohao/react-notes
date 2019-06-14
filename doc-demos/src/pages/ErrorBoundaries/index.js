import React, { PureComponent } from "react";
import { MarkdownViewer } from "../../components/MarkdownViewer";
import { Block } from "../../components/Block";
import { CodeViewer } from "../../components/CodeViewer";
import { markdownText, code1, code2 } from "./str";

class ErrorCatcher extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showErrorUI: false
    };
  }

  static getDerivedStateFromError(error) {
    // 返回一个 state 值，用来渲染备用 UI
    return {
      showErrorUI: true
    };
  }

  componentDidCatch(error, errorInfo) {
    // 这个生命周期函数中适合将错误上传至服务端
  }

  render() {
    const { showErrorUI } = this.state;
    const { children } = this.props;
    return showErrorUI ? (
      <h1 style={{ color: "red" }}>让一切看上去不那么白。</h1>
    ) : (
      children
    );
  }
}

class NormalView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [{ name: "1" }]
    };
  }

  boom = () => {
    this.setState({
      dataList: null
    });
  };

  render() {
    const { dataList } = this.state;
    return (
      <div style={{ border: "1px solid tomato" }}>
        {dataList.map(item => (
          <span key={item.name}>{item.name}</span>
        ))}
        <p>我是一个即将发生错误的组件</p>
        <button onClick={this.boom}>点击我触发错误</button>
      </div>
    );
  }
}

export const ErrorBoundaries = () => {
  return (
    <div>
      <MarkdownViewer text={markdownText} />
      <Block>
        <ErrorCatcher>
          <NormalView />
        </ErrorCatcher>
        <p>
          看上去我们好像是按了一下按钮，发生错误，那上文中提到错误边界是无法捕获事件处理中的错误的，实际上我们这里的错误并没有发生在事件处理函数中，我们在
          onClick 中把原来的数组 赋值为 null, 导致 render 函数中的 dataList.map
          方法出错。
        </p>
        <CodeViewer codeString={code2} />
        <p>
          文档中提到，如果一个组件中定义了 getDerivedStateFromError 或者是
          componentDidCatch 生命周期函数中的任意一个，它就是一个错误边界组件。
        </p>
        <CodeViewer codeString={code1} />
      </Block>
    </div>
  );
};

export { ErrorBoundaries as default };
