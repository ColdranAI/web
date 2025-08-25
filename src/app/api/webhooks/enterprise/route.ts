import { NextResponse } from "next/server";

// This should be your Discord webhook URL for enterprise inquiries
const DISCORD_WEBHOOK_URL = process.env.DISCORD_ENTERPRISE_WEBHOOK_URL;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      companyName,
      website,
      industry,
      teamSize,
      contactName,
      contactEmail,
      contactPhone,
      budgetRange,
      requirements,
      timeline,
      type,
      timestamp,
      step,
    } = body;

    if (!companyName || !contactEmail || !contactName) {
      return NextResponse.json(
        { error: "Company name, contact name, and email are required" },
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
          title: "🏢 New Enterprise Inquiry",
          color: 5814783, // Deep blue color for enterprise
          fields: [
            {
              name: "🏢 Company Information",
              value: `**Company:** ${companyName}\n**Website:** ${website || "Not provided"}\n**Industry:** ${industry || "Not provided"}\n**Team Size:** ${teamSize || "Not provided"}`,
              inline: false,
            },
            {
              name: "👤 Contact Details",
              value: `**Name:** ${contactName}\n**Email:** ${contactEmail}\n**Phone:** ${contactPhone || "Not provided"}`,
              inline: false,
            },
            {
              name: "💰 Requirements",
              value: `**Budget Range:** ${budgetRange || "Not provided"}\n**Timeline:** ${timeline || "Not provided"}`,
              inline: false,
            },
            {
              name: "📋 Project Details",
              value: requirements || "No additional requirements provided",
              inline: false,
            },
            {
              name: "📊 Form Info",
              value: `**Type:** ${type}\n**Step Completed:** ${step || "All steps"}\n**Submitted:** ${new Date(timestamp).toLocaleString()}`,
              inline: false,
            },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "Enterprise CRM Platform - New Lead",
            icon_url: "https://cdn-icons-png.flaticon.com/512/4712/4712105.png",
          },
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

    // Also log to console for development
    console.log("Enterprise inquiry submitted:", {
      companyName,
      contactEmail,
      industry,
      teamSize,
      budgetRange,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Enterprise inquiry submitted successfully",
    });
  } catch (error) {
    console.error("Error sending enterprise inquiry to Discord:", error);
    return NextResponse.json(
      { error: "Failed to submit enterprise inquiry" },
      { status: 500 },
    );
  }
}
