// สร้างระบบจัดการคะแนนและผลการเรียนของนักเรียน
function createStudentManagementSystem() {
    let students = [];
  
    // Closure เพื่อเพิ่มข้อมูลของนักเรียน
    function addStudent(name, id) {
      const student = {
        name,
        id,
        scores: {},
      };
      students.push(student);
    }
  
    // Closure เพื่อบันทึกคะแนนของนักเรียนในวิชา
    function recordScore(id, subject, score) {
      const student = students.find(student => student.id === id);
      if (student) {
        student.scores[subject] = score;
      }
    }
  
    // Closure เพื่อคำนวณคะแนนรวมของนักเรียน
    function calculateTotalScore(id) {
      const student = students.find(student => student.id === id);
      if (student) {
        const scores = Object.values(student.scores);
        return scores.reduce((total, score) => total + score, 0);
      }
      return 0;
    }
  
    // Closure เพื่อค้นหาข้อมูลของนักเรียน
    function findStudent(id) {
      return students.find(student => student.id === id);
    }
  
    // Closure เพื่อคำนวณคะแนนสูงสุดและต่ำสุดของนักเรียนในวิชา
    function calculateMinMaxScore(subject) {
      const scores = students.map(student => student.scores[subject]).filter(score => score !== undefined);
      if (scores.length > 0) {
        return {
          maxScore: Math.max(...scores),
          minScore: Math.min(...scores),
        };
      }
      return {
        maxScore: 0,
        minScore: 0,
      };
    }
  
    return {
      addStudent,
      recordScore,
      calculateTotalScore,
      findStudent,
      calculateMinMaxScore,
    };
  }
  
  const studentSystem = createStudentManagementSystem();
  
  studentSystem.addStudent("John", 1);
  studentSystem.addStudent("Alice", 2);
  
  studentSystem.recordScore(1, "Math", 90);
  studentSystem.recordScore(1, "Science", 85);
  studentSystem.recordScore(2, "Math", 92);
  studentSystem.recordScore(2, "Science", 88);
  
  console.log(studentSystem.calculateTotalScore(1)); // 175
  console.log(studentSystem.calculateTotalScore(2)); // 180
  
  console.log(studentSystem.calculateMinMaxScore("Math")); // { maxScore: 92, minScore: 90 }
  