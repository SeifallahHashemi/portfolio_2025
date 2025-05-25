// import BlurIn from '@/components/Animation/BlurIn';
import AnimateSection from '@/components/Animation/AnimateSection';

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen overflow-x-clip">
      {/*<BlurIn text={'سلام! اسم من سپهره 👋'} className={'text-2xl font-bold'} />
      <BlurIn
        text={'برنامه نویس ارشد فرانت اند'}
        className={'text-2xl font-bold'}
        delay={0.1}
      />*/}
      <AnimateSection className={'w-full xl:max-w-6xl mx-auto text-center'}>
        <p className={'font-iranYWR text-2xl font-semibold leading-20'}>
          سلام! اسم من سپهره <span className={'text-3xl'}>👋</span>
        </p>
      </AnimateSection>
      <AnimateSection
        className={'w-full xl:max-w-6xl mx-auto text-center'}
        delay={0.1}
      >
        <p
          className={
            'font-iranYWR text-base font-normal leading-relaxed text-balance text-zinc-400 dark:text-zinc-600'
          }
        >
          من سپهر هاشمی هستم، یک توسعه دهنده باتجربه که مشتاق یادگیری و ساختن
          نرم افزار های خلاقانه و مدرن است.
        </p>
      </AnimateSection>
    </div>
  );
}
