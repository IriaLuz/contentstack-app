import { GraphQLClient } from 'graphql-request';

const API_KEY = 'blte07e4904b09bbf13';
const DELIVERY_TOKEN = 'csb182df8039ca028d4bfd5d70';
const ENVIRONMENT = 'development';
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
