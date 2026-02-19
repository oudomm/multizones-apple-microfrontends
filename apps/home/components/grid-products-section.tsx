import { AppleLogo, ButtonLink } from "@repo/ui";
import Image from "next/image";

export default function GridProducstSection() {
  return (
    <section className="bg-white px-3 mb-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-[1440px] mx-auto">
        {/* Apple Watch Band */}
        <div className="bg-black text-center overflow-hidden group max-h-150">
          <div className="pt-12 px-8">
            <div className='flex justify-center items-center'>
              <AppleLogo className='h-9 w-9 text-white' />
              <h2 className="mt-2 text-2xl md:text-4xl font-semibold tracking-[-0.015em] leading-[1.05] text-white uppercase">
                Watch
              </h2>
            </div>
            <h3 className="mt-1 text-[21px] text-white flex flex-col">
              <span>The new Black Unity band.</span>
              <span>Inspired by the power of connection.</span>
            </h3>
            <div className="mt-4 flex items-center justify-center gap-5 text-[17px]">
              <ButtonLink href='/store' variant='white' size='sm'>Shop</ButtonLink>
            </div>
          </div>
          <div className="mt-4 flex justify-center pb-8">
            <div className="relative w-full h-80 md:h-95">
              <Image
                src="/images/watch-band.webp"
                alt="Apple Watch Band"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>

        {/* iPad Air */}
        <div className="bg-gradient-to-b from-[#ADDCEE] to-[#F1F5F6] text-center overflow-hidden group max-h-150">
          <div className="pt-12 px-8">
            <h2 className="text-[28px] md:text-[40px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">
              iPad Air
            </h2>
            <h3 className="mt-1 text-[21px] text-[#6e6e73]">
              Thinnest ever. Biggest display.
            </h3>
            <div className="mt-4 flex items-center justify-center gap-5 text-[17px]">
              <ButtonLink href='/ipad' variant='blue' size='sm'>Learn more</ButtonLink>
              <ButtonLink href='/store' variant='blueOutline' size='sm'>Buy</ButtonLink>
            </div>
          </div>
          <div className="mt-4 flex justify-center pb-8">
            <div className="relative w-full h-80 md:h-95">
              <Image
                src="/images/ipad-air.png"
                alt="iPad Air"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>

        {/* MacBook Pro 14 */}
        <div className="bg-black text-center overflow-hidden group max-h-150">
          <div className="pt-12 px-8">
            <h2 className="text-[28px] md:text-[40px] font-semibold tracking-[-0.015em] text-white">
              MacBook Pro 14"
            </h2>
            <h3 className="mt-1 text-[21px] text-white">
              Supercharged by M5.
            </h3>
            <div className="mt-4 flex items-center justify-center gap-5 text-[17px]">
              <ButtonLink href='/mac' variant='blue' size='sm'>Learn more</ButtonLink>
              <ButtonLink href='/store' variant='blueOutline' size='sm'>Buy</ButtonLink>
            </div>
          </div>
          <div className="mt-12 flex justify-center pb-8">
            <div className="relative w-full h-60 md:h-70">
              <Image
                src="/images/macbook-pro-14.png"
                alt="MacBook Pro 14"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>

        {/* AirPod Pro 3 */}
        <div className="bg-[#F5F5F7] text-center overflow-hidden group max-h-150">
          <div className="pt-12 px-8">
            <h2 className="text-[28px] md:text-[40px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">
              AirPod Pro 3
            </h2>
            <h3 className="mt-1 text-[21px] text-black flex flex-col">
              <span>The world's best in-ear </span>
              <span>Active Noise Cancellation.</span>
            </h3>
            <div className="mt-4 flex items-center justify-center gap-5 text-[17px]">
              <ButtonLink href='/airpods' variant='blue' size='sm'>Learn more</ButtonLink>
              <ButtonLink href='/store' variant='blueOutline' size='sm'>Buy</ButtonLink>
            </div>
          </div>
          <div className="mt-12 flex justify-center pb-8">
            <div className="relative w-full h-60 md:h-70">
              <Image
                src="/images/airpod-pro-3.webp"
                alt="AirPod Pro 3"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}