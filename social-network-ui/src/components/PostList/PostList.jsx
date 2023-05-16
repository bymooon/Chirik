import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPostId, openReplayModal } from '../../features/slices/homeSlice';
import Post from '../Post/Post';

export default function PostList() {
  const posts = useSelector((state) => state.home.post);
  console.log(posts);
  const dispatch = useDispatch();
  const handleRetweet = (props) => {
    dispatch(openReplayModal(props));
    alert(`past ${props}  add to Retweet`);
  };
  const handleReplay = (props) => {
    dispatch(openReplayModal(props));
  };
  const handelLike = (props) => {
    dispatch(openReplayModal(props));
    alert(`past ${props}  add to like`);
  };

  return (
    <div>
      {posts &&
        posts.map((post) => (
          <Post
            key={post.id}
            avatar={post.author.profileImage}
            name={post.author.name}
            retweet={post.retweet}
            like={post.likesNumber}
            view={post.view}
            replay={post.reply}
            content={post.text}
            data={post.createdDate}
            image={post.image}
            handleClick={() => dispatch(getPostId(`${post.id}`))}
            handleClickLike={() => handelLike(`${post.id}`)}
            handleClickReplay={() => handleReplay(`${post.id}`)}
            handleClickRetweet={() => handleRetweet(`${post.id}`)}
          />
        ))}
    </div>
  );
}
