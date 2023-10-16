# graphql_with_apollo
graphql_with_apollo


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