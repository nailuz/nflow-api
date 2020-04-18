import http from 'http'
import app from '../../src/app'

const server = http.createServer(app)
server.listen(process.env.NODE_PORT, process.env.NODE_HOST)
