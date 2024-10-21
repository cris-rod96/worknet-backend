import { PORT, NODE_ENV } from './src/config/envs.config.js'
import server from './src/server.js'

server.listen(PORT, () => {
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`)
})
