const isProd = "dev";
const HOST = isProd ? '' : 'http://localhost:3000';
const PORT = isProd ? 8081 : 3000

module.exports = {
    HOST,
    PORT,
}
