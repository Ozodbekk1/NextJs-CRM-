/** @format */

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, CameraIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import Image from "next/image";

const AddNewEmployee = () => {
  const [date, setDate] = useState<Date>();
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='border rounded-lg p-6 mt-4 overflow-x-auto bg-background'>
      <Tabs defaultValue='personal' className='w-full'>
        <TabsList className='grid grid-cols-4 w-full mb-6'>
          <TabsTrigger value='personal'>Personal Information</TabsTrigger>
          <TabsTrigger value='profesional'>
            Professional Information
          </TabsTrigger>
          <TabsTrigger value='documents'>Documents</TabsTrigger>
          <TabsTrigger value='account'>Account Access</TabsTrigger>
        </TabsList>

        <TabsContent value='personal'>
          <div className='mb-6'>
            <div className='flex items-center justify-start'>
              <div className='relative w-36 h-36 rounded-md border bg-muted/20 overflow-hidden flex items-center justify-center group'>
                {image ? (
                  <Image
                    width={8}
                    height={8}
                    src={image}
                    alt='Profile'
                    className='object-cover w-full h-full'
                  />
                ) : (
                  <CameraIcon className='w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors' />
                )}
                <input
                  type='file'
                  accept='image/*'
                  onChange={handleImageUpload}
                  className='absolute inset-0 opacity-0 cursor-pointer'
                />
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <Input placeholder='First Name' className='w-full' />
            <Input placeholder='Last Name' className='w-full' />
            <Input placeholder='Mobile Number' className='w-full' />
            <Input placeholder='Email Address' className='w-full' />

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}>
                  <CalendarIcon className='mr-2 h-4 w-4' />
                  {date ? format(date, "PPP") : <span>Date of Birth</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0' align='start'>
                <Calendar
                  mode='single'
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Marital Status' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='single'>Single</SelectItem>
                <SelectItem value='married'>Married</SelectItem>
                <SelectItem value='other'>Other</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Gender' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='male'>Male</SelectItem>
                <SelectItem value='female'>Female</SelectItem>
                <SelectItem value='other'>Other</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Nationality' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='uzbek'>Uzbek</SelectItem>
                <SelectItem value='russian'>Russian</SelectItem>
                <SelectItem value='other'>Other</SelectItem>
              </SelectContent>
            </Select>

            <Textarea placeholder='Address' className='col-span-2 w-full' />

            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='City' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='tashkent'>Tashkent</SelectItem>
                <SelectItem value='samarkand'>Samarkand</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='State' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='region1'>Region 1</SelectItem>
                <SelectItem value='region2'>Region 2</SelectItem>
              </SelectContent>
            </Select>

            <Input placeholder='ZIP Code' className='w-full' />
          </div>

          <div className='mt-6 flex justify-end gap-4'>
            <Button variant='outline' className='w-32'>
              Cancel
            </Button>
            <Button className='w-32'>Next</Button>
          </div>
        </TabsContent>

        <TabsContent value='profesional'>
          Professional information coming soon...
        </TabsContent>
        <TabsContent value='documents'>Documents tab...</TabsContent>
        <TabsContent value='account'>Account access tab...</TabsContent>
      </Tabs>
    </div>
  );
};

export default AddNewEmployee;
