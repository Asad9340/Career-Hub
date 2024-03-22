import Banner from "../Banner/Banner"
import JobCategory from "../JobCategory/JobCategory"
import Jobs from "../Jobs/Jobs"

function Homepage() {
  return (
    <div>
      <Banner />
      <JobCategory />
      <Jobs/>
    </div>
  )
}

export default Homepage