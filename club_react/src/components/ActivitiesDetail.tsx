import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles/ActivityDetail.module.css';

interface ScheduleItem {
  date: string;
  morning1: string;
  morning2: string;
  afternoon1: string;
  afternoon2: string;
}

interface Feedback {
  name: string;
  text: string;
}

interface ActivityDetailType {
  title: string;
  location: string;
  date: string;
  description: string;
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
      { date: '7/4', morning1: '開幕式', morning2: '團隊分組', afternoon1: '破冰活動', afternoon2: '相見歡' },
      { date: '7/5', morning1: '體驗式運動', morning2: '合作挑戰賽', afternoon1: '創意表演準備', afternoon2: '營火晚會' },
      { date: '7/6', morning1: '課程工作坊①', morning2: '課程工作坊②', afternoon1: '分組討論', afternoon2: '成果分享' },
      { date: '7/7', morning1: '專題講座', morning2: '案例分析', afternoon1: '小組表演彩排', afternoon2: '舞台呈現' },
      { date: '7/8', morning1: '手作體驗①', morning2: '手作體驗②', afternoon1: '反思紀錄', afternoon2: '心得分享' },
      { date: '7/9', morning1: '閉幕式', morning2: '回顧影片', afternoon1: '合影留念', afternoon2: '活動結束' },
    ],
    photos: ['/images/4.png', '/images/5.jpg', '/images/6.jpg!ys'],
    feedback: [
      { 
        name: '參加者 A', 
        text: '這次活動讓我深刻體會到志工服務的重要性。剛開始我其實有點緊張，擔心自己無法融入團隊，但在過程中發現大家都很熱情與支持。透過一次次的任務與小組合作，我不僅學會了如何與不同背景的人溝通，更懂得去傾聽與包容。當我們一起完成挑戰時，那種成就感和歸屬感是以前從未體驗過的。' 
      },
      { 
        name: '參加者 B', 
        text: '透過實地服務，我對社區的需求與挑戰有了更清楚的認識。尤其是在與居民交流的過程中，發現許多日常小事背後其實蘊含著很深的社會意義。這讓我開始反思自己過去的生活方式，也更加珍惜擁有的一切。在解決問題的過程中，我不僅提升了溝通能力，也培養了臨場反應與協作精神，這些經驗會成為我往後成長的重要養分。' 
      },
      { 
        name: '參加者 C', 
        text: '活動過程中不僅收穫了新知識，也與夥伴們建立了深厚的友誼。每天的挑戰與分享，讓我看到每個人不同的特質與價值。最讓我印象深刻的是營火晚會，當大家圍繞在一起互相打氣，那份真誠的氛圍讓我很感動。我想，這段經驗不只是一個營隊，而是會陪伴我很久的一段珍貴回憶。' 
      },
    ],
  },
  {
    title: '青少年成長營',
    location: '宜蘭縣壯圍國中',
    date: '2025/8/1 ~ 2025/8/6',
    description:
      '青少年成長營旨在提供一個安全、充滿挑戰與學習的環境，透過團隊合作、戶外探索、創意思考與領導力訓練，幫助青少年突破自我限制，培養責任感與正向思維，讓每位參與者在實踐中發現潛能與熱情。',
    schedule: [
      { date: '8/1', morning1: '開幕式', morning2: '團隊挑戰遊戲', afternoon1: '自我探索工作坊', afternoon2: '夜間團康' },
      { date: '8/2', morning1: '戶外登山健行', morning2: '團隊定向越野', afternoon1: '策略解謎挑戰', afternoon2: '營火創意表演' },
      { date: '8/3', morning1: '領導力訓練', morning2: '角色扮演模擬', afternoon1: '創新專題設計', afternoon2: '小組分享' },
      { date: '8/4', morning1: '專題講座：未來職涯', morning2: '即興創意挑戰', afternoon1: '團隊成果展演', afternoon2: '交流座談' },
      { date: '8/5', morning1: '戶外合作任務', morning2: '心智圖創作', afternoon1: '反思日記撰寫', afternoon2: '成長分享會' },
      { date: '8/6', morning1: '閉幕式', morning2: '成長宣言', afternoon1: '合影留念', afternoon2: '活動結束' },
    ],
    photos: ['/images/7.png', '/images/8.png', '/images/9.png'],
    feedback: [
      { 
        name: '參加者 A', 
        text: '挑戰活動讓我發現自己的潛能，也學到如何帶領他人。特別是在團隊定向越野的環節，我一度迷路，但在大家的合作下，我們不僅找回方向，也凝聚了彼此的信任。這段經歷讓我體會到領導並不是命令，而是傾聽與帶領，這將對我未來的人生有很大幫助。' 
      },
      { 
        name: '參加者 B', 
        text: '營隊中設計的團隊解謎非常有趣，我們必須在有限的時間裡找出答案。雖然過程中一度爭執，但最後靠著彼此分工與冷靜思考，還是成功解開難題。這讓我學到如何在壓力下冷靜判斷，也發現團隊合作遠比單打獨鬥來得重要。' 
      },
      { 
        name: '參加者 C', 
        text: '結合戶外探索與創意思考的課程，讓我對未來更有信心。尤其是在成長分享會中，聽到大家勇敢說出自己的夢想，那種被支持與鼓勵的氛圍讓我非常感動。我開始相信，不論目標有多遙遠，只要不放棄，就一定能邁向自己想要的方向。' 
      },
    ],
  },
  {
    title: '社區服務志工營',
    location: '台中市清水高中',
    date: '2025/9/10 ~ 2025/9/15',
    description:
      '社區服務志工營透過實際行動培養青年社會責任感。課程設計融入社區調查、永續發展、跨世代交流與創意規劃，讓參與者在服務中成長，並將所學應用於改善社區，實現個人與社區的共同發展。',
    schedule: [
      { date: '9/10', morning1: '開幕式', morning2: '團隊組建', afternoon1: '社區探訪', afternoon2: '迎新之夜' },
      { date: '9/11', morning1: '社區需求調查', morning2: '分組討論', afternoon1: '環境整理行動', afternoon2: '文化交流晚會' },
      { date: '9/12', morning1: '跨世代對談', morning2: '志工技能訓練', afternoon1: '社區服務行動①', afternoon2: '反思日記' },
      { date: '9/13', morning1: '永續發展專題講座', morning2: '方案設計工作坊', afternoon1: '社區服務行動②', afternoon2: '成果發表彩排' },
      { date: '9/14', morning1: '社區改善提案發表', morning2: '互評與回饋', afternoon1: '故事分享會', afternoon2: '心靈之夜' },
      { date: '9/15', morning1: '閉幕式', morning2: '志工成果展覽', afternoon1: '合影留念', afternoon2: '活動結束' },
    ],
    photos: ['/images/10.png', '/images/11.png', '/images/12.png'],
    feedback: [
      { 
        name: '參加者 A', 
        text: '社區調查與服務讓我體會到自己也能改變環境。當我親手參與環境整理時，雖然汗流浹背，但看到乾淨的街道與居民滿意的笑容，那種充實與快樂是無法用言語形容的。這讓我明白，哪怕只是小小的行動，也能對社區帶來實際的改變。' 
      },
      { 
        name: '參加者 B', 
        text: '跨世代對談的環節很特別，與長者的交流讓我學到許多人生智慧。他們分享的故事不僅讓我了解過去的生活，也啟發我去思考未來的人生方向。這段互動讓我意識到「傾聽」是一種珍貴的能力，而這是我在課本上永遠學不到的。' 
      },
      { 
        name: '參加者 C', 
        text: '服務行動與永續發展結合，讓我對社會責任有更深刻的體會。在成果發表中，我們提出的改善方案雖然只是雛形，但能與夥伴一起討論、發想並提出具體計畫，讓我感受到自己不只是參與者，更是改變的一份子。這樣的經驗讓我對未來充滿希望。' 
      },
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

      <h2>活動概述</h2>
      <p>{activity.description}</p>

      {activity.schedule.length > 0 && (
        <>
          <h2>日程表</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>日期</th>
                <th>上午①</th>
                <th>上午②</th>
                <th>下午①</th>
                <th>下午②</th>
              </tr>
            </thead>
            <tbody>
              {activity.schedule.map((item, i) => (
                <tr key={i}>
                  <td>{item.date}</td>
                  <td>{item.morning1}</td>
                  <td>{item.morning2}</td>
                  <td>{item.afternoon1}</td>
                  <td>{item.afternoon2}</td>
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
