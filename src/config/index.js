/* eslint-disable no-undef */
import dotenv from 'dotenv'

dotenv.config({ path: '../.env' })

export const port = process.env.PORT || 2023
export const nodeEnv = process.env.NODE_ENV || 'development'
