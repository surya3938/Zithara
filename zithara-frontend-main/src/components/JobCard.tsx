import { Link } from 'react-router-dom'
import { Job } from '../types/job'
import styles from '../styles/JobCard.module.css'

const JobCard = ({ job }: { job: Job }) => (
  <div className={styles.card}>
    <h3>{job.title}</h3>
    <p>{job.company} — {job.location}</p>
    <Link to={`/job/${job.id}`}>
      <button className={styles.button}>View</button>
    </Link>
  </div>
)

export default JobCard
