import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo, switchState } from "../redux/modules/todos";

const DetailContainer = styled.div`
  width: 960px;
  height: 480px;
  border: 1px solid black;
  margin: auto;
  position: relative;
`;

const DetailTitle = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #1d1d1d;
`;

const DetailContent = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  word-break: break-all;
`;

const ButtonContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  position: absolute;
  right: 0;
  bottom: 0;
  border-top: 1px solid black;
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

export default function Detail() {
  const { id } = useParams();

  const navi = useNavigate();
  const goHome = () => {
    navi("/");
  };

  const reduxData = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  const detailData = reduxData.find((el) => el.id === id);

  const switchStatus = (e) => {
    e.stopPropagation();
    dispatch(switchState(e.target.id));
    goHome();
  };

  const removeTodo = (e) => {
    e.stopPropagation();
    if (window.confirm("정말 삭제하시겠습니까?") === true) {
      dispatch(deleteTodo(e.target.id));
      goHome();
    }
  };

  return (
    <>
      <DetailContainer>
        <DetailTitle>
          제목: &nbsp;<h3>{detailData.title}</h3>
        </DetailTitle>
        <DetailContent>{detailData.content}</DetailContent>
        <ButtonContainer>
          <Button id={detailData.id} onClick={(e) => removeTodo(e)}>
            삭제
          </Button>
          <Button id={detailData.id} onClick={(e) => switchStatus(e)}>
            {detailData.isDone === true ? "취소" : "완료"}
          </Button>
        </ButtonContainer>
      </DetailContainer>
    </>
  );
}
