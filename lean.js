// สร้างระบบการเข้าเรียน
function createStudentSystem() {
    let students = [];
  
    // Closure เพื่อเก็บข้อมูลของนักเรียน
    function addStudent(name, age) {
      const student = {
        name,
        age,
      };
      students.push(student);
    }
  
    // Array method ในการค้นหาข้อมูลของนักเรียน
    function findStudentByName(name) {
      return students.find(student => student.name === name);
    }
  
    return {
      addStudent,
      findStudentByName,
    };
  }
  
  const studentSystem = createStudentSystem();
  
  studentSystem.addStudent("John", 20);
  studentSystem.addStudent("Alice", 22);
  
  const foundStudent = studentSystem.findStudentByName("Alice");
  console.log(foundStudent); // จะแสดงข้อมูลของนักเรียนชื่อ Alice
  