export const markdownText = `
Refs 转发演示了父组件如何拿到子组件中的 DOM 节点实例，或者是组件实例，具体用到的 API 是 \`React.forwardRef\`.

\`React.createRef\` 有点像一个高阶函数，它提供的 \`ref\` 参数允许被包裹的组件将 \`ref\` 指向任何想要指向的组件。 
`

export const code1 = `
const BaseInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref} />
    </div>
  );
});

class Parent extends PureComponent {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleFocusInput = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        我是一个 Parent 组件，我希望拿到子组件中的 ref
        <button onClick={this.handleFocusInput}>
          调用子组件中的 input.focus
        </button>
        <BaseInput ref={this.inputRef} />
      </div>
    );
  }
}
`

export const code2 = `
class BaseAlert extends PureComponent {
  showAlert() {
    const { message } = this.props;
    alert(\`base alert \${message}\`);
  }

  render() {
    return null;
  }
}

const BaseAlertRefWrapper = React.forwardRef((props, ref) => {
  return <BaseAlert ref={ref} {...props} />;
});

class Parent extends PureComponent {
  constructor(props) {
    super(props);
    this.alertRef = React.createRef();
  }

  handleAlert = () => {
    this.alertRef.current.showAlert();
  };

  render() {
    return (
      <div>
        <button onClick={this.handleAlert}>调用BaseAlert 的 alert</button>
        <BaseAlertRefWrapper ref={this.alertRef} message="hello everyone" />
      </div>
    );
  }
}
`

export const code3 = `
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



constructor(props) {
    super(props);
    this.innerInputRef = React.createRef();
  }

  handleClassInnerInputFocus = () => {
    this.innerInputRef.current.focus();
  };


<div>
  <button onClick={this.handleClassInnerInputFocus}>
    调用 Class 组件内部的 DOM 元素
  </button>
  <BaseClassInputRefWrapper ref={this.innerInputRef} />
</div> 
`