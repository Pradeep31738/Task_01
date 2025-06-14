import React from 'react';

const cards = [
  {
    icon: 'bi-briefcase', // Bootstrap icon class
    title: 'The Foodie',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: 'Lorem Ipsum ksdhisk',
  },
  {
    icon: 'bi-layout-text-sidebar-reverse',
    title: 'The Office Goto',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate',
    link: 'Lorem Ipsum ksdhisk',
  },
  {
    icon: 'bi-image',
    title: 'The Collaboration Junkie',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate',
    link: 'Lorem Ipsum ksdhisk',
  },
  {
    icon: 'bi-bank',
    title: 'The Change Agent',
    desc: 'Excepteur sint occaecat cupidatat',
    link: 'Plan for Peace of Mind',
  },
  {
    icon: 'bi-chat-left',
    title: 'The Detective',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: 'Lorem Ipsum ksdhisk',
  },
];

export default function InfoCardsSection() {
  return (
    <section className="text-center py-5">
      <h2 className="mb-5" style={{ color: '#2d347b' }}>Lorem Ipsum</h2>
      <div className="container">
        <div className="row justify-content-center">
          {cards.map((card, idx) => (
            <div className="info-col-ct p-1 mb-4" key={idx}>
              <div className="p-2 rounded shadow-sm cardBox">
                <i className={`bi ${card.icon} fs-2 mb-3`} style={{ color: '#2d347b' }}></i>
                <h5 className="fw-bold">{card.title}</h5>
                <p className="small text-muted">{card.desc}</p>
                <a href="#" className="fw-bold small" style={{ color: '#2d347b' }}>{card.link}</a>
              </div>
            </div>
          ))}
        </div>

        <button className="btn mt-4" style={{ backgroundColor: '#2d347b', color: '#fff' }}>Find Out More</button>
      </div>
    </section>
  );
}
