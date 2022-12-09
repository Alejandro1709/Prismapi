import { PrismaClient } from '@prisma/client'

class Prisma {
  constructor() {
    this.client = new PrismaClient()
  }

  static getClient() {
    if (!this.client) {
      this.client = new PrismaClient()
    }
    return this.client
  }
}

export default Prisma
