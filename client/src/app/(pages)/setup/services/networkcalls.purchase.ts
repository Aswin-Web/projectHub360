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
