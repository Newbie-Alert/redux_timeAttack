import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, switchState } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 433px;
  cursor: pointer;
  border: 1px solid #1d1d1d;
`;

const ListTitle = styled.div`
  width: 100%;
  padding: 1rem 3rem;
  font-weight: 600;
  background-color: #eee;
`;

const ItemContainer = styled.div`
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  &:hover {
    background-color: #eee;
  }
`;

const ButtonContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Button = styled.button.attrs(() => ({
  type: "button",
}))`
  width: 100px;
  padding: 0.6rem;
  border-radius: 6px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.children === "삭제" ? "pink" : "aliceblue"};
    color: black;
  }
`;

export default function List({ isActive }) {
  const reduxData = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  const filtered = isActive
    ? reduxData.filter((el) => el.isDone === false)
    : reduxData.filter((el) => el.isDone === true);

  const switchStatus = (e) => {
    e.stopPropagation();
    dispatch(switchState(e.target.id));
  };

  const removeTodo = (e) => {
    e.stopPropagation();
    window.confirm("정말 삭제하시겠습니까?") &&
      dispatch(deleteTodo(e.target.id));
  };

  const navi = useNavigate();

  const toDetail = (e) => {
    navi(`/detail/${e.target.id}`);
  };
  return (
    <ListContainer>
      {isActive === true ? (
        <ListTitle>진행 중</ListTitle>
      ) : (
        <ListTitle>완료</ListTitle>
      )}
      {filtered.map((el) => {
        return (
          <ItemContainer id={el.id} onClick={(e) => toDetail(e)} key={el.id}>
            <h3>{el.title}</h3>
            <h4>{el.content}</h4>
            <ButtonContainer>
              <Button id={el.id} onClick={(e) => removeTodo(e)}>
                삭제
              </Button>
              <Button id={el.id} onClick={(e) => switchStatus(e)}>
                {isActive === true ? "완료" : "취소"}
              </Button>
            </ButtonContainer>
          </ItemContainer>
        );
      })}
    </ListContainer>
  );
}
