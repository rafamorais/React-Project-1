import React, { useEffect, useState } from "react";

import { Button } from "../../components/Button";
import { Post } from "../../components/Post";
import { TextInput } from "../../components/TextInput";
import { PostsDTO } from "../../interfaces/Post/Posts";
import { loadPosts } from "../../utils/load-posts";

import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState<PostsDTO[]>([]);
  const [allPosts, setAllPosts] = useState<PostsDTO[]>([]);
  const [page, setPage] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>("");
  const postsPerPage = 2;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  };

  const loadMorePosts = (): void => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts!.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const noMorePosts = page + postsPerPage >= allPosts.length;
  const filteredPosts = !!searchValue
    ? allPosts.filter(function (post) {
        return post.title
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase());
      })
    : posts;

  return (
    <section className="container">
      <div className="input-container">
        {!!searchValue && <h1>Search for: {searchValue}</h1>}

        <TextInput
          type="search"
          searchValue={searchValue}
          handleChange={handleChange}
          placeHolder="type your search"
        />
      </div>

      {filteredPosts.length > 0 && <Post posts={filteredPosts} />}
      {filteredPosts.length <= 0 && <h1>Post not found in the sarch</h1>}

      {!searchValue && (
        <div className="button-container">
          <Button
            text="Load more"
            disabled={noMorePosts}
            onClick={loadMorePosts}
          />
        </div>
      )}
    </section>
  );
};

export default Home;
