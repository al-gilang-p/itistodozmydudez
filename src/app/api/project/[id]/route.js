import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function PUT(request, { params }) {
    try {
        const { id } = params
        const req = await request.json()
        const project = await prisma.project.update({
            where: {
                id: Number(id),
            },
            data: req,
        })
        return NextResponse.json({ project })
    } catch (err) {
        return NextResponse.json({ error: err })
    }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = params
        const project = await prisma.project.delete({
            where: {
                id: Number(id),
            },
        })
        return NextResponse.json({ project })
    } catch (err) {
        return NextResponse.json({ error: err })
    }
}
