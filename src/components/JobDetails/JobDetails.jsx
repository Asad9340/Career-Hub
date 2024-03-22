import { useLoaderData, useParams } from 'react-router-dom';

function JobDetails() {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find(job => job.id === Number(id));
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
  } = job;
  console.log(job);
  return (
    <div className="max-w-5xl mx-auto my-6 md:my-10 lg:my-12">
      <h2 className="text-3xl md:text-5xl font-semibold md:font-bold mb-10 text-center">
        Job Details
      </h2>
      <div className="flex flex-col md:grid gap-4 grid-cols-12">
        <div className="col-span-8 space-y-3 md:space-y-4">
          <p className="text-base md:text-xl font-semibold text-[#1A1919]">
            Job Description:{' '}
            <span className="text-[#757575] font-medium text-sm md:text-base">
              {job_description}
            </span>
          </p>
          <p className="text-base  md:text-xl font-semibold text-[#1A1919]">
            Job Responsibility:{'  '}
            <span className="text-[#757575] font-medium  text-sm md:text-base">
              {job_responsibility}
            </span>
          </p>
          <p className="text-base md:text-xl font-semibold text-[#1A1919]">
            Educational Requirements: <br />
            <span className="text-[#757575] font-medium  text-sm md:text-base">
              {educational_requirements}
            </span>
          </p>
          <p className="text-base md:text-xl font-semibold text-[#1A1919]">
            Experiences: <br />
            <span className="text-[#757575] font-medium  text-sm md:text-base">
              {experiences}
            </span>
          </p>
        </div>
        <div className="col-span4"></div>
      </div>
    </div>
  );
}

export default JobDetails;
