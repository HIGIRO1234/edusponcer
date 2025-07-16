'use client';

import { use } from 'react';
import { notFound, useRouter } from 'next/navigation';
import { getAllSchools, getStudentById } from '@/lib/data';
import { 
  Building2, 
  Download,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: Promise<{
    schoolId: string;
    studentId: string;
  }>;
}

export default function StudentDetailsPage({ params }: Props) {
  const router = useRouter();
  const { schoolId, studentId } = use(params);
  
  const schools = getAllSchools();
  const student = getStudentById(studentId);
  const school = schools.find(s => s.id === schoolId);

  if (!school || !student) {
    notFound();
  }

  // Mock sponsorship history data
  const sponsorHistory = [
    { name: 'Ronald Richards', location: 'Kigali, Rwanda', amount: '60$' },
    { name: 'Kathryn Murphy', location: 'Texas, US', amount: '60$' },
    { name: 'Ronald Richards', location: 'Monaco, France', amount: '60$' },
    { name: 'Kathryn Murphy', location: 'Berlin, Germany', amount: '60$' }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      {/* Content Section */}
      <div className="p-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          Student / {student.name}
        </div>

        {/* Student Details Card */}
        <div className="bg-white rounded-xl p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Section - Student Info */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Profile Picture */}
                <div className="flex-shrink-0">
                  <div 
                    className="w-36 h-36 bg-gray-200 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: '#E5E7EB' }}
                  >
                    <span className="text-gray-400 text-sm">Profile Photo</span>
                  </div>
                  
                  {/* Urgent Tag */}
                  {/* <div className="mt-3">
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-white text-xs font-medium"
                      style={{ backgroundColor: '#D946EF' }}
                    >
                      Urgent
                    </span>
                  </div> */}
                </div>
                
                {/* Student Information */}
                <div className="flex-1">
                  {/* Name */}
                  <h1 
                    className="text-xl font-bold mb-4"
                    style={{ color: '#3B82F6' }}
                  >
                    {student.name}
                  </h1>
                  
                  {/* Demographics */}
                  <div className="space-y-1 text-sm mb-4" style={{ color: '#6B7280' }}>
                    <div>{student.gender}</div>
                    <div>{student.age} Years Old</div>
                    <div>Muhanga District, RW</div>
                    <div>Grade {student.grade.replace('th', '')}</div>
                  </div>
                  
                  {/* Bio */}
                  <p 
                    className="text-sm leading-6 mb-4"
                    style={{ color: '#374151' }}
                  >
                    Passionate about becoming an engineer. Raised by a single mother and currently at risk of dropping out due to school fees.
                  </p>
                  
                  {/* Needs Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span 
                      className="px-3 py-1 rounded-full text-white text-xs"
                      style={{ backgroundColor: '#0EA5E9' }}
                    >
                      Tuition
                    </span>
                    <span 
                      className="px-3 py-1 rounded-full text-white text-xs"
                      style={{ backgroundColor: '#000000' }}
                    >
                      Uniform
                    </span>
                    <span 
                      className="px-3 py-1 rounded-full text-white text-xs"
                      style={{ backgroundColor: '#0EA5E9' }}
                    >
                      Books
                    </span>
                    <span 
                      className="px-3 py-1 rounded-full text-white text-xs"
                      style={{ backgroundColor: '#000000' }}
                    >
                      Exam Fees
                    </span>
                  </div>
                  
                  {/* School */}
                  <div className="flex items-center mt-3">
                    <Building2 className="h-4 w-4 mr-2" style={{ color: '#6B7280' }} />
                    <span 
                      className="text-base font-bold"
                      style={{ color: '#111827' }}
                    >
                      {school.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Section - Donation Panel */}
            <div className="w-full lg:w-80 space-y-4">
              {/* Donate Button */}
              <button 
                className="w-full py-3 px-6 rounded-full text-white font-medium text-base"
                style={{ backgroundColor: '#8B5CF6' }}
              >
                Donate
              </button>
              
              {/* Message Box */}
              <textarea
                placeholder="Leave a message (optional)"
                rows={4}
                className="w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                style={{ 
                  backgroundColor: '#F9FAFB', 
                  borderColor: '#D1D5DB' 
                }}
              />
              
              {/* Download Report Button */}
              <button 
                className="w-full flex items-center justify-center py-3 px-5 rounded-lg text-sm font-medium"
                style={{ 
                  backgroundColor: '#6EE7B7', 
                  color: '#047857' 
                }}
              >
                <Download className="h-4 w-4 mr-2" />
                Student Progress Report
              </button>
            </div>
          </div>
        </div>

        {/* Sponsorship History Card */}
        <div className="bg-white rounded-xl p-6">
          <h2 
            className="text-lg font-bold mb-4"
            style={{ color: '#111827' }}
          >
            List of Previous Sponsor
          </h2>
          
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b" style={{ borderColor: '#E5E7EB' }}>
                  <th className="text-left py-3 text-sm font-medium" style={{ color: '#6B7280' }}>
                    Names
                  </th>
                  <th className="text-left py-3 text-sm font-medium" style={{ color: '#6B7280' }}>
                    Location
                  </th>
                  <th className="text-right py-3 text-sm font-medium" style={{ color: '#6B7280' }}>
                    Donated
                  </th>
                </tr>
              </thead>
              <tbody>
                {sponsorHistory.map((sponsor, index) => (
                  <tr key={index} className="border-b" style={{ borderColor: '#E5E7EB' }}>
                    <td className="py-4 text-sm" style={{ color: '#111827' }}>
                      {sponsor.name}
                    </td>
                    <td className="py-4 text-sm" style={{ color: '#6B7280' }}>
                      {sponsor.location}
                    </td>
                    <td className="py-4 text-right">
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ 
                          backgroundColor: '#D1FAE5', 
                          color: '#047857' 
                        }}
                      >
                        + {sponsor.amount}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="flex items-center justify-center mt-6 space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button 
              className="px-3 py-1 rounded text-white text-sm"
              style={{ backgroundColor: '#8B5CF6' }}
            >
              1
            </button>
            <button className="px-3 py-1 text-gray-600 text-sm hover:bg-gray-100 rounded">
              2
            </button>
            <button className="px-3 py-1 text-gray-600 text-sm hover:bg-gray-100 rounded">
              3
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
