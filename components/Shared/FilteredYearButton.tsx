import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { MouseEventHandler } from 'react';

interface ButtonProps {
  year: number;
  currentYear: number | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
const FilteredYearButton = ({ year, currentYear, onClick }: ButtonProps) => {
  return (
    <Button
      variant={'ghost'}
      onClick={onClick}
      className={cn('font-mono', {
        '!bg-teal-900': currentYear === year,
      })}
      title={`سال فعالیت ${year}`}
    >
      {year}
    </Button>
  );
};

export default FilteredYearButton;
