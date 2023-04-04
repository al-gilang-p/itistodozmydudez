import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

// const prisma = new PrismaClient()

export async function POST(request: Request) {
    const res = await request.json()
    return NextResponse.json({ request })
    // try {
    // const req = await request.json()
    // const project = await prisma.project.create({
    //     data: req,
    // })
    // return NextResponse.json({ req })
    // return NextResponse.redirect(new URL('/', request.url))
    // } catch (err) {
    //     return NextResponse.json({ error: err })
    // }
}
