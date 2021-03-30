export default {
  Query: {
    sayHello: (parent: any, args: any) => {
      console.log(parent)
      console.log(args)
      return "hello"
    },
  },

  Mutation: {
    uploadFile: (parent: any, args: any) => {
      console.log(parent)
      console.log(args)
    },
  },
}
