exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/",
    component: require.resolve("./src/templates/list.js"),
    context: {},
    defer: true,
  })
}
