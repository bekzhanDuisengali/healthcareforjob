import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RegisterPage.css';
function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    weight: '',
    height: '',
    goal: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      localStorage.setItem('userInfo', JSON.stringify(formData));
      alert('Регистрация успешна!');
      navigate('/my-day');
    } catch (error) {
      console.error('Ошибка при сохранении данных:', error);
      alert('Что-то пошло не так.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: 300 }}>
        <input name="name" placeholder="Имя" value={formData.name} onChange={handleChange} required />
        <input name="age" type="number" placeholder="Возраст" value={formData.age} onChange={handleChange} required />
        <input name="weight" type="number" placeholder="Вес (кг)" value={formData.weight} onChange={handleChange} required />
        <input name="height" type="number" placeholder="Рост (см)" value={formData.height} onChange={handleChange} required />
        <input name="goal" placeholder="Цель (например, похудеть)" value={formData.goal} onChange={handleChange} required />
        <button type="submit" style={{ marginTop: '1rem' }}>Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default RegisterPage;