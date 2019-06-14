export const mdText = `
Context 我们平常可能比较少用，但假如我们有用 \`react-redux\` 库的话，我们其实就已经利用了 Context 这个特性了。

\`Provider\` 接收一个 \`store\` 作为参数，然后它通过 Context 传递，之后 \`connect\` 这个高阶组件里就可以获取到 \`store\` 的值了。

`

export const code1 = `
// 'tomato' 是我们的默认值
// 我们可以使用 ThemeContext.Provider 来覆盖它
const ThemeContext = React.createContext("tomato");

class Button extends PureComponent {
  static contextType = ThemeContext;

  render() {
    return (
      <button style={{ color: this.context }}>
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

const Context = () => (
  <div>
    <ThemeContext.Provider value="blue">
      <Header />
    </ThemeContext.Provider>
  </div>
)

`

export const code2 = `
// 外层已经声明了 ThemeContext.Provider
// Consumer 中只能包含函数，且只能包含一个组件，

const HeaderFunctional = ({ theme }) => {
  return (
    <div style={{ color: theme }}>
      我虽然是函数式组件，但我仍然拿到了{theme}
    </div>
  );
};

 <ThemeContext.Consumer>
  {value => <HeaderFunctional theme={value} />}
 </ThemeContext.Consumer>
`

export const code3 = `
  constructor(props) {
    super(props);
    this.state = {
      themeContext: "blue"
    };
  }
  
  handleChangeThemeContext = () => {
    const { themeContext } = this.state;
    this.setState({
      themeContext: themeContext === "blue" ? "red" : "blue"
    });
  };

  
  <ThemeContext.Provider value={themeContext}>
    {'....'}
    <button onClick={this.handleChangeThemeContext}>
      修改 context 的值。
    </button>
  </ThemeContext.Provider>

`
