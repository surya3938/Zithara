import { create } from 'zustand'
import { Job } from '../types/job'

const JOB_STORAGE_KEY = 'job-board-jobs'

interface JobStore {
  jobs: Job[]
  fetchJobs: () => void
  addJob: (job: Job) => void
}

const useJobStore = create<JobStore>((set) => ({
  jobs: JSON.parse(localStorage.getItem(JOB_STORAGE_KEY) || '[]'),

  fetchJobs: () => {
    const stored = localStorage.getItem(JOB_STORAGE_KEY)
    if (stored) {
      set({ jobs: JSON.parse(stored) })
    } else {
      const dummyJobs: Job[] = [
        {
          id: '1',
          title: 'Frontend Developer',
          company: 'OpenAI',
          location: 'Remote',
          description: 'Work on AI tools',
        },
        {
          id: '2',
          title: 'Backend Developer',
          company: 'Google',
          location: 'NYC',
          description: 'Build scalable systems',
        },
      ]
      set({ jobs: dummyJobs })
      localStorage.setItem(JOB_STORAGE_KEY, JSON.stringify(dummyJobs))
    }
  },

  addJob: (job: Job) =>
    set((state) => {
      const newJob = { ...job, id: (state.jobs.length + 1).toString() }
      const updatedJobs = [...state.jobs, newJob]
      localStorage.setItem(JOB_STORAGE_KEY, JSON.stringify(updatedJobs))
      return { jobs: updatedJobs }
    }),
}))

export default useJobStore
