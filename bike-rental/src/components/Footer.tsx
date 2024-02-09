import React from 'react'

export const Footer = () => {
  return (
    <>
      <div className="min-h-96 relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:z-10 before:opacity-80">
        <img src="https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4" alt="" className="h-full object-cover absolute top-0 left-0 w-full " />
        <div className="mx-auto max-w-screen-xl relative z-20 text-white py-20">
          <header className="flex flex-col items-center mb-10">
            <span className="block text-rose-600 font-medium mb-4">CHOOSE OUR ACTIVITIES</span>
            <h2 className="font-extrabold text-5xl">POPULAR PACKAGES</h2>
            <div className="flex items-center justify-center gap-4 mt-8">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
              </svg>
            </div>
          </header>
          <div className="flex items-center justify-center gap-20">
            <div className="group flex flex-col items-center text-sm relative">
              <div className="absolute h-2/3 w-2/3 -z-10 top-6 left-4 bg-stone-100 hidden opacity-0 group-hover:block group-hover:opacity-10 animate-ping"></div>
              <div className="mb-2 group-hover:scale-105 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-24 h-24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                </svg>
              </div>
              <b className="font-bold text-xl block mb-2">Adventure</b>
              15 Destination
            </div>
            <div className="group flex flex-col items-center text-sm relative before:absolute before:bg-white before:opacity-25 before:h-full before:w-px before:-left-10">
              <div className="absolute h-2/3 w-2/3 -z-10 top-6 left-4 bg-stone-100 hidden opacity-0 group-hover:block group-hover:opacity-10 animate-ping"></div>
              <div className="mb-2 group-hover:scale-105 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-24 h-24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                </svg>
              </div>
              <b className="font-bold text-xl block mb-2">Adventure</b>
              15 Destination
            </div>
            <div className="group flex flex-col items-center text-sm relative before:absolute before:bg-white before:opacity-25 before:h-full before:w-px before:-left-10">
              <div className="absolute h-2/3 w-2/3 -z-10 top-6 left-4 bg-stone-100 hidden opacity-0 group-hover:block group-hover:opacity-10 animate-ping"></div>
              <div className="mb-2 group-hover:scale-105 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-24 h-24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <b className="font-bold text-xl block mb-2">Adventure</b>
              15 Destination
            </div>
            <div className="group flex flex-col items-center text-sm relative before:absolute before:bg-white before:opacity-25 before:h-full before:w-px before:-left-10">
              <div className="absolute h-2/3 w-2/3 -z-10 top-6 left-4 bg-stone-100 hidden opacity-0 group-hover:block group-hover:opacity-10 animate-ping"></div>
              <div className="mb-2 group-hover:scale-105 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-24 h-24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                </svg>
              </div>
              <b className="font-bold text-xl block mb-2">Adventure</b>
              15 Destination
            </div>
            <div className="group flex flex-col items-center text-sm relative before:absolute before:bg-white before:opacity-25 before:h-full before:w-px before:-left-10">
              <div className="absolute h-2/3 w-2/3 -z-10 top-6 left-4 bg-stone-100 hidden opacity-0 group-hover:block group-hover:opacity-10 animate-ping"></div>
              <div className="mb-2 group-hover:scale-105 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-24 h-24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
                </svg>
              </div>
              <b className="font-bold text-xl block mb-2">Adventure</b>
              15 Destination
            </div>
            <div className="group flex flex-col items-center text-sm relative before:absolute before:bg-white before:opacity-25 before:h-full before:w-px before:-left-10">
              <div className="absolute h-2/3 w-2/3 -z-10 top-6 left-4 bg-stone-100 hidden opacity-0 group-hover:block group-hover:opacity-10 animate-ping"></div>
              <div className="mb-2 group-hover:scale-105 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-24 h-24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                </svg>
              </div>
              <b className="font-bold text-xl block mb-2">Adventure</b>
              15 Destination
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
