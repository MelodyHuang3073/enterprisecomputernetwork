import React from 'react';

const membersData = [
  {
    img: '/images/1.jpg',
    role: '社長',
    name: '王小明',
    desc: '帶領社團，負責全局規劃與方向。',
  },
  {
    img: '/images/2.jpg',
    role: '活動長',
    name: '李小同',
    desc: '規劃社團活動，營造熱鬧氛圍。',
  },
  {
    img: '/images/3.jpg',
    role: '總務',
    name: '陳大美',
    desc: '管理經費與物資，確保運作順利。',
  },
];

const Members: React.FC = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', margin: 0, padding: 0 }}>
    {/* 封面 */}
    <div className="hero" style={{
        textAlign: 'center',
        padding: '3rem 1rem',
        fontSize: '2rem',
        fontWeight: 'bold',
        backgroundColor: '#f0f0f0'
    }}>
        活動介紹
    </div>

    {/* 幹部介紹 */}
    <section className="members" style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        padding: '2rem',
        flexWrap: 'wrap',
        maxWidth: '1200px',    // 可選，限制太大螢幕太寬
        margin: '0 auto'       // 置中
    }}>
        {membersData.map((member, index) => (
        <div key={index} className="member-card" style={{
            background: '#fff',
            borderRadius: '1rem',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            width: '220px',
            textAlign: 'center',
            padding: '1.5rem',
            transition: 'transform 0.3s ease'
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-5px)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
        >
            <img src={member.img} alt={member.role} style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '1rem'
            }} />
            <div className="member-role" style={{
            fontWeight: 'bold',
            color: '#0077cc',
            marginBottom: '0.5rem'
            }}>{member.role}</div>
            <div className="member-name" style={{
            fontSize: '1.2rem',
            marginBottom: '0.5rem'
            }}>{member.name}</div>
            <div className="member-desc" style={{
            fontSize: '0.9rem',
            color: '#555'
            }}>{member.desc}</div>
        </div>
        ))}
    </section>
    </div>
  );
};

export default Members;



