import { PrismaClient } from '@prisma/client'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

// const prisma = new PrismaClient()

export async function POST(request: NextApiRequest) {
    const res = await request.body
    return NextResponse.json({ res })
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
