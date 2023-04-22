interface Student {
    name: string;
    batch: string;
    roll: number;
    fees: Fees;
  }
  
  interface Fees {
    registration: number;
    admission: number;
    readmission: number;
    semester: number;
    lab: number;
    library: number;
    examination: number;
    improvement: number;
    markSheet: number;
    fine: number;
  }
  
  class StudentSystem {
    students: Student[];
  
    constructor() {
      this.students = [];
    }
  
    addStudent(name: string, batch: string, roll: number, fees: Fees): void {
      const student: Student = { name, batch, roll, fees };
      this.students.push(student);
    }
  
    getStudent(name: string): Student | undefined {
      return this.students.find((student) => student.name === name);
    }
  
    calculateTotalFees(student: Student): number {
      const fees = student.fees;
      return (
        fees.registration +
        fees.admission +
        fees.readmission +
        fees.semester +
        fees.lab +
        fees.library +
        fees.examination +
        fees.improvement +
        fees.markSheet +
        fees.fine
      );
    }
  }
  
  
  //studentSystem.addStudent("John Doe", "Batch 2022", 101, studentFees);
  
  //const johnDoe = studentSystem.getStudent("John Doe");
  //if (johnDoe) {
    //const totalFees = studentSystem.calculateTotalFees(johnDoe);
    //console.log(`Total fees for ${johnDoe.name}: ${totalFees}`);
  //} else {
    //console.log("Student not found.");
 // }
  