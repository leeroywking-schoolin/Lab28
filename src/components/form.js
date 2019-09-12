import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      current: '',
      items: this.props.items
    }
  }
  bananaHandler = (event) => {
    event.preventDefault();
    this.props.action(this.state.current);
    this.setState({current: ''});
  }

  bananaCapture = (event) => {
    let current = event.target.value;
    this.setState({current})
  }

  render() {
    return <form onSubmit={this.bananaHandler}> 
    <input onChange={this.bananaCapture}/> Add New Item</form>
  }

}

export default Form;
