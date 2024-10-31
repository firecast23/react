function Comp1() {
  const name = "이름";
  const student = {
   name: "학생1",
   age: 23,
   mobile: "010-4854-5032" 
  };


  return (
  <>
    <h2>Hello Compot</h2>
    <h2>hello {name}</h2>
    <h3>학생이름: {student.name}</h3>
    <h3>학생나이: {student.age}</h3>
    <h3>전화번호: {student.mobile}</h3>
  </>
  );

}
 export default Comp1;

