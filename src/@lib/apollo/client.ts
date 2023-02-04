import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
import { setContext } from '@apollo/client/link/context'
import { createUploadLink } from 'apollo-upload-client'

const baseURI = "http://127.0.0.1:8080"
const gqlURI = baseURI + "/api/gql/query"
const httpLink = createHttpLink({uri: gqlURI})

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token')
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `${token}` : "",
        }
    }
})

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

export const uploadClient = new ApolloClient({
  //@ts-ignore
    link: authLink.concat(createUploadLink({uri: gqlURI})),
    cache: new InMemoryCache(),
})