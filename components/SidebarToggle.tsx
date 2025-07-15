'use client';

import { Menu, ChevronFirst, ChevronLast } from 'lucide-react';
import { useState } from 'react';

export default function SidebarToggle() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const logo = document.getElementById('logo');
    if (sidebar) {
      if (isOpen) {
        sidebar.style.width = '64px';
        sidebar.style.minWidth = '64px';
        if (mainContent) {
          mainContent.style.marginLeft = '64px';
        }
        if (logo) {
          logo.style.opacity = '0';
          logo.style.transform = 'translateX(-20px)';
        }
      } else {
        sidebar.style.width = '240px';
        sidebar.style.minWidth = '240px';
        if (mainContent) {
          mainContent.style.marginLeft = '240px';
        }
        if (logo) {
          logo.style.opacity = '1';
          logo.style.transform = 'translateX(0)';
        }
      }
      setIsOpen(!isOpen);
    }
  };

  return (
    <button 
      onClick={toggleSidebar}
      className="fixed left-0 top-5 w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded-full transition-all duration-300 z-50"
      style={{ 
        left: isOpen ? '220px' : '44px',
        transition: 'left 0.3s ease-in-out'
      }}
    >
      {isOpen ? (
        <ChevronFirst size={20} className="text-gray-600" />
      ) : (
        <ChevronLast size={20} className="text-gray-600" />
      )}
    </button>
  );
}
