const students = [
    {
      name: 'Sophia',
      attendance: [true, true, false, true, true],
      testScores: [88, 92, 85, 78, 90]
    },
    {
      name: 'Mason',
      attendance: [true, true, true, true, false],
      testScores: [70, 82, 88, 75, 62]
    },
    {
      name: 'Isabella',
      attendance: [true, false, false, true, true],
      testScores: [68, 71, 70, 60, 78]
    },
    {
      name: 'Liam',
      attendance: [true, true, true, true, true],
      testScores: [90, 87, 92, 88, 95]
    },
    {
      name: 'Olivia',
      attendance: [true, true, true, true, false],
      testScores: [72, 78, 75, 80, 62]
    }
  ]
  console.log("---------------------------------")
 // calculate attdance percentage
  function getAttendanceRate(student){
  
     const totalAttendance = student.attendance.reduce((total, attendance) => {
        return total + attendance
      },0)
 
  const attendancePercentage = (totalAttendance/student.attendance.length)*100
  return attendancePercentage 
}
for (const student of students) {
    const attendanceRate = getAttendanceRate(student)
    console.log(`${student.name}: อัตราการเข้าเรียน ${attendanceRate}%`);
  }

console.log("---------------------------------")


  //calculate average test score

function getAvgScore(student) {
   
    const totalScore = student.testScores.reduce((total,score)=>{
        return total+score
    },0)
  
   
    const avgScore = totalScore / student.testScores.length;
    return avgScore
  }
  for(const average of students){
    const averageSroce = getAvgScore(average)
    console.log(`ชื่อ : ${average.name} ,คะแนนเฉลี่ย ${averageSroce}`)
  }

  console.log("---------------------------------")
  
  function underPerformStudents(students) {
    const underPerformStudents = []

    for (const student of students) {
      const attendanceRate = getAttendanceRate(student)
      const avgScore = getAvgScore(student)
    //เราจะเอานักเรียนที่ไม่ผ่านใส่เข้าไปใน array ว่างๆๆ
      if (attendanceRate < 80 && avgScore < 70) {
        underPerformStudents.push(student)
      }
    }
    return underPerformStudents
  }
  const underPerformStudents1 = underPerformStudents(students)
console.log("นักเรียนที่เรียนไม่ทัน:")
for (const student of underPerformStudents1) {
  console.log(student.name)
}
console.log("---------------------------------")