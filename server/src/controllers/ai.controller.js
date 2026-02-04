import AIOutput from "../models/AIOutput.js";
import { buildPrompt } from "../utils/promptBuilder.js";
import { generateAIResponse } from "../utils/openai.js";

export const runTool = async (req, res) => {
  try {
    const { tool } = req.params;
    const data = req.body;

    const prompt = buildPrompt({ tool, data });
    const output = await generateAIResponse(prompt);

    const saved = await AIOutput.create({
      userId: req.user,
      tool,
      input: data,
      output,
    });

    res.json({ output });
  } catch (err) {
    res.status(500).json({ message: "AI generation failed" });
  }
};
