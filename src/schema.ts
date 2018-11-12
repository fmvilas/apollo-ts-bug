import {gql} from "apollo-server-express";
import * as fs from "fs";

const schemaFile: string = "./schema.graphql";

export default class Schema {
    public schema = gql(fs.readFileSync(schemaFile, "utf8").toString());

    public resolvers = {
        Query: {
        },
    };
}
