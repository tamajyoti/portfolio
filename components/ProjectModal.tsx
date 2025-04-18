// ProjectModal.tsx
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";


interface ProjectModalProps {
 isOpen: boolean;
 onClose: () => void;
 title: string;
 description: string;
 techStack: string[];
 challenges?: string;
 solution?: string;
 outcomes?: string;
}


export function ProjectModal({
 isOpen,
 onClose,
 title,
 description,
 techStack,
 challenges,
 solution,
 outcomes,
}: ProjectModalProps) {
 if (!isOpen) return null;


 return (
   <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
     <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl">
       <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-white border-b">
         <h3 className="text-xl font-semibold text-zinc-900">{title}</h3>
         <Button
           variant="ghost"
           size="icon"
           onClick={onClose}
           className="rounded-full hover:bg-zinc-100"
         >
           <X className="w-5 h-5" />
         </Button>
       </div>
       <div className="p-6">
         <div className="mb-6">
           <h4 className="text-lg font-medium mb-2 text-zinc-900">
             Project Overview
           </h4>
           <p className="text-zinc-700">{description}</p>
         </div>


         <div className="mb-6">
           <h4 className="text-lg font-medium mb-2 text-zinc-900">
             Tech Stack
           </h4>
           <div className="flex flex-wrap gap-2">
             {techStack.map((tech, index) => (
               <span
                 key={index}
                 className="px-3 py-1 text-sm font-medium bg-red-100 text-red-700 rounded-full"
               >
                 {tech}
               </span>
             ))}
           </div>
         </div>


         {challenges && (
           <div className="mb-6">
             <h4 className="text-lg font-medium mb-2 text-zinc-900">
               Challenges
             </h4>
             <p className="text-zinc-700">{challenges}</p>
           </div>
         )}


         {solution && (
           <div className="mb-6">
             <h4 className="text-lg font-medium mb-2 text-zinc-900">
               Solution
             </h4>
             <p className="text-zinc-700">{solution}</p>
           </div>
         )}


         {outcomes && (
           <div className="mb-6">
             <h4 className="text-lg font-medium mb-2 text-zinc-900">
               Outcomes
             </h4>
             <p className="text-zinc-700">{outcomes}</p>
           </div>
         )}


         <div className="flex justify-end mt-6">
           <Button
             onClick={onClose}
             className="bg-red-600 hover:bg-red-700 text-white"
           >
             Close
           </Button>
         </div>
       </div>
     </div>
   </div>
 );
}



