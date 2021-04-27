package com.example.springtemplate.daos;

import com.example.springtemplate.models.Book;
import com.example.springtemplate.models.Review;
import com.example.springtemplate.models.Student;
import com.example.springtemplate.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class StudentDao {
    @Autowired
    StudentRepository studentRepository;

    @PostMapping("/api/students")
    public Student createStudent(@RequestBody Student student) {
        return studentRepository.save(student);
    }

    @GetMapping("/api/students")
    public List<Student> findAllStudents() {
        return studentRepository.findAllStudents();
    }

    @GetMapping("/api/students/{studentId}")
    public Student findStudentById(
            @PathVariable("studentId") Integer id) {
        return studentRepository.findStudentById(id);
    }

    @PutMapping("/api/students/{studentId}")
    public Student updateStudent(
            @PathVariable("studentId") Integer id,
            @RequestBody() Student newStudent) {
        Student student = this.findStudentById(id);
        student.setPassword(newStudent.getPassword());
        student.setMajor(newStudent.getMajor());
        student.setGpa(newStudent.getGpa());
        return studentRepository.save(student);
    }

    @DeleteMapping("/api/students/{studentId}")
    public void deleteStudent(
            @PathVariable("studentId") Integer id) {
        studentRepository.deleteById(id);
    }
}
