import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req
    const { title } = req.body

    if (method == 'POST') {
        try {
            const project = await prisma.project.create({
                data: {
                    title: title,
                },
            })
            res.redirect(308, '/')
        } catch (err) {
            res.status(500).send({ error: 'failed to post data' })
        }
    }
}
