# README
## P3:
### Name of the team(s). At most two teams per project. One from each section, if applicable:
Database Design 14 (Section 3) and Database Design 35 (Section 4)
### Team members and the section they belong to. At most 4 team members per project:
Rida Sharief (Section 3), Naqiya Motiwalla (Section 4), Hannah Marrow (Section 4)
### Problem statement - describe the problem that your project is trying to solve
Northeastern has no proper way of giving feedback on college textbooks. We wanted to create a system similar to TRACE but for books. 
### Solution statement - describe the solution you implemented to solve the problem
We designed a database that would take in student and course information, allowing students to review required reading material so that the university could implement changes based on the comments. Professors could see if they should continue with the same textbooks or find better options for students. 
### User - describe the typical user(s) that would use your solution
The student would use this database to review textbooks for the classes they are currently taking. 
### Domain objects - describe at least two of the domain objects you implemented in your solution
One of our domain objects is books, which can be reviewed by students, and contain the following fields:
- Title
- Publisher
- Publish Date
- Edition
Our other domain object is reviews, which can be created by students about books, and contain the following fields:
- Rating
- Comment
- Created
- Updated
- Reviewer (which is being mapped to the student’s table in a one to many relationship, meaning that one student can leave many reviews)
- Book (which is being mapped to the books table in a one to many relationship, meaning that one books can receive many reviews)

## P1:
### Name of the project: 
College Textbook Review Database
### Name of the team(s). At most two teams per project. One from each section, if applicable:
Database Design 14 (Section 3) and Database Design 35 (Section 4)
### Team members and the section they belong to. At most 4 team members per project:
Rida Sharief (Section 3), Naqiya Motiwalla (Section 4), Hannah Marrow (Section 4)
### Brief description of the project:
A college database for relationships between a student user and other college-related entities such as courses, textbooks, etc.
### Link to the latest data model as a single UML class diagram. The UML class diagram should be a single PDF document called db_design_final_project_UML.pdf and linked from the README:
https://drive.google.com/file/d/1nQrdoWOLas_RJWPoGlpkKYy-wbIY1sYp/view?usp=sharing
### Description of user data model:
Our user is a student whose table contains the following fields: 
- firstName
- lastName
- Username
- Password
- Email
- dateOfBirth
- Major
- gpa
### Description of the two domain object data models:
A book is a table with the following fields
- Title 
- Publisher
- publishDate
- Edition
A review is a table with the following fields, and links to a book that is being reviewed and a student that is reviewing
- Comment
- Created
- Updated
- Rating
- Book
- Reviewer
### Description of the user to domain object relationship:
A student can be enrolled in many sections and one section can hold may students. Students can also write reviews for textbooks, such that every review has a student reviewer.
### Description of the domain object to domain object relationship:
A course can have many sections, and a section cannot exist without there being a course. Each course also has a textbook, and every textbook has one or more authors and many reviews. Each author can also write 0 to many books. 
We are using a mapping class for the normalization of each of our many to many relationships.
### Description of the portable enumeration(s):
Every course is under a certain department. The course table has a department field, which can only be populated by one of the following:
- Science
- History
- Math
- Literature 
- Language 
### Description of the user interface requirements:
The user interface will allow for creating, updating, deleting, and reading records from the students table, books table, and reviews table.

