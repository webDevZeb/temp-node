const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to the homepage')
    return
  }
  if (req.url === '/about') {
    res.end('Here is our short about history')
    return
  }
  res.end(`
  <h1> Oops!</h1>
  <p> We can't seem to find the page </p>
  <a href="/"> back home <a/>
  `)

  res.end()
})

server.listen(4000)
