import { GraphQLClient } from 'graphql-request';

const API_KEY = process.env.REACT_APP_CONTENTSTACK_API_KEY || '';
const DELIVERY_TOKEN = process.env.REACT_APP_CONTENTSTACK_DELIVERY_TOKEN || '';
const ENVIRONMENT = process.env.REACT_APP_CONTENTSTACK_ENVIRONMENT || '';
const REGION = 'eu';

const endpoint =
  REGION === 'eu'
    ? `https://eu-graphql.contentstack.com/stacks/${API_KEY}?environment=${ENVIRONMENT}`
    : `https://graphql.contentstack.com/stacks/${API_KEY}?environment=${ENVIRONMENT}`;


export const client = new GraphQLClient(endpoint, {
  headers: {
    access_token: DELIVERY_TOKEN,
  },
});
