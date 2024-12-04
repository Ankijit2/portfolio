import { apiClient } from '@/lib/api-client'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Project } from '@prisma/client'
import { GetProjectsResponse, ProjectFormValues } from '@/types'
// Project API functions
export const getProjects = async (): Promise<GetProjectsResponse> => {
  const { data } = await apiClient.get('/project')
  return data
}

export const getProjectById = async (id: string): Promise<Project> => {
  const { data } = await apiClient.get(`/project/${id}`)
  return data
}

export const createProject = async (projectData: ProjectFormValues): Promise<Project> => {
  const { data } = await apiClient.post('/project', projectData)
  return data
}

export const updateProject = async ({
  id,
  data,
}: {
  id: string
  data: ProjectFormValues
}): Promise<Project> => {
  const response = await apiClient.put(`/project/${id}`, data)
  return response.data
}

export const deleteProject = async (id: string): Promise<void> => {
  await apiClient.delete(`/project/${id}`)
}

// Deployment API functions
export const projectKeys = {
    all: ['projects'] as const,
    single: (id: string) => [...projectKeys.all, id] as const,
  }
  
  export function useProjects() {
    return useQuery({
      queryKey: projectKeys.all,
      queryFn: getProjects,
    })
  }
  
  export function useProject(id: string) {
    return useQuery({
      queryKey: projectKeys.single(id),
      queryFn: () => getProjectById(id),
      enabled: !!id,
    })
  }
  
  export function useCreateProject() {
    const queryClient = useQueryClient()
    
    return useMutation({
      mutationFn: (data: ProjectFormValues) => createProject(data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: projectKeys.all })
      },
    })
  }
  
  export function useUpdateProject() {
    const queryClient = useQueryClient()
    
    return useMutation({
      mutationFn: ({ id, data }: { id: string; data: ProjectFormValues }) => updateProject({ id, data }),
      onSuccess: (_, variables) => {
        queryClient.invalidateQueries({ queryKey: projectKeys.single(variables.id) })
        queryClient.invalidateQueries({ queryKey: projectKeys.all })
      },
    })
  }
  
  export function useDeleteProject() {
    const queryClient = useQueryClient()
    
    return useMutation({
      mutationFn: deleteProject,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: projectKeys.all })
      },
    })
  }