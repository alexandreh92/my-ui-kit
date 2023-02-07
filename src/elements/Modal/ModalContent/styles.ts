import styled from 'styled-components';
import Heading from '../../Heading';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-bottom: 3.25px solid ${({ theme }) => theme.colors.gray[1000]};

  padding: 55px 100px;

  color: ${({ theme }) => theme.colors.gray[1100]};

  text-align: center;
`;

export const Meta = styled(Heading)`
  margin-bottom: 14px;
`;
