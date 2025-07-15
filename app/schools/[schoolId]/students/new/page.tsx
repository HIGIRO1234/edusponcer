import { notFound } from 'next/navigation';
import { schools } from '@/lib/data';

interface Props {
  params: {
    schoolId: string;
  };
}

export default function NewStudentPage({ params }: Props) {
  const school = schools.find((s) => s.id === params.schoolId);
  if (!school) notFound();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">
        Add New Student - {school.name}
      </h1>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded-lg p-2 w-full mb-4"
            placeholder="Student's full name"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <select className="border border-gray-300 rounded-lg p-2 w-full mb-4">
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Age
            </label>
            <input
              type="number"
              className="border border-gray-300 rounded-lg p-2 w-full mb-4"
              placeholder="Age"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Grade
          </label>
          <select className="border border-gray-300 rounded-lg p-2 w-full mb-4">
            <option value="">Select grade</option>
            {['9th', '10th', '11th', '12th'].map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Support Needed
          </label>
          <select className="border border-gray-300 rounded-lg p-2 w-full mb-4">
            <option value="">Select support type</option>
            <option value="School Fees">School Fees</option>
            <option value="Books and Supplies">Books and Supplies</option>
            <option value="Uniform">Uniform</option>
            <option value="Uniform and Supplies">Uniform and Supplies</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2"
        >
          Add Student
        </button>
      </form>
    </div>
  );
}
