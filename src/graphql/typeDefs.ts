import { gql } from "apollo-server"

export default gql`
  type Query {
    sayHello: String!
  }

  type FileInformation {
    url: String!
  }

  type Mutation {
    uploadFile(file: String!): FileInformation
  }
`
