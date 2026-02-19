import { AppleLogo, ButtonLink } from "@repo/ui";
import Image from "next/image";

export default function WatchSection() {
  return (<section className="bg-[#f5f5f7] text-center overflow-hidden border-[#d2d2d7] mb-3 max-h-150">
    <div className="pt-14 pb-0 max-w-3xl mx-auto px-4">
      <div className='flex justify-center items-center'>
        <AppleLogo className='h-11 w-11' />
        <h2 className="mt-2 text-3xl md:text-5xl font-semibold tracking-[-0.015em] leading-[1.05] text-[#1d1d1f] uppercase">
          Watch <span className='font-normal'>Series 11 </span>
        </h2>
      </div>
      <h3 className="text-xl md:text-2xl font-normal text-[#1d1d1f]">The ultimate way to watch your health.</h3>
      <div className="mt-5 flex items-center justify-center gap-5">
        <ButtonLink href='/watch' variant='blue' size='lg'>Learn more</ButtonLink>
        <ButtonLink href='/store' variant='blueOutline' size='lg'>Shop Apple Watch</ButtonLink>
      </div>
      <div className="mt-8 flex justify-center group">
        <div className="relative w-full h-80 md:h-95">
          <Image
            src="/images/watch-series-11.png"
            alt="Apple Watch Series 11"
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
            priority
          />
        </div>
      </div>
    </div>
  </section>)
}