'use client';

import { useState, use } from 'react';
import { notFound, useRouter } from 'next/navigation';
import { schools, addStudentToData } from '@/lib/data';
import { 
  Upload, 
  Camera, 
  FileText, 
  MapPin, 
  Bold, 
  Italic, 
  AlignLeft, 
  AlignCenter, 
  AlignRight,
  ChevronDown
} from 'lucide-react';

interface Props {
  params: Promise<{
    schoolId: string;
  }>;
}

export default function NewStudentPage({ params }: Props) {
  const router = useRouter();
  const { schoolId } = use(params);
  const school = schools.find((s) => s.id === schoolId);
  
  const [formData, setFormData] = useState({
    name: 'Mukunzi Ndahiro James',
    description: 'Passionate about becoming an engineer. Raised by a single mother and currently at risk of dropping out due to school fees.',
    district: 'Kicukiro',
    schoolName: '',
    age: '',
    gender: '',
    grade: '',
    needsTags: ['Tuition', 'Uniform', 'Books', 'Exam Fees']
  });

  if (!school) notFound();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new student object
    const newStudent = {
      id: `student-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: formData.name,
      gender: (formData.gender || 'Male') as 'Male' | 'Female',
      age: parseInt(formData.age) || 18,
      supportNeeded: formData.needsTags.join(', ') || 'General Support',
      grade: formData.grade || '10th',
      status: 'Open' as const,
      schoolId: schoolId
    };
    
    // Add student to data
    addStudentToData(newStudent);
    
    console.log('Student added:', newStudent);
    
    // Redirect to school dashboard
    router.push(`/schools/${schoolId}/dashboard`);
  };

  const characterLimit = 50;
  const charactersLeft = Math.max(0, characterLimit - formData.description.length);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      {/* Header Section */}
      <div className="bg-white px-4 sm:px-6 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Breadcrumb and Title */}
          <div>
            <div className="text-sm text-gray-500 mb-1">
              School / Adding Student
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              {formData.name}
            </h1>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex-1 sm:flex-none px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors text-center"
            >
              Cancel
            </button>
            <button
              form="student-form"
              type="submit"
              className="flex-1 sm:flex-none px-4 py-2 text-white rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all text-center"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <form id="student-form" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {/* Left Column - 75% width */}
            <div className="xl:col-span-3 space-y-6">
              {/* Basic Info Section */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Basic Info</h2>
                
                {/* Name Input */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Mukunzi Ndahiro James"
                  />
                </div>

                {/* Description Field with Rich Text Editor */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  
                  {/* Rich Text Toolbar */}
                  <div className="border border-gray-300 rounded-t-lg bg-gray-50 px-3 py-2 flex items-center space-x-4">
                    <select className="text-sm border border-gray-300 rounded px-2 py-1">
                      <option>Normal Text</option>
                    </select>
                    <div className="flex items-center space-x-2">
                      <button type="button" className="p-1 hover:bg-gray-200 rounded">
                        <AlignLeft className="h-4 w-4 text-gray-700" />
                      </button>
                      <button type="button" className="p-1 hover:bg-gray-200 rounded">
                        <AlignCenter className="h-4 w-4 text-gray-600" />
                      </button>
                      <button type="button" className="p-1 hover:bg-gray-200 rounded">
                        <AlignRight className="h-4 w-4 text-gray-600" />
                      </button>
                      <button type="button" className="p-1 hover:bg-gray-200 rounded">
                        <Bold className="h-4 w-4 text-gray-900 font-bold" />
                      </button>
                      <button type="button" className="p-1 hover:bg-gray-200 rounded">
                        <Italic className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border-l border-r border-b border-gray-300 rounded-b-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Passionate about becoming an engineer. Raised by a single mother and currently at risk of dropping out due to school fees."
                  />
                  <div className="text-xs text-gray-500 mt-1">
                    {charactersLeft} characters left
                  </div>
                </div>

                {/* Profile Picture Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profile Picture
                  </label>
                  <div 
                    className="w-36 h-36 border-2 border-dashed border-teal-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-teal-50 transition-colors"
                    style={{ backgroundColor: '#D1FAE5' }}
                  >
                    <Camera className="h-8 w-8 text-teal-700 mb-2" />
                    <span className="text-sm text-teal-700 text-center">
                      + Add a profile of student
                    </span>
                  </div>
                </div>
              </div>

              {/* Documents Upload Section */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Documents</h2>
                
                <div className="space-y-4">
                  {[
                    { label: 'Student Card', icon: FileText },
                    { label: 'Discipline Report', icon: FileText },
                    { label: 'Academic Report', icon: FileText }
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b last:border-b-0 border-gray-100">
                      <div className="flex items-center space-x-3">
                        <doc.icon className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-900">{doc.label}</span>
                      </div>
                      <button
                        type="button"
                        className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center space-x-2"
                      >
                        <Upload className="h-4 w-4" />
                        <span>Upload</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar - 25% width */}
            <div className="space-y-6">
              {/* Location Section */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Location</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    District
                  </label>
                  <div className="relative">
                    <select
                      value={formData.district}
                      onChange={(e) => handleInputChange('district', e.target.value)}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-900 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="Kicukiro">Kicukiro</option>
                      <option value="Gasabo">Gasabo</option>
                      <option value="Nyarugenge">Nyarugenge</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* More Info Section */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-sm font-bold text-gray-900 mb-4">More Info</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      School
                    </label>
                    <input
                      type="text"
                      value={formData.schoolName}
                      onChange={(e) => handleInputChange('schoolName', e.target.value)}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter school name here"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age
                    </label>
                    <input
                      type="text"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter age here"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender
                    </label>
                    <div className="relative">
                      <select
                        value={formData.gender}
                        onChange={(e) => handleInputChange('gender', e.target.value)}
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-900 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Choose gender here</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Grade
                    </label>
                    <div className="relative">
                      <select
                        value={formData.grade}
                        onChange={(e) => handleInputChange('grade', e.target.value)}
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-900 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Choose grade here</option>
                        <option value="9th">9th</option>
                        <option value="10th">10th</option>
                        <option value="11th">11th</option>
                        <option value="12th">12th</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Needs Tags Section */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Needs Tags</h3>
                
                <div className="flex flex-wrap gap-2">
                  {formData.needsTags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                        tag === 'Tuition' || tag === 'Books' 
                          ? 'bg-sky-500' 
                          : 'bg-gray-900'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial Section */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Testimonial</h3>
                
                <div className="flex space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-gray-600">FK</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Fred Kayiranga</div>
                    <div className="text-xs text-gray-600 mb-2">Principal</div>
                    <p className="text-xs italic text-gray-500 leading-relaxed">
                      "Maria is one of the brightest students I've taught — always engaged, always curious."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
