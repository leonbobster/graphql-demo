# graphql-demo

```
npm start

curl -XPOST -H "Content-Type: application/graphql" -d 'mutation {updateCount}' http://localhost:3000/graphql
{
  "data": {
    "updateCount": 1
  }
}

curl -XPOST -H "Content-Type: applicatin/graphql" -d '{count}' http://localhost:3000/graphql
{
  "data": {
    "count": 4
  }
}
```



