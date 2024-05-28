// Assuming storeStudent is a function that stores student information and 'student' is a type.
// The 'Readonly' utility type is used to make all properties of 'student' read-only after the object is created.

// Define the 'student' type with optional and required properties
type student = {
  id: number; // Assuming 'id' is a required property
  name: string; // Assuming 'name' is a required property
  dept?: string; // 'dept' is an optional property
  // ... other properties
};

// Function to store student information
// It takes an object that conforms to the 'student' type
function storeStudent(studentInfo: student): Readonly<student> {
  // Logic to store student information
  // ...

  // Return a read-only version of the student object
  return Object.freeze(studentInfo);
}

// Information about the student 'jk' before adding the department
const jkInfo: student = {
  id: 1, // Example student ID
  name: 'JK', // Example student name
  // ... other properties
};

// Store the student 'jk' with the department 'CSE' added
// The spread operator '...' is used to copy properties from 'jkInfo'
const jk: Readonly<student> = storeStudent({ ...jkInfo, dept: "CSE" });

// Now 'jk' is a read-only student object with the 'dept' property set to 'CSE'
