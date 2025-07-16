'use client';

import { Building2, User, Monitor, Bell, Search, ChevronDown } from 'lucide-react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getAllSchools, getStudentsBySchool } from '@/lib/data';
import { useState, useEffect, useRef } from 'react';

export default function SchoolDashboardPage() {
  const { schoolId } = useParams();
  const allSchools = getAllSchools();
  const school = allSchools.find(s => s.id === schoolId);
  const schoolStudents = getStudentsBySchool(schoolId as string);
  const pendingCount = schoolStudents.filter(s => s.status === 'Open').length;
  
  const [sortBy, setSortBy] = useState('newest');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const sortOptions = [
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' },
    { value: 'name-asc', label: 'Name A-Z' },
    { value: 'name-desc', label: 'Name Z-A' },
    { value: 'age-asc', label: 'Age (Low to High)' },
    { value: 'age-desc', label: 'Age (High to Low)' }
  ];

  const getSortedStudents = () => {
    const sorted = [...schoolStudents];
    
    switch (sortBy) {
      case 'oldest':
        return sorted.reverse();
      case 'name-asc':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      case 'age-asc':
        return sorted.sort((a, b) => a.age - b.age);
      case 'age-desc':
        return sorted.sort((a, b) => b.age - a.age);
      case 'newest':
      default:
        return sorted;
    }
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setIsDropdownOpen(false);
  };

  if (!school) return null;

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center px-8 py-6 bg-white shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">Hello, {school.name} 👋</h2>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-lg font-medium shadow-md">
            {school.name.charAt(0)}
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm p-6 relative hover:shadow-md transition-shadow">
            <div className="absolute top-6 left-6 bg-purple-50 rounded-xl p-2">
              <Building2 className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-16">
              <div className="text-sm font-medium text-gray-500 mb-1">School</div>
              <div className="text-lg font-semibold text-gray-800">{school.name}</div>
              <div className="text-sm text-purple-600 mt-1">{school.location}</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 relative hover:shadow-md transition-shadow">
            <div className="absolute top-6 left-6 bg-green-50 rounded-xl p-2">
              <User className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-16">
              <div className="text-sm font-medium text-gray-500 mb-1">Total Students</div>
              <div className="text-lg font-semibold text-gray-800">{schoolStudents.length}</div>
              <div className="text-sm text-green-600 mt-1">Active</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 relative hover:shadow-md transition-shadow">
            <div className="absolute top-6 left-6 bg-purple-50 rounded-xl p-2">
              <Monitor className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-16">
              <div className="text-sm font-medium text-gray-500 mb-1">Pending</div>
              <div className="text-lg font-semibold text-gray-800">{pendingCount}</div>
              <div className="flex -space-x-2 mt-3">
                {[...Array(Math.min(5, pendingCount))].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full ring-2 ring-white bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-xs font-medium text-gray-600"
                  >
                    S
                  </div>
                ))}
                {pendingCount > 5 && (
                  <div className="w-8 h-8 rounded-full ring-2 ring-white bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600">
                    +{pendingCount - 5}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Title & Controls */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <h3 className="text-xl font-semibold text-gray-800">All Students</h3>
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-green-600"></span>
                <span className="text-sm font-medium text-gray-600">Eligible Students</span>
              </div>
            </div>
            <Link
              href={`/schools/${schoolId}/students/new`}
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              + Add a new student
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex-1 max-w-md relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search students..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <span>Sort by: {sortOptions.find(option => option.value === sortBy)?.label}</span>
                <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSortChange(option.value)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                          sortBy === option.value ? 'bg-green-50 text-green-600 font-medium' : 'text-gray-700'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Support Needed</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {getSortedStudents().map((student) => (
                <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-medium">
                        {student.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{student.gender}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{student.age}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{student.supportNeeded}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{student.grade}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      student.status === 'Sponsored'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {student.status === 'Sponsored' && <div className="h-1.5 w-1.5 rounded-full bg-green-600 mr-2"></div>}
                      {student.status === 'Open' && <div className="h-1.5 w-1.5 rounded-full bg-red-600 mr-2"></div>}
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <Link
                      href={`/schools/${schoolId}/students/${student.id}`}
                      className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between bg-white px-6 py-4 rounded-xl shadow-sm mt-6">
          <div className="flex items-center text-sm text-gray-500">
            <span>Showing 1 to {getSortedStudents().length} of {getSortedStudents().length} results</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="inline-flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
              ←
              <span className="ml-2">Previous</span>
            </button>
            <div className="flex items-center">
              <button className="px-4 py-2 text-sm font-medium bg-green-600 text-white rounded-lg">1</button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-green-50 rounded-lg">2</button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-green-50 rounded-lg">3</button>
            </div>
            <button className="inline-flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-green-50 transition-colors">
              <span className="mr-2">Next</span>
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
