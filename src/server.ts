import {ApolloServer} from "apollo-server-express";
import express from "express";
import Schema from "./schema";

const app = express();

const schema = new Schema();

const apolloServer = new ApolloServer({
    typeDefs: schema.schema,
    resolvers: schema.resolvers,
    formatError: (error: any) => {
        // N.B do not return the pure error obj here as this will expose
        // additional stack trace info and code locations of thrown errs
        error.extensions = undefined;
        return error;
    },
    formatResponse: (response: any) => {
        return response;
    },
});

export default app;
