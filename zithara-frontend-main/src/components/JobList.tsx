import useJobStore from '../store/useJobStore'
import JobCard from './JobCard'
import { useEffect } from 'react'

const JobList = () => {
  const { jobs, fetchJobs } = useJobStore()

  useEffect(() => {
    fetchJobs()
  }, [])

  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}

export default JobList
