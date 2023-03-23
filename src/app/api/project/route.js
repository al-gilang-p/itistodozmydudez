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

export async function POST() {
    try {
        const project = await prisma.project.create({
            data: {
                title: 'Grocery List',
            },
        })
        return NextResponse.json({ project })
    } catch (err) {
        return NextResponse.json({ error: err })
    }
}
