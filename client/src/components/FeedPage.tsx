import { useState } from 'react';
import PostComponent from './PostComponent';
import Post from '../types/post.type'

// Import images
import post1 from "../assets/1.png"
import post2 from "../assets/2.png"
import post3 from "../assets/3.png"

// export interface Post {
//   images: string[],
//   caption: string,
//   from: string,

//   likes: User[],
//   comments: string[],
// }


const FeedPage = () => {
  const [postsState, setPost] = useState<Post[]>([
    {
      images: [post1],
      caption: "Yo",
      user: "69",
      likes: [],
      comments: [],
    },
    {
      images: [post2],
      caption: "Happy Birthday [Ce][Sa]ra[h]!",
      user: "69",
      likes: [],
      comments: [{ commenter: "💯✨🎉", text: "ok then" }],
    }
  ]);

  return (
    // Members list in your neighborhood


    // Posts
    <div className="m-auto w-1/3">
      <ul>
        {
          // Render each post as a component based on the postsState array
          postsState.map((postsState, i) => (
            <div>
              <PostComponent
                post={postsState}
                userName={"Jay Ren"}
              />
              <br /><br />
            </div>
          ))
        }
      </ul>
    </div>


  );
};

export default FeedPage;
