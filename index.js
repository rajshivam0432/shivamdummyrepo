require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login',(req,res)=>{
    res.send("this is login page")
})
app.get('/app',(req,res)=>{
    res.send("this is app page")
})
app.get('/app/vishal',(req,res)=>{
    res.send("this is vishal page!!!!!!!!!!")
})
app.get('/vishal',(req,res)=>{
 res.send('<h1>hii welcome to vishal page !!!</h1>')
})
const githubdata={
    "login": "vishalverma",
    "id": 400215,
    "node_id": "MDQ6VXNlcjQwMDIxNQ==",
    "avatar_url": "https://avatars.githubusercontent.com/u/400215?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/vishalverma",
    "html_url": "https://github.com/vishalverma",
    "followers_url": "https://api.github.com/users/vishalverma/followers",
    "following_url": "https://api.github.com/users/vishalverma/following{/other_user}",
    "gists_url": "https://api.github.com/users/vishalverma/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/vishalverma/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/vishalverma/subscriptions",
    "organizations_url": "https://api.github.com/users/vishalverma/orgs",
    "repos_url": "https://api.github.com/users/vishalverma/repos",
    "events_url": "https://api.github.com/users/vishalverma/events{/privacy}",
    "received_events_url": "https://api.github.com/users/vishalverma/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 0,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2010-09-15T12:37:34Z",
    "updated_at": "2015-04-09T20:05:33Z"
  }

  app.get('/github',(req,res)=>{
    res.json(githubdata)
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})