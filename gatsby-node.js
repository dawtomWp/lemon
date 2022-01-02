const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/BlogPostTemplate.js")
  const BlogCategoryTemplate = path.resolve(
    "./src/templates/BlogCategoryTemplate.js"
  )
  const SimplePageTemplate = path.resolve(
    "./src/templates/SimplePageTemplate.js"
  )
  const result = await graphql(`
    {
      allWpPost {
        edges {
          next {
            id
            title
            slug
          }
          previous {
            id
            title
            slug
          }
          node {
            slug
            id
            databaseId
          }
        }
      }
      allWpCategory {
        edges {
          node {
            id
            slug
            databaseId
          }
        }
      }
    }
  `)

  const essa = await graphql(`
    {
      allWpPage {
        edges {
          node {
            id
            slug
            databaseId
            wpParent {
              node {
                slug
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  console.log(result)
  const BlogPosts = result.data.allWpPost.edges

  BlogPosts.forEach(post => {
    createPage({
      path: `/blog/${post.node.slug}`,
      component: BlogPostTemplate,
      context: {
        id: post.node.databaseId,
      },
    })

    const Categories = result.data.allWpCategory.edges

    Categories.forEach(page => {
      createPage({
        path: `/blog/category/${page.node.slug}`,
        component: BlogCategoryTemplate,
        context: {
          id: page.node.databaseId,
          cat: page.node.slug,
        },
      })
      createPage({
        path: `/blog`,
        component: BlogCategoryTemplate,
        context: {
          id: page.node.databaseId,
          cat: page.node.slug,
        },
      })
    })
  })

  const SimplePage = essa.data.allWpPage.edges
  console.log(SimplePage)

  SimplePage.forEach(page => {
    if (page.node.wpParent && page.node.wpParent.node.slug === "cases") {
      createPage({
        path: `/cases/${page.node.slug}`,
        component: SimplePageTemplate,
        context: {
          id: page.node.databaseId,
        },
      })
    }
  })
}
