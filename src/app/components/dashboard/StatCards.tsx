import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";

const stats = [
  {
    title: "Total Employee",
    value: 560,
    percent: 12,
    icon: ArrowUp,
    color: "text-green-600 dark:text-green-400",
    date: "July 16, 2023",
  },
  {
    title: "Total Applicant",
    value: 1050,
    percent: 5,
    icon: ArrowUp,
    color: "text-green-600 dark:text-green-400",
    date: "July 14, 2023",
  },
  {
    title: "Today Attendance",
    value: 470,
    percent: -8,
    icon: ArrowDown,
    color: "text-red-600 dark:text-red-400",
    date: "July 14, 2023",
  },
  {
    title: "Total Projects",
    value: 250,
    percent: 12,
    icon: ArrowUp,
    color: "text-green-600 dark:text-green-400",
    date: "July 10, 2023",
  },
];

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {stats.map((item, i) => {
        const bgColor = item.percent < 0 ? "bg-red-100" : "bg-green-100";
        return (
          <Card
            key={i}
            className="bg-card text-card-foreground border-border shadow-sm p-4"
          >
            <CardContent className="space-y-2">
              <div className="text-sm text-muted-foreground font-medium">
                {item.title}
              </div>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-foreground">
                  {item.value}
                </div>
                <div
                  className={`text-sm flex items-center ${item.color} ${bgColor} px-2 py-1 rounded`}
                >
                  <item.icon className="w-4 h-4 mr-1" />
                  {Math.abs(item.percent)}%
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Update: {item.date}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
