const http =require('http')

const server =http.createServer((req,res)=>
{
    if(req.url==='/')
    {
        res.end('Welcome')
    }else
if(req.url ==='/about')
{
    res.end('Here is short his')
}else
{
res.end(`<h1>Oops!</h1>
<p>Page is not found</p>
<a href="/">back home</a>`)
}
})

server.listen(8000)