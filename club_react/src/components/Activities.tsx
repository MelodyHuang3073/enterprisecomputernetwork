import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/Activities.module.css';

interface Activity {
  id: number;
  title: string;
  date: string;
  desc: string;
  img: string;
}

const Activities: React.FC = () => {
  const navigate = useNavigate();

  const activities: Activity[] = [
    {
      id: 0,
      title: '生命關懷之自我探索營',
      date: '2025/7/4 ~ 2025/7/9',
      desc: '以自我探索與生命關懷為核心，透過課程與服務體驗，培養同理心與服務精神。',
      img: '/images/4.png',
    },
    {
      id: 1,
      title: '青少年成長營',
      date: '2025/8/1 ~ 2025/8/5',
      desc: '針對青少年設計的課程，包含團隊合作、創意挑戰與戶外活動，啟發自我潛能。',
      img: '/images/7.png',
    },
    {
      id: 2,
      title: '社區服務志工營',
      date: '2025/9/10 ~ 2025/9/15',
      desc: '透過社區服務與專題講座，學習如何回饋社會，並培養跨世代的溝通能力。',
      img: '/images/10.png',
    },
  ];

  return (
    <div className={styles.container}>
      <h1>活動首頁</h1>
      <div className={styles['activity-list']}>
        {activities.map((activity) => (
          <div key={activity.id} className={styles['activity-card']}>
            <img src={activity.img} alt={`活動${activity.id + 1}縮圖`} />
            <div className={styles['activity-content']}>
              <h2>{activity.title}</h2>
              <p><strong>日期：</strong>{activity.date}</p>
              <p>{activity.desc}</p>
              <button
                className={styles.btn}
                onClick={() => navigate(`/activities/${activity.id}`)}
              >
                查看更多
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
  