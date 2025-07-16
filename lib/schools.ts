import { schools, type School as DataSchool, addSchoolToData } from './data';

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
  pendingCount?: number;
}

export async function addSchool(schoolData: Omit<School, 'id'>): Promise<DataSchool> {
  // This is a mock implementation. In a real app, this would be an API call.
  const newSchool: DataSchool = {
    id: (schools.length + 1).toString(),
    name: schoolData.name,
    location: schoolData.location,
    totalStudents: schoolData.totalStudents,
    pendingCount: schoolData.pendingCount || 0,
    // Add the following fields to ensure all data is saved
    type: schoolData.type,
    email: schoolData.email,
    phone: schoolData.phone,
    principalName: schoolData.principalName,
    description: schoolData.description,
  } as any; // Type assertion because DataSchool may not have all fields
  
  addSchoolToData(newSchool);
  return newSchool;
}

export async function getSchools(): Promise<DataSchool[]> {
  // This is a mock implementation. In a real app, this would be an API call.
  return schools;
}

export async function getSchoolById(id: string): Promise<DataSchool | undefined> {
  // This is a mock implementation. In a real app, this would be an API call.
  return schools.find(school => school.id === id);
}
