import React from 'react';

import clsx from 'clsx';

import {
  Container,
  Line,
  Content,
  Title,
  DueContainer,
  CalendarIcon,
  DueDate,
} from './styles';

export interface BoardCardProps {
  title: string;
  dueDate?: string;
  overdued?: boolean;
}

const BoardCard = ({ title, dueDate, overdued }: BoardCardProps) => {
  return (
    <Container>
      <Line />
      <Content>
        <Title>{title}</Title>
        {dueDate && (
          <DueContainer className={clsx(overdued && 'overdued')}>
            <CalendarIcon />
            <DueDate>vencimento: {dueDate}</DueDate>
          </DueContainer>
        )}
      </Content>
    </Container>
  );
};

export default BoardCard;
