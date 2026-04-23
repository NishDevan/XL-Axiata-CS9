import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-[#F8FAFC] selection:bg-blue-200">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-lg border-gray-200 shadow-sm transition-all duration-300">
        <div className="container px-6 py-4 mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo_xl_axiata.png" alt="Logo XL Axiata" width={140} height={45} className="h-8 w-auto object-contain" />
          </div>

          <nav className="hidden lg:flex gap-8 fot-semibold text-xs tracking-wider text-gray-600 uppercase">
            <a href="#Company" className="hover:text-blue-700 transition-colors">Company</a>
            <a href="#Services" className="hover:text-blue-700 transition-colors">Services</a>
            <a href="#Investors" className="hover:text-blue-700 transition-colors">Investors</a>
            <a href="#Sustainability" className="hover:text-blue-700 transition-colors">Sustainability</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 bg-[#0B1B3D] text-white overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-100 h-100 rounded-full bg-blue-500/20 blur-[120px] ponter-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-125 h-125 rounded-full bg-slate-400/10 blur-[100px] pointer-events-none"></div>

        <div className="container px-6 mx-auto flex flex-col items-center text-center relative x-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
            Welcome to XL Axiata <br />
            <span className="text-gray-300 font-medium text-3xl md:text-4xl lg:text-5xl block mt-2">
              #1 Convergence Operator in Indonesia
            </span>
          </h1>

          <h2 className="text-transparent bg-clip-text bg-linear-to-r from-blue-300 via-white to-gray-300 text-4xl md:text-6xl font-extrabold mt-6 tracking-wide drop-shadow-sm">
            #JadiLebihBaik
          </h2>

          <div className="mt-12 animate-bounce opacity-50">
            <span className="text-xs uppercase tracking-widest block mb-2">Scroll Down</span>
            <svg className="mx-auto" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
          </div>
        </div>
      </section>

      {/* Company Announcement Banner */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-lg">
            <h3 className="text-2xl md:text-4xl font-bold text-[#1e293b] leading-tight mb-6">
              Let's take a closer look into the heart of our business to see exactly how we bring our ideas to life every day
            </h3>
            <button className="px-8 py-3 border border-gray-300 text-sm font-bold text-gray-600 tracking-widest uppercase hover:bg-gray-50 hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
          <div className="h-75 bg-slate-100 rounded-xl overflow-hidden relative group">
            <img 
              src="https://staticxl.ext.xlaxiata.co.id/s3fs-public/media/images/Analyst%20Coverage%20-%20Analyst%20Presentation.jpg" 
              alt="XL Axiata Building" 
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Company Reports */}
      <section className="container mx-auto px-6 py-6 grid md:grid-cols-2 gap-6">
        {/* Annual Report */}
        <div className="relative h-62.5 md:h-80 rounded-2xl overflow-hidden group">
          <img 
            src="https://img.freepik.com/free-photo/business-report-graphs-charts-business-reports-pile-documents-business-concept_1150-2254.jpg?semt=ais_hybrid&w=740&q=80" 
            alt="Annual Report" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/50 transition-colors"></div>
          <div className="absolute inset-0 p-10 flex flex-col justify-center items-start">
            <h3 className="text-3xl font-bold text-white mb-6">Annual Report</h3>
            <button className="px-6 py-2 border border-pink-500/50 text-white text-sm font-semibold tracking-wider flex items-center gap-2 hover:bg-pink-500/20 backdrop-blur-sm transition-all">
              VISIT <span className="text-pink-400">▸</span>
            </button>
          </div>
        </div>

        {/* Sustainability Report */}
        <div className="relative h-62.5 md:h-80 rounded-2xl overflow-hidden group">
          <img 
            src="https://pusatpelatihan.co.id/wp-content/uploads/2017/04/report-writing.jpg" 
            alt="Sustainability Report" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/50 transition-colors"></div>
          <div className="absolute inset-0 p-10 flex flex-col justify-center items-start">
            <h3 className="text-3xl font-bold text-white mb-6">Sustainability<br/>Report</h3>
            <button className="px-6 py-2 border border-pink-500/50 text-white text-sm font-semibold tracking-wider flex items-center gap-2 hover:bg-pink-500/20 backdrop-blur-sm transition-all">
              VISIT <span className="text-pink-400">▸</span>
            </button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-[#4C759E] py-20 mt-12 text-white">
        <div className="container px-6 mx-auto">
          <h2 className="text-2xl font-bold mb-10 tracking-wide">Latest News From XL Axiata</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Featured News */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl bg-slate-800 aspect-video mb-6 relative">
                <img 
                  src="https://www.xlsmart.co.id/_next/image?url=https%3A%2F%2Fd3u77pruet61j3.cloudfront.net%2Fproduction%2Fuploads%2Fimages%2F2025%2F10%2F14%2F9045cfe7-eac4-4819-8147-a8ac67603983.jpg&w=3840&q=75" 
                  alt="SMARTFREN Fun Run" 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 opacity-90"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold leading-snug mb-3 group-hover:text-blue-100 transition-colors">
                XLSMART Gelar SMARTFREN Fun Run 2025 di Bengkulu: Perkuat Konektivitas Layanan Data SMARTFREN yang Semakin Luas
              </h3>
              <p className="text-xs font-bold tracking-widest text-gray-300">29 SEP 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Strict Corporate Detail */}
      <footer className="bg-[#646A73] text-white">
        <div className="container px-6 py-16 mx-auto grid md:grid-cols-3 gap-12">
          
          {/* Kolom Kiri: Logo + Alamat */}
          <div>
            {/* Logo XL Axiata ditambahkan di sini, difilter invert agar warnanya jadi putih */}
            <Image
              src="/logo_xl_axiata.png"
              alt="Logo XL Axiata"
              width={120}
              height={40}
              className="h-8 w-auto object-contain brightness-0 invert mb-6"
            />
            <h4 className="font-bold text-lg mb-4 tracking-wider">PT XL Axiata Tbk.</h4>
            <div className="text-sm leading-relaxed text-gray-100 space-y-4">
              <p>
                XL Axiata Tower JL. H. R. Rasuna <br />
                Said X5 Kav. 11-12 Kuningan Timur, <br />
                Setiabudi, Jakarta Selatan 12950 <br />
                Indonesia.
              </p>
              <p className="font-medium">
                T. (021) 576 1881
              </p>
            </div>
          </div>

          {/* Kolom Tengah: Connect With Us (Style Garis Kotak) */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wider">Connect With Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/70 hover:border-white hover:bg-white/10 transition-all rounded-[4px]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/70 hover:border-white hover:bg-white/10 transition-all rounded-[4px]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/70 hover:border-white hover:bg-white/10 transition-all rounded-[4px]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/70 hover:border-white hover:bg-white/10 transition-all rounded-[4px]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Quick Link */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wider">Quick Access Link</h4>
            <ul className="space-y-4 text-sm text-gray-100">
              <li><a href="#" className="hover:text-white transition-colors">XL Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SIM Card Registration</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar - Putih Minimalis */}
        <div className="bg-white text-gray-600 py-6 mt-8">
          <div className="container px-6 mx-auto flex flex-col md:flex-row justify-between items-center text-xs font-semibold tracking-wide">
            <div className="flex gap-4 mb-4 md:mb-0">
              <a href="#" className="hover:text-blue-800 transition-colors">Terms & Conditions</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:text-blue-800 transition-colors">Privacy Policy</a>
            </div>
            <div className="text-[#1e293b]">
              Created By Danish Putra Devananda
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}