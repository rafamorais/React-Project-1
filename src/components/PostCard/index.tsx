import { PostCardDTO } from "../../interfaces/PostCard/PostCard";
import "./style.css";

export const PostCard = ({ id, title, body, cover }: PostCardDTO) => {
  return (
    <div className="post-card">
      <img src={cover} alt={title} />
      <div className="post-card-content">
        <h2>
          {title} - {id}
        </h2>
        <p>{body}</p>
      </div>
    </div>
  );
};
