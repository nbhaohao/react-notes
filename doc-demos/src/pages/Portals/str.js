export const markdownText = `
  在我们开发组件的时候，会存在一些特殊的组件，比如 Toast, Modal, 如果它作为某个组件的子元素，默认是挂载到最近的父节点上面的，
  但是如果是一个 Modal 的话，就显得不那么合适了，我们更希望 Modal 可以直接被挂载到 body 上，这样它在显示的时候层级会更高。
  那 React 提供了一个 API 来做到这个事情，作用是将任何一个可渲染的 React 组件，挂载到任意一个 DOM 元素上：\`ReactDOM.createPortal(child, container)\`
  
  **注意：即使这个元素被挂载到了其他父节点，它的事件冒泡仍然会按照 JSX 结构向上传递。**
`

export const code1 = `
const BaseModalContent = ({ show, onCancel }) =>
  show && (
    <div style={{zIndex: 200, background: 'white', position: 'fixed', width: '200px', height: '200px', top: '50%', 
    left: '50%', transform: 'translate(-50%, -50%)', border: '1px solid tomato'}}>
      <p>我是一个 Modal，我被挂载到 body 上了</p>
      <button onClick={onCancel}>关闭 Modal</button>
    </div>
  );

class BaseModalWrapper extends PureComponent {
  render() {
    const { show } = this.props;
    if (!show) {
      return null;
    }
    return ReactDOM.createPortal(
      <BaseModalContent {...this.props} />,
      document.body
    );
  }
}

export class Portals extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  handleChangeModalVisible = bool => () => {
    this.setState({
      modalVisible: bool
    });
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <div>
        <button onClick={this.handleChangeModalVisible(true)}>
          show modal
        </button>
        <BaseModalWrapper
          show={modalVisible}
          onCancel={this.handleChangeModalVisible(false)}
        />
      </div>
    );
  }
}


`