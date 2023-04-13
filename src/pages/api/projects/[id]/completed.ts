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
        case 'PUT':
            try {
                const project = await prisma.project.update({
                    where: {
                        id: Number(id),
                    },
                    data: {
                        isCompleted: true,
                    },
                })
                res.redirect(301, '/')
            } catch (err) {
                res.status(500).send({ error: 'failed to update data' })
            }
            break
    }
}
