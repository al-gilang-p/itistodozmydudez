import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req
    const { id } = req.query
    const { title } = req.body

    switch (method) {
        case 'POST':
            try {
                const project = await prisma.project.update({
                    where: {
                        id: Number(id),
                    },
                    data: {
                        title: title,
                    },
                })
                res.redirect(301, '/')
            } catch (err) {
                res.status(500).send({ error: 'failed to update data' })
            }
            break

        case 'DELETE':
            try {
                const project = await prisma.project.delete({
                    where: {
                        id: Number(id),
                    },
                })
                res.redirect(308, '/')
            } catch (err) {
                res.status(500).send({ error: 'failed to delete data' })
            }
            break
    }
}
