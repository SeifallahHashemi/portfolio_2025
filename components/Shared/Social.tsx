import { socialLinks } from '@/components/Data/social';
import RefLink from '@/components/Shared/RefLink';
import React from 'react';

const Social = () => {
  return (
    <ul className={''}>
      {socialLinks.map((item) => (
        <li key={item.id} className={''}>
          <RefLink href={item.url} target={'_blank'}>
            <item.icon />
            {item.name}
          </RefLink>
        </li>
      ))}
    </ul>
  );
};

export default Social;
