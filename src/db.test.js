// import { expect } from "chai";
// import { getUserById } from "./db";
// import {
//   getDatabaseData,
//   resetDatabase,
//   setDatabaseData,
// } from "./test-helpers";

// describe("getUserById", () => {
//   //afterEach hook allows us to run some code after every test in a given block
//   afterEach("reset the db", async () => {
//     // after every test call this function
//     await resetDatabase();
//   });

//   it("get the correct user from the database by Id", async () => {
//     const fakeData = [
//       {
//         id: "123",
//         firstName: "abc",
//         lastName: "xyz",
//         phoneNumber: "0789123456",
//         password: "abc#123",
//         email: "abc@example.com",
//       },
//       {
//         id: "124",
//         username: "wrong",
//         email: "wrong@example.com",
//       },
//     ];

//     await setDatabaseData("users", fakeData);

//     const actual = await getUserById("abc");
//     const finalDBState = await getDatabaseData("users");

//     const expected = {
//       id: "123",
//       firstName: "abc",
//       lastName: "xyz",
//       phoneNumber: "0789123456",
//       password: "abc#123",
//       email: "abc@example.com",
//     };
//     expect(actual).excludingEvery("_id").to.deep.equal(expected);
//     expect(finalDBState).excludingEvery("_id").to.deep.equal(fakeData);
//   });

//   it("returns null when the user is not found", async () => {
//     const fakeData = [
//       {
//         id: "124",
//         username: "wrong",
//         email: "wrong@example.com",
//       },
//     ];
//     await setDatabaseData("users", fakeData);

//     const actual = await getUserById("abc");

//     expect(actual).to.be.null;
//   });
// });
