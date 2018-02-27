import React from 'react';
import Fact from './Fact.jsx';
import VideoFact from './VideoFact.jsx';
import { Container, Jumbotron } from 'reactstrap';
import PropTypes from 'prop-types';

export default class FactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { facts: [] };
  }

  componentDidMount() {
    fetch('/api/facts')
      .then(facts => {
        console.log(facts);
        this.setState({ facts });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Container className="FactContainer">
        <Jumbotron className="FactJumbotron">
          <Fact facts={this.state.facts} />
          <VideoFact />
        </Jumbotron>
      </Container>
    );
  }
}

FactComponent.propTypes = {
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
};
