const path = require("path")

const caseTemplate = path.resolve(`./src/templates/case.jsx`)
const practiceTemplate = path.resolve(`./src/templates/practice.jsx`)
const publicationTemplate = path.resolve(`./src/templates/publication.jsx`)

const createCase = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx(filter: {internal: {contentFilePath: {regex: "content/cases/"}}}) {
        nodes {
          frontmatter {
            slug
          }
          id
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  // Create blog post pages.
  const posts = result.data.allMdx.nodes

  // you'll call `createPage` for each result
  posts.forEach(node => {
    createPage({
      path: `/cases/${node.frontmatter.slug}`,
      component: `${caseTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    })
  })
}

const createPractice = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx(filter: {internal: {contentFilePath: {regex: "content/practices/"}}}) {
        nodes {
          frontmatter {
            slug
          }
          id
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  // Create blog post pages.
  const posts = result.data.allMdx.nodes

  // you'll call `createPage` for each result
  posts.forEach(node => {
    createPage({
      path: `/practices/${node.frontmatter.slug}`,
      component: `${practiceTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    })
  })
}

const createPublication = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx(filter: {internal: {contentFilePath: {regex: "content/publications/"}}}) {
        nodes {
          frontmatter {
            slug
          }
          id
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  // Create blog post pages.
  const posts = result.data.allMdx.nodes

  // you'll call `createPage` for each result
  posts.forEach(node => {
    createPage({
      path: `/publications/${node.frontmatter.slug}`,
      component: `${publicationTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    })
  })
}

module.exports = {
  createCase,
  createPractice,
  createPublication
}