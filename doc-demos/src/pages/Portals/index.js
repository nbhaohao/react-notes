import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import { MarkdownViewer } from "../../components/MarkdownViewer";
import { CodeViewer } from "../../components/CodeViewer";
import { Block } from "../../components/Block";
import { markdownText, code1 } from "./str";

const BaseModalContent = ({ show, onCancel }) =>
  show && (
    <div
      style={{
        zIndex: 200,
        background: "white",
        position: "fixed",
        width: "200px",
        height: "200px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: "1px solid tomato"
      }}
    >
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
      <div
        onClick={() => {
          console.log("haha");
        }}
      >
        <MarkdownViewer text={markdownText} />
        <Block>
          <button onClick={this.handleChangeModalVisible(true)}>
            show modal
          </button>
          <CodeViewer codeString={code1} />
          <BaseModalWrapper
            show={modalVisible}
            onCancel={this.handleChangeModalVisible(false)}
          />
        </Block>
      </div>
    );
  }
}

export { Portals as default };
