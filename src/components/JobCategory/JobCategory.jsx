import { useLoaderData } from "react-router-dom";
import Category from "./Category";

function JobCategory() {
  const categories = useLoaderData();
  return (
    <div className="my-6 md:my-8 lg:my-12 mx-3">
      <div className="text-center text-black">
        <h2 className="text-[#1A1919] text-3xl md:text-5xl font-extrabold">
          Job Category List
        </h2>
        <p className="text-[#757575] font-medium mt-4 mb-5 px-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex justify-between gap-4 flex-col md:flex-row max-w-5xl mx-auto">
        {categories.map((category, index) => <Category key={index} category={category}></Category>)}
      </div>
    </div>
  );
}

export default JobCategory;
