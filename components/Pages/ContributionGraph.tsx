'use client';

// import { github } from '@/components/Data/contribution-graph-theme';
import FilteredYearButton from '@/components/Shared/FilteredYearButton';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

// import GitHubCalendar from 'react-github-calendar';

const ContributionGraph = () => {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const currentYear = new Date().getFullYear();
  const startYear = 2021;
  const duration = currentYear - startYear;
  const thisYear = new Date().getFullYear();

  const { theme, systemTheme } = useTheme();
  const [uniqueTheme, setUniqueTheme] = useState<'light' | 'dark' | undefined>(
    theme as 'light' | 'dark'
  );
  const [calendarYear, setCalendarYear] = useState<number | undefined>(
    undefined
  );

  const scheme =
    theme === 'light' ? 'light' : theme === 'dark' ? 'dark' : systemTheme;

  useEffect(() => {
    setUniqueTheme(scheme);
  }, [scheme]);

  console.log(uniqueTheme);

  if (!username) {
    return (
      <div
        className={
          'flex justify-center items-center text-base font-bold font-mono'
        }
      >
        Error
      </div>
    );
  }

  return (
    <div className={'flex flex-col xl:flex-row-reverse gap-4'}>
      <div
        className={
          '!font-mono border border-zinc-200 dark:border-zinc-800 rounded-lg dark:bg-slate-900/10 backdrop-blur-lg bg-white/30 p-6 max-w-fit max-h-fit'
        }
      >
        {}
      </div>
      <div
        className={'flex justify-start xl:flex-col flex-row flex-wrap gap-2'}
      >
        {Array.from({ length: duration }, (_y, i) => currentYear - i).map(
          (year) => (
            <FilteredYearButton
              year={year}
              currentYear={calendarYear ?? thisYear}
              key={year}
              onClick={() =>
                setCalendarYear(year === calendarYear ? undefined : year)
              }
            />
          )
        )}
      </div>
    </div>
  );
};

export default ContributionGraph;
