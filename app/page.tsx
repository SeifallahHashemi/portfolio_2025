import { ThemeColorToggle } from '@/components/Theme/ThemeColorToggle';
import { ThemeModeToggle } from '@/components/Theme/ThemeModeToggle';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ThemeModeToggle />
      <ThemeColorToggle />
    </div>
  );
}
