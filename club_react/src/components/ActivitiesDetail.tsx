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
  description: string; // 新增活動概述
  schedule: ScheduleItem[];
  photos: string[];
  feedback: Feedback[];
}

const activityDetails: ActivityDetailType[] = [
  {
    title: '生命關懷之自我探索營',
    location: '宜蘭縣員山國小',
    date: '2025/7/4 ~ 2025/7/9',
    description:
      '本活動以「自我探索與生命關懷」為核心，期望引導學員認識自我、肯定價值，並培養同理心與服務精神。透過課程學習與實際服務體驗，幫助參加者在成長過程中找到人生方向，進而將所學應用於社會，傳遞關懷與溫暖。',
    schedule: [
      { date: '7/4', morning: '開幕式 & 團隊分組', afternoon: '相見歡' },
      { date: '7/5', morning: '運動會', afternoon: '營火晚會' },
      { date: '7/6', morning: '課程工作坊', afternoon: '課程工作坊' },
      { date: '7/7', morning: '專題講座', afternoon: '小組表演' },
      { date: '7/8', morning: '手做課程', afternoon: '心得分享' },
      { date: '7/9', morning: '閉幕式', afternoon: '合影 & 活動結束' },
    ],
    photos: ['/images/4.png', '/images/5.jpg', '/images/6.jpg!ys'],
    feedback: [
      { name: '參加者 A', text: '這次活動讓我深刻體會到志工服務的重要性，也學到如何與不同背景的人合作完成任務。' },
      { name: '參加者 B', text: '透過實地服務，我了解了社區的需求與挑戰，也提升了自己的溝通與問題解決能力。' },
      { name: '參加者 C', text: '活動過程中不僅收穫了新知識，也與夥伴們建立了深厚的友誼，這段經驗讓我十分難忘。' },
    ],
  },
  {
    title: '青少年成長營',
    location: '宜蘭縣員山國小',
    date: '2025/8/1 ~ 2025/8/6',
    description:
      '青少年成長營旨在提供一個安全、充滿挑戰與學習的環境，透過團隊合作、戶外活動、領導力訓練與自我探索，幫助青少年提升自我認知、增強人際互動能力，並培養責任感與正向思維，讓每位參與者在成長的過程中發現自己的潛能與熱情。',
    schedule: [
      { date: '8/1', morning: '開幕式 & 團隊分組', afternoon: '相見歡' },
      { date: '8/2', morning: '運動會', afternoon: '營火晚會' },
      { date: '8/3', morning: '課程工作坊', afternoon: '課程工作坊' },
      { date: '8/4', morning: '專題講座', afternoon: '小組表演' },
      { date: '8/5', morning: '手做課程', afternoon: '心得分享' },
      { date: '8/6', morning: '閉幕式', afternoon: '合影 & 活動結束' },
    ],
    photos: ['/images/7.png', '/images/8.png', '/images/9.png'],
    feedback: [
      { name: '參加者 A', text: '這次青少年成長營讓我學會如何與隊友合作完成挑戰，也發現自己的潛能與創意。' },
      { name: '參加者 B', text: '透過各種戶外活動與團隊遊戲，我變得更加自信，也學會如何有效溝通與解決問題。' },
      { name: '參加者 C', text: '課程與活動內容非常豐富，我不僅收穫知識，也認識了許多新朋友，這段經驗讓我難忘。' },
    ],
  },
  {
    title: '社區服務志工營',
    location: '宜蘭縣員山國小',
    date: '2025/9/10 ~ 2025/9/15',
    description:
      '社區服務志工營旨在培養青少年的社會責任感與服務精神，透過實際參與社區關懷、環境整理、老人陪伴等志工活動，讓每位參與者學會關懷他人、增進溝通與合作能力，並從中獲得成就感與成長體驗，促進個人與社區的共同發展。',
    schedule: [
      { date: '9/10', morning: '開幕式 & 團隊分組', afternoon: '相見歡' },
      { date: '9/11', morning: '運動會', afternoon: '營火晚會' },
      { date: '9/12', morning: '課程工作坊', afternoon: '課程工作坊' },
      { date: '9/13', morning: '專題講座', afternoon: '小組表演' },
      { date: '9/14', morning: '手做課程', afternoon: '心得分享' },
      { date: '9/15', morning: '閉幕式', afternoon: '合影 & 活動結束' },
    ],
    photos: ['/images/10.png', '/images/11.png', '/images/12.png'],
    feedback: [
      { name: '參加者 A', text: '這次社區服務志工營讓我深刻體會到服務的重要性，也學會如何與不同背景的人合作完成任務。' },
      { name: '參加者 B', text: '透過實地參與社區活動，我了解了社區的需求與挑戰，也提升了自己的溝通與問題解決能力。' },
      { name: '參加者 C', text: '活動過程中不僅學到新知識，也與夥伴建立了深厚的友誼，這段經驗讓我十分難忘。' },
    ],
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

      {/* 活動概述 */}
      <h2>活動概述</h2>
      <p>{activity.description}</p>

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
