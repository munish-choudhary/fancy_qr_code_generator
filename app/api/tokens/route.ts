import { NextResponse } from "next/server"

export async function GET() {
  try {
    const response = await fetch("https://www.swftc.info/api/v1/queryCoinList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: "aliyungf_tc=3ee589a9582b65e2744e1c3ad0081cca657535dc95639aaf57cf4ed7bea91b4b",
      },
      body: JSON.stringify({ supportType: "advanced" }),
    })

    if (!response.ok) {
      throw new Error("Failed to fetch tokens")
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching tokens:", error)
    return NextResponse.json({ error: "Failed to fetch tokens" }, { status: 500 })
  }
}
