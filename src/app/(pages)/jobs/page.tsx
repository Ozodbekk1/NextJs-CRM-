/** @format */

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { MapPin } from "lucide-react";
import { CirclePlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddNewJob } from "@/app/components/addNewJob";
import { SelectLocationJob } from "@/app/components/addNewJob.location";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export type JobStatus = "active" | "inactive" | "completed";

export interface JobsType {
  id: number;
  title: string;
  department: string;
  tags: string[];
  location: string;
  salary: number;
  status: JobStatus;
}

const jobss: JobsType[] = [
  {
    id: 1,
    title: "UI/UX Designer",
    department: "Design",
    tags: ["Design", "Full Time", "Remote"],
    location: "California, USA",
    salary: 3600,
    status: "active",
  },
  {
    id: 2,
    title: "Sr. UX Researcher",
    department: "Design",
    tags: ["Design", "Full Time"],
    location: "New York, USA",
    salary: 1500,
    status: "active",
  },
  {
    id: 3,
    title: "BDM",
    department: "Sales",
    tags: ["Sales", "Full Time"],
    location: "New York, USA",
    salary: 1000,
    status: "active",
  },
  {
    id: 4,
    title: "React JS",
    department: "Developer",
    tags: ["Developer", "Full Time"],
    location: "California, USA",
    salary: 2000,
    status: "active",
  },
  {
    id: 5,
    title: "HR Executive",
    department: "HR",
    tags: ["HR", "Full Time", "Remote"],
    location: "California, USA",
    salary: 3600,
    status: "inactive",
  },
  {
    id: 6,
    title: "Python Developer",
    department: "Developer",
    tags: ["Developer", "Full Time"],
    location: "New York, USA",
    salary: 1500,
    status: "inactive",
  },
  {
    id: 7,
    title: "UI/UX Designer",
    department: "Design",
    tags: ["Design", "Full Time", "Remote"],
    location: "California, USA",
    salary: 3600,
    status: "completed",
  },
  {
    id: 8,
    title: "Sr. UX Researcher",
    department: "Design",
    tags: ["Design", "Full Time"],
    location: "New York, USA",
    salary: 1500,
    status: "completed",
  },
  {
    id: 9,
    title: "BDM",
    department: "Sales",
    tags: ["Sales", "Full Time"],
    location: "New York, USA",
    salary: 1000,
    status: "completed",
  },
];

const statusLabels: Record<JobStatus, string> = {
  active: "Active Jobs",
  inactive: "Inactive Jobs",
  completed: "Completed Jobs",
};

const statusColors: Record<JobStatus, string> = {
  active: "bg-yellow-400",
  inactive: "bg-red-400",
  completed: "bg-green-400",
};

const Jobs = () => {
  const statuses: JobStatus[] = ["active", "inactive", "completed"];

  return (
    <>
      <div className='border rounded-2xl p-6'>
        <div className=' flex justify-between items-center '>
          <div className='relative w-2xs h-8'>
            <Input placeholder='Search...' className='pl-10' />
            <span className='absolute left-3 top-2.5 text-gray-500'>
              <Search className='w-4 h-4 text-foreground' />
            </span>
          </div>
          <div>
            <Dialog>
              <DialogTrigger className='flex sm:items-center p-1 gap-2 text-white bg-violet-500 border rounded-sm flex-col sm:flex-row items-center ml-1'>
                <CirclePlus /> Add New Job
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Job</DialogTitle>
                  <DialogDescription className='*:my-3.5'>
                    <AddNewJob />
                    <Input
                      placeholder='Enter Job Title'
                      className='w-[200px]'
                    />
                    <SelectLocationJob />
                    <Input
                      required
                      placeholder='Enter Amount'
                      className='w-[200px] flex justify-center'
                    />
                    <span>Select Type</span>
                    <div className='flex items-center gap-3'>
                      <Checkbox id='terms' />
                      <Label htmlFor='terms'>Office</Label>
                      <Checkbox id='termss' />
                      <Label htmlFor='termss'>Work from Home</Label>
                    </div>
                    <div className='flex justify-between'>
                      <Button variant={"outline"}>Cancel</Button>
                      <Button className='w-20'>Add</Button>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className='p-6  min-h-screen'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {statuses.map((status) => (
              <div key={status} className=' rounded-xl shadow p-4'>
                <div className='flex items-center mb-4'>
                  <span
                    className={`w-3 h-3 rounded-full mr-2 ${statusColors[status]}`}
                  />
                  <h2 className='text-lg font-semibold'>
                    {statusLabels[status]}
                  </h2>
                </div>
                <div className='space-y-4'>
                  {jobss
                    .filter((job) => job.status === status)
                    .map((job) => (
                      <div key={job.id} className='border rounded-xl p-4'>
                        <h3 className='text-sm font-medium  mb-2'>
                          <span className='flex items-center gap-2'>
                            <BriefcaseBusiness />
                            <div>
                              <span>{job.title}</span> <br />
                              <span>{job.department}</span>
                            </div>
                          </span>
                        </h3>
                        <div className='flex flex-wrap gap-2 mb-2'>
                          {job.tags.map((tag, index) => (
                            <span
                              key={index}
                              className='bg-violet-500 text-white px-2 py-0.5 rounded-md text-xs'>
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className='text-gray-500 text-sm flex items-center gap-1 mb-1'>
                          <span>
                            <MapPin />
                          </span>
                          <span>{job.location}</span>
                        </div>
                        <div className=' font-semibold text-right'>
                          ${job.salary}/Month
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
