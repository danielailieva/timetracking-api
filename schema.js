import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
const typeDefs = `
type Project {
  _id: ID!
  title: String!,
  date: Date,
  content: String!
 }
 type Time {
  _id: ID!
  description: String!
 }
scalar Date
type Query {
  getProject(_id: ID!): Project
  allProjects: [Project]
  getTime(_id: ID!): Time
  allTime: [Time]
 }
input ProjectInput {
  title: String!
  content: String!
 }
 input TimeInput {
  description: String!
 }
type Mutation {
  createProject(input: ProjectInput) : Project
  updateProject(_id: ID!, input: ProjectInput): Project
  deleteProject(_id: ID!) : Project
  createTime(input: TimeInput) : Time
  deleteTime(_id: ID!) : Time
 }
`;
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
export default schema;