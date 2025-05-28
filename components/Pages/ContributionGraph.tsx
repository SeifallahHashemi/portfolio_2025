'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

const ContributionGraph = () => {
  const { theme, systemTheme } = useTheme();
  const [uniqueTheme, setUniqueTheme] = useState<'light' | 'dark' | undefined>(
    theme
  );

  useEffect(() => {
    setUniqueTheme(theme || systemTheme);
  }, [theme, systemTheme]);

  return <GitHubCalendar />;
};

export default ContributionGraph;
