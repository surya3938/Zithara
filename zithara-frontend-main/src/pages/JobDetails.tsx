import { useParams } from 'react-router-dom'
import useJobStore from '../store/useJobStore'

const JobDetails = () => {
  const { id } = useParams()
  const job = useJobStore((state) => state.jobs.find((j) => j.id === id))

  if (!job) return <p>Job not found</p>

  return (
    <div className="container">
      <h1>{job.title}</h1>
      <p><strong>{job.company}</strong> — {job.location}</p>
      <p>{job.description}</p>
    </div>
  )
}

export default JobDetails
