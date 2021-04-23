import styled from "styled-components";

import Layout from "../components/Layout";
import Feed from "../components/Feed";
import Suggestions from "../components/Suggestions";

function Index({ posts }) {
  return (
    <Layout>
      <Feed posts={posts} />
      {/* <Suggestions /> */}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const data = [
    {
      id: 1,
      author: {
        id: 1,
        avatar: "https://avatars.githubusercontent.com/u/24323504?v=4",
        name: "Mayro Myller",
        username: "mmdev",
      },
      description: "",
      tags: [{ title: "#youtube" }, { title: "//#endregionclone" }],
      songName: "WAP (feat. Megan Thee Stallion) - Cardi B",
      videoUrl:
        "https://v19.tiktokcdn.com/f1b241596220a9dfa5e4c37cf199d675/6082a70b/video/tos/useast2a/tos-useast2a-ve-0068c003/918a3e9505ed42398804b7d651a37617/?a=1233&br=2498&bt=1249&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210423045244010190188160410210B3&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzU7bmpqNGlrMzMzNzgzM0ApPDg5aWQ5aWU4N2RoZGg8N2cucmpxNi5kcXBgLS02LzZzc2IxXi4wYzAvYDAwMF9jMzQ6Yw==&vl=&vr=",
      likes: 650,
      comments: 10,
      replies: 50,
    },
    {
      id: 2,
      author: {
        id: 1,
        avatar: "https://avatars.githubusercontent.com/u/24323504?v=4",
        name: "Mayro Myller",
        username: "mmdev",
      },
      description: "Vídeo teste para clone de interface",
      tags: [{ title: "#youtube" }, { title: "#clone" }],
      songName: "Tampa Curhat Beat - TampaCurhat",
      videoUrl:
        "https://v19.tiktokcdn.com/f1b241596220a9dfa5e4c37cf199d675/6082a70b/video/tos/useast2a/tos-useast2a-ve-0068c003/918a3e9505ed42398804b7d651a37617/?a=1233&br=2498&bt=1249&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210423045244010190188160410210B3&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzU7bmpqNGlrMzMzNzgzM0ApPDg5aWQ5aWU4N2RoZGg8N2cucmpxNi5kcXBgLS02LzZzc2IxXi4wYzAvYDAwMF9jMzQ6Yw==&vl=&vr=",
      likes: 650,
      comments: 10,
      replies: 50,
    },
  ];

  return {
    props: {
      posts: JSON.parse(JSON.stringify(data)),
    },
  };
}

export default Index;
