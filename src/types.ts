import { z } from 'zod'
import { Project } from '@prisma/client'

import { Types } from "@prisma/client"

export const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  link: z.string().url("Please enter a valid URL"),
  image: z.string().min(1, "Image URL is required"),
  type: z.enum([Types.PERSONAL, Types.PARTNERED], {
    required_error: "Please select a project type",
  }),
  case_study_included: z.boolean().default(false),
  case_study: z.string().optional(),
})

export type ProjectFormValues = z.infer<typeof projectSchema>

export interface GetProjectsResponse {
  personal_projects: Project[];
  partnered_projects: Project[];
}

