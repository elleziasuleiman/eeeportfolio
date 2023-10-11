import { ReactComponent as WorkIcon } from '../assets/work.svg';
import { ReactComponent as EduIcon } from '../assets/graduate.svg';
import fypImage from '../assets/fyp.png';
import idecsImage from '../assets/idecs.png';

const experiences = [
    {// {0}
      id: 1,
      date: 'September 2019 - July 2023',
      title: 'Bachelor of Computer Science (Software Engineering) with Honours',
      company: 'UNIMAS',
      description: `Final CGPA: 3.76, First Class Honours. 
      Final year project title: Sentiment Analysis of Sexual Harassment in Malaysia using Machine Learning Algorithms. Developed a dashboard of the analytics and performance of machine learning algorithms.`,
      icon: "EduIcon",
      image: fypImage,
    },
    {//{1}
      id: 2,
      date: 'September 2022- March 2023',
      title: 'Part-Time: Database Lab Demonstrator',
      company: 'UNIMAS',
      description: `Assist 2nd year Information Systems students on MySQL implementation using XAMPP and phpMyAdmin.
      Prepared relevant tutorials and exercises to deliver according to UNIMAS syllabus.`,
      icon: "WorkIcon",
    },
    {//{2}
      id: 3,
      date: 'February 2022- August 2022',
      title: 'Software Engineer Intern',
      company: 'Sarawak Digital Economy Sarawak',
      description: `
      o Enhancing the new front-end of the procurement system, in UI/UX using Figma as well as development using HTML, CSS, and Javascript. 
      o Debugging the vendor managementsystem according to JIRA lists.
      o Participate in User Acceptance Testing with vendor
      o Event Management; IDECS 2022, National E-Commerce Roadmap Show
      o Documentation of Software Requirement Specification`,
      icon: "WorkIcon",
      image: idecsImage
    },
    {//{3}
      id:4,
      date: 'June 2018 - May 2019',
      title: 'Foundation in Physical Science',
      company: 'Pusat Pengajian Pra-Universiti UNIMAS',
      description: `Physical Science's Stream; Physics, Mathematics, Chemistry
      Final CGPA: 3.78`,
      icon: "EduIcon",
    }
  ];
export default experiences;