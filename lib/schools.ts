import { schools } from './data';

export interface School {
  id: string;
  name: string;
  location: string;
  type: 'Public School' | 'Private School' | 'International School';
  totalStudents: number;
  email: string;
  phone: string;
  principalName: string;
  description?: string;
}

export async function addSchool(schoolData: Omit<School, 'id'>): Promise<School> {
  // This is a mock implementation. In a real app, this would be an API call.
  const newSchool = {
    ...schoolData,
    id: (schools.length + 1).toString(),
  };
  
  schools.push(newSchool);
  return newSchool;
}

export async function getSchools(): Promise<School[]> {
  // This is a mock implementation. In a real app, this would be an API call.
  return schools;
}

export async function getSchoolById(id: string): Promise<School | undefined> {
  // This is a mock implementation. In a real app, this would be an API call.
  return schools.find(school => school.id === id);
}
