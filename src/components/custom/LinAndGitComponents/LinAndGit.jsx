import React from 'react'
import { NavLink } from 'react-router';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const LinAndGit = () => {


  const githubUsername = import.meta.env.VITE_GITHUB_USER_NAME;
  const linkedinUsername = import.meta.env.VITE_MY_LINKEDIN_USER_NAME;


  return (
    <div className="flex justify-center md:justify-start gap-2 pt-4">
      <span className='p-2 rounded-md hover:bg-accent hover:cursor-pointer'>
        <NavLink to={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <FaGithubSquare className="h-7  w-7 text-muted-foreground hover:text-foreground" />
        </NavLink>
      </span>

      <span className='p-2 rounded-md hover:bg-accent hover:cursor-pointer'>
        <NavLink to={`https://linkedin.com/in/${linkedinUsername}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <FaLinkedin className="h-7 w-7 text-muted-foreground hover:text-foreground" />
        </NavLink>
      </span>

    </div>



  )
}

export default LinAndGit