// ArchiveInfo.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import axios from 'axios';
import '../archives.css';


function ArchiveInfo() {
  const {token} = useAuth();
  const navigate = useNavigate();
  const { issue } = useParams();
  const [articles, setArticles] = useState([]);

  const issueImageMap = {
    '1': '/img/issue01.png',
    '2': '/img/issue02.png',
    '3': '/img/issue03.png',
    '4': '/img/issue04.png',
  };

  const issueDate = {
    '1': 'Volume 1 Issue 01 (2023): February',
    '2': 'Volume 1 Issue 02 (2023): May',
    '3': 'Volume 1 Issue 03 (2023): August',
    '4': 'Volume 1 Issue 04 (2023): December',
  }

  const publishedDate = {
    '1': '2023-02-09',
    '2': '2023-05-29',
    '3': '2023-08-29',
    '4': '2023-12-09',
  }

  const imageSrc = issueImageMap[issue];
  const archiveTitle = issueDate[issue];
  const published = publishedDate[issue];

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

  const fetchArticleFile = async (path) => {
    try {
        const response = await axios.post(
            `http://localhost:8080/TESOL/controller/Archives.php`,
            new URLSearchParams({
                action: 'getPDF',
                path: path
            }).toString(),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${token}`,
                },
                responseType: 'arraybuffer',
            }
        );
        console.log(path);
        console.log(response);
        const { status, data } = response.data;

        if (status === 1) {
          const blob = new Blob([pdfContent], { type: 'application/octet-stream' });
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = 'TESOL_article.pdf'; // Specify the filename
          link.click();

        } else {
          console.error('Failed to fetch PDF file:', response.data.message);
        }
    } catch (error) {
        console.error('Error fetching PDF file:', error);
    }
  };


  return (
    <div className="archive-info">

      <div className="archive-top-header">
        <div className="row">
          <div className="col d-flex mt-5 mb-4">
            <div className="col d-flex justify-content-end">
              <img className="archive-page" src={imageSrc} alt="{`issue-${issue}-header`}" />
            </div>
          </div>

          <div className="col d-flex align-items-center">
            <div className="title-header">
              <h3>{archiveTitle}</h3>
              <ul>
                <li> 
                  <strong>Published:</strong> {published}
                </li>
                <li> 
                  <strong>Language:</strong> English | Filipino
                </li>
                <li> 
                  <strong>ISSN:</strong> <a href="https://portal.issn.org/resource/ISSN/2984-7176">2984-7176 (Print)</a> | <a href="https://portal.issn.org/resource/ISSN/2984-7184">2984-7184 (Online)</a>
                </li>
              </ul>
            </div>
          </div>
  
        </div>
      </div>

      <h4>Articles</h4>
      <div>
        <ul>
          {articles.map((article) => (
            <ul>
              <li key={article.id} onClick={() => handleArticleClick(article)}>
                <h6><b>{article.title}</b></h6>
              </li>
              <li>
                {article.author}
              </li>
              <li>
                {article.org}
              </li>
              <button onClick={() => fetchArticleFile(article.articlePath)}>PDF</button>
            </ul>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ArchiveInfo;
