import React from "react";

import "./styles.css";

import Form from "./components/form.js";
import Header from "./components/header.js";
import List from "./components/list.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      items: ["default item"]
    };
  }

  addIt = string => {
    this.setState({ items: [...this.state.items, string] });
  };

  killIt = idx => {
    this.state.items.splice(idx,1)
    this.setState({ items: this.state.items})
  };

  render() {
    return (
      <>
        <Header title="This is a to do list app" />
        <Form action={this.addIt} items={this.state.items} />
        <List action={this.killIt} items={this.state.items} />
      </>
    );
  }
}

export default App;
