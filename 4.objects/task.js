function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  this.marks === undefined ? this.marks = [mark] : this.marks.push(mark);
}

Student.prototype.addMarks = function(...mark) {
  this.marks === undefined ? this.marks = [...mark] : this.marks.push(...mark);
}

Student.prototype.getAverage = function() {
  return (this.marks.reduce((acc, item) => acc + item, 0)) / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}