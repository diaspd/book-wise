import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient // eslint-disable-line no-var
}

export const prisma = global.prisma || new PrismaClient()
