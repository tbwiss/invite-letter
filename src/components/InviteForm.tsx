import React from "react";
import { GraphQLClient, gql } from "graphql-request";

async function main() {
  const endpoint = process.env.REACT_APP_SUPABASE_URL || "";

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_SUPABASE_API_KEY}`,
      apiKey: `${process.env.REACT_APP_SUPABASE_API_KEY}`,
    },
  });

  const query = gql`
    query {
      name
    }
  `;

  const data = await graphQLClient.request(query);
  console.log(JSON.stringify(data, undefined, 2));
}

export const InviteForm = () => {
  main().catch((error) => console.error(error));

  return (
    <div>
      <h4>Anmeldung</h4>
      {/* 
    name , input field
    radio yes no
    if yes: nbr of adults and kids
    submit 
    */}
    </div>
  );
};
