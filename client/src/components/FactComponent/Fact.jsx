import React from 'react';
import PropTypes from 'prop-types';

const Fact = props => (
  <h1 className="display-3">DC FACTTT OF THE DAY AK {props.facts.name}</h1>
);

export default Fact;

Fact.propTypes = {
  facts: PropTypes.array,
}
