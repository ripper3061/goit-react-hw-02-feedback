import PropTypes from 'prop-types';
import { FeedbackList, FeedbackItem, TextItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <FeedbackList>
      <FeedbackItem>
        <TextItem>Good:</TextItem>
        <TextItem>{good}</TextItem>
      </FeedbackItem>
      <FeedbackItem>
        <TextItem>Neutral:</TextItem>
        <TextItem>{neutral}</TextItem>
      </FeedbackItem>
      <FeedbackItem>
        <TextItem>Bad:</TextItem>
        <TextItem>{bad}</TextItem>
      </FeedbackItem>
      <FeedbackItem>
        <TextItem>Total:</TextItem>
        <TextItem>{total}</TextItem>
      </FeedbackItem>
      <FeedbackItem>
        <TextItem>Positive feedback:</TextItem>
        <TextItem>{positivePercentage}%</TextItem>
      </FeedbackItem>
    </FeedbackList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
