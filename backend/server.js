import express from 'express'
const app=express()
app.get('/',(req,res)=>{
    res.send("server is ready")
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
  const companys=[
    {
        id:1,
        name:"Amazon",
        salary:4000000
    },
    {
        id:2,
        name:"Google",
        salary:5000000
    },
    {
        id:3,
        name:"microsoft",
        salary:4500000
    },
    {
        id:4,
        name:"meta",
        salary:6000000
    },
]

app.get('/githubData',(req,res)=>{
    res.json(githubdata);
})
app.get('/company',(req,res)=>{
    res.send(companys)
})


let port=3000

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`)
})
