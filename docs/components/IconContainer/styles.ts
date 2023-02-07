import styled from 'styled-components';

export const IconsWrapper = styled.div`
  box-shadow: rgb(0 0 0 / 10%) 0 1px 3px 1px, rgb(0 0 0 / 7%) 0 0 0 1px;
  border-radius: 4px;
  padding: 10px;
`;

export const IconWrapperHeader = styled.div`
  border-bottom: 1px solid #ebebeb;
  margin-top: 20px;
`;

export const IconsContainer = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 6rem);
  grid-gap: 2rem;
  justify-items: center;
`;

export const IconWrapper = styled.div`
  background: #ebebeb;
  border-radius: 10px;
  display: flex;
  width: 100%;
  height: 5rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;
