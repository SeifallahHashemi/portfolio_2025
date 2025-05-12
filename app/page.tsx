import { ThemeModeToggle } from '@/components/Theme/ThemeModeToggle';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <h2 className={'font-iranSans'}>سلام دنیا - ایران سنس</h2>
        <h2 className={'font-iranYWL'}>سلام دنیا - ایران یکان</h2>
      </div>
    </div>
  );
}
