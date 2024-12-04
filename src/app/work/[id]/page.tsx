'use client'

import { useProject } from "@/hooks/hooks"
import { 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter,
  Image,

  Divider,
  Chip,
  Button
} from "@nextui-org/react"


// Mock function to fetch project data


export default function ProjectPage({ params }: { params: { id: string } }) {
const {data,isLoading} = useProject(params.id)

if(!data){
  <div className="text-primary">Data not found</div>
}
if(!isLoading){
  <div className="text-primary">loading</div>
}

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-foreground">
        <CardHeader className="flex flex-col items-start space-y-2">
          <div className="flex justify-between items-start w-full ">
            <div className="pt-10">
              <h1 className="text-3xl font-bold text-primary">{data?.title}</h1>
             
            </div>
            <Chip color='primary' className='p-2  text-lg'>
              {data?.type} 
            </Chip>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="space-y-6">
          <div className="relative w-full h-64 overflow-hidden rounded-lg">
            <Image
              src={data?.image}
              alt={data?.title}
              width="100%"
              height="100%"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary">Description</h2>
            <p className="text-white">{data?.description}</p>
          </div>
          {data?.case_study_included &&data?.case_study!=null && (
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-primary">Case Study</h2>
              <div 
                dangerouslySetInnerHTML={{ __html: data?.case_study }} 
                className="prose prose-invert max-w-none text-primary"
              />
            </div>
          )}
        </CardBody>
        <Divider />
        <CardFooter>
          <a
            
            href={data?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
            
          >
            <Button color="primary" className="w-full"> Visit Project</Button>
           
          </a>
        </CardFooter>
      </Card>
    </div>
  )
}

