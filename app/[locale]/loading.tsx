"use client";
import { Audio } from "react-loader-spinner";
export default function Loading() {
  return (
    <main className="min-h-screen flex flex-col  items-center">
      <div className="m-auto pt-4 text-off-white text-2xl md:pt-16 lg:pt-20">
        <Audio
          height="80"
          width="80"
          radius="9"
          color="white"
          ariaLabel="loading"
        />
      </div>
    </main>
  );
}
