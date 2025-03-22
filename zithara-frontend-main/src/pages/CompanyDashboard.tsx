import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import useJobStore from '../store/useJobStore'
import { useNavigate } from 'react-router-dom'

const schema = z.object({
  title: z.string().min(2, "Title is too short"),
  company: z.string().min(2, "Company name is too short"),
  location: z.string().min(2, "Location is too short"),
  description: z.string().min(5, "Description is too short"),
})

type JobFormInputs = z.infer<typeof schema>

const CompanyDashboard = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<JobFormInputs>({
    resolver: zodResolver(schema),
  })

  const addJob = useJobStore(state => state.addJob)
  const navigate = useNavigate()

  const onSubmit = (data: JobFormInputs) => {
    addJob({ ...data, id: '' })
    reset()
    navigate('/')
  }

  return (
    <div className="container">
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Job Title
          <input {...register("title")} placeholder="e.g. React Developer" />
          <span>{errors.title?.message}</span>
        </label>

        <label>
          Company
          <input {...register("company")} placeholder="e.g. Google" />
          <span>{errors.company?.message}</span>
        </label>

        <label>
          Location
          <input {...register("location")} placeholder="e.g. Remote / New York" />
          <span>{errors.location?.message}</span>
        </label>

        <label>
          Description
          <textarea {...register("description")} placeholder="Describe the job role..." />
          <span>{errors.description?.message}</span>
        </label>

        <button type="submit">Post Job</button>
      </form>
    </div>
  )
}

export default CompanyDashboard
