import { ButtonLink } from "@repo/ui";
import Image from "next/image";
import iphone17Series from '@repo/ui/assets/images/iphone-17-series.webp'

export default function IphoneSection() {
  return (
    <section className="bg-[#f5f5f7] text-center overflow-hidden border-[#d2d2d7] mb-3 max-h-150">
      <div className="pt-14 pb-0 max-w-245 mx-auto px-4">
        <h2 className="mt-2 text-3xl md:text-7xl font-semibold tracking-[-0.015em] leading-[1.05] text-[#1d1d1f]">
          iPhone
        </h2>
        <h3 className="text-2xl md:text-3xl font-normal text-[#1d1d1f]">Say hello to the latest generation of iPhone.</h3>
        <div className="mt-5 flex items-center justify-center gap-5">
          <ButtonLink href='/iphone' variant='blue' size='lg'>Learn more</ButtonLink>
          <ButtonLink href='/store' variant='blueOutline' size='lg'>Shop iPhone</ButtonLink>
        </div>
        <div className="mt-8 flex justify-center group">
          <div className="relative w-full h-80 md:h-95">
            <Image
              src={iphone17Series}
              alt="iPhone 17 Series"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}