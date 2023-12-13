import React from 'react';
import { useLocation } from 'react-router-dom';

function ArticleInfo() {
  const location = useLocation();
  const { article } = location.state || {};

  return (
    <div className="archiveInfo">
      <h5>Title: {article.title}</h5>
      <h5>Org: {article.org}</h5>
      <h5>Author: {article.author}</h5>
      <h5>Path: {article.path}</h5>
    </div>
  );
}

export default ArticleInfo;