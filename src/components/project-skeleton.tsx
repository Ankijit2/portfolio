
import React from "react"
import { Card, CardBody, CardFooter, Skeleton } from "@nextui-org/react"

export default function LoadingProject() {
  return (
    <Card className="h-full bg-foreground">
      <CardBody className="p-0">
        <Skeleton className="rounded-t-lg">
          <div className="h-48 rounded-t-lg bg-default-300"></div>
        </Skeleton>
        <div className="p-4 space-y-3">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-6 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-4 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-4 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </CardBody>
      <CardFooter className="flex justify-between">
        <Skeleton className="w-full rounded-lg">
          <div className="h-10 w-full rounded-lg bg-default-300"></div>
        </Skeleton>
      </CardFooter>
    </Card>
  )
}
