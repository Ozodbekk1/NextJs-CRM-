/** @format */

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const employees = [
  {
    name: "Leasie Watson",
    role: "Team Lead - Design",
    type: "Office",
    time: "09:27 AM",
    status: "On Time",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Darlene Robertson",
    role: "Web Designer",
    type: "Office",
    time: "10:15 AM",
    status: "Late",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Jacob Jones",
    role: "Medical Assistant",
    type: "Remote",
    time: "10:24 AM",
    status: "Late",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Kathryn Murphy",
    role: "Marketing Coordinator",
    type: "Office",
    time: "09:10 AM",
    status: "On Time",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Data Analyst",
    type: "Office",
    time: "09:15 AM",
    status: "On Time",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Ronald Richards",
    role: "Phyton Developer",
    type: "Remote",
    time: "09:29 AM",
    status: "On Time",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Jenny Wilson",
    role: "React JS Developer",
    type: "Remote",
    time: "11:30 AM",
    status: "Late",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

export default function AttendanceTable() {
  return (
    <Card>
      <CardContent className='p-6 overflow-auto'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-lg font-semibold'>Attendance Overview</h2>
          <div className='text-sm underline cursor-pointer'>View All</div>
        </div>
        <table className='w-full text-sm'>
          <thead className='text-muted-foreground text-left'>
            <tr>
              <th>Employee Name</th>
              <th>Designation</th>
              <th>Type</th>
              <th>Check In Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, idx) => (
              <tr key={idx} className='border-t'>
                <td className='flex items-center gap-2 py-2'>
                  <Image
                    width={8}
                    height={8}
                    quality={100}
                    src={emp.image}
                    alt='avatar'
                    className='w-8 h-8 rounded-full'
                  />
                  {emp.name}
                </td>
                <td>{emp.role}</td>
                <td>{emp.type}</td>
                <td>{emp.time}</td>
                <td>
                  <span
                    className={`px-2 py-1 text-xs rounded-md ${
                      emp.status === "On Time"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}>
                    {emp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
