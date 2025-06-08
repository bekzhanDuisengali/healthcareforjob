import React, { useState, useEffect } from 'react';

const tips = [
  "Пей больше воды в течение дня.",
  "Старайся ложиться и вставать в одно и то же время.",
  "Делай короткие разминки каждый час при работе за компьютером.",
  "Добавь в рацион больше овощей и фруктов.",
  "Прогуляйся хотя бы 15 минут на свежем воздухе.",
  "Попробуй медитацию или дыхательные упражнения.",
  "Избегай еды за 2 часа до сна.",
  "Запиши 3 вещи, за которые ты благодарен сегодня.",
  "Сократи время в соцсетях перед сном.",
  "Слушай музыку, которая поднимает тебе настроение."
];

function DailyTipPage() {
  const [tip, setTip] = useState('');

  useEffect(() => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setTip(randomTip);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Совет дня</h2>
      <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>{tip}</p>
      <a href="/" style={{ display: 'block', marginTop: '2rem' }}>Назад к началу</a>
    </div>
  );
}

export default DailyTipPage;