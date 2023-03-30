import Image from "next/image";
import Link from "next/link";
import SubscribeToNews from "./SubscribeToNews";

export default function HeroTextAndGif() {
  return (
    <div class="relative  py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <div className="absolute -top-[5%] right-[1%] -z-10 blur-2xl opacity-20 bg-emerald-300  w-[300px] h-[300px] rounded-full"></div>
      <div className="absolute top-0 -left-[10%] -z-10 blur-2xl opacity-20 bg-sky-300  w-[400px] h-[400px] rounded-full"></div>
      <div className="absolute top-1/4 left-[2%] -z-10 blur-2xl opacity-20 bg-emerald-300  w-[300px] h-[300px] rounded-full"></div>
      <div className="absolute bottom-0 right-[10%] -z-10 blur-2xl opacity-20 bg-sky-300  w-[400px] h-[400px] rounded-full"></div>
      <div className="flex w-full h-full ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-20">
            <div className="text-center sm:text-left relative z-10 mx-auto max-w-2xl lg:max-w-none lg:pt-6 sm:col-span-1">
              <p className="text-base font-semibold leading-7 text-sky-500">
                Experience the difference today.
              </p>
              <h1 className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-3xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">
                Introducing{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
                  Envierro
                </span>
                . It will change the world.
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Revolutionary technology that will change the energy production
                industry forever with 0 carbon emissions, 0 need of outside
                energy. We are proud to announce the launch of our new product,
                Envirro.
              </p>
              <div className="mt-8 flex gap-4 justify-center md:justify-start">
                <a
                  className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
                  href="/preview"
                >
                  <span className="sm:flex items-center">
                    {/* <span className="flex items-center gap-1"> */}
                    Contact Sales{" "}
                    {/* <span aria-hidden="true" class="text-slate-400 sm:inline"> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-4 h-4 sm:ml-1"
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
                  className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 "
                  href="/documentation"
                >
                  <span className="sm:flex items-center">
                    {/* <span className="flex items-center gap-1"> */}
                    Learn More{" "}
                    <span aria-hidden="true" class="text-black/25">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-4 h-4 sm:ml-1"
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
            <div className="relative flex my-14   gap-8 justify-center p-4 lg:pl-20 w-full h-full">
              <div className="absolute left-0 -right-12 -top-7 h-px bg-slate-900/[0.2] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              {/* <div className="absolute left-0 -right-12 -top-[5.3rem] h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div> */}
              <div className="absolute -left-4 -right-2  -top-24 -skew-y-12 h-px bg-slate-900/[0.2] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(50%-14rem),transparent)]"></div>
              <div className="absolute -top-8 bottom-0 left-32 w-px bg-slate-900/[0.2] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="absolute right-16 -top-2 -bottom-2 w-px bg-slate-900/[0.2] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="absolute right-0 -top-2 -bottom-2 w-px bg-slate-900/[0.2] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="absolute right-1 -top-2 skew-x-12 -bottom-2 w-px bg-slate-900/[0.2] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="absolute left-0 right-12 bottom-20 h-px bg-slate-900/[0.2] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="z-0 tube overflow-hidden "></div>
              <div className="z-0 tube overflow-hidden"></div>
              <div className="z-0 tube overflow-hidden"></div>
              <div className="z-0 tubeBlue overflow-hidden"></div>
            </div>
          </div>
          <SubscribeToNews />
        </div>
      </div>
      <div className="relative -z-10 pt-16 w-full">
        <div className="absolute inset-x-0 bottom-0 h-96 text-slate-600/20 [mask-image:linear-gradient(to_bottom,transparent,white)]">
          <svg
            className="absolute inset-0 h-full w-full"
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
      </div>
      {/* <div className="absolute -bottom-5  text-3xl font-bold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem] w-full text-center"> */}
      <div className="  text-3xl font-bold mt-20 tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem] w-full text-center">
        Welcome to the
        <span className="text-transparent font-extrabold px-4 bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-400">
          Future
        </span>
        of energy production
      </div>
    </div>
  );
}
