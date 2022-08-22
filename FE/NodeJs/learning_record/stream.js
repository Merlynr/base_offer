import Stream from "stream";

const readableStream = new Stream.Readable({
  read() {},
});
const writableStream = new Stream.Writable();

writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString());
  next();
};

readableStream.on("readable", () => {
  console.log(readableStream.read());
});

readableStream.pipe(writableStream);

readableStream.push("hi!");
readableStream.push("ho!");

// writableStream.write("hey!\n");
writableStream.end();
