// ArchiveInfo.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import axios from 'axios';

function ArchiveInfo() {
  const {token} = useAuth();
  const navigate = useNavigate();
  const { issue } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.post(
          `http://localhost:8080/TESOL/controller/Archives.php`,
          new URLSearchParams({
            action: 'getIssues',
            volume: issue,
          }).toString(),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': `Bearer ${token}`,
            },
          }
        );
        const { status, data } = response.data;
        if (status === 1) {
          setArticles(data);
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, [issue]);

  const handleArticleClick = (article) => {
    // Navigate to ArticleInfo with the article data
    navigate(`/archives/${issue}/${article.title.replace(/ /g, '-')}`, {
      state: { article },
    });
  };

  return (
    <div>
      <h2>Issue {issue}</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id} onClick={() => handleArticleClick(article)}>
            {article.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArchiveInfo;
