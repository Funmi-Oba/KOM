"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});
export default function Hero() {
  return (
    <section className="relative h-screen text-gray-900 overflow-hidden">
      {/* ✅ Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background/hero.jpg"
          alt="Ministry background"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="opacity-70"
        />
      </div>

      {/* ✅ Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 ">
       

          <div className="absolute top-10 right-10 z-[10] opacity-30 lg:opacity-100">
            <svg
              width="364"
              height="201"
              viewBox="0 0 364 201"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden md:block rotate-12"
            >
              <path
                d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
                stroke="url(#paint0_linear_25:218)"
              />
              <path
                d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
                stroke="url(#paint1_linear_25:218)"
              />
              <path
                d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
                stroke="url(#paint2_linear_25:218)"
              />
              <path
                d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
                stroke="url(#paint3_linear_25:218)"
              />
              <circle
                opacity="0.8"
                cx="214.505"
                cy="60.5054"
                r="49.7205"
                transform="rotate(-13.421 214.505 60.5054)"
                stroke="url(#paint4_linear_25:218)"
              />
              <circle
                cx="220"
                cy="63"
                r="43"
                fill="url(#paint5_radial_25:218)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_25:218"
                  x1="184.389"
                  y1="69.2405"
                  x2="184.389"
                  y2="212.24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6A00A3 " stopOpacity="0" />
                  <stop offset="1" stopColor="#6A00A3 " />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_25:218"
                  x1="156.389"
                  y1="69.2405"
                  x2="156.389"
                  y2="212.24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8F8F8F " stopOpacity="0" />
                  <stop offset="1" stopColor="#8F8F8F " />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_25:218"
                  x1="125.389"
                  y1="69.2405"
                  x2="125.389"
                  y2="212.24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6A00A3 " stopOpacity="0" />
                  <stop offset="1" stopColor="#6A00A3 " />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_25:218"
                  x1="93.8507"
                  y1="67.2674"
                  x2="89.9278"
                  y2="210.214"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8F8F8F " stopOpacity="0" />
                  <stop offset="1" stopColor="#8F8F8F " />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_25:218"
                  x1="214.505"
                  y1="10.2849"
                  x2="212.684"
                  y2="99.5816"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6A00A3 " />
                  <stop offset="1" stopColor="#6A00A3 " stopOpacity="0" />
                </linearGradient>
                <radialGradient
                  id="paint5_radial_25:218"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(220 63) rotate(90) scale(43)"
                >
                  <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                  <stop offset="1" stopColor="white" stopOpacity="0.08" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute bottom-10 left-10 z-[10] opacity-30 lg:opacity-100">
            <svg
              width="364"
              height="201"
              viewBox="0 0 364 201"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block rotate"
            >
              <path
                d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
                stroke="url(#paint0_linear_25:218)"
              />
              <path
                d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
                stroke="url(#paint1_linear_25:218)"
              />
              <path
                d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
                stroke="url(#paint2_linear_25:218)"
              />
              <path
                d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
                stroke="url(#paint3_linear_25:218)"
              />
              <circle
                opacity="0.8"
                cx="214.505"
                cy="60.5054"
                r="49.7205"
                transform="rotate(-13.421 214.505 60.5054)"
                stroke="url(#paint4_linear_25:218)"
              />
              <circle
                cx="220"
                cy="63"
                r="43"
                fill="url(#paint5_radial_25:218)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_25:218"
                  x1="184.389"
                  y1="69.2405"
                  x2="184.389"
                  y2="212.24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6A00A3 " stopOpacity="0" />
                  <stop offset="1" stopColor="#6A00A3 " />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_25:218"
                  x1="156.389"
                  y1="69.2405"
                  x2="156.389"
                  y2="212.24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8F8F8F " stopOpacity="0" />
                  <stop offset="1" stopColor="#8F8F8F " />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_25:218"
                  x1="125.389"
                  y1="69.2405"
                  x2="125.389"
                  y2="212.24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6A00A3 " stopOpacity="0" />
                  <stop offset="1" stopColor="#6A00A3 " />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_25:218"
                  x1="93.8507"
                  y1="67.2674"
                  x2="89.9278"
                  y2="210.214"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8F8F8F " stopOpacity="0" />
                  <stop offset="1" stopColor="#8F8F8F " />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_25:218"
                  x1="214.505"
                  y1="10.2849"
                  x2="212.684"
                  y2="99.5816"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6A00A3 " />
                  <stop offset="1" stopColor="#6A00A3 " stopOpacity="0" />
                </linearGradient>
                <radialGradient
                  id="paint5_radial_25:218"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(220 63) rotate(90) scale(43)"
                >
                  <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                  <stop offset="1" stopColor="white" stopOpacity="0.08" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        <div className=" relative max-w-4xl  text-center bg-white/70 p-6 md:p-10 rounded-lg shadow-lg">
        
          {/* ✨ Sprinkled Star SVGs */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Top Left */}
            <svg
              className="animate-flicker absolute top-4 left-6 w-5 h-5 text-[#6A00A3] opacity-50"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 1l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5l2-5z" />
            </svg>

            {/* Bottom Right */}
            <svg
              className="animate-flicker absolute bottom-6 right-6 w-3 h-3 text-[#6A00A3 ] opacity-50"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 1l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5l2-5z" />
            </svg>

            {/* Center-Right */}
            <svg
              className="animate-flicker absolute top-30 right-15 w-5 h-5 text-[#6A00A3] opacity-50"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 1l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5l2-5z" />
            </svg>

            {/* Bottom Left */}
            <svg
              className="animate-flicker absolute bottom-20 left-10 w-5 h-5 text-[#6A00A3] opacity-100"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 1l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5l2-5z" />
            </svg>

            {/* Center Top */}
            <svg
              className="animate-flicker absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 text-[#6A00A3 ] opacity-50"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 1l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5l2-5z" />
            </svg>
          </div>

          {/* ✅ Animated Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2
              className={`${greatVibes.className} tracking-wide italic drop-shadow-md text-xl md:text-5xl font-bold text-[#6A00A3]`}
            >
              Welcome to
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mt-1 bg-gradient-to-b from-[#6A00A3] via-[#8F8F8F] to-[#bd6166] bg-clip-text text-transparent">
              Kayode Olawoye Ministries
            </h2>
          </motion.div>
          <motion.p
            className="mt-6 text-lg md:text-xl text-[#8F8F8F]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
          >
            A non-denominational Christian ministry focused on teaching and
            training believers in the five-fold ministries.
          </motion.p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/sermons"
              className="bg-[#6A00A3] text-white px-6 py-3 rounded-full text-sm md:text-base hover:bg-[#52007c] transition"
            >
              Watch Sermons
            </Link>
            <Link
              href="/donate"
              className="border border-[#6A00A3] text-[#6A00A3] px-6 py-3 rounded-full text-sm md:text-base hover:bg-[#6A00A3] hover:text-white transition"
            >
              Partner with Us
            </Link>
          </div>
        </div>



        
      </div>
    </section>
  );
}
