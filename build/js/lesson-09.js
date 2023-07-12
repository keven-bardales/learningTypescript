"use strict";
// UTILITY TYPES
// this permits to not pass all the props but declare they are props of assignment
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: 'compsci123',
    title: 'Final Project',
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignedGraded = updateAssignment(assign1, { grade: 95 });
console.log(assignedGraded);
// Rewquired and Readonly
const recordAssignment = (assign) => {
    return assign;
};
