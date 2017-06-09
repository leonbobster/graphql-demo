import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt    
} from 'graphql/type';

let count = 0;
let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            count: {
                type: GraphQLInt,
                resolve: () => {
                    return count;
                }
            }    
        }    
    }),
    mutation: new GraphQLObjectType({
        name: 'RootMutationType',
        fields: {
            updateCount: {
                type: GraphQLInt,
                description: 'Updates the count',
                resolve: () => {
                    count += 1;
                    return count;    
                }    
            }    
        }    
    })    
});

export default schema;
