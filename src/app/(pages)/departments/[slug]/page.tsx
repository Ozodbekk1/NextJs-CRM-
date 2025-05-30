/** @format */

import { notFound } from "next/navigation";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  // TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Filter, Pencil, Search, Trash } from "lucide-react";
import { TableFooter } from "@mui/material";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Employee = {
  id: string;
  name: string;
  avatar: string;
  role: string;
  email: string;
  designation: string;
  type: string;
  status: string;
  department: string;
};

const employees: Employee[] = [
  // Design Department
  {
    id: "345321231",
    name: "Darlene Robertson",
    avatar: "https://picsum.photos/200",
    role: "Lead UI/UX Designer",
    email: "darlene.r@hrms.com",
    designation: "Lead UI/UX Designer",
    type: "Office",
    status: "Permanent",
    department: "Design",
  },
  {
    id: "987890345",
    name: "Floyd Miles",
    avatar: "https://picsum.photos/200",
    role: "Lead UI/UX Designer",
    email: "floyd.m@hrms.com",
    designation: "Lead UI/UX Designer",
    type: "Office",
    status: "Permanent",
    department: "Design",
  },
  {
    id: "453567122",
    name: "Cody Fisher",
    avatar: "https://picsum.photos/200",
    role: "Sr. UI/UX Designer",
    email: "cody.f@hrms.com",
    designation: "Sr. UI/UX Designer",
    type: "Office",
    status: "Permanent",
    department: "Design",
  },
  {
    id: "345321231",
    name: "Dianne Russell",
    avatar: "https://picsum.photos/200",
    role: "Sr. UI/UX Designer",
    email: "dianne.r@hrms.com",
    designation: "Sr. UI/UX Designer",
    type: "Remote",
    status: "Permanent",
    department: "Design",
  },
  {
    id: "453677881",
    name: "Savannah Nguyen",
    avatar: "https://picsum.photos/200",
    role: "Sr. UI/UX Designer",
    email: "savannah.n@hrms.com",
    designation: "Sr. UI/UX Designer",
    type: "Office",
    status: "Permanent",
    department: "Design",
  },
  {
    id: "009918765",
    name: "Jacob Jones",
    avatar: "https://picsum.photos/200",
    role: "UX Designer",
    email: "jacob.j@hrms.com",
    designation: "UX Designer",
    type: "Remote",
    status: "Permanent",
    department: "Design",
  },
  {
    id: "236870122",
    name: "Marvin McKinney",
    avatar: "https://picsum.photos/200",
    role: "UX Designer",
    email: "marvin.m@hrms.com",
    designation: "UX Designer",
    type: "Remote",
    status: "Permanent",
    department: "Design",
  },
  {
    id: "124335111",
    name: "Brooklyn Simmons",
    avatar: "https://picsum.photos/200",
    role: "UI/UX Designer",
    email: "brooklyn.s@hrms.com",
    designation: "UI/UX Designer",
    type: "Office",
    status: "Permanent",
    department: "Design",
  },
  {
    id: "435540099",
    name: "Kristin Watson",
    avatar: "https://picsum.photos/200",
    role: "UI/UX Designer",
    email: "kristin.w@hrms.com",
    designation: "UI/UX Designer",
    type: "Office",
    status: "Permanent",
    department: "Design",
  },
  {
    id: "009812890",
    name: "Kathryn Murphy",
    avatar: "https://picsum.photos/200",
    role: "UI/UX Designer",
    email: "kathryn.m@hrms.com",
    designation: "UI/UX Designer",
    type: "Office",
    status: "Permanent",
    department: "Design",
  },
  {
    id: "671190345",
    name: "Arlene McCoy",
    avatar: "https://picsum.photos/200",
    role: "UI/UX Designer",
    email: "arlene.m@hrms.com",
    designation: "UI/UX Designer",
    type: "Office",
    status: "Permanent",
    department: "Design",
  },
  {
    id: "091233412",
    name: "Devon Lane",
    avatar: "https://picsum.photos/200",
    role: "UI/UX Designer",
    email: "devon.l@hrms.com",
    designation: "UI/UX Designer",
    type: "Remote",
    status: "Permanent",
    department: "Design",
  },

  // Sales Department
  {
    id: "671190346",
    name: "Darrell Steward",
    avatar: "https://picsum.photos/200",
    role: "Sales Director",
    email: "darrell.s@hrms.com",
    designation: "Sales Director",
    type: "Office",
    status: "Permanent",
    department: "Sales",
  },
  {
    id: "435540100",
    name: "Kristin Watson",
    avatar: "https://picsum.photos/200",
    role: "Sales Manager",
    email: "kristin.w@hrms.com",
    designation: "Sales Manager",
    type: "Office",
    status: "Permanent",
    department: "Sales",
  },
  {
    id: "453567123",
    name: "Courtney Henry",
    avatar: "https://picsum.photos/200",
    role: "BDM",
    email: "courtney.h@hrms.com",
    designation: "BDM",
    type: "Office",
    status: "Permanent",
    department: "Sales",
  },
  {
    id: "009812891",
    name: "Kathryn Murphy",
    avatar: "https://picsum.photos/200",
    role: "Sales",
    email: "kathryn.m@hrms.com",
    designation: "Sales",
    type: "Office",
    status: "Permanent",
    department: "Sales",
  },
  {
    id: "671190347",
    name: "Albert Flores",
    avatar: "https://picsum.photos/200",
    role: "Sales",
    email: "albert.f@hrms.com",
    designation: "Sales",
    type: "Office",
    status: "Permanent",
    department: "Sales",
  },

  // Project Manager Department
  {
    id: "567890123",
    name: "Leslie Alexander",
    avatar: "https://picsum.photos/200",
    role: "Sr. Project Manager",
    email: "leslie.a@hrms.com",
    designation: "Sr. Project Manager",
    type: "Office",
    status: "Permanent",
    department: "Project Manager",
  },
  {
    id: "567890124",
    name: "Ronald Richards",
    avatar: "https://picsum.photos/200",
    role: "Project Manager",
    email: "ronald.r@hrms.com",
    designation: "Project Manager",
    type: "Office",
    status: "Permanent",
    department: "Project Manager",
  },
  {
    id: "567890125",
    name: "Savannah Nguyen",
    avatar: "https://picsum.photos/200",
    role: "Project Manager",
    email: "savannah.n@hrms.com",
    designation: "Project Manager",
    type: "Office",
    status: "Permanent",
    department: "Project Manager",
  },
  {
    id: "567890126",
    name: "Eleanor Pena",
    avatar: "",
    role: "Project Manager",
    email: "eleanor.p@hrms.com",
    designation: "Project Manager",
    type: "Office",
    status: "Permanent",
    department: "Project Manager",
  },
  {
    id: "567890127",
    name: "Esther Howard",
    avatar: "https://picsum.photos/200",
    role: "Project Manager",
    email: "esther.h@hrms.com",
    designation: "Project Manager",
    type: "Office",
    status: "Permanent",
    department: "Project Manager",
  },

  // Marketing Department
  {
    id: "678901234",
    name: "Wade Warren",
    avatar: "https://picsum.photos/200",
    role: "Marketing Manager",
    email: "wade.w@hrms.com",
    designation: "Marketing Manager",
    type: "Office",
    status: "Permanent",
    department: "Marketing",
  },
  {
    id: "678901235",
    name: "Brooklyn Simmons",
    avatar: "https://picsum.photos/200",
    role: "Marketing Manager",
    email: "brooklyn.s@hrms.com",
    designation: "Marketing Manager",
    type: "Office",
    status: "Permanent",
    department: "Marketing",
  },
  {
    id: "678901236",
    name: "Kristin Watson",
    avatar: "https://picsum.photos/200",
    role: "Marketing Coordinator",
    email: "kristin.w@hrms.com",
    designation: "Marketing Coordinator",
    type: "Office",
    status: "Permanent",
    department: "Marketing",
  },
  {
    id: "678901237",
    name: "Jacob Jones",
    avatar: "https://picsum.photos/200",
    role: "Marketing Coordinator",
    email: "jacob.j@hrms.com",
    designation: "Marketing Coordinator",
    type: "Remote",
    status: "Permanent",
    department: "Marketing",
  },
  {
    id: "678901238",
    name: "Cody Fisher",
    avatar: "https://picsum.photos/200",
    role: "Marketing",
    email: "cody.f@hrms.com",
    designation: "Marketing",
    type: "Office",
    status: "Permanent",
    department: "Marketing",
  },
];

const departments = [
  {
    id: "design-department",
    name: "Design Department",
    employeeCount: employees.filter((e) => e.department === "Design").length,
    employees: employees.filter((e) => e.department === "Design"),
  },
  {
    id: "sales-department",
    name: "Sales Department",
    employeeCount: employees.filter((e) => e.department === "Sales").length,
    employees: employees.filter((e) => e.department === "Sales"),
  },
  {
    id: "project-manager",
    name: "Project Manager Department",
    employeeCount: employees.filter((e) => e.department === "Project Manager")
      .length,
    employees: employees.filter((e) => e.department === "Project Manager"),
  },
  {
    id: "marketing-department",
    name: "Marketing Department",
    employeeCount: employees.filter((e) => e.department === "Marketing").length,
    employees: employees.filter((e) => e.department === "Marketing"),
  },
];

type Props = {
  params: {
    slug: string;
  };
};

export default function DepartmentPage({ params }: Props) {
  const department = departments.find(
    (dept) => `${dept.id}-department` === params.slug || dept.id === params.slug
  );
  console.log("Slug from params:", params.slug);

  if (!department) return notFound();

  return (
    <div className='p-6 border rounded-2xl'>
      {/* <h1 className='text-xl font-semibold'>Details Page</h1>
      <p>Slug: {params.slug}</p> */}
      <div className='flex justify-between items-center mb-6'>
        <div className='flex items-center border border-[#A2A1A81A] px-3 py-2 rounded-md w-72'>
          <Search className='w-4 h-4  mr-2' />
          <input
            type='text'
            placeholder='Search'
            className='bg-transparent w-full focus:outline-none text-sm'
          />
        </div>

        <div className='flex gap-2'>
          <Button className=' text-sm px-4'>+ Add New Employee</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='outline'
                className='text-sm flex items-center gap-2'>
                <Filter className='w-4 h-4' /> Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='p-4 text-sm'>
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
          {department.employees.map((emp, i) => (
            <TableRow key={i}>
              <TableCell className='font-medium flex items-center gap-2'>
                <Image
                  src={emp.avatar}
                  alt='Avatar'
                  width={36}
                  height={36}
                  className='rounded-full w-9 h-9 object-cover border border-gray-300 dark:border-gray-600'
                />
                {emp.name}
              </TableCell>
              <TableCell>{emp.id}</TableCell>
              <TableCell>{emp.department}</TableCell>
              <TableCell>{emp.role}</TableCell>
              <TableCell>{emp.type}</TableCell>
              <TableCell>
                <span className='text-xs px-2 py-1 rounded-md bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-white'>
                  {emp.status}
                </span>
              </TableCell>
              <TableCell className='flex space-x-3 text-gray-600 dark:text-gray-300'>
                <Eye className='w-4 h-4 cursor-pointer hover:text-purple-600' />
                <Pencil className='w-4 h-4 cursor-pointer hover:text-yellow-500' />
                <Trash className='w-4 h-4 cursor-pointer hover:text-red-500' />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell
              colSpan={7}
              className='text-center text-sm text-gray-500 dark:text-gray-400'>
              Showing 1 to {employees.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
