export default function FooterSection() {
  return (
    <footer className="bg-[#f5f5f7] px-6 pt-4 pb-6">
      <div className="max-w-[980px] mx-auto">
        <div className="border-t border-[#d2d2d7] pt-5">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-[#6e6e73]">
            <div>
              Copyright &copy; {new Date().getFullYear()} Multi-Zones Demo. Built with Next.js | Tailwind CSS | Turborepo
            </div>
            <div className="flex gap-6">
              <a className="hover:text-[#1d1d1f] hover:underline transition" href="/">Home</a>
              <a className="hover:text-[#1d1d1f] hover:underline transition" href="/store">Store</a>
              <a className="hover:text-[#1d1d1f] hover:underline transition" href="/mac">Mac</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}