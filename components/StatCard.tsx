import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
}

export default function StatCard({ icon: Icon, label, value }: StatCardProps) {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-6 relative flex-1">
      <div className="absolute top-4 left-4 bg-blue-50 rounded-full p-2">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div className="ml-14">
        <p className="text-gray-600">{label}</p>
        <p className="text-xl font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  );
}
