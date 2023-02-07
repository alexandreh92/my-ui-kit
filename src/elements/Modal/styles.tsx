import styled from 'styled-components';

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.background};

  width: 710px;
`;

export const FooterModal = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  & > div {
    display: flex;
    padding: 30px 130px;

    & button {
      margin: 0 10px;

      &:first-child {
        width: 150px;
        color: ${({ theme }) => theme.colors.gray[400]};

        &:hover {
          color: inherit;
        }
      }
    }
  }
`;
