import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderFeedback from '../Components/HeaderFeedback';

class Feedback extends Component {
  feedback() {
    const { assertions } = this.props;
    const tres = 3;
    if (assertions < tres) {
      return 'Podia ser melhor...';
    }
    return 'Mandou bem!';
  }

  render() {
    return (
      <div>
        <HeaderFeedback />
        <p data-testid="feedback-text">{ this.feedback() }</p>
      </div>
    );
  }
}

const mapStateToProp = (state) => ({
  assertions: state.player.assertions,

});
Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
};

export default connect(mapStateToProp)(Feedback);
