import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from 'react';

import clsx from 'clsx';

import { OnSendPayloadType } from '..';

import Button from '../../Button';
import {
  Container,
  Text,
  ContentContainer,
  ButtonsContainer,
  InnerWrapper,
} from './styles';
import { Avatar, UserIcon } from '../styles';

interface AnswerContainerProps {
  questionId: number;
  image?: string;
  loading?: boolean;
  onSend: (value: OnSendPayloadType) => void;
}

const AnswerContainer = ({
  questionId,
  image,
  loading,
  onSend,
}: AnswerContainerProps) => {
  /* Hooks */
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [currentValue, setCurrentValue] = useState('');
  const [active, setActive] = useState(false);

  const isDirty = useMemo(
    () => currentValue !== '' || active,
    [currentValue, active]
  );

  /* Callbacks */
  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentValue(e.target.value);
  };

  const handleOnSend = useCallback(() => {
    if (!currentValue) return;

    onSend({ value: currentValue, questionId });
    setCurrentValue('');
  }, [currentValue, questionId, onSend]);

  /* Effects */
  useEffect(() => {
    if (!textRef.current) return;
    textRef.current.style.height = '0px';
    const { scrollHeight } = textRef.current;
    textRef.current.style.height = `${scrollHeight}px`;
  }, [currentValue]);

  return (
    <Container>
      <ContentContainer className={clsx(isDirty && 'active')}>
        <InnerWrapper>
          {image ? <Avatar src={image} /> : <UserIcon />}
          <Text
            readOnly={loading}
            ref={textRef}
            value={currentValue}
            onChange={handleOnChange}
            placeholder="Escreva uma resposta..."
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
          />
        </InnerWrapper>
        {isDirty && (
          <ButtonsContainer>
            <Button onClick={handleOnSend} loading={loading}>
              Enviar
            </Button>
            <Button
              variant="tertiary"
              onClick={() => setCurrentValue('')}
              disabled={loading}
            >
              Cancelar
            </Button>
          </ButtonsContainer>
        )}
      </ContentContainer>
    </Container>
  );
};

export default AnswerContainer;
