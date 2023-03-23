import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
    try {
        const project = await prisma.project.findMany({})
        return NextResponse.json({ project })
    } catch (err) {
        return NextResponse.json({ error: err })
    }
}

export async function POST(request) {
    try {
        const req = await request.json()
        const project = await prisma.project.create({
            data: req,
        })
        return NextResponse.json({ project })
    } catch (err) {
        return NextResponse.json({ error: err })
    }
}
