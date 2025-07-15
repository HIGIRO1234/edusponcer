'use client';

import { usePathname } from 'next/navigation';



export default function Header() {
  const pathname = usePathname();
  const isSchoolDetailsPage = pathname.includes('/schools/') && pathname.includes('/dashboard');
  
  // Don't render on school details pages
  if (isSchoolDetailsPage) return null;

  return (
    <div className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800">Hello, Admin 👋</h2>
      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium cursor-pointer hover:shadow-md transition-shadow">
        A
      </div>
    </div>
  );
}
