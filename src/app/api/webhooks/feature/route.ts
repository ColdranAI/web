import { NextResponse } from "next/server";

// This should be your Discord webhook URL for feature requests
const DISCORD_WEBHOOK_URL = process.env.DISCORD_FEATURE_WEBHOOK_URL;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message, email, twitter, type } = body;

    if (!message || !email) {
      return NextResponse.json(
        { error: "Message and email are required" },
        { status: 400 },
      );
    }

    if (!DISCORD_WEBHOOK_URL) {
      console.error("Discord webhook URL is not configured");
      return NextResponse.json(
        { error: "Webhook not configured" },
        { status: 500 },
      );
    }

    // Format the message for Discord
    const discordMessage = {
      embeds: [
        {
          title: "🚀 New Feature Request",
          color: 3447003, // Blue color
          fields: [
            {
              name: "Feature Request",
              value: message,
            },
            {
              name: "Contact",
              value: `Email: ${email}\nTwitter: ${twitter || "Not provided"}`,
            },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    // Send to Discord webhook
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discordMessage),
    });

    if (!response.ok) {
      throw new Error(`Discord webhook error: ${response.statusText}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending to Discord webhook:", error);
    return NextResponse.json(
      { error: "Failed to send to Discord" },
      { status: 500 },
    );
  }
}
