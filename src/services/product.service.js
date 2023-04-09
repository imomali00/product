import { request, gql } from "graphql-request";

const graphqlApi = process.env.NEXT_API;
export const ProductsService = {
  async getCategories() {
    const query = gql`
      query GetCategories {
        categories {
          title
          slug
          image {
            url
          }
        }
      }
    `;
    const result = await request(graphqlApi, query);
    return result;
  },

  async getProductsCategory(slug) {
    const query = gql`
      query MyQuery($slug: String!) {
        products(where: { category: { Category: { slug: $slug } } }) {
          id
          productName
          excerpt
          price
          productImage {
            url
          }
        }
      }
    `;
    const variables = { slug };
    const result = await request(graphqlApi, query, variables);
    return result;
  },

  async getOneProduct(id) {
    const query = gql`
      query GetProduct($id: ID!) {
        product(where: { id: $id }) {
          productName
          productImage {
            url
          }
          price
          excerpt
          description
        }
      }
    `;
    const variables = { id };
    const result = await request(graphqlApi, query, variables);
    return result;
  },
};
