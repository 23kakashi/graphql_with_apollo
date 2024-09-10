# graphql_with_apollo
graphql_with_apollo
* graphql playground URL `http://localhost:4000/`


## Field-level directives 
These can be added in the schema to include and skip fields on conditions and show that some fields will get deprecated in a future version
1. @include(if: Boolean!) 
2. @skip(if: Boolean!)
3. @deprecated(reason: string)

## To disable graphQL playground on production

1. Add this to package.json
"nodemonConfig": {
  "env": {
      "NODE_ENV": "production"
    }
}

2. OR  new ApolloServer({ introspection: false, playground: false })

## SpeakerAPI folder
This is a pre-build api. To start this `cd SpeakerAPI` and then `npm install` and `npm start`
1. This API (`http://localhost:3000/speakers`) is introduced to learn how Apollo can be used to add a graphQL layer on rest-api

## Note
* The Data folder contains sample data and the datasource makes this data available. These are not required if the database is available
