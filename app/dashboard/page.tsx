import { Building2, Users, Bell, TrendingUp, Calendar, Award, UserCheck, Clock } from 'lucide-react';
import StatCard from '@/components/StatCard';
import { schools, students, notifications } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

export default function DashboardPage() {
  const sponsoredStudents = students.filter(s => s.status === 'Sponsored').length;
  const pendingStudents = students.filter(s => s.status === 'Open').length;
  const unreadNotifications = notifications.filter(n => !n.read).length;
  const totalPendingAcrossSchools = schools.reduce((sum, school) => sum + school.pendingCount, 0);

  const recentStudents = students.slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Image
              src="/logo.svg"
              alt="EduSponsor logo"
              width={40}
              height={40}
              className="min-w-[40px]"
              priority
            />
            <h1 className="text-3xl font-bold text-gray-900">EduSponsor Dashboard</h1>
          </div>
          <p className="text-gray-600 ml-14">Overview of your education sponsorship platform</p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={Building2}
            label="Total Schools"
            value={schools.length}
          />
          <StatCard
            icon={Users}
            label="Total Students"
            value={students.length}
          />
          <StatCard
            icon={UserCheck}
            label="Sponsored Students"
            value={sponsoredStudents}
          />
          <StatCard
            icon={Clock}
            label="Awaiting Sponsorship"
            value={pendingStudents}
          />
        </div>

        {/* Quick Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Success Rate</p>
                <p className="text-2xl font-bold text-gray-900">
                  {students.length > 0 ? Math.round((sponsoredStudents / students.length) * 100) : 0}%
                </p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Schools</p>
                <p className="text-2xl font-bold text-gray-900">{schools.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Notifications</p>
                <p className="text-2xl font-bold text-gray-900">{unreadNotifications}</p>
              </div>
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <Bell className="w-6 h-6 text-amber-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Recent Students */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              Recent Students
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentStudents.map((student) => (
                <div key={student.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-semibold text-white">
                        {student.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900 truncate">{student.name}</p>
                      <p className="text-xs text-gray-500">{student.grade} • {student.supportNeeded}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                    student.status === 'Sponsored' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {student.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <Link 
                href="/students" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
              >
                View all students →
              </Link>
            </div>
          </div>
        </div>

        {/* School Summary */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-green-50 to-emerald-50">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-green-600" />
              Schools Overview
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {schools.slice(0, 5).map((school) => (
                <div key={school.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 truncate">{school.name}</p>
                    <p className="text-xs text-gray-500">{school.location} • {school.totalStudents} students</p>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <span className="text-lg font-bold text-red-600">{school.pendingCount}</span>
                    <p className="text-xs text-gray-500">pending</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <Link 
                href="/schools" 
                className="inline-flex items-center text-green-600 hover:text-green-800 text-sm font-medium transition-colors"
              >
                View all schools →
              </Link>
            </div>
          </div>
        </div>
      </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 border border-blue-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link 
            href="/schools/1/students/new" 
            className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-200 border border-transparent hover:border-blue-200"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="min-w-0">
              <p className="font-medium text-gray-900">Add Student</p>
              <p className="text-sm text-gray-600">Register new student</p>
            </div>
          </Link>

          <Link 
            href="/students" 
            className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-200 border border-transparent hover:border-green-200"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <UserCheck className="w-6 h-6 text-green-600" />
            </div>
            <div className="min-w-0">
              <p className="font-medium text-gray-900">Manage Students</p>
              <p className="text-sm text-gray-600">View all students</p>
            </div>
          </Link>

          <Link 
            href="/notifications" 
            className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-200 border border-transparent hover:border-amber-200"
          >
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Bell className="w-6 h-6 text-amber-600" />
            </div>
            <div className="min-w-0">
              <p className="font-medium text-gray-900">Notifications</p>
              <p className="text-sm text-gray-600">{unreadNotifications} unread</p>
            </div>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
