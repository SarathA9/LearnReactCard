import React from 'react';
import './name.css';
import img5 from '../image/1678076712285-01.jpeg';
import Header from './header';



export default function StudentCard() {
     const employees = [
        {
          image: 'https://tse3.mm.bing.net/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA&pid=Api&P=0&h=180',
          name: 'Karthik Udupa',
          designation: 'Software Engineer',
          department: 'Development',
          skills: ['HTML', 
                   'CSS', 
                   'JavaScript'
                  ],
          contact: 'karthik@gmail.com',
          address: '134 Karnataka India'
        },
        {
          image: img5,
          name: 'Aliya Bhat',
          designation: 'UI/UX Designer',
          department: 'Design',
          skills: ['Sketch', 
                   'Figma', 
                   'Photoshop'
                  ],
          contact: 'aliya@gmail.com',
          address: '1454 Kerala India'
        },
        {
          image: "https://th.bing.com/th/id/OIP.w4xdC_D4ZatjQpDeBBbaFQAAAA?rs=1&pid=ImgDetMain",
          name: 'Dhanush Patel',
          designation: 'Project Manager',
          department: 'Management',
          skills: ['Agile', 
                   'Scrum', 
                   'Communication'
                  ],
          contact: 'bob.johnson@gmail.com',
          address: '13454 Karnataka India'
        },
        {
          image:"https://th.bing.com/th/id/OIP.qxGZ7kOr3ROxQ_B1QpVVagAAAA?w=400&h=600&rs=1&pid=ImgDetMain",
          name: 'Sharan Hegede',
          designation: 'QA Engineer',
          department: 'Quality Assurance',
          skills: ['Testing', 
                   'Automation', 
                   'JIRA'
                  ],
          contact: 'sharan@gmail.com',
          address: '3434 Karnataka India'
        },
        {
          image: "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg",
          name: 'Raksha',
          designation: 'DevOps Engineer',
          department: 'Operations',
          skills: ['AWS', 
                   'Docker', 
                   'Kubernetes'
                   ],
          contact: 'green@gmail.com',
          address: '134 Karnataka India'
        }
      ];

      
  return (
    <div>
        <Header />

          <div className='StudentTable'>
      {/* <h2>{image}</h2> */}
      <table className='STable'>
        <thead>
          <tr>
            <th>SI.No</th>
            <th colSpan={2}>Profile</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Skills</th>
            <th>Contact</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{++index}</td>
              <td><img src={employee.image} alt={employee.name} width="100" /></td>
              <td>{employee.name}</td>
              <td>{employee.designation}</td>
              <td>{employee.department}</td>
              <td>
                <ul>
                  {employee.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </td>
              <td>{employee.contact}</td>
              <td>{employee.address}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
    </div>

  )
}
