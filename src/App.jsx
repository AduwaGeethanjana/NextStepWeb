import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register'; // Import Register page
import Login from './Pages/Login'; // Import Login page
import ResetPassword from './Pages/ResetPassword';
import QuizPage from './Pages/QuizPage';
import SoftwareEngineering from './Pages/Careers/SoftwareEngineering';
import CyberSecurity from './Pages/Careers/CyberSecurity';
import DevOpsEngineer from './Pages/Careers/Devops';
import MachineLearningEngineer from './Pages/Careers/MachineLearning';
import ProjectManager from './Pages/Careers/ProjectManager';
import KnowledgeNetwork from './Pages/Careers/KnowledgeNetwork';
import SEProjectsPage from './Pages/Projects/SoftwareEngineeringProjects';
import MachineLearningProjects from './Pages/Projects/MachineLearningProjects';
import CyberSecurityQuiz from './Pages/SkillTests/CyberSecurityQuiz';
import ProjectManagementProjects from './Pages/Projects/ProjectManagerProjects';
import DevOpsProjects from './Pages/Projects/DevOpsProjects';
import DefaultPage from './Pages/Default';
import Profile from './Pages/Profile';
import SoftwareEngineeringQuiz from './Pages/SkillTests/SoftwareEngineeringQuiz';
import MachineLearningQuiz from './Pages/SkillTests/MachineLearningQuiz';
import CybersecurityProjects from './Pages/Projects/CyberSecurityProjects';
import ProjectManagementQuiz from './Pages/SkillTests/ProjectManagerQuiz';
import DevOpsQuiz from './Pages/SkillTests/DevOpsQuiz';
import JobsPage from './Pages/JobPage';
import SEJobs from './Pages/Jobs/SoftwareEngineeringJobs';
import MLJobs from './Pages/Jobs/MachineLearingJobs';
import CybersecurityJobs from './Pages/Jobs/CyberSecurityJobs';
import PMJobs from './Pages/Jobs/ProjectManagementJobs';
import DevOpsJobs from './Pages/Jobs/DevopsEngineeringJobs';
import SECourses from './Pages/Courses/SoftwareEngineeringCourses';
import MachineLearningCourses from './Pages/Courses/MLCourses';
import DevOpsCourses from './Pages/Courses/DevOpsCourses';
import CyberSecurityCourses from './Pages/Courses/CyberSecurityCourses';
import ProjectManagementCourses from './Pages/Courses/PMCourses';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword/>} />
        <Route path="/quiz" element={<QuizPage/>}/>
        <Route path="/softwareengineering" element={<SoftwareEngineering />} />
        <Route path="/cybersecurity" element={<CyberSecurity/>}/>
        <Route path="/devops" element={<DevOpsEngineer/>}/>
        <Route path="/machinelearning" element={<MachineLearningEngineer/>}/>
        <Route path="/projectmanagement" element={<ProjectManager/>}/>
        <Route path="/knowledgenetwork" element={<KnowledgeNetwork />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/default" element={<DefaultPage/>}/>
        <Route path="/seprojects" element={<SEProjectsPage/>} />
        <Route path="/sequiz" element={<SoftwareEngineeringQuiz/>} />
        <Route path="/mlquiz" element={<MachineLearningQuiz/>} />
        <Route path="/mlprojects" element={<MachineLearningProjects/>} />
        <Route path="/csquiz" element={<CyberSecurityQuiz/>}/>
        <Route path="/csprojects" element={<CybersecurityProjects/>} />
        <Route path="/pmquiz" element={<ProjectManagementQuiz/>} />
        <Route path="/pmprojects" element={<ProjectManagementProjects/>} />
        <Route path="/doquiz" element={<DevOpsQuiz/>} />
        <Route path="/doprojects" element={<DevOpsProjects/>} />
        <Route path="/jobs" element ={<JobsPage/>} />
        <Route path="/sejobs" element ={<SEJobs/>} />
        <Route path="/mljobs" element ={<MLJobs/>} />
        <Route path="/pmjobs" element ={<PMJobs/>} />
        <Route path="/csjobs" element ={<CybersecurityJobs/>} />
        <Route path="/dojobs" element ={<DevOpsJobs/>} />
        <Route path="/secourses" element ={<SECourses/>}/>
        <Route path="/mlcourses" element ={<MachineLearningCourses/>}/>
        <Route path="/pmcourses" element ={<ProjectManagementCourses/>}/>
        <Route path="/cscourses" element ={<CyberSecurityCourses/>}/>
        <Route path="/docourses" element ={<DevOpsCourses/>}/>
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
