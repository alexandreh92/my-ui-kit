import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import clsx from 'clsx';

import Heading from '../Heading';
import AnswerContainer from './AnswerContainer';
import {
  Container,
  ContentWrapper,
  QuestionContainer,
  QuestionWrapper,
  QuestionHeader,
  HeaderLeft,
  Avatar,
  UserIcon,
  InfoWrapper,
  Meta,
  QuestionInfoWrapper,
  TitleContainer,
  Content,
  Resolved,
  ResolvedIcon,
  ResolvedContainer,
  MoreQuestions,
  Border,
  RepliesContainer,
} from './styles';
import Reply, { ReplyProps } from './Reply';

export type OnSendPayloadType = {
  value: string;
  questionId: number;
};

export interface QuestionProps {
  questionId: number;
  owner: string;
  ownerMeta: string;
  date: string;
  title: string;
  body: string;
  isResolved?: boolean;
  ownerImage?: string;
  userImage?: string;
  replies: ReplyProps[];
  loading?: boolean;
  onSend?: (value: OnSendPayloadType) => void;
}

const Question = ({
  questionId,
  owner,
  ownerMeta,
  date,
  title,
  body,
  isResolved,
  ownerImage,
  userImage,
  replies = [],
  loading,
  onSend,
}: QuestionProps) => {
  /* Hooks */
  const [showReplies, setShowReplies] = useState(false);
  const repliesContainer = useRef<HTMLDivElement>(null);

  const hasReplies = useMemo(() => replies.length > 0, [replies]);

  /* Callbacks */
  const handleOnRepliesClick = useCallback(() => {
    setShowReplies((oldState) => !oldState);
  }, []);

  const handleScrollDown = useCallback(() => {
    repliesContainer?.current?.scrollTo(
      0,
      repliesContainer.current?.scrollHeight
    );
  }, []);

  const handleOnSendMessage = useCallback(
    (value: OnSendPayloadType) => {
      setShowReplies(true);

      onSend && onSend(value);
    },
    [onSend]
  );

  useEffect(() => {
    handleScrollDown();
  }, [handleScrollDown, showReplies]);

  return (
    <Container>
      <Border className={clsx(isResolved && 'answered')} />
      <ContentWrapper>
        <QuestionContainer>
          <QuestionWrapper>
            <QuestionHeader>
              <HeaderLeft>
                {ownerImage ? <Avatar src={ownerImage} /> : <UserIcon />}
                <InfoWrapper>
                  <Heading weight="header-300">{owner}</Heading>
                  <Meta>{ownerMeta}</Meta>
                </InfoWrapper>
              </HeaderLeft>
              <Heading weight="body-small">{date}</Heading>
            </QuestionHeader>
            <QuestionInfoWrapper>
              <TitleContainer>
                <Heading weight="header-400">{title}</Heading>
                {isResolved && (
                  <ResolvedContainer>
                    <ResolvedIcon />
                    <Resolved>Resolvida</Resolved>
                  </ResolvedContainer>
                )}
              </TitleContainer>
              <Content>{body}</Content>
            </QuestionInfoWrapper>
            <MoreQuestions
              mode="text"
              disabled={!hasReplies}
              onClick={handleOnRepliesClick}
            >
              {replies.length} respostas
            </MoreQuestions>
          </QuestionWrapper>
        </QuestionContainer>
        {showReplies && (
          <RepliesContainer ref={repliesContainer}>
            {replies.map((reply) => (
              <Reply
                key={reply.id}
                id={reply.id}
                name={reply.name}
                image={reply.image}
                date={reply.date}
                body={reply.body}
              />
            ))}
          </RepliesContainer>
        )}
        {!isResolved && (
          <AnswerContainer
            loading={loading}
            image={userImage}
            onSend={handleOnSendMessage}
            questionId={questionId}
          />
        )}
      </ContentWrapper>
    </Container>
  );
};

export default Question;
