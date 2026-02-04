import PageWrapper from "../components/PageWrapper";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const tools = [
  { name: "Email Writer", path: "/tool/email" },
  { name: "Resume Builder", path: "/tool/resume" },
  { name: "Planner", path: "/tool/planner" },
  { name: "Summarizer", path: "/tool/summarizer" },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="w-full max-w-5xl">
        <h1 className="text-5xl font-bold text-center mb-8">
          WorkMate AI Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool) => (
            <Card
              key={tool.name}
              onClick={() => navigate(tool.path)}
              className="
    cursor-pointer
    bg-white
    text-black
    hover:scale-105
    transition
    shadow-md
  "
            >
              <CardHeader className="p-6 h-30 w-56 flex items-center justify-center">
                <CardTitle className="text-center text-black text-2xl">
                  {tool.name}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
