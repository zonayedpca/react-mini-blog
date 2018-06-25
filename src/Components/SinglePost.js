import React from 'react';
import renderHTML from 'react-render-html';

export default ({match: {params: {id}}, posts, handleBookmark, handleRemoveBookmark}) => {
  let post = posts.filter(post => post.id === id);
  post = post[0];
  return (
    <div className="single-post">
      <h1 className="header">{post.title}</h1>
      {renderHTML(post.body)}
      <ul className="post-foot">
        <li>{post.bookmark ? <button className="btn btn-remove-bookmarks" onClick={() => handleRemoveBookmark(post)} >Remove from Bookmark</button> : <button className="btn btn-bookmarks" onClick={() => handleBookmark(post)} >Add to Bookmark</button>}</li>
      </ul>
    </div>
  )
}
