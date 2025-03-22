import JobList from '../components/JobList'
import useJobStore from '../store/useJobStore'
import { useEffect } from 'react'

const Home = () => {
  const fetchJobs = useJobStore(state => state.fetchJobs)
  const jobs = useJobStore(state => state.jobs)

  // Only fetch dummy jobs if there are none (initial load)
  useEffect(() => {
    if (jobs.length === 0) {
      fetchJobs()
    }
  }, [])

  return (
    <div className="container">
      <h1>Job Listings</h1>
      <JobList />
    </div>
  )
}

export default Home
