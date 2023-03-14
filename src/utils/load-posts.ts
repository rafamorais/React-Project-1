import axios from "axios";
import { PostsDTO } from "../interfaces/Post/Posts";

export const loadPosts = async () => {
  const postsResponse = axios("https://jsonplaceholder.typicode.com/posts");
  const postsPhotosResponse = axios(
    "https://jsonplaceholder.typicode.com/photos"
  );

  const [posts, postsPhotos] = await Promise.all([
    postsResponse,
    postsPhotosResponse,
  ]);

  const postsAndPhotos = posts.data.map((post: PostsDTO, index: string) => {
    return { ...post, cover: postsPhotos.data[index].url };
  });

  return postsAndPhotos;
};
