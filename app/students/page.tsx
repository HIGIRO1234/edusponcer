'use client';

import StudentTable from '@/components/StudentTable';
import { students } from '@/lib/data';
import Link from 'next/link';
import { useState, useMemo } from 'react';

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [gradeFilter, setGradeFilter] = useState('All Grades');

  // Get unique grades from students data
  const uniqueGrades = useMemo(() => {
    const grades = [...new Set(students.map(s => s.grade))].sort();
    return grades;
  }, []);

  // Filter students based on search term and filters
  const filteredStudents = useMemo(() => {
    const filtered = students.filter(student => {
      // Search filter
      const matchesSearch = searchTerm === '' || 
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.grade.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.supportNeeded.toLowerCase().includes(searchTerm.toLowerCase());

      // Status filter
      const matchesStatus = statusFilter === 'All Status' || 
        (statusFilter === 'Sponsored' && student.status === 'Sponsored') ||
        (statusFilter === 'Awaiting Sponsor' && student.status === 'Open');

      // Grade filter
      const matchesGrade = gradeFilter === 'All Grades' || student.grade === gradeFilter;

      return matchesSearch && matchesStatus && matchesGrade;
    });
    
    // Debug logging
    console.log('Filtering - Status Filter:', statusFilter);
    console.log('Filtering - Grade Filter:', gradeFilter);
    console.log('Filtering - Search Term:', searchTerm);
    console.log('Total Students:', students.length);
    console.log('Filtered Students:', filtered.length);
    
    return filtered;
  }, [searchTerm, statusFilter, gradeFilter]);

  const handleClearFilters = () => {
    setSearchTerm('');
    setStatusFilter('All Status');
    setGradeFilter('All Grades');
  };
  return (
    <div className="mx-4 sm:mx-6 lg:mx-8 pt-6 sm:pt-8 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Students</h1>
          <p className="text-gray-600 mt-1">Manage and view all students across schools</p>
        </div>
        <Link
          href="/schools/1/students/new"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Student
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">{filteredStudents.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Sponsored</p>
              <p className="text-2xl font-bold text-gray-900">{filteredStudents.filter(s => s.status === 'Sponsored').length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-amber-100 rounded-lg">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Awaiting Sponsor</p>
              <p className="text-2xl font-bold text-gray-900">{filteredStudents.filter(s => s.status === 'Open').length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Schools</p>
              <p className="text-2xl font-bold text-gray-900">{new Set(filteredStudents.map(s => s.schoolId)).size}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        {/* Filter Status Display */}
        {(searchTerm || statusFilter !== 'All Status' || gradeFilter !== 'All Grades') && (
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-blue-700">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
                </svg>
                <span>Active filters:</span>
                {searchTerm && <span className="px-2 py-1 bg-blue-100 rounded">Search: "{searchTerm}"</span>}
                {statusFilter !== 'All Status' && <span className="px-2 py-1 bg-blue-100 rounded">Status: {statusFilter}</span>}
                {gradeFilter !== 'All Grades' && <span className="px-2 py-1 bg-blue-100 rounded">Grade: {gradeFilter}</span>}
              </div>
              <button 
                onClick={handleClearFilters}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Clear all
              </button>
            </div>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search students by name, grade, or support needed..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
          
          <div className="flex gap-3">
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option>All Status</option>
              <option>Sponsored</option>
              <option>Awaiting Sponsor</option>
            </select>
            
            <select 
              value={gradeFilter}
              onChange={(e) => setGradeFilter(e.target.value)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option>All Grades</option>
              {uniqueGrades.map(grade => (
                <option key={grade} value={grade}>{grade}</option>
              ))}
            </select>
            
            <button 
              onClick={handleClearFilters}
              className="px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              title="Clear all filters"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Results Summary */}
      {(searchTerm || statusFilter !== 'All Status' || gradeFilter !== 'All Grades') && (
        <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
          Showing {filteredStudents.length} of {students.length} students
          {filteredStudents.length === 0 && (
            <span className="text-red-600 ml-2">- No students match your current filters</span>
          )}
        </div>
      )}

      {/* Students Table */}
      <StudentTable students={filteredStudents} />
    </div>
  );
}
