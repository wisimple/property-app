import Image from 'next/image';
import styles from './styles.module.scss';
import React from 'react';

const agents = [
  {
    name: 'Eric Feinman',
    imageUrl: '/img/agents/1.jpeg',
    housesSold: 244,
  },
  {
    name: 'Kim Brown',
    imageUrl: '/img/agents/2.jpeg',
    housesSold: 210,
  },
  {
    name: 'Toby Ramsey',
    imageUrl: '/img/agents/3.jpeg',
    housesSold: 195,
  },
];

export default function AgentsTemplate() {
  return (
    <div className={styles.container}>
      <h3 className='heading-3'>Top 3 Agents</h3>
      <div className={styles['agents-list']}>
        {agents.map((agent, index) => (
          <React.Fragment key={index}>
            <Image
              src={agent.imageUrl}
              alt={agent.name}
              width={80}
              height={80}
              className={styles['agent-image']}
            />
            <div className={styles['agent-details']}>
              <h4 className='heading-4 color-light'>{agent.name}</h4>
              <p className={styles['agent-houses-sold']}>
                {agent.housesSold} number of houses sold
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
