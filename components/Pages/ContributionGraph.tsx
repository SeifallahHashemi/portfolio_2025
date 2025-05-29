'use client';

import { github } from '@/components/Data/contribution-graph-theme';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

const ContributionGraph = () => {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME!;

  const { theme, systemTheme } = useTheme();
  const [uniqueTheme, setUniqueTheme] = useState<'light' | 'dark' | undefined>(
    theme as 'light' | 'dark'
  );

  useEffect(() => {
    function isValidTheme(t: string | undefined): t is 'light' | 'dark' {
      return t === 'light' || t === 'dark';
    }

    const result = theme || systemTheme;
    if (isValidTheme(result)) {
      setUniqueTheme(result);
    }

    setUniqueTheme(undefined);
  }, [theme, systemTheme]);

  return (
    <GitHubCalendar
      theme={github}
      colorScheme={uniqueTheme}
      username={username}
      blockSize={13}
    />
  );
};

export default ContributionGraph;
