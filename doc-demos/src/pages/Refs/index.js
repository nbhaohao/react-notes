import React, { PureComponent } from "react";
import { MarkdownViewer } from "../../components/MarkdownViewer";
import { Block } from "../../components/Block";
import { CodeViewer } from "../../components/CodeViewer";
import { markdownText, code1, code2, code3 } from "./str";

const BaseInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref} />
    </div>
  );
});

class BaseAlert extends PureComponent {
  showAlert() {
    const { message } = this.props;
    alert(`base alert ${message}`);
  }

  render() {
    return null;
  }
}

const BaseAlertRefWrapper = React.forwardRef((props, ref) => {
  return <BaseAlert ref={ref} {...props} />;
});

class BaseClassInput extends PureComponent {
  render() {
    const { innerRef } = this.props;
    return (
      <div>
        <input ref={innerRef} />
      </div>
    );
  }
}

const BaseClassInputRefWrapper = React.forwardRef((props, ref) => {
  return <BaseClassInput {...props} innerRef={ref} />;
});

class Parent extends PureComponent {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.alertRef = React.createRef();
    this.innerInputRef = React.createRef();
  }

  handleFocusInput = () => {
    this.inputRef.current.focus();
  };

  handleAlert = () => {
    this.alertRef.current.showAlert();
  };

  handleClassInnerInputFocus = () => {
    this.innerInputRef.current.focus();
  };

  render() {
    const { mode } = this.props;
    return (
      <div>
        我是一个 Parent 组件，我希望拿到子组件中的 ref
        {mode === "functionalInput" && (
          <div style={{ display: "flex" }}>
            <button onClick={this.handleFocusInput}>
              调用子组件中的 input.focus
            </button>
            <BaseInput ref={this.inputRef} />
          </div>
        )}
        {mode === "classAlert" && (
          <div>
            <button onClick={this.handleAlert}>调用BaseAlert 的 alert</button>
            <BaseAlertRefWrapper ref={this.alertRef} message="hello everyone" />
          </div>
        )}
        {mode === "classDom" && (
          <div>
            <button onClick={this.handleClassInnerInputFocus}>
              调用 Class 组件内部的 DOM 元素
            </button>
            <BaseClassInputRefWrapper ref={this.innerInputRef} />
          </div>
        )}
      </div>
    );
  }
}

export class Refs extends PureComponent {
  render() {
    return (
      <div>
        <MarkdownViewer text={markdownText} />
        <Block>
          <p>这是一个父组件拿到子组件 ref 的示例</p>
          <Parent mode="functionalInput" />
          <CodeViewer codeString={code1} />
        </Block>
        <Block>
          <p>Ref 不仅可以指向 DOM 元素，还可以指向我们的 Class 组件</p>
          <Parent mode="classAlert" />
          <CodeViewer codeString={code2} />
        </Block>
        <Block>
          <p>
            如果不想将 Ref 指向 Class 组件的实例上，我们可以给 ref
            取一个别名，然后传递进组件中，然后挂载到任意的位置
          </p>
          <Parent mode="classDom" />
          <CodeViewer codeString={code3} />
        </Block>
      </div>
    );
  }
}

export { Refs as default };
