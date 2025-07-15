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

export const schools: School[] = [
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
  }
];

export const students: Student[] = [
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
