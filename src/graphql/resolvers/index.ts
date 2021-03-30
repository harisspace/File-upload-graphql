import fileUploud from "./fileUpload"

export default {
  Query: {
    ...fileUploud.Query,
  },
  Mutation: {
    ...fileUploud.Mutation,
  },
}
