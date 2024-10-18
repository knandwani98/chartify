"use client";

import { RightPanel } from "@/components/RightPanel";
import { Sidebar } from "@/components/Sidebar";
import { ICoin } from "@/types";

import { useState } from "react";

export default function Home() {
  const [activeCoin, setActiveCoin] = useState<ICoin | null>(null);

  return (
    <main className="w-full grid grid-cols-10 fixed h-screen">
      <div className="col-span-3 p-2">
        <Sidebar
          activeCoin={activeCoin}
          handleCoin={(coin: ICoin) => setActiveCoin(coin)}
        />
      </div>

      <div className="col-span-7 p-2">
        <RightPanel activeCoin={activeCoin} />
      </div>
    </main>
  );
}
