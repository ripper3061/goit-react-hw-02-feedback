import PropTypes from 'prop-types';

export const Feedback = () => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <button type="button">Good</button>
      <button type="button">Neutral</button>
      <button type="button">Bad</button>

      <h2>Statistic</h2>
      <p>Good:</p>
      <p>Neutral:</p>
      <p>Bad:</p>
    </div>
  );
};
