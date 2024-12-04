import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
// import { projectSchema } from '@/types'
// import { z } from 'zod'

// UPDATE
// export async function PUT(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const body = await request.json()
    
//     // Validate the request body
//     const validatedData = projectSchema.parse(body)

//     // Transform the data to match Prisma schema
   

//     const project = await prisma.project.update({
//       where: { id: params.id },
//       data: validatedData
//     })

//     return NextResponse.json(project)
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return NextResponse.json({ error: error.errors }, { status: 400 })
//     }
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
//   }
// }

// // DELETE
// export async function DELETE(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await prisma.project.delete({
//       where: { id: params.id },
//     })

//     return new NextResponse(null, { status: 204 })
//   } catch (error) {
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
//   }
// }

// GET single project
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const project = await prisma.project.findUnique({
      where: { id: params.id },
    })

    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }

    return NextResponse.json(project)
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
} 