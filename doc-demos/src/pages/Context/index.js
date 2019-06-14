import React, { PureComponent } from "react";
import { MarkdownViewer } from "../../components/MarkdownViewer";
import { Block } from "../../components/Block";
import { CodeViewer } from "../../components/CodeViewer";
import { mdText, code1, code2, code3 } from "./str";

const ThemeContext = React.createContext("tomato");

class Button extends PureComponent {
  static contextType = ThemeContext;

  render() {
    return (
      <button style={{ color: this.context.color }}>
        我通过 context 拿到了 theme 值
      </button>
    );
  }
}

const Header = () => (
  <div>
    我并不需要将 theme 属性传递给 Button 组件，它自己就可以拿到
    <Button />
  </div>
);

const HeaderFunctional = ({ theme }) => {
  return (
    <div style={{ color: theme }}>
      我虽然是函数式组件，但我仍然拿到了{theme}
    </div>
  );
};

const HeaderCanChangeContext = ({ theme, changeTheme }) => {
  return (
    <div style={{ color: theme }}>
      我虽然是函数式组件，但我仍然拿到了{theme}，而且我还可以修改 theme.
      <button onClick={changeTheme}>change</button>
    </div>
  );
};

class Context extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      themeContext: {
        color: "blue",
        changeTheme: this.handleChangeThemeContext
      }
    };
  }

  handleChangeThemeContext = () => {
    const { themeContext } = this.state;
    this.setState({
      themeContext: {
        ...themeContext,
        color: themeContext.color === "blue" ? "red" : "blue"
      }
    });
  };

  render() {
    const { themeContext } = this.state;
    return (
      <div>
        <MarkdownViewer text={mdText} />
        <ThemeContext.Provider value={themeContext}>
          <Block>
            <p>
              普通的 Class 组件要使用 Context 的话，需要使用利用 contextType
              来指定使用哪一个 Context
            </p>
            <Header />
            <CodeViewer codeString={code1} />
          </Block>
          <Block>
            <p>如果想在函数式组件中使用，则需要借助 MyContext.Consumer</p>
            <ThemeContext.Consumer>
              {value => <HeaderFunctional theme={value.color} />}
            </ThemeContext.Consumer>
            <CodeViewer codeString={code2} />
          </Block>
          <Block>
            <p>
              我们的 Context
              当然可以支持修改，且使用到的组件会自动渲染，如果要动态修改一个
              Context, 我们需要把它作为 state.
            </p>
            <button onClick={this.handleChangeThemeContext}>
              修改 context 的值。
            </button>
            <ThemeContext.Consumer>
              {value => <HeaderFunctional theme={value.color} />}
            </ThemeContext.Consumer>
            <CodeViewer codeString={code3} />
          </Block>
          <Block>
            <p>
              文档还提供了，如果子组件需要修改 context
              的值的话，可以让父组件把函数也作为 Context 的一部分传递下去。
            </p>
            <ThemeContext.Consumer>
              {value => (
                <HeaderCanChangeContext
                  theme={value.color}
                  changeTheme={value.changeTheme}
                />
              )}
            </ThemeContext.Consumer>
          </Block>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export { Context as default };
