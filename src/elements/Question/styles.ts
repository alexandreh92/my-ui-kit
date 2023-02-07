import styled from 'styled-components';

import Icon from '../../addons/Icon';
import Button from '../Button';
import Heading from '../Heading';

export const Container = styled.div`
  display: flex;

  box-shadow: 0px 4px 8px -4px rgba(26, 26, 26, 0.2);
  border: 0.063rem solid #f1f1f1;
  border-radius: 1rem;

  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const QuestionContainer = styled.div`
  display: flex;
`;

export const Border = styled.div`
  width: 0.563rem;
  height: auto;

  background: ${({ theme }) => theme.colors.alert[300]};

  &.answered {
    background: ${({ theme }) => theme.colors.success[300]};
  }
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 1.5rem 2.5rem 1.25rem 3.125rem;

  width: 100%;
`;

export const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  min-width: 3rem;
  min-height: 3rem;

  border-radius: 3rem;

  object-fit: cover;

  border: 0.031rem solid ${({ theme }) => theme.colors.gray[200]};

  background: ${({ theme }) => theme.colors.gray[200]};
`;

export const InfoWrapper = styled.div``;

export const Meta = styled(Heading).attrs({ weight: 'body-medium' })`
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const QuestionInfoWrapper = styled.div`
  margin-top: 1rem;
  margin-left: 4.125rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Content = styled(Heading).attrs({ weight: 'body-large' })`
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const ResolvedContainer = styled.div`
  display: flex;
  gap: 0.625rem;

  align-items: center;
`;

export const ResolvedIcon = styled(Icon).attrs({
  icon: 'checkmark',
  size: 1.125,
})`
  fill: ${({ theme }) => theme.colors.success[400]};
`;

export const Resolved = styled(Heading).attrs({ weight: 'header-200' })`
  color: ${({ theme }) => theme.colors.success[400]};
`;

export const MoreQuestions = styled(Button)`
  margin-top: 1rem;

  width: auto;
  align-self: flex-end;

  color: ${({ theme }) => theme.colors.gray[500]}!important;
`;

export const UserIcon = styled(Icon).attrs({ icon: 'user-circle', size: 3 })`
  fill: ${({ theme }) => theme.colors.gray[400]};

  min-width: 3rem;
  max-width: 3rem;
`;

export const RepliesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 0 1.125rem 0 3.125rem;
  margin-bottom: 1.5rem;

  max-height: 35.625rem;
  overflow-y: auto;
`;
