export interface School {
  id: string;
  name: string;
  location: string;
  totalStudents: number;
  pendingCount: number;
}

export interface Student {
  id: string;
  name: string;
  gender: 'Male' | 'Female';
  age: number;
  supportNeeded: string;
  grade: string;
  status: 'Sponsored' | 'Open';
  schoolId: string;
}

export interface Notification {
  id: string;
  title: string;
  date: string;
  read: boolean;
}

export let schools: School[] = [
  {
    id: '1',
    name: 'Utunyoni Highschool',
    location: 'Kigali',
    totalStudents: 450,
    pendingCount: 25
  },
  {
    id: '2',
    name: 'St. Mary\'s Academy',
    location: 'Butare',
    totalStudents: 380,
    pendingCount: 15
  },
  {
    id: '3',
    name: 'Nyagatare Secondary School',
    location: 'Nyagatare',
    totalStudents: 520,
    pendingCount: 30
  },
  {
    id: '4',
    name: 'Green Hills Academy',
    location: 'Kigali',
    totalStudents: 600,
    pendingCount: 20
  },
  {
    id: '5',
    name: 'Hope Academy',
    location: 'Gisenyi',
    totalStudents: 320,
    pendingCount: 18
  },
  {
    id: '6',
    name: 'Unity Secondary School',
    location: 'Musanze',
    totalStudents: 480,
    pendingCount: 22
  },
  {
    id: '7',
    name: 'Excellence International School',
    location: 'Kigali',
    totalStudents: 750,
    pendingCount: 35
  },
  {
    id: '8',
    name: 'Sunrise Academy',
    location: 'Rubavu',
    totalStudents: 390,
    pendingCount: 16
  },
  {
    id: '9',
    name: 'Future Leaders School',
    location: 'Huye',
    totalStudents: 540,
    pendingCount: 28
  }
];

export let students: Student[] = [
  {
    id: '1',
    name: 'Jean Pierre Mugisha',
    gender: 'Male',
    age: 15,
    supportNeeded: 'School Fees',
    grade: '10th',
    status: 'Sponsored',
    schoolId: '1'
  },
  {
    id: '2',
    name: 'Alice Uwase',
    gender: 'Female',
    age: 16,
    supportNeeded: 'Books and Supplies',
    grade: '11th',
    status: 'Open',
    schoolId: '1'
  },
  {
    id: '3',
    name: 'Emmanuel Ndayisaba',
    gender: 'Male',
    age: 14,
    supportNeeded: 'School Fees',
    grade: '9th',
    status: 'Sponsored',
    schoolId: '2'
  },
  {
    id: '4',
    name: 'Marie Claire Umutoni',
    gender: 'Female',
    age: 17,
    supportNeeded: 'Uniform and Supplies',
    grade: '12th',
    status: 'Open',
    schoolId: '2'
  },
  {
    id: '5',
    name: 'Patrick Ishimwe',
    gender: 'Male',
    age: 15,
    supportNeeded: 'School Fees',
    grade: '10th',
    status: 'Sponsored',
    schoolId: '3'
  },
  {
    id: '6',
    name: 'Grace Mukamana',
    gender: 'Female',
    age: 16,
    supportNeeded: 'Books and Supplies',
    grade: '11th',
    status: 'Open',
    schoolId: '3'
  },
  {
    id: '7',
    name: 'David Nsengimana',
    gender: 'Male',
    age: 15,
    supportNeeded: 'Uniform',
    grade: '10th',
    status: 'Sponsored',
    schoolId: '4'
  },
  {
    id: '8',
    name: 'Sarah Umuhoza',
    gender: 'Female',
    age: 14,
    supportNeeded: 'School Fees',
    grade: '9th',
    status: 'Open',
    schoolId: '5'
  },
  {
    id: '9',
    name: 'Kevin Uwimana',
    gender: 'Male',
    age: 16,
    supportNeeded: 'Books and Supplies',
    grade: '11th',
    status: 'Sponsored',
    schoolId: '6'
  },
  {
    id: '10',
    name: 'Claudine Mukamazimpaka',
    gender: 'Female',
    age: 15,
    supportNeeded: 'School Fees',
    grade: '10th',
    status: 'Open',
    schoolId: '6'
  },
  {
    id: '11',
    name: 'Samuel Nkurunziza',
    gender: 'Male',
    age: 17,
    supportNeeded: 'Uniform and Supplies',
    grade: '12th',
    status: 'Sponsored',
    schoolId: '7'
  },
  {
    id: '12',
    name: 'Diane Uwizeyimana',
    gender: 'Female',
    age: 16,
    supportNeeded: 'Books and Supplies',
    grade: '11th',
    status: 'Open',
    schoolId: '7'
  },
  {
    id: '13',
    name: 'Eric Habimana',
    gender: 'Male',
    age: 15,
    supportNeeded: 'School Fees',
    grade: '10th',
    status: 'Sponsored',
    schoolId: '8'
  },
  {
    id: '14',
    name: 'Immaculee Nyirabahizi',
    gender: 'Female',
    age: 14,
    supportNeeded: 'Uniform',
    grade: '9th',
    status: 'Open',
    schoolId: '8'
  },
  {
    id: '15',
    name: 'Benjamin Uwimana',
    gender: 'Male',
    age: 16,
    supportNeeded: 'School Fees',
    grade: '11th',
    status: 'Sponsored',
    schoolId: '9'
  },
  {
    id: '16',
    name: 'Josephine Mukansanga',
    gender: 'Female',
    age: 15,
    supportNeeded: 'Books and Supplies',
    grade: '10th',
    status: 'Open',
    schoolId: '9'
  }
];

export const notifications: Notification[] = [
  {
    id: '1',
    title: 'New student sponsorship request from Utunyoni Highschool',
    date: '2025-07-15',
    read: false
  },
  {
    id: '2',
    title: 'Sponsorship approved for Alice Uwase',
    date: '2025-07-14',
    read: true
  },
  {
    id: '3',
    title: 'Monthly report due for St. Mary\'s Academy',
    date: '2025-07-13',
    read: false
  },
  {
    id: '4',
    title: 'New school registration: Hope Academy',
    date: '2025-07-12',
    read: true
  },
  {
    id: '5',
    title: 'Student documents updated: Emmanuel Ndayisaba',
    date: '2025-07-11',
    read: false
  }
];

// Helper functions for managing schools data
let listeners: (() => void)[] = [];

export function addSchoolToData(school: School): void {
  schools.push(school);
  
  // Notify all listeners that data has changed
  listeners.forEach(listener => listener());
}

export function getAllSchools(): School[] {
  return [...schools]; // Return a copy to prevent direct mutation
}

export function subscribeToSchoolChanges(callback: () => void): () => void {
  listeners.push(callback);
  
  // Return unsubscribe function
  return () => {
    listeners = listeners.filter(listener => listener !== callback);
  };
}

export function getSchoolCount(): number {
  return schools.length;
}

// Helper functions for managing students data
export function addStudentToData(student: Student): void {
  students.push(student);
}

export function getAllStudents(): Student[] {
  return [...students]; // Return a copy to prevent direct mutation
}

export function getStudentsBySchool(schoolId: string): Student[] {
  return students.filter(student => student.schoolId === schoolId);
}

export function getStudentById(studentId: string): Student | undefined {
  return students.find(student => student.id === studentId);
}
