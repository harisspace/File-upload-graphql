import stream from "stream";
import fs from "fs";
import path from "path";

export default {
  Query: {
    sayHello: (parent: any, args: any) => {
      console.log(parent);
      console.log(args);
      return "hello";
    },
  },

  Mutation: {
    uploadFile: async (parent: any, args: any) => {
      const { filename, mimetype, encoding, createReadStream } = await args
        .file[0];

      const stream = createReadStream();
      const pathname = path.join(__dirname, `public/images/${filename}`);
      try {
        await stream.pipe(fs.createWriteStream(pathname));
      } catch (err) {
        console.log(err);
      }
      return {
        url: `http://localhost:4000/images/${filename}`,
      };
    },
  },
};
