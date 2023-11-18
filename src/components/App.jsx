import { useState } from 'react';
import { Section } from './Title/sectionTitle';
import { Notification } from './NotificationMsg/notificationMessage';
import { Statistics } from './Statistics/statistics';
import { FeedbackOptions } from './FeedbackOptions/feedbackOptions ';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onleaveFeedback = option => {
    setFeedback(prevFeedback => ({
      [option]: prevFeedback[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback > 0
      ? Math.round((feedback.good / totalFeedback) * 100)
      : 0;
  };

  const { good, neutral, bad } = feedback;
  const totalFeedback = countTotalFeedback();
  const totalPerc = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onleaveFeedback={onleaveFeedback}
          options={['good', 'neutral', 'bad']}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={totalPerc}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
