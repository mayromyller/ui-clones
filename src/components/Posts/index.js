import { useRef, useState } from "react";

import * as S from "./style";

import Button from "../Button";

const Posts = ({ post }) => {
  const videoRef = useRef();
  const [running, setRunning] = useState(false);

  const toggleAction = () => {
    if (videoRef?.current != null) {
      if (!running) videoRef.current.play();
      else videoRef.current.pause();

      setRunning(!running);
    }
  };

  return (
    <S.Container>
      <S.HeaderPost>
        <S.PostContainer>
          <S.Avatar src={post.author.avatar} />
          <S.AuthorContainer>
            <S.Author>
              {post.author.username}
              <span>{post.author.name}</span>
            </S.Author>
            <div>
              <span>{post.description}</span>
              {post?.tags.map((tag, index) => (
                <S.Tag key={index}>{tag.title}</S.Tag>
              ))}
            </div>
          </S.AuthorContainer>
        </S.PostContainer>

        <S.ButtonContainer>
          <Button fontSize={16} outlined>
            Seguir
          </Button>
        </S.ButtonContainer>
      </S.HeaderPost>

      <S.ContentPost>
        <S.Song>
          <img src="/images/songIcon.svg"></img>
          <a>{post?.songName}</a>
        </S.Song>

        <S.MediaContainer>
          <S.Video
            ref={videoRef}
            src={post.videoUrl}
            webkit-playsinline="true"
            playsinline=""
            loop="true"
            preload="metadata"
          ></S.Video>
          <S.ActionsContainer onClick={toggleAction}>
            <S.PlayerIcon
              src={running ? "/images/pauseIcon.svg" : "/images/playIcon.svg"}
            />
          </S.ActionsContainer>
        </S.MediaContainer>

        <S.Reaction>
          <S.React>
            <img src="/images/heartIcon.svg" alt="" />
            <a>{post.likes}</a>
          </S.React>

          <S.React>
            <img src="/images/bubbleIcon.svg" alt="" />
            <a>{post.comments}</a>
          </S.React>

          <S.React>
            <img src="/images/arrowIcon.svg" alt="" />
            <a>{post.replies}</a>
          </S.React>
        </S.Reaction>
      </S.ContentPost>
    </S.Container>
  );
};

export default Posts;
