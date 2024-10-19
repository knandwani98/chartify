"use client";

import { MainContainer } from "@/components/MainContainer";
import { Sidebar } from "@/components/Sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TRENDING_COINS } from "@/lib/constants";
import { ICoin } from "@/types";
import { Menu } from "lucide-react";

import { useEffect, useState } from "react";

export default function CoinPage({ params }: { params: { coinId: string } }) {
  const { coinId } = params;

  const [activeCoin, setActiveCoin] = useState<ICoin | null>(null);

  useEffect(() => {
    if (coinId) {
      setActiveCoin(
        TRENDING_COINS.filter((coin: ICoin) => coinId === coin.id)[0]
      );
    }

    return () => {
      setActiveCoin(null);
    };
  }, [coinId]);

  return (
    <main className="fixed h-screen overflow-hidden w-full grid grid-cols-10 gap-4 lg:p-4 bg-secondary-foreground">
      {/* Left */}
      <div className="max-lg:hidden col-span-3 overflow-y-scroll bg-white rounded-xl shadow-2xl">
        <Sidebar activeCoin={activeCoin} />
      </div>

      {/* Right */}
      <div className="max-lg:col-span-10 col-span-7 bg-white lg:rounded-xl flex flex-col relative shadow-2xl">
        <MainContainer activeCoin={activeCoin} />

        {/* Small Screens Only Menu */}
        <Sheet>
          <SheetTrigger className="lg:hidden z-50 absolute top-4 right-4 border rounded-full p-4 bg-primary">
            <Menu className="size-5 text-white" />
          </SheetTrigger>
          <SheetContent className="p-0 border-none overflow-y-scroll" hideClose>
            <Sidebar activeCoin={activeCoin} />
          </SheetContent>
        </Sheet>
      </div>
    </main>
  );
}
