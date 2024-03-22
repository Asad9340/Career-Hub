import { FaLocationDot } from 'react-icons/fa6';
import { AiFillDollarCircle } from 'react-icons/ai';
function Job({ job }) {
  console.log(job);
  const {
    logo,
    job_title,
    company_name,
    job_type,
    remote_or_onsite,
    contact_information,
    salary,
  } = job;
  return (
    <div className="space-y-2 border py-4 px-6 rounded-lg">
      <div>
        <img className="h-12" src={logo} alt="" />
      </div>
      <h3 className="text-2xl font-bold">{job_title}</h3>
      <p className="text-[#757575] text-xl font-medium">{company_name}</p>
      <div className="flex gap-4">
        <button className="px-5 py-2 border border-[#7E90FE] text-[#7E90FE] rounded-md font-medium">
          {remote_or_onsite}
        </button>
        <button className="px-5 py-2 border border-[#7E90FE] text-[#7E90FE] rounded-md font-medium">
          {job_type}
        </button>
      </div>
      <div className="text-[#757575] text-xl font-medium">
        <div className="flex gap-2 items-center ">
          <p>
            <FaLocationDot />
          </p>
          <p>{contact_information.address}</p>
        </div>
        <div className="flex gap-2 items-center">
          <p>
            <AiFillDollarCircle />
          </p>
          <p>{salary}</p>
        </div>
      </div>
      <div>
        <button className="text-white bg-[#7E90FE] hover:bg-[#4c5ed2] active:bg-[#7E90FE] px-5 py-2 rounded-md text-lg font-semibold">
          View Details
        </button>
      </div>
    </div>
  );
}

export default Job;
