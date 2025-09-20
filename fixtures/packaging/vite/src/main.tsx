import './style.css'

console.log("react is ", React)
console.log("react-dom is ", ReactDOM)

const root = ReactDOM.createRoot(document.getElementById("app"))

class ClassComponent extends React.Component {
  render() {
    const { initialCount } = this.props;

    return <p>Class Count is: {initialCount}</p>;
  }
}

root.render(<div>hello</div>)
