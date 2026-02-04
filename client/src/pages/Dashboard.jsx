import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageWrapper from "../components/PageWrapper";

export default function Dashboard() {
  return (
    <PageWrapper title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {["Email Writer", "Resume Builder", "Planner", "Summarizer"].map(
          (tool) => (
            <Card key={tool} className="cursor-pointer hover:shadow-lg">
              <CardHeader>
                <CardTitle>{tool}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Generate with AI
                </p>
              </CardContent>
            </Card>
          )
        )}
      </div>
    </PageWrapper>
  );
}
