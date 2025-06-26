import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { depositCoinCode, receiveCoinCode } = await request.json()

    const response = await fetch("https://www.swftc.info/api/v1/getBaseInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: "aliyungf_tc=3ee589a9582b65e2744e1c3ad0081cca657535dc95639aaf57cf4ed7bea91b4b",
      },
      body: JSON.stringify({
        depositCoinCode,
        receiveCoinCode,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to fetch quote")
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching quote:", error)
    return NextResponse.json({ error: "Failed to fetch quote" }, { status: 500 })
  }
}
