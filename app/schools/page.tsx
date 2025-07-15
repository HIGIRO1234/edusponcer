import Link from 'next/link';
import { Building2, Users, MapPin, ArrowUpRight } from 'lucide-react';
import { schools } from '@/lib/data';

export default function SchoolsPage() {
  return (
    <div className="flex-1 flex flex-col p-8 bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">Schools</h1>
          <p className="text-gray-600">Manage and monitor all partner schools</p>
        </div>
        <Link
          href="/schools/new"
          className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          + Add New School
        </Link>
      </div>

      {/* Schools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schools.map((school) => (
          <div
            key={school.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group"
          >
            {/* Card Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                      {school.name}
                    </h3>
                    <div className="flex items-center text-gray-500 mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{school.location}</span>
                    </div>
                  </div>
                </div>
                <Link
                  href={`/schools/${school.id}/dashboard`}
                  className="p-2 rounded-lg text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
              
              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center text-gray-500 mb-1">
                    <Users className="h-4 w-4 mr-1" />
                    <span className="text-xs font-medium">Total Students</span>
                  </div>
                  <p className="text-xl font-semibold text-gray-800">{school.totalStudents}</p>
                  <p className="text-sm text-green-600 mt-1">Active</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center text-gray-500 mb-1">
                    <Users className="h-4 w-4 mr-1" />
                    <span className="text-xs font-medium">Pending</span>
                  </div>
                  <p className="text-xl font-semibold text-gray-800">{school.pendingCount}</p>
                  <p className="text-sm text-green-600 mt-1">Requests</p>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-6 py-4 bg-gray-50 flex items-center justify-between">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full ring-2 ring-white bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-xs font-medium text-green-600"
                  >
                    S
                  </div>
                ))}
                {school.totalStudents > 4 && (
                  <div className="w-8 h-8 rounded-full ring-2 ring-white bg-green-600 flex items-center justify-center text-xs font-medium text-white">
                    +{school.totalStudents - 4}
                  </div>
                )}
              </div>
              <Link
                href={`/schools/${school.id}/dashboard`}
                className="text-sm font-medium text-green-600 hover:text-green-700 flex items-center"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
