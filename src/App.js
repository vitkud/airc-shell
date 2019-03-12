import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      component: null
    };
  }

  handleClick = () => {

    import('./components/A')
      .then((res) => {
        console.log(res.default);
        this.setState({ component: res.default });
      })
      .catch(err => {
        console.error(err);
      });
  };

  renderComponent() {
    const { component } = this.state;

    if ( component ) {
      const Module = component;
      return <Module />;
    }
    

    return (<div>empty</div>);
  }

  render() {
    return (
      <div>
        {this.renderComponent()}
        <button onClick={this.handleClick}>Load</button>
      </div>
    );
  }
}

export default App;