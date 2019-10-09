function sampleTest(name) {
  return name;
}

test("Sample test", () => {
  expect(sampleTest("Rick")).toEqual("Rick");
});
