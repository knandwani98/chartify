// app/api/market-chart/route.ts
import { NextResponse } from "next/server";
import axios from "axios";
import { HistoricalChart } from "@/lib/apis";

export async function GET(
  request: Request,
  { params }: { params: { coinId: string } }
) {
  const { coinId } = params;

  const { searchParams } = new URL(request.url);
  const days = searchParams.get("days");

  if (!coinId) return;

  try {
    const response = await axios.get(HistoricalChart(coinId, Number(days)));

    return NextResponse.json(response.data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json(
      { error: error?.message || "Something went wrong" },
      { status: error?.response?.status || 500 }
    );
  }
}
