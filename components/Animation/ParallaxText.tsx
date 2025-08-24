'use client';

import React from 'react';

interface Props {
  className: string;
}
const ParallaxText = ({ className }: Props): React.ReactElement => {
  return <div className={className}></div>;
};

export default ParallaxText;
