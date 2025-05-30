import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, Pencil, Trash, Filter, Search } from "lucide-react";
import Link from "next/link";

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
];

const AllEmployees = () => {
  return (
    <div className="border rounded-lg p-4 mt-4 overflow-x-auto">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center mb-6">
        <div className="w-full md:w-72">
          <div className="relative">
            <Input placeholder="Search..." className="pl-10" />
            <span className="absolute left-3 top-2.5 text-gray-500">
              <Search className="w-4 h-4 text-foreground" />
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button className="text-sm px-4 text-white dark:text-foreground">
            + Add New Employee
          </Button>
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

      <div className="w-full overflow-x-auto rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[200px]">Employee Name</TableHead>
              <TableHead className="min-w-[130px]">Employee ID</TableHead>
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
                  <Link href={`/employees/add-new-employee`}>
                    <Eye className="w-4 h-4 cursor-pointer hover:text-purple-600" />
                  </Link>
                  <Pencil className="w-4 h-4 cursor-pointer hover:text-yellow-500" />
                  <Trash className="w-4 h-4 cursor-pointer hover:text-red-500" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={7}>
                <div className="flex flex-row justify-between items-center gap-4 w-full py-2">
                  <div className="flex flex-row  items-center gap-2">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Showing
                    </p>
                    <Select defaultValue="1">
                      <SelectTrigger className="w-28 md:w-36">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="text-sm text-center text-gray-500 dark:text-gray-400">
                    Showing 1 to {employeesData.length} of 60 records
                  </div>

                  <div>
                    <Pagination>
                      <PaginationContent className="flex flex-wrap gap-1">
                        <PaginationItem>
                          <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#" isActive>
                            2
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationNext href="#" />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default AllEmployees;
