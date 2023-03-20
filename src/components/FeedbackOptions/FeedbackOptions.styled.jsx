import styled from '@emotion/styled';

export const Button = styled.button`
  display: inline-block;
  background-color: #dedede;
  color: #2c2c2c;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.62;
  text-align: center;
  cursor: pointer;

  padding: 6px 22px;
  border: 0px;
  border-radius: 4px;

  transition: background-color 250ms linear, color 250ms linear,
    box-shadow 250ms linear;

  &:hover {
    background-color: #02c0ff;
    color: #fff;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;

export const ButtonList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  margin-bottom: 20px;
  padding: 0;
`;

export const ButtonListItem = styled.li`
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }
`;
