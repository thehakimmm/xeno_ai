import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: NextRequest) {
  console.log("=== XenoAI API Called ===");
  
  try {
    const { messages } = await req.json();
    console.log(`Processing ${messages.length} message(s)...`);

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request body. Expected 'messages' array." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not configured." },
        { status: 500 }
      );
    }

    // Initialize Gemini client (official SDK)
    const ai = new GoogleGenAI({
      apiKey: apiKey
    });

    // Build prompt with context
    let fullPrompt = "You are XenoAI, a powerful and intelligent AI assistant. Provide clear, accurate, and helpful responses.\n\n";
    
    messages.forEach((msg: any) => {
      if (msg.role === "user") {
        fullPrompt += `User: ${msg.content}\n`;
      } else if (msg.role === "assistant") {
        fullPrompt += `Assistant: ${msg.content}\n`;
      }
    });
    
    fullPrompt += "Assistant: ";

    console.log("Calling Gemini API...");

    // Call Gemini using official SDK syntax
    // Using gemini-2.5-flash as per official docs
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: fullPrompt,
    });

    const assistantMessage = response.text || "I'm sorry, I couldn't generate a response.";
    console.log("✓ Response generated successfully");

    return NextResponse.json({
      message: assistantMessage,
    });
  } catch (error: any) {
    console.error("Error calling Gemini API:", error);
    console.error("Error details:", error?.message);
    
    // Extract error message
    let errorMessage = "Failed to process your request.";
    
    if (error?.message) {
      errorMessage = error.message;
    }
    
    if (error?.status === 429) {
      errorMessage = "Rate limit exceeded. Please try again later.";
    }
    
    if (error?.status === 403 || error?.status === 400) {
      errorMessage = "API key error. Please check your Gemini API key configuration.";
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: error?.status || 500 }
    );
  }
}

