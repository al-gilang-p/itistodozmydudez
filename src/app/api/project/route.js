import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
    return NextResponse.json({ name: 'John Doe' })
}

export async function POST() {
    async function send() {
        const project = await prisma.project.create({
            data: {
                title: 'Grocery List',
            },
        })
    }
    send()
        .then(async () => {
            await prisma.$disconnect()
        })
        .catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })
}
