import { showDate } from "@/constants";

interface Customer {
  notificationToken: string[];
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: string;
  status: string;
  streetAddress?: string;
  streetNumber?: string;
  reference?: string;
  municipality?: string;
  city?: string;
  country: string;
  createdAt: string;
  updatedAt: string;
  password?: string;
}

interface OrderReport {
  _id: string;
  customerId: Customer;
  createdAt: string;
  orderNumber: string;
  dosage?: number;
  volumeOfConcrete?: number;
  totalAmount?: string;
}

interface InvoiceProps {
  data: OrderReport[];
}

const OrderReport = ({ data }: InvoiceProps) => {
  return (
    <div
      id="page"
      style={{
        width: "210mm",
        height: "297mm",
        // position: "absolute",
        // top: "-9999px",
        // left: "-9999px",
        padding: "4mm",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <section
        style={{
          width: "100%",
          marginBottom: "2mm",
          height: "12mm",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            width: "70%",
            height: "100%",
            border: "0.6mm solid black",
            display: "flex",
            alignItems: "center",
            paddingLeft: "2mm",
            marginBottom: "2mm",
            // paddingBottom: "4mm",
          }}
        >
          <h1 style={{ fontWeight: 500, fontSize: "4mm", margin: 0 }}>
            RAPPORT DE PRODUCTION CENTRALE A BETON MOIS DE JULLIET
          </h1>
        </div>
      </section>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "2mm",
          tableLayout: "fixed",
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#c6c6c6",
              color: "white",
              height: "8mm",
            }}
          >
            {[
              "DATES",
              "NOMS DU CLIENT",
              "DOSAGE",
              "QTES LUMUMBA",
              "QTES MPETI",
              "CLIENTS",
              "MONTANTS/$",
            ].map((header) => (
              <th
                key={header}
                style={{
                  border: "0.5mm solid black",
                  fontSize: "3.5mm",
                  textAlign: "center",
                  padding: "2mm 0 2mm 0",
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* {['DATES', 'LUMUMBA', '250', '60', '38', '64', '$6460'].map((cell, i) => ( */}
          {data.map((row, index) => (
            <tr key={index} style={{ textAlign: "center", height: "6mm" }}>
              <td
                style={{
                  border: "0.5mm solid black",
                  fontSize: "3.5mm",
                  padding: "1mm 0 1mm 0",
                }}
              >
                {/* Date */}
                {showDate(row.createdAt)}
              </td>
              <td
                style={{
                  border: "0.5mm solid black",
                  fontSize: "3.5mm",
                  padding: "1mm 0 1mm 0",
                }}
              >
                {row.customerId.firstName + " " + row.customerId.lastName}
                {/* Name */}
              </td>
              <td
                style={{
                  border: "0.5mm solid black",
                  fontSize: "3.5mm",
                  padding: "1mm 0 1mm 0",
                }}
              >
                {row.dosage ? row.dosage : "-"}
                {/* Dosage */}
              </td>
              <td
                style={{
                  border: "0.5mm solid black",
                  fontSize: "3.5mm",
                  padding: "1mm 0 1mm 0",
                }}
              >
                {row.customerId.email === "ayan@mail.com"
                  ? row.volumeOfConcrete
                  : ""}
                {/* Lumumba */}
              </td>
              <td
                style={{
                  border: "0.5mm solid black",
                  fontSize: "3.5mm",
                  padding: "1mm 0 1mm 0",
                }}
              >
                {row.customerId.email === "asadali54012@gmail.com"
                  ? row.volumeOfConcrete
                  : ""}
                {/* Mpati */}
              </td>
              <td
                style={{
                  border: "0.5mm solid black",
                  fontSize: "3.5mm",
                  padding: "1mm 0 1mm 0",
                }}
              >
                {["asadali54012@gmail.com", "ayan@mail.com"].includes(
                  row.customerId.email
                )
                  ? ""
                  : row.volumeOfConcrete}
                {/* Client */}
              </td>
              <td
                style={{
                  border: "0.5mm solid black",
                  fontSize: "3.5mm",
                  padding: "1mm 0 1mm 0",
                }}
              >
                {row.totalAmount ? row.totalAmount : "-"}
                {/* Moment$ */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderReport;
