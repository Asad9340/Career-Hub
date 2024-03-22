import { useEffect, useState } from 'react';
import Job from './Job';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [counter, setCounter] = useState(4);
  useEffect(() => {
    (async () => {
      const res = await fetch('../jobs.json');
      const data = await res.json();
      setJobs(data);
    })();
  }, []);
  return (
    <div className="my-6 md:my-8 lg:my-12 mx-3">
      <div className="text-center text-black">
        <h2 className="text-[#1A1919] text-3xl md:text-5xl font-extrabold">
          Featured Jobs
        </h2>
        <p className="text-[#757575] font-medium mt-4 mb-5 px-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {jobs.slice(0, counter).map((job, index) => (
          <Job key={index} job={job}></Job>
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          onClick={() =>
            counter !== jobs.length ? setCounter(jobs.length) : setCounter(4)
          }
          className="text-white bg-[#7E90FE] hover:bg-[#4c5ed2] active:bg-[#7E90FE] px-5 py-2 rounded-md text-lg font-semibold"
        >
          {counter === jobs.length ? 'Hide Jobs' : 'Show All Jobs'}
        </button>
      </div>
    </div>
  );
}

export default Jobs;
