import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { checkLocalStorage } from '../../utility/localStorage';
import DisplayJobs from './DisplayJobs';

function AppliedJobs() {
  const jobs = useLoaderData();
  const [jobData, setJobData] = useState([]);
  useEffect(() => {
    const abcdJobs = checkLocalStorage();
    const result = [];
    for (const id of abcdJobs) {
      const job = jobs.find(job => job.id === id);
      if (job) {
        result.push(job);
      }
    }
    setJobData(result);
  }, [jobs]);
  return (
    <div className='max-w-5xl mx-auto m-4'>
      <div>
        <h2 className='text-center text-3xl font-bold my-4 md:my-14'>Applied Jobs</h2>
      </div>
      <div className='flex justify-end my-4'>
        <select className='bg-slate-200 block h-8 w-28 rounded-md' name="option" id="">
          <option value="All">All</option>
          <option value="remote">Remote</option>
          <option value="onsite">OnSite</option>
        </select>
      </div>
      <div>
        {jobData.map((job, index) => (
          <DisplayJobs key={index} job={job}></DisplayJobs>
        ))}
      </div>
    </div>
  );
}

export default AppliedJobs;
