"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Eye, Pencil, Trash, Search, Filter } from "lucide-react";
import Image from "next/image";

const employeesData = [
  {
    avatar: "/img/user.png",
    name: "Darlene Robertson",
    employeeId: "345321231",
    department: "Design",
    destination: "UI/UX Designer",
    type: "Office",
    status: "Permanent",
  },
  {
    avatar: "/img/user.png",
    name: "Darlene Robertson",
    employeeId: "345321231",
    department: "Design",
    destination: "UI/UX Designer",
    type: "Office",
    status: "Permanent",
  },
  {
    avatar: "/img/user.png",
    name: "Darlene Robertson",
    employeeId: "345321231",
    department: "Design",
    destination: "UI/UX Designer",
    type: "Office",
    status: "Permanent",
  },
  {
    avatar: "/img/user.png",
    name: "Darlene Robertson",
    employeeId: "345321231",
    department: "Design",
    destination: "UI/UX Designer",
    type: "Office",
    status: "Permanent",
  },
  {
    avatar: "/img/user.png",
    name: "Darlene Robertson",
    employeeId: "345321231",
    department: "Design",
    destination: "UI/UX Designer",
    type: "Office",
    status: "Permanent",
  },
  {
    avatar: "/img/user.png",
    name: "Darlene Robertson",
    employeeId: "345321231",
    department: "Design",
    destination: "UI/UX Designer",
    type: "Office",
    status: "Permanent",
  },
  {
    avatar: "/img/user.png",
    name: "Darlene Robertson",
    employeeId: "345321231",
    department: "Design",
    destination: "UI/UX Designer",
    type: "Office",
    status: "Permanent",
  },
  {
    avatar: "/img/user.png",
    name: "Darlene Robertson",
    employeeId: "345321231",
    department: "Design",
    destination: "UI/UX Designer",
    type: "Office",
    status: "Permanent",
  },
];

const AllEmployees = () => {
  return (
    <div className="border rounded-lg p-6 bg-white dark:bg-[#1a1a1a] mt-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center border border-[#A2A1A81A] px-3 py-2 rounded-md w-72">
          <Search className="w-4 h-4  mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent w-full focus:outline-none text-sm"
          />
        </div>

        <div className="flex gap-2">
          <Button className=" text-sm px-4">+ Add New Employee</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="text-sm flex items-center gap-2"
              >
                <Filter className="w-4 h-4" /> Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-4 text-sm">
              <p>Filter options go here...</p>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Table>
        <TableCaption>Employee Records</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Employee Name</TableHead>
            <TableHead>Employee ID</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Designation</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employeesData.map((emp, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium flex items-center gap-2">
                <Image
                  src={emp.avatar}
                  alt="Avatar"
                  width={36}
                  height={36}
                  className="rounded-full w-9 h-9 object-cover border border-gray-300 dark:border-gray-600"
                />
                {emp.name}
              </TableCell>
              <TableCell>{emp.employeeId}</TableCell>
              <TableCell>{emp.department}</TableCell>
              <TableCell>{emp.destination}</TableCell>
              <TableCell>{emp.type}</TableCell>
              <TableCell>
                <span className="text-xs px-2 py-1 rounded-md bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-white">
                  {emp.status}
                </span>
              </TableCell>
              <TableCell className="flex space-x-3 text-gray-600 dark:text-gray-300">
                <Eye className="w-4 h-4 cursor-pointer hover:text-purple-600" />
                <Pencil className="w-4 h-4 cursor-pointer hover:text-yellow-500" />
                <Trash className="w-4 h-4 cursor-pointer hover:text-red-500" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell
              colSpan={7}
              className="text-center text-sm text-gray-500 dark:text-gray-400"
            >
              Showing 1 to {employeesData.length} of 60 records
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default AllEmployees;
