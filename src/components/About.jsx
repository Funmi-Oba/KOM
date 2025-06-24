"use client";
import { useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  const [showVision, setShowVision] = useState(false);
  const [showMission, setShowMission] = useState(false);
  const [showMandate, setShowMandate] = useState(false);
  const [showJourney, setShowJourney] = useState(false);

  return (
    <section id="about" className="py-16 px-6 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#6A00A3] mb-12">
          About Us
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="border-l-4 border-[#6A00A3] pl-4">
            <h3 className="text-xl font-semibold text-[#6A00A3]">Vision</h3>
            <p className="text-[#8F8F8F] text-sm mt-2">
              To serve as an equipping hub for non-denominational pastors,
              church leaders, and believers across the Body of Christ—empowering
              them to fulfill their unique mandates with clarity and impact.
             {!showVision ? (
  <button
    onClick={() => setShowVision(true)}
    className="text-[#6A00A3] underline text-sm ml-2"
  >
    Read more
  </button>
) : (
  <button
    onClick={() => setShowVision(false)}
    className="text-[#6A00A3] underline text-sm ml-2"
  >
    Read less
  </button>
)}
            </p>
            {showVision && (
              <p className="text-[#8F8F8F] text-sm mt-2">
                Our vision reflects a divine calling to raise, align, and
                release God's servants—beyond denominational structures—with
                precision, power, and purpose, after the order of Kenneth Hagin.
              </p>
            )}
          </div>

          {/* Mission */}
          <div className="border-l-4 border-[#6A00A3] pl-4">
            <h3 className="text-xl font-semibold text-[#6A00A3]">Mission</h3>
            <p className="text-[#8F8F8F] text-sm mt-2">
              To bring together church leaders and believers from all
              denominations to minister to the Lord, receive divine empowerment,
              and fulfill their divine assignments.
              {!showMission && (
                <>
                  {" "}
                  <button
                    onClick={() => setShowMission(true)}
                    className="text-[#6A00A3] underline text-sm ml-2"
                  >
                    Read more
                  </button>
                </>
              )}
            </p>
            {showMission && (
              <p className="text-[#8F8F8F] text-sm mt-2">
                Through teaching, prayer, and fellowship, we foster unity in the
                Spirit and ignite a fresh fire in ministers to advance the
                Kingdom.
              </p>
            )}
          </div>

          {/* Mandate */}
          <div className="border-l-4 border-[#6A00A3] pl-4">
            <h3 className="text-xl font-semibold text-[#6A00A3]">Mandate</h3>
            <p className="text-[#8F8F8F] text-sm mt-2">
              “You are not called as a denominational pastor planting churches...
              You are sent to the Body of Christ to minister to the whole Church
              after the order of Kenneth Hagin.”
              {!showMandate && (
                <>
                  {" "}
                  <button
                    onClick={() => setShowMandate(true)}
                    className="text-[#6A00A3] underline text-sm ml-2"
                  >
                    Read more
                  </button>
                </>
              )}
            </p>
            {showMandate && (
              <p className="text-[#8F8F8F] text-sm mt-2">
                This mandate guides every ministry expression—raising leaders
                who operate in revelation, not denomination, to impact the world.
              </p>
            )}
          </div>

          {/* Our Journey */}
          <div className="border-l-4 border-[#6A00A3] pl-4">
            <h3 className="text-xl font-semibold text-[#6A00A3]">Our Journey</h3>
            <p className="text-[#8F8F8F] text-sm mt-2">
              The ministry began at age 18 with a divine instruction to follow a
              certain servant of God—my biological mother. For 29 years, I
              followed faithfully.
              {!showJourney && (
                <>
                  {" "}
                  <button
                    onClick={() => setShowJourney(true)}
                    className="text-[#6A00A3] underline text-sm ml-2"
                  >
                    Read more
                  </button>
                </>
              )}
            </p>
            {showJourney && (
              <>
                <p className="text-[#8F8F8F] text-sm mt-2">
                  I pastored a small local church under her ministry until her
                  transition to glory in May 2025. Though it seemed like a long
                  wait, God was preparing me. Everything I carry today came
                  through those hidden years.
                </p>
                <div className="mt-4">
                  <Image
                    src="/images/setman/Setman.jpg"
                    alt="Setman"
                    width={400}
                    height={300}
                    className="rounded-xl shadow-md mx-auto"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
