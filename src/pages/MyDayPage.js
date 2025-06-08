import React, { useState } from 'react';
import { format } from 'date-fns';
import { submitDailyData } from '../api/sheets';

function MyDayPage() {
  const [formData, setFormData] = useState({
    calories: '',
    steps: '',
    sleep: '',
    mood: ''
  });

  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const today = format(new Date(), 'yyyy-MM-dd');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name) {
      alert('Введите имя, под которым регистрировались.');
      return;
    }
  
    const storedUser = localStorage.getItem('userInfo');
    if (!storedUser) {
      alert('Данные пользователя не найдены. Сначала зарегистрируйтесь.');
      return;
    }
  
    const userInfo = JSON.parse(storedUser);
  
    if (userInfo.name !== name) {
      alert('Имя не совпадает с зарегистрированным. Попробуйте снова.');
      return;
    }
  
    const dataToSubmit = {
      ...userInfo,
      date: today,
      calories: formData.calories,
      steps: formData.steps,
      sleep: formData.sleep,
      mood: formData.mood
    };
  
    try {
      await submitDailyData(dataToSubmit);
      setSubmitted(true);
    } catch (error) {
      console.error('Ошибка при сохранении данных дня:', error);
      alert('Не удалось сохранить. Попробуйте снова.');
    }
  };

  if (submitted) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Данные за сегодня сохранены </h2>
        <a href="/daily-tip">Перейти к совету дня</a>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Мой день – {today}</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: 300 }}>
        <input
          name="name"
          placeholder="Ваше имя (из регистрации)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input name="calories" type="number" placeholder="Калории" value={formData.calories} onChange={handleChange} />
        <input name="steps" type="number" placeholder="Шаги" value={formData.steps} onChange={handleChange} />
        <input name="sleep" type="number" step="0.1" placeholder="Сон (часы)" value={formData.sleep} onChange={handleChange} />
        <select name="mood" value={formData.mood} onChange={handleChange}>
          <option value="">Настроение</option>
          <option value="Плохо">Плохо</option>
          <option value="Нормально">Нормально</option>
          <option value="Отлично">Отлично</option>
        </select>
        <button type="submit" style={{ marginTop: '1rem' }}>Сохранить</button>
      </form>
    </div>
  );
}

export default MyDayPage;