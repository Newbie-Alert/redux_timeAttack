import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import uuid from "react-uuid";
import { addTodo } from "../redux/modules/todos";

const InputContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.6rem;
  padding: 1rem 3rem;
`;

const InputEl = styled.input.attrs((props) => ({
  required: true,
  placeholder: `${props.$content}를 입력하세요`,
}))`
  width: 250px;
  padding: 0.3rem 0.6rem 0.3rem 0.3rem;
`;

export default function Input() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    const { target } = e;

    target.name === "title" && setTitle(target.value);
    target.name === "content" && setContent(target.value);
  };

  const disPatchAddTodo = (e) => {
    e.preventDefault();
    if (title.length === 0 || content.length === 0) {
      alert("내용을 입력해주세요");
    } else {
      const todo = {
        id: uuid(),
        title,
        content,
        isDone: false,
      };

      dispatch(addTodo(todo));
      setTitle("");
      setContent("");
    }
  };

  return (
    <InputContainer>
      <div>
        {" "}
        제목: &nbsp;
        <InputEl
          $content={"제목"}
          value={title}
          name="title"
          required
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        내용: &nbsp;
        <InputEl
          required
          name="content"
          $content={"내용"}
          value={content}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <button type="submit" onClick={(e) => disPatchAddTodo(e)}>
        등록하기
      </button>
    </InputContainer>
  );
}
