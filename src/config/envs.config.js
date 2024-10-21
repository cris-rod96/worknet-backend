import 'dotenv/config'

const { PORT = 3000, NODE_ENV = 'development' } = process.env

export { PORT, NODE_ENV }
