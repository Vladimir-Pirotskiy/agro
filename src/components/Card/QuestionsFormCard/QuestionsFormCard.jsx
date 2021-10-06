import React from 'react';
import './QuestionsFormCard.css';
import questionsPicture from '../../../assets/questions.jpg';


const QuestionsFormCard = () => {
  return (
    <div className="card-questions questions">
      <div className="questions_picture-content" style={{ backgroundImage: `url(${questionsPicture})` }}>
        <div className="questions_picture-title thin-title">Остались вопросы?</div>
        <div className="questions_picture-text">Мы постараемся ответь на них максимально быстро!</div>
      </div>
      <div className="questions_form">
        <label htmlFor="name" className="questions_form-label">Имя</label>
        <input type="text" className="questions_form-input input" id="name" />
        <label htmlFor="email" className="questions_form-label">Е-mail</label>
        <input type="text" className="questions_form-input input" id="email" />
        <label htmlFor="question" className="questions_form-label">Напишите про ваш проект</label>
        <textarea id="question" cols="30" rows="10" className="questions_form-textarea textarea"></textarea>
        <button className="questions_form-submit button">Отправить</button>
      </div>
    </div>
  );
};

export default QuestionsFormCard;
