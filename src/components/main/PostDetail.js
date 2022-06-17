import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { createComment } from "../../actions/post";
import TitleBox from "../common/TitleBox";

const ContentContainer = styled.div`
  max-width: 1000px;
`;

const ChangeButton = styled.span`
  cursor: pointer;
  background-color: black;
  color: white;
  padding: 14px 28px;
  display: inline-block;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentBox = styled.div`
  padding: 28px;
  border: 1px solid black;
  min-height: 500px;
`;

const CommentInputBox = styled.div`
  border-bottom: 1px solid skyblue;
  padding: 5px 10px;
  width: 50%;
`;

const CommentInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
`;

const CommentList = styled.div`
  h3 {
    margin: 15px 0;
  }
`;

const CommentItem = styled.li`
  padding: 4px;
  h4 {
    font-weight: bold;
  }
`;

const PostDetail = () => {
  const params = useParams("id");
  const id = parseInt(params.id);
  const postList = useSelector((state) => state.post);
  const post = postList.filter((post) => post.id === id)[0];
  const comments = post.comments;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <ContentContainer>
      <Container>
        <TitleBox title={post.title}></TitleBox>
        <ChangeButton onClick={() => navigate("/post/edit/" + id)}>
          수정하기
        </ChangeButton>
      </Container>
      <ContentBox>{post.content}</ContentBox>
      <CommentList>
        {" "}
        <h3>댓글</h3>
        <ul>
          {comments?.map((comment) => (
            <CommentItem key={comment.id}>
              <h4>{comment.user.name}</h4>
              <p>{comment.content}</p>
            </CommentItem>
          ))}
        </ul>
      </CommentList>
      <CommentInputBox>
        <CommentInput
          placeholder="댓글 입력"
          onKeyDown={(e) => {
            if (e.key === "Enter")
              dispatch(createComment(id, e.target.value, 1, "혜민"));
          }}
        />
      </CommentInputBox>
    </ContentContainer>
  );
};

export default PostDetail;
