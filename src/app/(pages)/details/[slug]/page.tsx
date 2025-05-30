/** @format */

// /** @format */

// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Eye, Pencil, Trash } from "lucide-react";
// import Image from "next/image";
// import React from "react";

// type Props = {
//   params: { slug: string };
// };

// const designDepartment = [
//   {
//     id: "345321231",
//     name: "Darlene Robertson",
//     avatar: "https://picsum.photos/220",
//     role: "Lead UI/UX Designer",
//     email: "darlene.r@hrms.com",
//     designation: "Lead UI/UX Designer",
//     type: "Office",
//     status: "Permanent",
//     department: "Design",
//   },
//   {
//     id: "987890345",
//     name: "Floyd Miles",
//     avatar: "https://picsum.photos/209",
//     role: "Lead UI/UX Designer",
//     email: "floyd.m@hrms.com",
//     designation: "Lead UI/UX Designer",
//     type: "Office",
//     status: "Permanent",
//     department: "Design",
//   },
//   {
//     id: "453567122",
//     name: "Cody Fisher",
//     avatar: "https://picsum.photos/200",
//     role: "Sr. UI/UX Designer",
//     email: "cody.f@hrms.com",
//     designation: "Sr. UI/UX Designer",
//     type: "Office",
//     status: "Permanent",
//     department: "Design",
//   },
//   {
//     id: "345321231",
//     name: "Dianne Russell",
//     avatar: "https://picsum.photos/2045",
//     role: "Sr. UI/UX Designer",
//     email: "dianne.r@hrms.com",
//     designation: "Sr. UI/UX Designer",
//     type: "Remote",
//     status: "Permanent",
//     department: "Design",
//   },
//   {
//     id: "453677881",
//     name: "Savannah Nguyen",
//     avatar: "https://picsum.photos/200",
//     role: "Sr. UI/UX Designer",
//     email: "savannah.n@hrms.com",
//     designation: "Sr. UI/UX Designer",
//     type: "Office",
//     status: "Permanent",
//     department: "Design",
//   },
//   {
//     id: "009918765",
//     name: "Jacob Jones",
//     avatar: "https://picsum.photos/204",
//     role: "UX Designer",
//     email: "jacob.j@hrms.com",
//     designation: "UX Designer",
//     type: "Remote",
//     status: "Permanent",
//     department: "Design",
//   },
//   {
//     id: "236870122",
//     name: "Marvin McKinney",
//     avatar: "https://picsum.photos/200",
//     role: "UX Designer",
//     email: "marvin.m@hrms.com",
//     designation: "UX Designer",
//     type: "Remote",
//     status: "Permanent",
//     department: "Design",
//   },
//   {
//     id: "124335111",
//     name: "Brooklyn Simmons",
//     avatar: "https://picsum.photos/205",
//     role: "UI/UX Designer",
//     email: "brooklyn.s@hrms.com",
//     designation: "UI/UX Designer",
//     type: "Office",
//     status: "Permanent",
//     department: "Design",
//   },
//   {
//     id: "435540099",
//     name: "Kristin Watson",
//     avatar: "https://picsum.photos/200",
//     role: "UI/UX Designer",
//     email: "kristin.w@hrms.com",
//     designation: "UI/UX Designer",
//     type: "Office",
//     status: "Permanent",
//     department: "Design",
//   },
//   {
//     id: "009812890",
//     name: "Kathryn Murphy",
//     avatar: "https://picsum.photos/202",
//     role: "UI/UX Designer",
//     email: "kathryn.m@hrms.com",
//     designation: "UI/UX Designer",
//     type: "Office",
//     status: "Permanent",
//     department: "Design",
//   },
//   {
//     id: "671190345",
//     name: "Arlene McCoy",
//     avatar: "https://picsum.photos/200",
//     role: "UI/UX Designer",
//     email: "arlene.m@hrms.com",
//     designation: "UI/UX Designer",
//     type: "Office",
//     status: "Permanent",
//     department: "Design",
//   },
//   {
//     id: "091233412",
//     name: "Devon Lane",
//     avatar: "https://picsum.photos/201",
//     role: "UI/UX Designer",
//     email: "devon.l@hrms.com",
//     designation: "UI/UX Designer",
//     type: "Remote",
//     status: "Permanent",
//     department: "Design",
//   },
// ];

// const DetailsPage = ({ params }: Props) => {
//   return (
//     <div className='p-6'>
//       {/* <h1 className='text-xl font-semibold'>Details Page</h1>
//       <p>Slug: {params.slug}</p> */}
//       <Table>
//         <TableCaption>Employee Records</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Employee ID</TableHead>
//             <TableHead>Employee Name</TableHead>
//             <TableHead>Department</TableHead>
//             <TableHead>Designation</TableHead>
//             <TableHead>Type</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead>Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {designDepartment.map((emp, i) => (
//             <TableRow key={i}>
//               <TableCell className='font-medium flex items-center gap-2'>
//                 <Image
//                   src={emp.avatar}
//                   alt='Avatar'
//                   width={36}
//                   height={36}
//                   className='rounded-full w-9 h-9 object-cover border border-gray-300 dark:border-gray-600'
//                 />
//                 {emp.name}
//               </TableCell>
//               <TableCell>{emp.id}</TableCell>
//               <TableCell>{emp.department}</TableCell>
//               <TableCell>{emp.role}</TableCell>
//               <TableCell>{emp.type}</TableCell>
//               <TableCell>
//                 <span className='text-xs px-2 py-1 rounded-md bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-white'>
//                   {emp.status}
//                 </span>
//               </TableCell>
//               <TableCell className='flex space-x-3 text-gray-600 dark:text-gray-300'>
//                 <Eye className='w-4 h-4 cursor-pointer hover:text-purple-600' />
//                 <Pencil className='w-4 h-4 cursor-pointer hover:text-yellow-500' />
//                 <Trash className='w-4 h-4 cursor-pointer hover:text-red-500' />
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//         {/* <TableFooter>
//           <TableRow>
//             <TableCell
//               colSpan={7}
//               className="text-center text-sm text-gray-500 dark:text-gray-400"
//             >
//               Showing 1 to {employeesData.length} of 60 records
//             </TableCell>
//           </TableRow>
//         </TableFooter> */}
//       </Table>
//     </div>
//   );
// };

// export default DetailsPage;
