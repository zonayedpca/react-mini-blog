import React from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';
import { leveningStr } from '../helper';

export default ({post, handleBookmark, handleRemoveBookmark}) => {
  const { id, title, body, bookmark } = post;
  return (
    <div className="post">
      <h3><Link to={`/post/${id}`}>{title}</Link></h3>
      <p>{renderHTML(leveningStr(body, 250))}</p>
      <ul>
        <li><Link to={`/post/${id}`} className="btn btn-more">Read More</Link></li>
        <li>{bookmark ? <button className="btn btn-remove-bookmarks" onClick={() => handleRemoveBookmark(post)} >Remove from Bookmark</button> : <button className="btn btn-bookmarks" onClick={() => handleBookmark(post)} >Add to Bookmark</button>}</li>
      </ul>
    </div>
  )
}
