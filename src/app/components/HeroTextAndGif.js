import Image from "next/image";
import Link from "next/link";
import MySvgComponent from "./cube";

export default function HeroTextAndGif() {
  return (
    <div class="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div class="relative z-20 mx-auto max-w-[40rem] pb-16 pt-16 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pb-24 lg:pr-4 lg:pt-20">
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
            <div class="mt-8 flex gap-4">
              <a
                href="#browse"
                class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
              >
                <span>
                  Browse <span class="hidden sm:inline">templates</span>{" "}
                  <span aria-hidden="true" class="text-slate-400 sm:inline">
                    →
                  </span>
                </span>
              </a>
              <a
                class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 "
                href="/all-access"
              >
                <span>
                  Get <span class="hidden sm:inline">everything</span> with
                  all-access{" "}
                  <span aria-hidden="true" class="text-black/25 sm:inline">
                    →
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div class="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
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
            <div class="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
