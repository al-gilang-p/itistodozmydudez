import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req
    const { title } = req.body

    switch (method) {
        case 'POST':
            try {
                const task = await prisma.task.create({
                    data: {
                        title: title,
                    },
                })
                res.redirect(301, '/')
            } catch (err) {
                res.status(500).send({ error: 'failed to post data' })
            }
            break
    }
}
