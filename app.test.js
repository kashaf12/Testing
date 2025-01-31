const sum = require("./app.js");
test("adds 2 + 3 to equal 5", () => {
  expect(sum(2, 3)).toBe(5);
});
const fetchData = jest.fn().mockResolvedValue({ name: "Alice" });

test("should fetch user", async () => {
  const user = await fetchData();
  expect(user.name).toBe("Alice");
});
