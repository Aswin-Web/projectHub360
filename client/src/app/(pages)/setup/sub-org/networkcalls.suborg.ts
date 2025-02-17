import { client } from "@/config/apollo-client";
import { gql } from "@apollo/client";

export const getServices = async () => {
  const { data } = await client.query({
    query: gql`
      query Services {
        getServices {
          service_external_name
          service_internal_name
          service_descp
          service_id
        }
      }
    `,
  });
  return data.getServices;
};
export interface BodyCreateSubOrgINT {
  sub_external_name: string;
}
export const createSubOrgService = async (org_name: string) => {
  const { data } = await client.mutate({
    mutation: gql`
      mutation createSubOrgService($input: BodyCreateSubOrgINT!) {
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
