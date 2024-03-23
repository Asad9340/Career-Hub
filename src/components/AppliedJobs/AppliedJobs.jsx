import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { checkLocalStorage } from '../../utility/localStorage';
import DisplayJobs from './DisplayJobs';

function AppliedJobs() {
  const jobs = useLoaderData();
  const [jobData, setJobData] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const [value,setValue]=useState('');
  const jobFilter = (e) => {
    setValue(e.target.value)
          if (value === 'all') {
            setDisplayJobs(jobData);
          } else if (value === 'remote') {
            const remoteJobs = jobData.filter(
              job => job.remote_or_onsite == 'Remote'
            );
            setDisplayJobs(remoteJobs);
          } else if (value == 'onsite') {
            const onsiteJobs = jobData.filter(
              job => job.remote_or_onsite == 'Onsite'
            );
            setDisplayJobs(onsiteJobs);
          }
  };
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
    setDisplayJobs(result);
  }, [jobs]);
  return (
    <div className="max-w-5xl mx-auto m-4">
      <div>
        <h2 className="text-center text-3xl font-bold my-4 md:my-14">
          Applied Jobs
        </h2>
      </div>
      <div className="flex justify-end my-4">
        <select
          value={value}
          onChange={(e) => jobFilter(e)}
          className="bg-slate-200 block h-8 w-28 rounded-md"
          name="option"
          id=""
        >
          <option value="all">All</option>
          <option value="remote">Remote</option>
          <option value="onsite">OnSite</option>
        </select>
      </div>
      <div>
        {displayJobs.map((job, index) => (
          <DisplayJobs key={index} job={job}></DisplayJobs>
        ))}
      </div>
    </div>
  );
}

export default AppliedJobs;
