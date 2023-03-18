import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickOnGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  clickOnNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  clickOnBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(
      ((this.countTotalFeedback() - this.state.neutral - this.state.bad) *
        100) /
        this.countTotalFeedback()
    );
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.clickOnGood}>
          Good
        </button>
        <button type="button" onClick={this.clickOnNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.clickOnBad}>
          Bad
        </button>

        <h2>Statistic</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>
          Positive feedback:
          {this.countPositiveFeedbackPercentage()}%
        </p>
      </div>
    );
  }
}

export default Feedback;
