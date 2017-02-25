var GroceryList = (props) => (
  <ul>
    {props.groceries.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onMouseEnterHandler() {
    this.setState({
      hover: true
    });
  }

  onMouseLeaveHandler() {
    this.setState({
      hover: false
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseEnter={this.onMouseEnterHandler.bind(this)} onMouseLeave={this.onMouseLeaveHandler.bind(this)}>{this.props.item}</li>
    );
  }
}

var myGroceryList = ['bananas', 'cookies', 'whey protein', 'eggs'];

ReactDOM.render(<GroceryList groceries={myGroceryList}/>, document.getElementById("app"))
