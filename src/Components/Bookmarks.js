import React from 'react';
import { Link } from 'react-router-dom';

export default ({bookmarks}) => {
  const leveningStr = (data) => {
    let string = data.split(/<\/?\w*>/);
    string = string.reduce((data, one)=>data+=one);
    string = string.substr(0, 35);
    return string;
  }
  const showPost = bookmarks ? bookmarks.map((bookmark, index) => <div key={bookmark.id} className="bookmark"><span className="number">{(index + 1)}</span><h5><Link to={`/post/${bookmark.id}`}>{bookmark.title}</Link></h5><p>{leveningStr(bookmark.body)}</p></div>) : null;
  const noPost = <p>No Bookmark Found</p>;
  return (
    <div >
      {bookmarks.length > 0 ? showPost : noPost}
    </div>
  )
}
