const path = require("path");

const {
  createCase,
  createPractice,
  createPublication
} = require('./gatsby/createPages.js')

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createCase({ graphql, actions, reporter })
  await createPractice({ graphql, actions, reporter })
  await createPublication({ graphql, actions, reporter })
}