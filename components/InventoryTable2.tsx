const InventoryTable2: React.FC<{
  heading: string;
  rows: any[];
  initialStock?: number;
  total?: { totalAdd?: number; totalSub?: number };
  restStock?: { rest?: number };
}> = ({ heading, rows, initialStock, total, restStock }) => {
  return (
    <table
      style={{
        width: "18%",
        borderCollapse: "collapse",
        marginTop: "1mm",
        textAlign: "center",
      }}
    >
      <thead>
        <tr
          style={{
            backgroundColor: "#0053a6",
            color: "white",
          }}
        >
          <th
            style={{
              border: "0.3mm solid black",
              paddingBottom: "2.5mm",
              paddingTop: 0,
              textAlign: "center",
            }}
            colSpan={3}
          >
            {heading}
          </th>
        </tr>
        <tr style={{ width: "100%", backgroundColor: "#d4d4a4" }}>
          <th
            style={{
              border: "0.3mm solid black",
              padding: "0 1mm 2mm 1mm",
              fontSize: "3.6mm",
            }}
          >
            APPRO
          </th>
          <th
            style={{
              border: "0.3mm solid black",
              padding: "0 1mm 2mm 1mm",
              fontSize: "3.6mm",
            }}
          >
            DSTKG
          </th>
          <th
            style={{
              border: "0.3mm solid black",
              padding: "0 1mm 2mm 1mm",
              fontSize: "3.6mm",
            }}
          >
            EOD
          </th>
        </tr>
      </thead>
      <tbody>
        {initialStock && (
          <tr style={{ height: "7mm" }}>
            <td
              style={{
                border: "0.3mm solid black",
                paddingBottom: "2.5mm",
                paddingTop: 0,
              }}
            >
              {initialStock}
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
            <tr key={index} style={{ height: "7mm" }}>
              <td
                style={{
                  border: "0.3mm solid black",
                  paddingBottom: "2.5mm",
                  paddingTop: 0,
                }}
              >
                {heading === "CIMENT"
                  ? item.totalCementAdd != null
                    ? item.totalCementAdd
                    : "-"
                  : heading === "SABLE"
                  ? item.totalSandAdd != null
                    ? item.totalSandAdd
                    : "-"
                  : heading === "GRAVIER 8/15"
                  ? item.totalGravel815Add != null
                    ? item.totalGravel815Add
                    : "-"
                  : item.totalGrave1525Add != null
                  ? item.totalGrave1525Add
                  : "-"}
              </td>
              <td
                style={{
                  border: "0.3mm solid black",
                  paddingBottom: "2.5mm",
                  paddingTop: 0,
                }}
              >
                {heading === "CIMENT"
                  ? item.totalCementSub != null
                    ? item.totalCementSub
                    : "-"
                  : heading === "SABLE"
                  ? item.totalSandSub != null
                    ? item.totalSandSub
                    : "-"
                  : heading === "GRAVIER 8/15"
                  ? item.totalGravel815Sub != null
                    ? item.totalGravel815Sub
                    : "-"
                  : item.totalGrave1525Sub != null
                  ? item.totalGrave1525Sub
                  : "-"}
              </td>
              <td
                style={{
                  border: "0.3mm solid black",
                  paddingBottom: "2.5mm",
                  paddingTop: 0,
                }}
              >
                {heading === "CIMENT"
                  ? item.cementEod != null
                    ? item.cementEod
                    : "-"
                  : heading === "SABLE"
                  ? item.sandEod != null
                    ? item.sandEod
                    : "-"
                  : heading === "GRAVIER 8/15"
                  ? item.gravel815Eod != null
                    ? item.gravel815Eod
                    : "-"
                  : item.gravel1525Eod != null
                  ? item.gravel1525Eod
                  : "-"}
              </td>
            </tr>
          );
        })}
        {total?.totalAdd && (
          <>
            <tr style={{ height: "7mm", backgroundColor: "#d4d4a4" }}>
              <td
                style={{
                  border: "0.3mm solid black",
                  paddingBottom: "2.7mm",
                  paddingTop: 0,
                  fontWeight: "600",
                }}
              >
                {total?.totalAdd}
              </td>
              <td
                style={{
                  border: "0.3mm solid black",
                  paddingBottom: "2.7mm",
                  paddingTop: 0,
                  fontWeight: "600",
                }}
              >
                {total?.totalSub}
              </td>
              <td
                style={{
                  border: "0.3mm solid black",
                  paddingBottom: "2.7mm",
                  paddingTop: 0,
                  fontWeight: "600",
                }}
              >
                -
              </td>
            </tr>
            <tr
              style={{
                backgroundColor: "#0053a6",
                color: "white",
                height: "8mm",
              }}
            >
              <td
                colSpan={2}
                style={{
                  border: "0.3mm solid black",
                  paddingBottom: "2.7mm",
                  paddingTop: 0,
                  fontSize: "0.8rem",
                }}
              >
                RESTE EN STOCK
              </td>
              <td
                style={{
                  border: "0.3mm solid black",
                  paddingBottom: "2.7mm",
                  paddingTop: 0,
                }}
              >
                {restStock?.rest}
              </td>
            </tr>
          </>
        )}
      </tbody>
    </table>
  );
};

export default InventoryTable2;
