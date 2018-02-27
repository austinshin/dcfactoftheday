import React from 'react';
import FactComponent from './FactComponent/FactComponent.jsx';
import SecretLoginComponent from './SecretLoginComponent/SecretLoginComponent.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <SecretLoginComponent />
        <FactComponent />
      </div>
    );
  }
}
export default App;
