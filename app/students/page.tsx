import StudentTable from '@/components/StudentTable';
import { students } from '@/lib/data';

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">All Students</h1>

      <div className="flex items-center justify-between mb-6">
        <input
          type="text"
          placeholder="Search students..."
          className="px-4 py-2 border border-gray-300 rounded-lg"
        />
        <div className="flex items-center space-x-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg">
            <option>All Schools</option>
            <option>Status: Sponsored</option>
            <option>Status: Open</option>
          </select>
        </div>
      </div>

      <StudentTable students={students} />
    </div>
  );
}
