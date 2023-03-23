import Image from "next/image";
import Link from "next/link";
import MySvgComponent from "./cube";
import SubscribeToNews from "./SubscribeToNews";

export default function HeroTextAndGif() {
  return (
    <div class="relative overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <div className="absolute bottom-1/4 left-[10%] -z-10 blur-2xl opacity-20 bg-green-500  w-[700px] h-[700px] rounded-full"></div>
      <div className="absolute bottom-0 -left-[10%] -z-10 blur-2xl opacity-20 bg-green-500  w-[700px] h-[700px] rounded-full"></div>
      <div className="absolute bottom-0 right-[10%] -z-10 blur-2xl opacity-20 bg-sky-500  w-[700px] h-[700px] rounded-full"></div>
      <div class="flex w-full h-full ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-20">
            <div class="text-center sm:text-left relative z-10 mx-auto max-w-2xl lg:max-w-none lg:pt-6 sm:col-span-1">
              <h1 class="text-base font-semibold leading-7 text-sky-500">
                By the makers of Tailwind CSS
              </h1>
              <p class="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem]">
                Modern website templates, crafted with Tailwind CSS.
              </p>
              <p class="mt-4 text-base leading-7 text-slate-600">
                Visually-stunning, easy to customize site templates built with
                React and Next.js. The perfect starting point for your next
                project and the ultimate resource for learning how experts build
                real websites with Tailwind CSS.
              </p>
              <div class="mt-8 flex gap-4 justify-center md:justify-start">
                <a
                  class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
                  href="/preview"
                >
                  <span className="sm:flex items-center">
                    {/* <span className="flex items-center gap-1"> */}
                    Live preview{" "}
                    {/* <span aria-hidden="true" class="text-slate-400 sm:inline"> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="w-4 h-4 sm:ml-1"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                    {/* </span> */}
                  </span>
                </a>
                <a
                  class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 "
                  href="/documentation"
                >
                  <span className="sm:flex items-center">
                    {/* <span className="flex items-center gap-1"> */}
                    Documentation{" "}
                    <span aria-hidden="true" class="text-black/25">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="w-4 h-4 sm:ml-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        />
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </div>
            {/* <div class="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <div class="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0">
              <svg
                viewBox="0 0 1026 1026"
                fill="none"
                aria-hidden="true"
                class="absolute inset-0 h-full w-full animate-spin-slow"
              >
                <path
                  d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                  stroke="#D4D4D4"
                  stroke-opacity="0.7"
                ></path>
                <path
                  d="M513 1025C230.23 1025 1 795.77 1 513"
                  stroke="url(#:R65m:-gradient-1)"
                  stroke-linecap="round"
                ></path>
                <defs>
                  <linearGradient
                    id=":R65m:-gradient-1"
                    x1="1"
                    y1="513"
                    x2="1"
                    y2="1025"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#06b6d4"></stop>
                    <stop
                      offset="1"
                      stop-color="#06b6d4"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
              <svg
                viewBox="0 0 1026 1026"
                fill="none"
                aria-hidden="true"
                class="absolute inset-0 h-full w-full animate-spin-reverse-slower"
              >
                <path
                  d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
                  stroke="#D4D4D4"
                  stroke-opacity="0.7"
                ></path>
                <path
                  d="M913 513c0 220.914-179.086 400-400 400"
                  stroke="url(#:R65m:-gradient-2)"
                  stroke-linecap="round"
                ></path>
                <defs>
                  <linearGradient
                    id=":R65m:-gradient-2"
                    x1="913"
                    y1="513"
                    x2="913"
                    y2="913"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#06b6d4"></stop>
                    <stop
                      offset="1"
                      stop-color="#06b6d4"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div> */}
            <div class="relative flex-shrink-0 p-4">
              <div class=" relative z-10 overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5">
                <Image
                  class="h-[600px] w-auto object-cover"
                  alt="asd"
                  width={336}
                  height={404}
                  src="/drawings.webp"
                ></Image>
              </div>
              <div class="z-0">
                <div class="absolute left-0 -right-12 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div class="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div class="absolute left-0 -right-12 bottom-14 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div class="absolute right-0 -top-2 -bottom-8 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div class="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
                  <div class="flex -mb-px h-[2px] w-80 -scale-x-100">
                    <div class="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    <div class="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SubscribeToNews />
        </div>
      </div>
      <div className="relative -z-10 pt-64 w-full">
        <div class="absolute inset-x-0 bottom-0 h-96 text-slate-600/20 [mask-image:linear-gradient(to_bottom,transparent,white)]">
          <svg
            class="absolute inset-0 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="pricing-pattern"
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
                x="50%"
                y="100%"
                patternTransform="translate(0 -1)"
              >
                <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#pricing-pattern)"
            ></rect>
          </svg>
        </div>
        <div className="absolute bottom-20 text-3xl font-bold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem] w-full text-center">
          Welcome to the FUTURE
        </div>
      </div>
    </div>
  );
}
