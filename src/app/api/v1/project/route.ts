import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
// import { projectSchema } from '@/types'
// import { z } from 'zod'

// CREATE
// export async function POST(request: Request) {
//   try {
//     const body = await request.json()

//     // Validate the request body
//     const validatedData = projectSchema.parse(body)

//     // Transform the data to match Prisma schema

//     const project = await prisma.project.create({
//       data: validatedData
//     })

//     return NextResponse.json(project, { status: 201 })
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return NextResponse.json({ error: error.errors }, { status: 400 })
//     }
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
//   }
// }

// READ (Get all projects)
export async function GET() {
  try {
    // Fetch both types of projects in a single query
    const projects = await prisma.project.findMany({});

    // Separate projects by type

    return NextResponse.json({ projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
