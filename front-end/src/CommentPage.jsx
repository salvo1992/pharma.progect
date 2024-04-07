import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CommentPage.css';

function CommentPage() {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [recommend, setRecommend] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchSavedPosts();
  }, [submitted]); // Esegui la funzione fetchSavedPosts ogni volta che submitted cambia

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9089/comments', {
        comment,
        rating,
        recommend,
      });
      setSubmittedData(response.data);
      setSubmitted(true);
    } catch (error) {
      console.error('Errore durante il salvataggio dei dati:', error);
    }
  };

  const resetForm = () => {
    setComment('');
    setRating(0);
    setRecommend(false);
    setSubmittedData(null); // Aggiunta per ripristinare i dati inviati
    setSubmitted(false);
  };

  const fetchSavedPosts = async () => {
    try {
      const response = await axios.get('http://localhost:9089/comments');
      setComments(response.data);
    } catch (error) {
      console.error('Errore durante il recupero dei dati:', error);
    }
  };

  return (
    <div>
      <h1>Comment Page</h1>
      {!submitted && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="comment">Commento:</label>
            <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
          </div>
          <div>
            <label>Valutazione:</label>
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={index + 1}
                    checked={rating === index + 1}
                    onChange={() => setRating(index + 1)}
                  />
                  <span className="icon">★</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label>
              Consiglieresti questo servizio?
              <input
                type="checkbox"
                name="recommend"
                checked={recommend}
                onChange={(e) => setRecommend(e.target.checked)}
              />
            </label>
          </div>
          <button type="submit">Invia</button>
        </form>
      )}
      {submittedData && (
        <div className="submitted-data">
          <h2>Dati inviati:</h2>
          <p>Commento: {submittedData.comment}</p>
          <p>Valutazione: {submittedData.rating}</p>
          <p>Consigliato: {submittedData.recommend ? 'Sì' : 'No'}</p>
          <button onClick={resetForm}>Nuovo commento</button>
        </div>
      )}
      {comments.length > 0 && (
        <div className="comment-list">
          <h2>Commenti Salvati:</h2>
          {comments.map((comment, index) => (
            <div key={index} className="comment-card">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Commento #{index + 1}</h5>
                  <p className="card-text">Commento: {comment.comment}</p>
                  <p className="card-text">Valutazione: {comment.rating}</p>
                  <p className="card-text">Consigliato: {comment.recommend ? 'Sì' : 'No'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CommentPage;



