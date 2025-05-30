/** @format */

import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const departments = [
  {
    name: "Design Department",
    members: 20,
    people: [
      {
        name: "Dianne Russell",
        role: "Lead UI/UX Designer",
        avatar: "https://picsum.photos/200",
      },
      {
        name: "Arlene McCoy",
        role: "Sr. UI/UX Designer",
        avatar: "https://picsum.photos/200",
      },
      {
        name: "Cody Fisher",
        role: "Sr. UI/UX Designer",
        avatar: "https://picsum.photos/200",
      },
      {
        name: "Theresa Webb",
        role: "UI/UX Designer",
        avatar: "https://picsum.photos/200",
      },
      {
        name: "Ronald Richards",
        role: "UI/UX Designer",
        avatar: "https://picsum.photos/200",
      },
    ],
  },
  {
    name: "Sales Department",
    members: 14,
    people: [
      {
        name: "Darrell Steward",
        role: "Sr. Sales Manager",
        avatar: "https://picsum.photos/200",
      },
      {
        name: "Kristin Watson",
        role: "Sr. Sales Manager",
        avatar: "https://picsum.photos/200",
      },
      {
        name: "Courtney Henry",
        role: "BDM",
        avatar: "https://picsum.photos/200",
      },
      {
        name: "Kathryn Murphy",
        role: "BDE",
        avatar: "https://picsum.photos/200",
      },
      {
        name: "Albert Flores",
        role: "Sales",
        avatar: "https://picsum.photos/200",
      },
    ],
  },
  {
    name: "Project Department",
    members: 18,
    people: [
      {
        name: "Leslie Alexander",
        role: "Sr. Project Manager",
        avatar: "https://picsum.photos/200",
      },
      {
        name: "Ronald Richards",
        role: "Sr. Project Manager",
        avatar: "https://picsum.photos/200",
      },
      {
        name: "Savannah Nguyen",
        role: "Project Manager",
        avatar: "https://picsum.photos/200",
      },
      {
        name: "Eleanor Pena",
        role: "Project Manager",
        avatar: "https://picsum.photos/200",
      },
      {
        name: "Esther Howard",
        role: "Project Manager",
        avatar: "https://picsum.photos/200",
      },
    ],
  },
  {
    name: "Marketing Department",
    members: 10,
    people: [
      {
        name: "Wade Warren",
        role: "Sr. Marketing Manager",
        avatar: "https://picsum.photos/200",
      },
      {
        name: "Brooklyn Simmons",
        role: "Sr. Marketing Manager",
        avatar: "https://picsum.photos/200",
      },
      {
        name: "Kristin Watson",
        role: "Marketing Coordinator",
        avatar: "https://picsum.photos/200",
      },
      {
        name: "Jacob Jones",
        role: "Marketing Coordinator",
        avatar: "https://picsum.photos/200",
      },
      {
        name: "Cody Fisher",
        role: "Marketing",
        avatar: "https://picsum.photos/200",
      },
    ],
  },
];

const Departments = async () => {
  // const { slug } = await params;
  return (
    <>
      <div className='p-6  space-y-6 border rounded-2xl'>
        <Input placeholder='Search' className='max-w-md rounded-xl' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {departments.map((dept) => (
            <Card key={dept.name} className='shadow-sm'>
              <CardContent className='p-4'>
                <div className='flex justify-between items-center mb-4'>
                  <div>
                    <h2 className='text-lg font-semibold'>{dept.name}</h2>
                    <p className='text-sm text-muted-foreground'>
                      {dept.members} Members
                    </p>
                  </div>
                  <Link
                    href={`/departments/${dept.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className='text-sm text-violet-500 font-medium'>
                    View All
                  </Link>
                </div>
                <div>
                  <Separator />
                </div>
                <ScrollArea className='max-h-72 pr-2'>
                  <div className='space-y-3'>
                    {dept.people.map((person) => (
                      <div
                        key={person.name}
                        className='flex items-center justify-between hover:bg-accent px-2 py-1.5 rounded-md transition'>
                        <div className='flex items-center gap-3'>
                          <Image
                            src={person.avatar}
                            alt={person.name}
                            width={40}
                            height={40}
                            className='rounded-full'
                          />
                          <div>
                            <p className='text-sm font-medium text-foreground'>
                              {person.name}
                            </p>
                            <p className='text-xs text-muted-foreground'>
                              {person.role}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className='h-4 w-4 text-muted-foreground' />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Departments;
