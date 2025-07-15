import { Student } from '@/lib/data';

interface StudentTableProps {
  students: Student[];
}

export default function StudentTable({ students }: StudentTableProps) {
  return (
    <div className="min-w-full bg-white rounded-lg overflow-hidden">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-gray-600">Name</th>
            <th className="px-4 py-2 text-left text-gray-600">Gender</th>
            <th className="px-4 py-2 text-left text-gray-600">Age</th>
            <th className="px-4 py-2 text-left text-gray-600">Support Needed</th>
            <th className="px-4 py-2 text-left text-gray-600">Grade</th>
            <th className="px-4 py-2 text-left text-gray-600">Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-gray-50">
              <td className="px-4 py-2">{student.name}</td>
              <td className="px-4 py-2">{student.gender}</td>
              <td className="px-4 py-2">{student.age}</td>
              <td className="px-4 py-2">{student.supportNeeded}</td>
              <td className="px-4 py-2">{student.grade}</td>
              <td className="px-4 py-2">
                <span
                  className={`inline-block ${
                    student.status === 'Sponsored'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  } text-sm px-2 py-1 rounded-full`}
                >
                  {student.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
