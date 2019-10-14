const fakeData = [
  {
    title: "rick",
    description: "developer",
    url: "www"
  },
  {
    title: "react",
    description: "web framework",
    url: "www.reactjs..."
  }
];

// function findProject (element){
//   return fakeData.find(arrayElement => arrayElement.title == element)
// }

function findProject(array, item) {
  return array.find(el => el.title === item);
}

test("Test enviroment", () => {
  expect(fakeData).toBe(fakeData);
});

test("Find a project", () => {
  expect(findProject(fakeData, "react")).toEqual(fakeData[1]);
});
