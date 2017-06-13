/* @flow */

import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const FundType = new GraphQLObjectType({
  name: 'Fund',
  description: 'A fund',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'The unique identifier of the fund'
    },
    name: {
      type: GraphQLString,
      description: 'The name of the fund'
    },
    ticker: {
      type: GraphQLString,
      description: 'The ticker of the fund'
    }
  }),
});

export default FundType;
