import { Building2, Users, Bell } from 'lucide-react';
import StatCard from '@/components/StatCard';
import { schools, students, notifications } from '@/lib/data';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          icon={Bell}
          label="Notifications"
          value={notifications.filter(n => !n.read).length}
        />
      </div>
    </div>
  );
}
