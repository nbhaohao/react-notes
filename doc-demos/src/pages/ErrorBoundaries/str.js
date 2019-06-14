export const markdownText = `
  参与工作中的项目开发的时候就感觉，前端并不流行错误处理，所以如果后端传过来的值有一点问题，整个网站就白了。
  
  如果用 TypeScript, 则可能会减少这种情况发生的几率；React 也提供了 错误边界 这个特性，在组件发生错误的时候，
  
  它可以拿出备用的 UI 页面，让一切看上去不那么白，不过文档也提到了，下面几种错误它是捕获不到的。
  
  * 事件处理
  * 异步代码
  * 服务端渲染
  * 它自身抛出来的错误
  
  **注意：在开发环境下 create-react-app 仍然会显示错误堆栈的弹框，不过正式环境中不会。**
`
export const code1 = `
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

`

export const code2 = `
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
      <div>
        {dataList.map(item => (
          <span key={item.name}>{item.name}</span>
        ))}
        <button onClick={this.boom}>点击我触发错误</button>
      </div>
    );
  }

`