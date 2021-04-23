import * as S from "./style";

import Posts from "../Posts";

const Feed = ({ posts }) => {
  return (
    <S.Container>
      {posts.map((post, index) => (
        <Posts key={index} post={post} />
      ))}
    </S.Container>
  );
};

export default Feed;
