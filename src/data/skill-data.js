import ComputerIcon from '@mui/icons-material/Computer';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import DatasetIcon from '@mui/icons-material/Dataset';
import StorageIcon from '@mui/icons-material/Storage';
const data = {
    skills: [
      {
        title: 'Front-End',
        description: 'Javascript (Vanilla & React), HTML, CSS',
        icon: <ComputerIcon/>
      },
      { 
        title: 'Back-End',
        description: 'C, C++, C#, PHP',
        icon: <DeveloperBoardIcon/>,
       
      },
      {
        title: 'Data Analytics',
        description: 'Python, Power BI',
        icon: <DatasetIcon/>
      },
      {
        title: 'Database',
        description: 'MySQL, SaaS',
        icon: <StorageIcon/>
      }
    ],
  };
  
  export default data;
  