import styled, { keyframes } from 'styled-components';

import Heading from '../../elements/Heading';
import DefaultIcon from '../Icon';

export const ToastWrapper = styled.div`
  position: fixed;
  z-index: 999;

  --position: 1rem;

  &.top-left {
    top: var(--position);
    left: var(--position);
  }

  &.top-right {
    top: var(--position);
    right: var(--position);
  }

  &.top-middle {
    top: var(--position);
    left: 50%;

    transform: translateX(-50%);
  }

  &.bottom-left {
    bottom: var(--position);
    left: var(--position);
  }

  &.bottom-right {
    bottom: var(--position);
    right: var(--position);
  }

  &.bottom-middle {
    bottom: var(--position);
    left: 50%;

    transform: translateX(-50%);
  }

  &.middle {
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }

  &.middle-left {
    top: 50%;
    left: var(--position);

    transform: translateY(-50%);
  }

  &.middle-right {
    top: 50%;
    right: var(--position);

    transform: translateY(-50%);
  }
`;

export const ToastContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

const containerKeyFrames = keyframes`
from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

export const Container = styled.div`
  width: 22.5rem;

  background-color: ${({ theme }) => theme.colors.toast.wrapperBackground};

  border: 1px solid ${({ theme }) => theme.colors.toast.wrapperBorder};
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 10%);

  backdrop-filter: blur(0.75rem);

  overflow: hidden;

  animation: ${containerKeyFrames} 0.5s;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;

  padding: 0.5rem 0.75rem;

  color: ${({ theme }) => theme.colors.toast.text};

  background-color: ${({ theme }) => theme.colors.toast.headerBackground};
  background-clip: padding-box;

  border-bottom: 0.063rem solid
    ${({ theme }) => theme.colors.toast.headerBorder};
`;

export const Badge = styled.div`
  min-width: 1.25rem;
  height: 1.25rem;

  border-radius: 0.25rem;

  background: ${({ theme }) => theme.colors.toast.modes.info};

  &.warning {
    background: ${({ theme }) => theme.colors.toast.modes.warning};
  }

  &.success {
    background: ${({ theme }) => theme.colors.toast.modes.success};
  }

  &.error {
    background: ${({ theme }) => theme.colors.toast.modes.error};
  }

  &.alert {
    background: ${({ theme }) => theme.colors.toast.modes.alert};
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  gap: 0.75rem;

  overflow: hidden;
`;

export const Body = styled.div`
  padding: 0.75rem;
  background: ${({ theme }) => theme.colors.toast.bodyBackground};

  max-height: 5.25rem;
`;

export const HeaderText = styled(Heading)`
  font-weight: bold !important;
  color: ${({ theme }) => theme.colors.toast.text};

  &,
  & > div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const BodyText = styled(Heading)`
  color: ${({ theme }) => theme.colors.toast.text};

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Icon = styled(DefaultIcon)`
  fill: ${({ theme }) => theme.colors.toast.text};

  min-width: 1.25rem;

  cursor: pointer;
`;

export const IconContainer = styled.div``;
