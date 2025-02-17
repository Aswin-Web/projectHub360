import { client } from "@/config/apollo-client";
import { gql } from "@apollo/client";

export const getSubService = async () => {
  const { data } = await client.query({
    query: gql`
      query SubOrg {
        getAllSubOrg {
          sub_org_id
          sub_external_name
        }
      }
    `,
  });
  console.log("🚀 ~ getSubService ~ data:", data)
  return data.getAllSubOrg;
};
export interface BodyCreateSubOrgINT {
  sub_external_name: string;
}
export const createSubOrgService = async (org_name: string) => {
  const { data } = await client.mutate({
    mutation: gql`
      mutation createSubOrgService($input: CreateSubOrgInput!) {
        createSubOrg(input: $input) {
          sub_external_name
        }
      }
    `,
    variables: {
      input: { sub_external_name: org_name }, // Pass your data as variables
    },
  });

  return data.createService;
};
