const TransportBill = () => {
  return (
    <div
      id="bill"
      style={{
        height: "210mm",
        width: "297mm",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        // padding: "4mm",
      }}
    >
      <style>
        {`
              h4 {
                font-size: 3.6mm;
                margin: 0;
              }
            `}
      </style>
      <section
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <h1>Concrete Transport Bill</h1>
      </section>
      <section style={{ width: "282mm" }}>
        <table
          style={{
            borderCollapse: "collapse",
            marginTop: "5mm",
            width: "100%",
          }}
        >
          <tr style={{ height: "6mm", textAlign: "center" }}>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "10%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>No.</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "30%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>362</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "20%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>Task Number</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "40%",
                border: "0.5mm solid black",
                borderBottom: "none",
              }}
            >
              <h4>023</h4>
            </td>
          </tr>
          <tr style={{ height: "6mm", textAlign: "center" }}>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "10%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>Supplier</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "30%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>JMC</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "20%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>Production Date</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "40%",
                border: "0.5mm solid black",
                borderBottom: "none",
              }}
            >
              <h4>2024-07-20</h4>
            </td>
          </tr>
          <tr style={{ height: "6mm", textAlign: "center" }}>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "10%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>Project Name</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "30%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>LIMITE 12th STREET</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "20%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>Position</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "40%",
                border: "0.5mm solid black",
                borderBottom: "none",
              }}
            >
              <h4>-</h4>
            </td>
          </tr>
        </table>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
          }}
        >
          <tr style={{ height: "6mm", textAlign: "center" }}>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "10%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>Customer</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "18%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>JMC</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "12%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>Strength</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "24%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>M20</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "10%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>Impervious</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "26%",
                border: "0.5mm solid black",
                borderBottom: "none",
              }}
            >
              <h4> </h4>
            </td>
          </tr>
          <tr style={{ height: "6mm", textAlign: "center" }}>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "10%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>Pour mode</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "18%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4> </h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "12%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>Require Slump</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "24%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>175 mm</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "10%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>Leave Slump</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "26%",
                border: "0.5mm solid black",
                borderBottom: "none",
              }}
            >
              <h4> </h4>
            </td>
          </tr>
        </table>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
          }}
        >
          <tr style={{ height: "6mm", textAlign: "center" }}>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "9.5%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>Recipie Code</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "16.9%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              M20
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "20%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>Technical Requirements</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "48%",
                border: "0.5mm solid black",
                borderBottom: "none",
              }}
            >
              <h4> </h4>
            </td>
          </tr>
        </table>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
          }}
        >
          <tr style={{ height: "6mm", textAlign: "center" }}>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "10%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>Supply Amount</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "18%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>10 m³</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "12%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>Acc Amount</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "24%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>20 m³</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "10%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>Acc Vehicle</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "26%",
                border: "0.5mm solid black",
                borderBottom: "none",
              }}
            >
              <h4>2</h4>
            </td>
          </tr>
          <tr style={{ height: "6mm", textAlign: "center" }}>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "10%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>Distance</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "18%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>6km</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "12%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>Vehicle No.</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "24%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>1696</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "10%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>Driver</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "26%",
                border: "0.5mm solid black",
                borderBottom: "none",
              }}
            >
              <h4> </h4>
            </td>
          </tr>
          <tr style={{ height: "6mm", textAlign: "center" }}>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "10%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>Leaving Time</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "18%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>24/12/2024</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "12%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>Arrive Time</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "24%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4> </h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "10%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>Temperature</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "26%",
                border: "0.5mm solid black",
                borderBottom: "none",
              }}
            >
              <h4> </h4>
            </td>
          </tr>
          <tr style={{ height: "6mm", textAlign: "center" }}>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "10%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>Unloading Time</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "18%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4> </h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "12%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>Finish Time</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "24%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4> </h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "10%",
                borderLeft: "0.5mm solid black",
                borderTop: "0.5mm solid black",
              }}
            >
              <h4>Inspect Slump</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "26%",
                border: "0.5mm solid black",
                borderBottom: "none",
              }}
            >
              <h4> </h4>
            </td>
          </tr>
        </table>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
          }}
        >
          <tr style={{ height: "6mm", textAlign: "center" }}>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "7%",
                border: "0.5mm solid black",
                borderRight: "none",
              }}
              rowSpan={2}
            >
              <h4>Sign</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "31%",
                border: "0.5mm solid black",
                borderRight: "none",
                borderBottom: "none",
              }}
            >
              <h4>Spot Acceptor</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "31%",
                border: "0.5mm solid black",
                borderRight: "none",
                borderBottom: "none",
              }}
            >
              <h4>Quality inspector of supplier</h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "31%",
                border: "0.5mm solid black",
                borderBottom: "none",
              }}
            >
              <h4>Sign of clerk of supplier</h4>
            </td>
          </tr>
          <tr style={{ height: "6mm", textAlign: "center" }}>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "31%",
                border: "0.5mm solid black",
                borderRight: "none",
              }}
            >
              <h4> </h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "31%",
                border: "0.5mm solid black",
                borderRight: "none",
              }}
            >
              <h4> </h4>
            </td>
            <td
              style={{
                padding: 0,
                // paddingBottom: "2mm",
                width: "31%",
                border: "0.5mm solid black",
              }}
            >
              <h4> </h4>
            </td>
          </tr>
        </table>
      </section>
    </div>
  );
};

export default TransportBill;
