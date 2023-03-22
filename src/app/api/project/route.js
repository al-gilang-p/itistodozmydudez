import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
    return NextResponse.json({ name: 'John Doe' })
}

export async function POST() {
    const project = await prisma.project.create({
        data: {
            title: 'Grocery List',
        },
    })
}
