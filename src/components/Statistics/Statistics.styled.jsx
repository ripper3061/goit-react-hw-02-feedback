import styled from '@emotion/styled';

export const FeedbackList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FeedbackItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  &::after {
    content: '';
    width: 100px;
    height: 1px;
    background-color: rgba(100, 105, 123, 0.484);
    flex-grow: 1;
    margin-left: 6px;
    margin-right: 6px;
  }
`;

export const TextItem = styled.p`
  :last-child {
    order: 1;
  }
`;
