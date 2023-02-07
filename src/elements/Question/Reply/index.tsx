import React from 'react';

import Heading from '../../Heading';
import { Avatar, UserIcon } from '../styles';
import { Container, Header, Date, Body } from './styles';

export interface ReplyProps {
  id: number;
  name: string;
  image?: string;
  date: string;
  body: string;
}

const Reply = ({ name, image, date, body }: ReplyProps) => {
  return (
    <Container>
      <Header>
        {image ? <Avatar src={image} /> : <UserIcon />}
        <Heading weight="header-300">{name}</Heading>
        <Date>{date}</Date>
      </Header>
      <Body>{body}</Body>
    </Container>
  );
};

export default Reply;
