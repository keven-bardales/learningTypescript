// UTILITY TYPES

// Partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

// this permits to not pass all the props but declare they are props of assignment

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: 'compsci123',
  title: 'Final Project',
  grade: 0,
  verified: boolean,
};

console.log(updateAssignment(assign1, { grade: 95 }));
const assignedGraded: Assignment = updateAssignment(assign1, { grade: 95 });

console.log(assignedGraded);

// Rewquired and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignedGraded,
  verified: true,
};

// assignVerified.grade = 88; this wont work since it has a readonly utility

recordAssignment({ ...assignedGraded, verified: true });

// Record utility

const hexColorMap: Record<string, string> = {
  red: 'FF0000',
  green: '00FF00',
  blue: '0000FF',
};

type Students = 'Sara' | 'Kelly';
type LetterGardes = 'A' | 'B' | 'C' | 'D' | 'U';

const finalGrades: Record<Students, LetterGardes> = {
  Sara: 'B',
  Kelly: 'C',
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 93 },
  Kelly: { assign1: 76, assign2: 80 },
};

// Pick and Omit

type AssignResult = Pick<Assignment, 'studentId' | 'grade'>;

const score: AssignResult = {
  studentId: 'k123',
  grade: 85,
};

type AssignPreview = Omit<Assignment, 'grade' | 'verified'>;

const preview: AssignPreview = {
  studentId: 'k123',
  title: 'Final Project',
};

// Exclude and Extract


