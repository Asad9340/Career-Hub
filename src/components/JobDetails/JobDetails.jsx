import { useLoaderData, useParams } from 'react-router-dom';
import { AiFillDollarCircle } from 'react-icons/ai';
import { saveLocalStorage } from '../../utility/localStorage';

function JobDetails() {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find(job => job.id === Number(id));
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;
  return (
    <div className="max-w-5xl mx-4 md:mx-auto my-6 md:my-10 lg:my-12">
      <h2 className="text-3xl md:text-5xl font-semibold md:font-bold mb-10 text-center">
        Job Details
      </h2>
      <div className="flex flex-col md:grid gap-3 grid-cols-12">
        <div className="col-span-7 space-y-3 md:space-y-4">
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
        <div className="col-span-5">
          <div className="bg-[#7E90FE1A] p-4 rounded-xl">
            <h3 className="text-xl font-semibold text-[#1A1919] mb-4">
              Job Details
            </h3>{' '}
            <hr />
            <p className="flex gap-1 items-center mt-4 text-xl font-normal text-[#757575]">
              <AiFillDollarCircle />
              <span className="font-semibold text-[#474747]">Salary:</span>{' '}
              {salary} (Per Month)
            </p>
            <p className="flex gap-1 items-center mt-4 text-xl font-normal text-[#757575] mb-6">
              <AiFillDollarCircle />
              <span className="font-semibold text-[#474747]">
                Job Title:
              </span>{' '}
              {job_title}
            </p>
            <h3 className="text-xl font-semibold text-[#1A1919] mb-4">
              Contact Information
            </h3>{' '}
            <hr />
            <p className="flex gap-1 items-center mt-4 text-xl font-normal text-[#757575]">
              <AiFillDollarCircle />
              <span className="font-semibold text-[#474747]">Phone:</span>{' '}
              {contact_information.phone}
            </p>
            <p className="flex gap-1 items-center mt-4 text-xl font-normal text-[#757575]">
              <AiFillDollarCircle />
              <span className="font-semibold text-[#474747]">Email:</span>{' '}
              {contact_information.email}
            </p>
            <p className="flex gap-1 justify-center items-start mt-4 text-xl font-normal text-[#757575]">
              <AiFillDollarCircle />
              <span className="font-semibold text-[#474747]">
                Address:
              </span>{' '}
              {contact_information.address}
            </p>
          </div>
          <div className=" text-center mt-4 md:mt-6 mx-3">
            <button
              onClick={() => saveLocalStorage(Number(id))}
              className="text-white bg-[#7E90FE] hover:bg-[#4c5ed2] active:bg-[#7E90FE] px-5 py-2 rounded-md text-lg font-semibold w-full"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
