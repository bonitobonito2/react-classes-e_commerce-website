import client from "../";

const fetch = async (schema, variable) => {
  let result = await client.query({
    query: schema,
    variables: variable,
  });
  let data = await result.data;
  return data;
};

export default fetch;
