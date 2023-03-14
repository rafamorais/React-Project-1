import React from "react";
import { PostOptionsDTO } from "../../interfaces/Post/PostOpitionsDTO";
import { PostsDTO } from "../../interfaces/Post/Posts";
import { PostCard } from "../PostCard";

import "./style.css";

export const Post = ({ posts }: PostOptionsDTO) => {
  return (
    <div className="posts">
      {posts?.map((post: PostsDTO, index: number) => (
        <PostCard
          key={index}
          id={post.id}
          title={post.title}
          body={post.body}
          cover={post.cover}
        />
      ))}
    </div>
  );
};
