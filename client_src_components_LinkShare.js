import React, { useState } from 'react';

const LinkShare = () => {
  const [link, setLink] = useState('');

  const handleShare = (e) => {
    e.preventDefault();
    console.log('Link shared:', link);
  };

  return (
    <div>
      <h2>Share a Link</h2>
      <form onSubmit={handleShare}>
        <input
          type="url"
          placeholder="Enter link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
        <button type="submit">Share</button>
      </form>
    </div>
  );
};

export default LinkShare;