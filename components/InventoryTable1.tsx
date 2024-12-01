import { showDateInvoice } from "@/constants";

const InventoryTable1: React.FC<{
  rows: any[];
  total?: { total?: number };
  isSecondPage?: boolean;
}> = ({ rows, total, isSecondPage }) => {
  return (
    <table
      style={{
        width: "25%",
        borderCollapse: "collapse",
        marginTop: "1mm",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <style>
        {`  
            h4 {
                margin: 0;
                }
                `}
      </style>
      <thead>
        <tr style={{ width: "100%", background: "#0053a6" }}>
          <th
            colSpan={3}
            style={{
              border: "0.3mm solid black",
              height: "8.5mm",
            }}
          ></th>
        </tr>
        <tr style={{ backgroundColor: "#d4d4a4" }}>
          <th
            style={{
              border: "0.3mm solid black",
              padding: "0 1mm 2mm 1mm",
              fontSize: "3.6mm",
            }}
          >
            NUM
          </th>
          <th
            style={{
              border: "0.3mm solid black",
              padding: "0 1mm 2mm 1mm",
              fontSize: "3.6mm",
              width: "60%",
            }}
          >
            Date
          </th>
          <th
            style={{
              border: "0.3mm solid black",
              padding: "0 1mm 2mm 1mm",
              fontSize: "3.6mm",
            }}
          >
            Vol/m³
          </th>
        </tr>
      </thead>
      <tbody>
        {!isSecondPage && (
          <tr style={{ height: "6mm" }}>
            <td
              style={{
                border: "0.3mm solid black",
                paddingBottom: "2.5mm",
                paddingTop: 0,
              }}
            >
              -
            </td>
            <td
              style={{
                border: "0.3mm solid black",
                fontWeight: 600,
                paddingBottom: "2.5mm",
                paddingTop: 0,
              }}
            >
              STOCK INITIAL
            </td>
            <td
              style={{
                border: "0.3mm solid black",
                paddingBottom: "2.5mm",
                paddingTop: 0,
              }}
            >
              -
            </td>
          </tr>
        )}
        {rows.map((item, index) => {
          return (
            <tr key={index} style={{ height: "5mm" }}>
              <td
                style={{
                  border: "0.3mm solid black",
                  paddingBottom: "2.5mm",
                  paddingTop: 0,
                }}
              >
                {total?.total ? index + 16 : index + 1}
              </td>
              <td
                style={{
                  border: "0.3mm solid black",
                  paddingBottom: "2.5mm",
                  paddingTop: 0,
                }}
              >
                {item.date ? showDateInvoice(item.date) : "-"}
              </td>
              <td
                style={{
                  border: "0.3mm solid black",
                  paddingBottom: "2.5mm",
                  paddingTop: 0,
                }}
              >
                {item.totalConcrete != null ? item.totalConcrete : "-"}
              </td>
            </tr>
          );
        })}
        {total?.total && (
          <>
            <tr style={{ height: "6mm", backgroundColor: "#d4d4a4" }}>
              <td
                style={{
                  border: "0.3mm solid black",
                  paddingBottom: "2.5mm",
                  paddingTop: 0,
                }}
              ></td>
              <td
                style={{
                  border: "0.3mm solid black",
                  paddingBottom: "2.7mm",
                  paddingTop: 0,
                  fontWeight: "600",
                }}
              >
                SUS TOTAL
              </td>
              <td
                style={{
                  border: "0.3mm solid black",
                  paddingBottom: "2.7mm",
                  paddingTop: 0,
                  fontWeight: "600",
                }}
              >
                {total?.total}
              </td>
            </tr>
            <tr>
              <td
                colSpan={3}
                style={{
                  border: "0.3mm solid black",
                  height: "9mm",
                  backgroundColor: "#0053a6",
                }}
              ></td>
            </tr>
          </>
        )}
      </tbody>
    </table>
  );
};

export default InventoryTable1;
