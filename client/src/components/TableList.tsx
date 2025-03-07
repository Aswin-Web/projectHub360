import React from "react";

interface TableListINT {
  columns: string[];
  data: object[];
}

const TableList = ({ columns, data }: TableListINT) => {
  return (
    <div>
      <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
        <table className="w-full text-left table-auto min-w-max text-slate-800">
          <thead>
            <tr className="text-slate-500 border-b border-slate-300 bg-slate-50">
              {columns.map((item, ind) => {
                return (
                  <>
                    <th className="p-4" key={ind}>
                      <p className="text-s  m leading-none font-normal">
                        {item}
                      </p>
                    </th>
                  </>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((item, ind) => {
              return (
                  <tr className="hover:bg-slate-50">
                    {columns.map((columns, ind) => {
                      return (
                        <>
                          <td className="p-4" key={ind}>
                            <p className="text-sm font-bold">
                              {item[String(columns)] || ""}
                            </p>
                          </td>
                        </>
                      );
                    })}
                  </tr>
              );
              // return
            })}
          
          </tbody>
        </table>
      </div>{" "}
    </div>
  );
};

export default TableList;
