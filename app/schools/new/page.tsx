'use client';

import { ArrowLeft, Building2, Users, MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { addSchool, type School } from '@/lib/schools';

export default function NewSchoolPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Omit<School, 'id'>>({
    name: '',
    location: '',
    email: '',
    phone: '',
    principalName: '',
    type: 'Public School',
    totalStudents: 0,
    description: '',
    pendingCount: 0
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const newSchool = await addSchool(formData);
      
      if (newSchool && newSchool.id) {
        // Use a small delay to ensure the data change event propagates
        setTimeout(() => {
          window.location.href = `/schools`;
        }, 100);
      } else {
        console.error('Failed to add school: Invalid response');
        alert('Failed to add school. Please try again.');
      }
    } catch (error) {
      console.error('Failed to add school:', error);
      alert('Failed to add school. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'totalStudents' || name === 'pendingCount' ? parseInt(value) || 0 : value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="h-16 px-8 flex items-center">
        <Link
          href="/schools"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Schools
        </Link>
      </div>

      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center">
            <Building2 className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Add New School</h1>
            <p className="text-gray-600 mt-1">Enter information about the new school</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center">
              <Building2 className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">School Information</h2>
              <p className="text-gray-600">Basic details about the school</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* School Name and Type */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  School Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-800 bg-white"
                  placeholder="Enter school name"
                  required
                />
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                  School Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-800 bg-white"
                >
                  <option value="Public School">Public School</option>
                  <option value="Private School">Private School</option>
                  <option value="International School">International School</option>
                </select>
              </div>
            </div>

            {/* Location and Total Students */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-800 bg-white"
                  placeholder="School address"
                  required
                />
              </div>
              <div>
                <label htmlFor="totalStudents" className="block text-sm font-medium text-gray-700 mb-2">
                  Total Students
                </label>
                <input
                  type="number"
                  id="totalStudents"
                  name="totalStudents"
                  value={formData.totalStudents}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-800 bg-white"
                  placeholder="Number of students"
                  required
                />
              </div>
            </div>

            {/* Pending Requests */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="pendingCount" className="block text-sm font-medium text-gray-700 mb-2">
                  Pending Requests
                </label>
                <input
                  type="number"
                  id="pendingCount"
                  name="pendingCount"
                  value={formData.pendingCount}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-800 bg-white"
                  placeholder="Number of pending requests"
                  min="0"
                />
              </div>
              <div></div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-800 bg-white"
                  placeholder="school@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-800 bg-white"
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>
            </div>

            {/* Principal Name */}
            <div>
              <label htmlFor="principalName" className="block text-sm font-medium text-gray-700 mb-2">
                Principal Name
              </label>
              <input
                type="text"
                id="principalName"
                name="principalName"
                value={formData.principalName}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-800 bg-white"
                placeholder="Enter principal's name"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                School Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-800 bg-white"
                placeholder="Brief description of the school..."
              />
            </div>

            {/* Form Actions */}
            <div className="flex items-center justify-end space-x-4 pt-4">
              <Link
                href="/schools"
                className="px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-lg bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Adding School...' : 'Add School'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
