import Project from './models/project';
import Time from './models/time';
export const resolvers = {
    Query: {
        async getProject(root, { _id }) {
            return await Project.findById(_id);
        },
        async allProjects() {
            return await Project.find();
        },
        async getTime(root, { _id }) {
            return await Time.findById(_id);
        },
        async allTime() {
            return await Time.find();
        }
    },
    Mutation: {
        async createProject(root, { input }) {
            return await Project.create(input);
        },
        async updateProject(root, { _id, input }) {
            return await Project.findOneAndUpdate({ _id }, input, { new: true })
        },
        async deleteProject(root, { _id }) {
            return await Project.findOneAndRemove({ _id });
        },
        async createTime(root, { input }) {
            return await Time.create(input);
        },
        async deleteTime(root, { _id }) {
            return await Time.findOneAndRemove({ _id });
        }
    }
};