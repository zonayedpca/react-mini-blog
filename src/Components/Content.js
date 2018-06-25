import React from 'react';

import Posts from './Posts';
import Bookmarks from './Bookmarks';

export default ({posts, bookmarks, handleBookmark, handleRemoveBookmark}) => {
  return (
    <div className="content-area">
      <div className="all-posts">
        <Posts posts={posts} handleBookmark={handleBookmark} handleRemoveBookmark={handleRemoveBookmark} />
      </div>
      <div className="bookmarks-sidebar">
        <h1>Bookmarks</h1>
        <Bookmarks bookmarks={bookmarks} />
      </div>
    </div>
  )
}
