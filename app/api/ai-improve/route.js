export const POST = async (request) => {
  // ALWAYS return JSON, no matter what happens
  try {
    // Parse request body safely
    let prompt;
    try {
      const body = await request.json();
      prompt = body.prompt;
    } catch (parseError) {
      console.error("Failed to parse request body:", parseError);
      return new Response(
        JSON.stringify({ error: "Invalid request format" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Validation: Check for empty prompt
    if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "Prompt is required and cannot be empty" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Validation: Limit prompt length (max 3000 characters)
    const MAX_PROMPT_LENGTH = 3000;
    if (prompt.length > MAX_PROMPT_LENGTH) {
      return new Response(
        JSON.stringify({
          error: `Prompt exceeds maximum length of ${MAX_PROMPT_LENGTH} characters`,
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Ensure API key is available
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "your_gemini_api_key_here") {
      console.error("Gemini API key is not configured");
      return new Response(
        JSON.stringify({ error: "AI service is not configured properly" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // System instruction for prompt improvement
    const systemPrompt = `You are a professional AI prompt engineer. Your task is to improve user-submitted prompts to make them clearer, more detailed, and more effective for AI systems.

Instructions:
1. Preserve the original intent and meaning of the prompt
2. Add clarity and specificity where needed
3. Improve structure and flow
4. Add helpful context or constraints if appropriate
5. Keep the improved prompt concise but comprehensive
6. Do NOT add any explanation or commentary - only output the improved prompt itself
7. Do NOT use markdown formatting in your response
8. Maintain the same language as the original prompt

User's original prompt to improve:
"""
${prompt.trim()}
"""

Respond with ONLY the improved prompt, nothing else.`;

    // Call Gemini v1 REST API directly with full error handling
    let geminiResponse;
    try {
      const geminiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
      
      geminiResponse = await fetch(geminiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: systemPrompt,
                },
              ],
            },
          ],
        }),
      });
    } catch (fetchError) {
      console.error("Network error calling Gemini API:", fetchError);
      return new Response(
        JSON.stringify({ error: "AI service temporarily unavailable. Please try again later." }),
        { status: 503, headers: { "Content-Type": "application/json" } }
      );
    }

    // Check response status before parsing
    if (!geminiResponse.ok) {
      let errorData = {};
      try {
        errorData = await geminiResponse.json();
      } catch (jsonError) {
        console.error("Failed to parse Gemini error response:", jsonError);
      }
      
      console.error("Gemini API Error Response:", {
        status: geminiResponse.status,
        statusText: geminiResponse.statusText,
        errorData,
      });

      // Return appropriate error based on status
      if (geminiResponse.status === 429) {
        return new Response(
          JSON.stringify({ error: "AI service rate limit exceeded. Please try again later." }),
          { status: 429, headers: { "Content-Type": "application/json" } }
        );
      }

      if (geminiResponse.status === 403) {
        return new Response(
          JSON.stringify({ error: "AI service authentication failed. Please check API key." }),
          { status: 500, headers: { "Content-Type": "application/json" } }
        );
      }

      if (geminiResponse.status === 404) {
        return new Response(
          JSON.stringify({ error: "AI model not available. Please try again later." }),
          { status: 500, headers: { "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ error: "AI service temporarily unavailable. Please try again later." }),
        { status: 503, headers: { "Content-Type": "application/json" } }
      );
    }

    // Parse response JSON safely
    let data;
    try {
      data = await geminiResponse.json();
    } catch (jsonError) {
      console.error("Failed to parse Gemini success response:", jsonError);
      return new Response(
        JSON.stringify({ error: "AI service returned invalid response. Please try again." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Extract improved prompt from Gemini response with safe navigation
    const improvedPrompt = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    if (!improvedPrompt) {
      console.error("No text in Gemini response. Full response:", JSON.stringify(data, null, 2));
      return new Response(
        JSON.stringify({ error: "AI service did not return a valid response. Please try again." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Success response
    return new Response(
      JSON.stringify({ improvedPrompt }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    // Ultimate fallback - log everything and return generic error
    console.error("Unexpected error in AI Improve API:");
    console.error("Error message:", error?.message);
    console.error("Error stack:", error?.stack);
    console.error("Full error:", error);

    return new Response(
      JSON.stringify({ error: "AI service temporarily unavailable. Please try again later." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
