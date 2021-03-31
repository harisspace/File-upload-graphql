import { GraphqlUpload } from "graphql-upload";
import { GraphQLSchema, GraphQLObjectType, GraphQLBoolean } from "graphql";

const schema = new GraphQLSchema({
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: {
      uploadImage: {
        description: "Upload an image.",
        type: GraphQLBoolean,
        args: {
          image: {
            description: "Image file.",
            type: GraphqlUpload,
          },
        },
        async resolve(parent, { image }) {
          const { filename, mimetype, createReadStream } = await image;
          const stream = createReadStream();
          // Promisify the stream and store the file, then…
          return true;
        },
      },
    },
  }),
});
