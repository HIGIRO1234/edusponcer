'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Search, Bell } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notifications } from '@/lib/data';

export default function Header() {
  const pathname = usePathname();
  const isSchoolDetailsPage = pathname.includes('/schools/') && pathname.includes('/dashboard');
  const isAddStudentPage = pathname.includes('/students/new');
  const isStudentDetailsPage = pathname.includes('/students/') && pathname.match(/\/students\/[^\/]+$/);
  
  const [searchQuery, setSearchQuery] = useState('');
  
  // Count unread notifications
  const unreadCount = notifications.filter(n => !n.read).length;
  
  // Don't render on school details pages
  if (isSchoolDetailsPage) return null;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // TODO: Implement search functionality
    }
  };

  // Render search navbar for Add Student page and Student Details page
  if (isAddStudentPage || isStudentDetailsPage) {
    return (
      <div className="w-full flex justify-between items-center px-4 sm:px-8 py-4 bg-white shadow-sm">
        {/* Search Input */}
        <div className="flex-1 max-w-xs sm:max-w-md">
          <form onSubmit={handleSearchSubmit}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search students, schools..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-sm"
              />
            </div>
          </form>
        </div>
        
        {/* Right Side - Bell Icon and Profile */}
        <div className="flex items-center space-x-2 sm:space-x-4 ml-4">
          {/* Bell Icon with Link to Notifications */}
          <div className="relative">
            <Link href="/notifications">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
            </Link>
            {/* Notification badge - only show if there are unread notifications */}
            {unreadCount > 0 && (
              <div className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-medium">
                  {unreadCount > 9 ? '9+' : unreadCount}
                </span>
              </div>
            )}
          </div>
          
          {/* Profile Icon */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium cursor-pointer hover:shadow-md transition-shadow">
            <span className="text-sm">A</span>
          </div>
        </div>
      </div>
    );
  }

  // Default admin navbar for all other pages
  return (
    <div className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <div className="flex items-center space-x-3">
        <Image
          src="/logo.svg"
          alt="EduSponsor logo"
          width={32}
          height={32}
          className="min-w-[32px]"
          priority
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Hello, Admin 👋</h2>
          <p className="text-sm text-gray-500">EduSponsor Dashboard</p>
        </div>
      </div>
      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium cursor-pointer hover:shadow-md transition-shadow">
        A
      </div>
    </div>
  );
}
