'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, HelpCircle, Mail, Phone, MessageCircle, Users, School } from 'lucide-react';

export default function HelpPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: '1',
      question: 'How do I add a new student?',
      answer: 'Navigate to a specific school\'s dashboard and click the "Add Student" button. Fill in all the required information including name, age, grade, and support needed, then submit the form.'
    },
    {
      id: '2',
      question: 'How do I search for students?',
      answer: 'Use the search bar on the Students page to search by student name, grade, or support type. You can also use the status and grade filters to narrow down results.'
    },
    {
      id: '3',
      question: 'What do the status colors mean?',
      answer: 'Green badges indicate "Sponsored" students who have active sponsorship. Red badges show "Open" students who are awaiting sponsorship.'
    },
    {
      id: '4',
      question: 'How do I view school details?',
      answer: 'Go to the Schools page and click "View" on any school card to see detailed statistics, student lists, and school-specific information.'
    },
    {
      id: '5',
      question: 'How do I use the filters?',
      answer: 'On the Students page, use the dropdown filters to sort by status (Sponsored/Awaiting Sponsor) and grade level. Click the filter icon to clear all filters.'
    }
  ];

  return (
    <div className="mx-4 sm:mx-6 lg:mx-8 pt-6 sm:pt-8 space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <HelpCircle className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Help Center</h1>
        <p className="text-gray-600">Find answers to common questions about using EduSponcer</p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openFaq === faq.id ? (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {openFaq === faq.id && (
                <div className="px-6 pb-4 border-t border-gray-100">
                  <p className="text-gray-600 pt-3">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Support */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Still need help?</h3>
          <p className="text-gray-600 mb-6">Can't find what you're looking for? Get in touch with our support team.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Email</p>
                <p className="text-sm text-gray-600">support@edusponcer.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Phone</p>
                <p className="text-sm text-gray-600">+250 788 123 456</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Live Chat</p>
                <p className="text-sm text-gray-600">Available 9AM-5PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="max-w-3xl mx-auto pb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/students" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200 group">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 group-hover:text-blue-600 mb-1">View All Students</h4>
                <p className="text-sm text-gray-600">Browse and manage student records</p>
              </div>
            </div>
          </Link>
          
          <Link href="/schools" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200 group">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <School className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 group-hover:text-green-600 mb-1">Manage Schools</h4>
                <p className="text-sm text-gray-600">View school information and statistics</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
