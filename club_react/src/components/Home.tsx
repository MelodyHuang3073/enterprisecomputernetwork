import React, { useState } from 'react'
import styles from './styles/Home.module.css'

interface NewsItem {
  id: string
  title: string
  description: string
}

const newsData: NewsItem[] = [
  {
    id: 'modal1',
    title: '2025/09/20 活動預告',
    description: '我們將於 2025/09/20 舉辦秋季幼幼社活動，內容包含團康遊戲、服務學習，以及與幼兒的互動。歡迎所有成員一同參與！',
  },
  {
    id: 'modal2',
    title: '2025/09/15 成員公告',
    description: '最新一批加入幼幼社的新成員名單已經公佈，讓我們一起期待他們的表現，並給予熱烈的歡迎！',
  },
]

const Home: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const openModal = (id: string) => setActiveModal(id)
  const closeModal = () => setActiveModal(null)

  return (
    <div>
      {/* 封面 */}
      <div className={styles.hero}>歡迎來到幼幼社</div>

      <div className={styles.container}>
        {/* 最新消息 */}
      <div className={styles.news}>
        <h2>最新消息</h2>
        {newsData.map(item => (
          <div key={item.id} className={styles['news-item']}>
            <strong>{item.title}：</strong>
            {/* 先顯示前 20 個字作為預覽 */}
            <span>
              {item.description.slice(0, 20)}
              {item.description.length > 20 ? '...' : ''}
            </span>
            {/* 點擊才打開完整 modal */}
            <span
              className={styles['more-link']}
              onClick={() => openModal(item.id)}
            >
              點我看更多
            </span>
          </div>
        ))}
      </div>

        {/* 社團宗旨 */}
        <div className={styles.purpose}>
          <h2>社團宗旨</h2>
          <p>
            幼幼社致力於關懷幼兒的成長與發展，透過康輔活動、陪伴與教育，培養社團成員的服務精神與責任感。我們希望讓孩子們感受到溫暖與快樂，也讓每位成員在互動中成長，建立深厚的友誼。
          </p>
        </div>
      </div>

      {/* Modal */}
      {newsData.map(item => (
        <div
          key={item.id}
          className={styles.modal}
          style={{ display: activeModal === item.id ? 'block' : 'none' }}
          onClick={closeModal}
        >
          <div className={styles['modal-content']} onClick={e => e.stopPropagation()}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home
