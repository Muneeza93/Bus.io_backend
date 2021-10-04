// import sinon, { fake } from "sinon";
// import request from "supertest";
// import { expect } from "chai";
// import db from "./db";
// const User = require("./controllers/user");

// describe("GET/users/:id", () => {
//   it("sends the correct response when a user with the id is found", async () => {
//     const fakeData = {
//       id: "123",
//       firstName: "abc",
//       lastName: "xyz",
//       phoneNumber: "0789123456",
//       password: "abc#123",
//       email: "abc@example.com",
//     };

//     // we call the fake version getUserById function
//     const stub = sinon.stub(db, "getUserById").resolves(fakeData);

//     await request(User)
//       .get("/users/:123")
//       .expect(200)
//       .expect("Content-Type", /json/)
//       .expect(fakeData);

//     // we need to check the stub was called and what arguments it was called with
//     expect(stub.getCall(0).args[0]).to.equal("123");
//     // function is restored to normal before any other tests are run
//     stub.restore();
//   });
//   it("sends correct response when there is an error", async () => {
//     const fakeError = { message: "something went wrong" };
//     const stub = sinon.stub(db, "getUserById").throws(fakeError);

//     await request(User)
//       .get("/users/:123")
//       .expect(500)
//       .expect("Content-Type", /json/)
//       .expect(fakeError);

//     stub.restore();
//   });
//   it("returns appropriate response when the user is not found", async () => {
//     const stub = sinon.stub(db, "getUserById").resolves(null);

//     await request(User).get("/users/:123").expect(404);

//     stub.restore();
//   });
// });
