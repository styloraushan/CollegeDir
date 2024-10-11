# College Directory Application

The **College Directory Application** is designed to facilitate seamless interaction between students, faculty members, and administrators within a single college. It enables users to efficiently manage and access personal, academic, and administrative information.

## Objective
Develop an application that allows students, faculty, and administrators to interact with and manage college-related information such as courses, profiles, and enrollment records.

---

## Features

### 1. User Roles:
- **Student**
- **Faculty Member**
- **Administrator**

### 2. Login Page:
- Simple form with fields for **Username**, **Password**, and a role selection dropdown (**Student/Faculty Member/Administrator**).
- Validation of user credentials with role-based redirection to the appropriate dashboard.
- Error handling for incorrect credentials.

---

## Student Interface:

### A. View Personal Profile:
- Display student's **name**, **photo**, **contact details**, **courses**, **grades**, and **attendance**.
  
### B. Search for Other Students:
- Search functionality with filters like **name**, **department**, and **year**.
- Dynamic list view of search results.

### C. Contact Faculty Advisors:
- Display assigned faculty advisors with contact options (email, phone).

---

## Faculty Member Interface:

### A. Manage Class List:
- Display a list of students in courses taught by the faculty member, including **names**, **photos**, and **contact information**.

### B. Update Profile:
- Form to update **office hours**, **email**, and **phone number**.

---

## Administrator Interface:

### A. Manage Student and Faculty Records:
- Full CRUD operations (Create, Read, Update, Delete) for managing student and faculty records.

### B. Dashboard with Graphs:
- View and interact with graphical data representations such as student enrollment trends and faculty course loads.

---

## Technical Requirements

### 1. Frontend:
- **React** or **HTML/CSS/JavaScript** for the user interface.
- State management for handling form inputs and API responses.

### 2. Backend:
- **Java** with **Spring Boot** for creating RESTful APIs.
- APIs for:
  - User authentication and authorization.
  - CRUD operations for student and faculty profiles.
  - Fetching course and enrollment details.
  - Aggregating data for administrator dashboards.

### 3. Database:
- **PostgreSQL** for storing user and college data.

---

## Database Entities

### 1. User:
- **id**: Unique identifier for each user.
- **username**: Login name.
- **password**: Encrypted password.
- **role**: Role of the user (Student, FacultyMember, Administrator).
- **name**: Full name.
- **email**: Contact email.
- **phone**: Contact phone number.

### 2. StudentProfile:
- **user_id**: Foreign key linked to the User entity.
- **photo**: Profile photo URL or path.
- **department_id**: Foreign key linked to the Department entity.
- **year**: Year of study (Freshman, Sophomore, etc.).

### 3. FacultyProfile:
- **user_id**: Foreign key linked to the User entity.
- **photo**: Profile photo URL or path.
- **department_id**: Foreign key linked to the Department entity.
- **office_hours**: Faculty member's office hours.

### 4. AdministratorProfile:
- **user_id**: Foreign key linked to the User entity.
- **photo**: Profile photo URL or path.
- **department_id**: Foreign key linked to the Department entity.

### 5. Course:
- **id**: Unique identifier for each course.
- **title**: Course title.
- **description**: Course description.
- **department_id**: Foreign key linked to the Department entity.
- **faculty_id**: Foreign key linked to the FacultyProfile entity.

### 6. Enrollment:
- **id**: Unique identifier for each enrollment record.
- **student_id**: Foreign key linked to the StudentProfile entity.
- **course_id**: Foreign key linked to the Course entity.

### 7. Department:
- **id**: Unique identifier for each department.
- **name**: Name of the department.
- **description**: Description of the department.

---

## Relationships

### 1. User to Profiles:
- **One-to-One** relationship where each user has a corresponding profile (StudentProfile, FacultyProfile, or AdministratorProfile).

### 2. FacultyProfile to Course:
- **One-to-Many** relationship where a faculty member can teach multiple courses.

### 3. Course to StudentProfile (via Enrollment):
- **Many-to-Many** relationship through the Enrollment entity, representing which students are enrolled in which courses.

### 4. Department to Profiles/Courses:
- **One-to-Many** relationship where a department can have multiple associated students, faculty members, administrators, and courses.

---

## Screenshots
Here are some screenshots of the project to give you an idea of its features and functionality:

###### Login Page
![Login Page](https://github.com/user-attachments/assets/23f08d0d-b7da-41d0-b40d-b37fefddaa43)

###### Signup Page
![SignUp Page](https://github.com/user-attachments/assets/d59f180e-2b06-45e2-b8c0-30a5d94f7b7f)


![Screenshot 2024-10-11 111957](https://github.com/user-attachments/assets/02f5bc93-715f-4005-b499-80b78207a149)


###### Student
![Select Template](https://github.com/user-attachments/assets/02f5bc93-715f-4005-b499-80b78207a149)

![Screenshot 2024-10-11 112031](https://github.com/user-attachments/assets/e3238e8b-eb76-407b-bb0a-808975cb3c81)


![Screenshot 2024-10-11 112105](https://github.com/user-attachments/assets/0d3c9f63-e80a-4fba-96d6-8e6248426fca)




![Screenshot 2024-10-11 112214](https://github.com/user-attachments/assets/1261b79a-30b0-430f-9763-61c18790dc48)


![Screenshot 2024-10-11 112241](https://github.com/user-attachments/assets/e973be22-d69f-4722-bfe5-8d1d9a5d170e)



![Screenshot 2024-10-11 112328](https://github.com/user-attachments/assets/04c29dde-3f63-4d9f-8d87-a142a0224e0a)


![Screenshot 2024-10-11 112348](https://github.com/user-attachments/assets/1780cbda-1ef0-4f62-af46-b6ef1eab4b1f)


![Screenshot 2024-10-11 112411](https://github.com/user-attachments/assets/32252603-f236-45ce-9676-36f7e470dbb0)


![Screenshot 2024-10-11 112448](https://github.com/user-attachments/assets/5846f36a-bf8b-43a8-bb75-d874792e3ab0)


![Screenshot 2024-10-11 112523](https://github.com/user-attachments/assets/fb3c0b7d-de7c-4c53-a0a0-2278c233ee70)


![Screenshot 2024-10-11 112603](https://github.com/user-attachments/assets/35ddad4b-3852-449d-b5fe-76628c3b1964)


![Screenshot 2024-10-11 112627](https://github.com/user-attachments/assets/dc3755d2-f21e-4690-a7c2-cf222c0d4783)


![Screenshot 2024-10-11 112646](https://github.com/user-attachments/assets/3e56e2df-54cc-482d-bfab-74542bcf8fbc)

![Screenshot 2024-10-11 112715](https://github.com/user-attachments/assets/b66ad79e-fcb5-43c2-a16b-54724654000f)

## Getting Started
1. Clone this repository to your local machine
bash
git clone https://github.com/yourusername/CollegeDir.git

2. Navigate to the project directory
bash
cd Frontend


3. Install dependencies
bash
npm install

4. Run the app
bash
npm run start

5. Navigate to the project directory
bash
cd backend

6. Install dependencies
bash
mvn clean install

7. Run the app
bash
mvn spring-boot:run


5. Open http://localhost:3000 in your browser to see the application running

## Built With:
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Spring Boot](https://spring.io/projects/spring-boot) - Backend framework for building Java-based applications.
- [PostgreSQL](https://www.postgresql.org/) - A powerful, open-source relational database system.
- [JWT](https://jwt.io/) - JSON Web Tokens for secure user authentication and authorization.
- [Chart.js](https://www.chartjs.org/) - A JavaScript library for data visualization.
- [React Bootstrap](https://react-bootstrap.github.io/) - Frontend framework for responsive, mobile-first projects.
- [React Router](https://reactrouter.com/) - Declarative routing for React applications.
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icons library for React projects.


### By
- Raushan kumar 
