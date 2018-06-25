import React from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';

export default ({post, handleBookmark, handleRemoveBookmark}) => {
  const leveningStr = (data) => {
    let string = data.split(/<\/?\w*>/);
    string = string.reduce((data, one)=>data+=one);
    string = string.substr(0, 250);
    return string;
  }
  return (
    <div className="post">
      <h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
      <p>{renderHTML(leveningStr(post.body))}</p>
      <ul>
        <li><Link to={`/post/${post.id}`} className="btn btn-more">Read More</Link></li>
        <li>{post.bookmark ? <button className="btn btn-remove-bookmarks" onClick={() => handleRemoveBookmark(post)} >Remove from Bookmark</button> : <button className="btn btn-bookmarks" onClick={() => handleBookmark(post)} >Add to Bookmark</button>}</li>
      </ul>
    </div>
  )
}
