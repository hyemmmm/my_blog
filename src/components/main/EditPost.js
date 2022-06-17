import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { createPost, updatePost } from "../../actions/post";
import Button from "../common/Button";
import TitleBox from "../common/TitleBox";

const InputForm = styled.form`
  font-size: 28px;
  table {
    width: 560px;
    margin-bottom: 30px;
  }
`;

const InputTitle = styled.input`
  outline: none;
  padding: 5px 10px;
  width: 100%;
  border-radius: 4px;
  font-size: inherit;
  margin: 20px 0;
`;

const InputContent = styled.textarea`
  resize: none;
  width: 100%;
  height: 400px;
  outline: none;
  border-radius: 4px;
  padding: 28px;
  font-size: 0.7em;
`;

const dateOpts = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

function EditPost() {
  const postList = useSelector((state) => state.post);
  const navigate = useNavigate();
  const { id } = useParams();
  const post = postList.find((post) => post.id === parseInt(id));
  // 다른 방법
  // const post = postList.filter((post) => post.id === parseInt(id))[0] || {title:"", content:""}

  const [inputs, setInputs] = useState({
    title: post?.title,
    content: post?.content,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const dispatch = useDispatch();

  const onCreate = () => {
    const { title, content } = inputs;
    const created_at = new Date().toLocaleDateString("ko-KR", dateOpts);
    dispatch(createPost(title, content, created_at));
    navigate("/post");
  };

  const onEdit = () => {
    const { title, content } = inputs;
    const created_at = new Date().toLocaleDateString("ko-KR", dateOpts);
    dispatch(updatePost(parseInt(id), title, content, created_at));
    navigate("/post");
  };

  return (
    <>
      <TitleBox title="글 작성하기"></TitleBox>
      <InputForm
        onSubmit={(e) => {
          e.preventDefault();
          if (isNaN(id)) {
            onCreate();
          } else {
            onEdit();
          }
        }}
      >
        <table>
          <tr>
            <td>
              <InputTitle
                name="title"
                onChange={handleInput}
                defaultValue={post?.title}
              ></InputTitle>
            </td>
          </tr>
          <tr>
            <td>
              <InputContent
                name="content"
                onChange={handleInput}
                defaultValue={post?.content}
              ></InputContent>
            </td>
          </tr>
        </table>
        <Button text="저장하기"></Button>
      </InputForm>
    </>
  );
}

export default EditPost;

// cannot read properties of undefined => 옵셔널 체이닝 쓰기 (obj?.name)
// undefined에 옵셔널 체이닝을 하면 에러는 안 나오지만 undefined 반환
