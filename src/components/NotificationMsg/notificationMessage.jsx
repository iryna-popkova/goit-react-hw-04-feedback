import React from 'react';
import { Message } from './notificationMessage.styled';

export const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};
