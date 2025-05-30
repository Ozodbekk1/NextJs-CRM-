import AttendanceChart from "@/app/components/dashboard/AttendanceChart";
import AttendanceTable from "@/app/components/dashboard/AttendanceTable";
import MyScheduleCard from "@/app/components/dashboard/MyScheduleCard";
import StatCards from "@/app/components/dashboard/StatCards";
import { Card, CardContent } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-6">
          <StatCards />
          <Card>
            <CardContent className="p-6">
              <AttendanceChart />
            </CardContent>
          </Card>
        </div>
        <div className="lg:w-96">
          <MyScheduleCard />
        </div>
      </div>
      <AttendanceTable />
    </div>
  );
}
