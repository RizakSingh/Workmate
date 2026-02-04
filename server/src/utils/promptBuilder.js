export const buildPrompt = ({ tool, data }) => {
  switch (tool) {
    case "email":
      return `
Write a professional email.
Tone: ${data.tone}
Purpose: ${data.purpose}
Context: ${data.context}
`;

    case "resume":
      return `
Create a professional resume summary.
Role: ${data.role}
Experience: ${data.experience}
Skills: ${data.skills}
`;

    default:
      throw new Error("Invalid tool");
  }
};
