"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Save } from 'lucide-react'
import { Input, Textarea, Button, Checkbox, Radio,Card,CardBody,CardHeader,CardFooter, RadioGroup } from "@nextui-org/react"
import { Types } from "@prisma/client"
import { projectSchema,ProjectFormValues } from '@/types'
import toast from 'react-hot-toast'
import { useCreateProject } from '@/hooks/hooks'


import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'

const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, false] }],
    ['bold', 'italic', 'underline'],
    [{ 'color': [] }],
    ['clean']
  ]
}

export default function ProjectForm() {
  const {mutate,isPending} = useCreateProject()
  const [showCaseStudy, setShowCaseStudy] = useState(false)

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
      link: "",
      image: "",
      type: Types.PERSONAL,
      case_study_included: false,
      case_study: "",
    },
  })

  const onSubmit = async (data: ProjectFormValues) => {
   mutate(data,{
    onSuccess:()=>{
      toast.success("Project submitted successfully!")
    },
    onError:(error)=>{
      toast.error(error.message)
    }
   })
    // Here you would typically send the data to your API

  }

  return (
    <Card className="max-w-3xl mx-auto bg-foreground">
      <CardHeader>
        <CardHeader>Create New Project</CardHeader>
  
      </CardHeader>
      <CardBody>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-primary">
            <FormField
              control={form.control}
              name="title"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      variant="bordered" 

                      {...field} 
                      placeholder="Enter your project title"
                      isInvalid={!!fieldState.error}
                      errorMessage={fieldState.error?.message}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                    variant='bordered'
                      {...field} 
                      placeholder="Tell us about your project"
                      isInvalid={!!fieldState.error}
                      errorMessage={fieldState.error?.message}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="link"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Project Link</FormLabel>
                  <FormControl>
                    <Input
                      variant="bordered" 
                      {...field} 
                      placeholder="enter project link"
                      isInvalid={!!fieldState.error}
                      errorMessage={fieldState.error?.message}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input
variant="bordered" 
                      {...field} 
                      placeholder="Enter your image url"
                      isInvalid={!!fieldState.error}
                      errorMessage={fieldState.error?.message}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Type</FormLabel>
                  <RadioGroup orientation='horizontal' {...field} defaultValue={Types.PERSONAL} className='text-primary'>
                    <Radio value={Types.PERSONAL} classNames={{ label: "text-primary" }}>Personal</Radio>
                    <Radio value={Types.PARTNERED} classNames={{ label: "text-primary" }}>Partnered</Radio>
                  </RadioGroup>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="case_study_included"
              render={({ field }) => (
                <FormItem>
                  <FormControl >
                    <Checkbox
                      isSelected={field.value}
                      onValueChange={(isSelected) => {
                        field.onChange(isSelected)
                        setShowCaseStudy(isSelected)
                        
                        
                      }}
                    >
                      <div className='text-primary'>Include Case Study</div>
                      
                    </Checkbox>
                  </FormControl>
                  <FormDescription>
                    Do you want to include a case study for this project?
                  </FormDescription>
                </FormItem>
              )}
            />

            {showCaseStudy && (
              <FormField
                control={form.control}
                name="case_study"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Case Study</FormLabel>
                    <FormControl>
              
         
                <ReactQuill 
              
                  theme="snow"
                  value={field.value} 
                  onChange={field.onChange}
                  modules={modules}
                  className="bg-foreground [&_.ql-editor]:min-h-[200px] [&_.ql-editor_h1]:text-primary [&_.ql-editor_h2]:text-primary [&_.ql-editor_h3]:text-primary [&_.ql-editor_p]:text-white"
                  formats={['header', 'bold', 'italic', 'underline', 'color']}
                />
            
               
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />
            )}

            <Button color="primary" type="submit" disabled={isPending} className="w-full">
              <Save className="mr-2 h-4 w-4" /> Save Project
            </Button>
          </form>
        </Form>
      </CardBody>
      <CardFooter>
        <p className="text-sm text-muted-foreground text-center w-full">
          Make sure all information is accurate before submitting.
        </p>
      </CardFooter>
    </Card>
  )
}

