import { client } from "@/config/apollo-client";
import { gql } from "@apollo/client";
import { modifyDate } from "../../../../config/getDate";

export const getPurchasedSeervices = async () => {
  const { data } = await client.query({
    query: gql`
      query Services {
        getAllPurchase {
          created_at
          service {
            service_external_name
            service_internal_name
            service_descp
          }
        }
      }
    `,
  });
  const data_flat = data.getAllPurchase.map((item: any, ind: number) => {
    // console.log("🚀 ~ constdata_flat=data.getAllPurchase.map ~ item:", )
    return {
      sl_No: ind + 1,
      created_at: modifyDate(item.created_at),
      service_name: item.service.service_external_name,
      internal_name:item.service.service_internal_name,
      description:item.service.service_descp
    };
  });
  return data_flat;
};
