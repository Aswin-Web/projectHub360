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
          service_type
        }
      }
    `,
  });
  return data.getServices;
};

export const addServiceToOrg = async ({
  service_id,
  service_type,
}: {
  service_id: number;
  service_type: "TABLE" | "TICKETING" | "PRODUCT";
}) => {
  const { data } = await client.mutate({
    mutation: gql`
      mutation Services($input: AddServiceToOrgDTO!) {
        addServiceToOrg(input: $input) {
          service_id
          }
      }
    `,
    variables: {
      input: { service_id, service_type }, // Pass your data as variables
    },
  });
  return data.getServices;
};
