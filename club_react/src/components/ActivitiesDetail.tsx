import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles/ActivityDetail.module.css';

interface ScheduleItem {
  date: string;
  morning: string;
  afternoon: string;
}

interface Feedback {
  name: string;
  text: string;
}

interface ActivityDetailType {
  title: string;
  location: string;
  date: string;
  schedule: ScheduleItem[];
  photos: string[];
  feedback: Feedback[];
}

const activityDetails: ActivityDetailType[] = [
  {
    title: '生命關懷之自我探索營',
    location: '宜蘭縣員山國小',
    date: '2025/7/4 ~ 2025/7/9',
    schedule: [
      { date: '7/4', morning: '開幕式 & 團隊分組', afternoon: '相見歡' },
      { date: '7/5', morning: '運動會', afternoon: '營火晚會' },
      { date: '7/6', morning: '課程工作坊', afternoon: '課程工作坊' },
      { date: '7/7', morning: '專題講座', afternoon: '小組表演' },
      { date: '7/8', morning: '手做課程', afternoon: '心得分享' },
      { date: '7/9', morning: '閉幕式', afternoon: '合影 & 活動結束' },
    ],
    photos: ['/images/4.png', '/images/5.jpg', '/images/6.jpg'],
    feedback: [
      { name: '參加者 A', text: '這次活動讓我深刻體會到志工服務的重要性，也學到如何與不同背景的人合作完成任務。' },
      { name: '參加者 B', text: '透過實地服務，我了解了社區的需求與挑戰，也提升了自己的溝通與問題解決能力。' },
      { name: '參加者 C', text: '活動過程中不僅收穫了新知識，也與夥伴們建立了深厚的友誼，這段經驗讓我十分難忘。' },
    ],
  },
  {
    title: '青少年成長營',
    location: '地點 A',
    date: '2025/8/1 ~ 2025/8/5',
    schedule: [],
    photos: [],
    feedback: [],
  },
  {
    title: '社區服務志工營',
    location: '地點 B',
    date: '2025/9/10 ~ 2025/9/15',
    schedule: [],
    photos: [],
    feedback: [],
  },
];

const ActivityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const index = id ? parseInt(id) : -1;
  const activity = activityDetails[index];

  if (!activity) return <p>找不到此活動</p>;

  return (
    <div className={styles.container}>
      <h2>{activity.title}</h2>
      <p><strong>地點:</strong> {activity.location}</p>
      <p><strong>時間:</strong> {activity.date}</p>

      {activity.schedule.length > 0 && (
        <>
          <h2>日程表</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>日期</th>
                <th>上午課程</th>
                <th>下午課程</th>
              </tr>
            </thead>
            <tbody>
              {activity.schedule.map((item, i) => (
                <tr key={i}>
                  <td>{item.date}</td>
                  <td>{item.morning}</td>
                  <td>{item.afternoon}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {activity.photos.length > 0 && (
        <>
          <h2>活動花絮</h2>
          <div className={styles['photo-gallery']}>
            {activity.photos.map((src, i) => (
              <img key={i} src={src} alt={`活動照片${i + 1}`} />
            ))}
          </div>
        </>
      )}

      {activity.feedback.length > 0 && (
        <>
          <h2>服務心得</h2>
          <div className={styles.feedback}>
            {activity.feedback.map((f, i) => (
              <div key={i}>
                <p><strong>{f.name}：</strong></p>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ActivityDetail;
