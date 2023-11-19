import { useState } from 'react';
import { Section } from './Title/sectionTitle';
import { Notification } from './NotificationMsg/notificationMessage';
import { Statistics } from './Statistics/statistics';
import { FeedbackOptions } from './FeedbackOptions/feedbackOptions ';

export const App = () => {
  const [good, leftGood] = useState(0);
  const [neutral, leftNeutral] = useState(0);
  const [bad, leftBad] = useState(0);

  const onleaveFeedback = event => {
    switch (event) {
      case 'good':
        leftGood(prevState => prevState + 1);
        break;
      case 'neutral':
        leftNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        leftBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return Math.round((good / totalFeedback) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onleaveFeedback={onleaveFeedback}
          options={['good', 'neutral', 'bad']}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
