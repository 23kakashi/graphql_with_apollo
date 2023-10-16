# graphql_with_apollo
graphql_with_apollo
* graphql playground URL `http://localhost:4000/`


# Field level directives 
These can be added in schema to include and skip field on condition and show that some field will get deprecated in future version
1. @include(if: Boolean!) 
2. @skip(if: Boolean!)
3. @deprecated(reason: string)

# To disable graphql playground on production

1. Add this to package.json
"nodemonConfig": {
  "env": {
      "NODE_ENV": "production"
    }
}

2. OR  new ApolloServer({ introspection: false, playground: false })

# SpeakerAPI folder
This is pre-build api. To start this `cd SpeakerAPI` and then `npm install` and then `npm start`

* This API (`http://localhost:3000/speakers`) in introduced to learn how apollo can be used to add graphql layer on rest-api
