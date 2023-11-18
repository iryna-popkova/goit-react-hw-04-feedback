import React from 'react';
import { OptionWrapper, Button, OptionsItem } from './feedbackOptions.styled';

export const FeedbackOptions = ({ options, onleaveFeedback }) => {
  return (
    <OptionWrapper>
      {options.map(option => (
        <OptionsItem key={option}>
          <Button type="button" onClick={() => onleaveFeedback(option)}>
            {option}
          </Button>
        </OptionsItem>
      ))}
    </OptionWrapper>
  );
};
