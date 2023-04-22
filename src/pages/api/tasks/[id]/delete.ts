import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req
    const { id } = req.query

    switch (method) {
        case 'POST':
            try {
                const task = await prisma.task.delete({
                    where: {
                        id: Number(id),
                    },
                })
                res.redirect(301, '/')
            } catch (err) {
                res.status(500).send({ error: 'failed to delete data' })
            }
            break
    }
}
