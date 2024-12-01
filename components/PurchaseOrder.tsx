import { showDateInvoice } from "@/constants";

interface PurchaseOrderData {
  city: string;
  country: string;
  createdAt: string;
  customerId: string;
  deliveryDate: string;
  dosage: string;
  email: string;
  firstName: string;
  lastName: string;
  municipality: string;
  notificationToken: string[];
  orderId: string;
  orderNumber: string;
  perCubicMeterConcretePrice: number;
  phoneNumber: string;
  phone2?: string;
  reference: string;
  role: string;
  status: string;
  streetAddress: string;
  streetNumber: string;
  subOrderNumber: string;
  timeOfDelivery: string;
  updatedAt: string;
  volumeOfConcrete: number;
  description?: string;
  deliveryAddress?: string;
  _id: string;
}

interface InvoiceProps {
  data: PurchaseOrderData;
}

const PurchaseOrder = ({ data }: InvoiceProps) => {
  return (
    <div
      id="purchaseOrder"
      style={{
        width: "210mm",
        minHeight: "297mm",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          width: "189mm",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ width: "63mm" }}>
          {/* <img src="/logo.jpeg" alt="" style={{ width: '100%', height: '100%' }} /> */}
        </div>
        <div style={{ marginTop: "18mm", paddingRight: "10mm" }}>
          <h4>
            Sub Order No. : {String(data.subOrderNumber).padStart(4, "0")}
          </h4>
          <h4>
            Kinhasa, le{" "}
            <span
              style={{
                borderBottom: "1px dotted black",
                padding: "1mm 0 1mm 0",
              }}
            >
              {showDateInvoice(data.createdAt)}
            </span>
          </h4>
        </div>
      </section>
      <section
        style={{
          width: "189mm",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2>
          <span
            style={{
              borderBottom: "0.5mm solid black",
              padding: "1.25mm 0 1.25mm 0",
            }}
          >
            Purchase Order{" "}
          </span>
          N∘ {data.orderNumber}
        </h2>
      </section>
      <table
        style={{
          width: "150mm",
          borderCollapse: "collapse",
          marginTop: "5mm",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#c6daff" }}>
            <th
              style={{
                width: "84mm",
                borderLeft: "0.25mm solid black",
                borderTop: "0.25mm solid black",
                padding: "1.75mm 1.25mm 1.75mm 1.25mm",
                textAlign: "center",
              }}
            >
              Customer
            </th>
            <th
              style={{
                width: "63mm",
                borderLeft: "0.25mm solid black",
                borderTop: "0.25mm solid black",
                padding: "1.75mm 1.25mm 1.75mm 1.25mm",
                textAlign: "center",
              }}
            >
              DESCRIPTION
            </th>
            <th
              style={{
                width: "31.5mm",
                borderLeft: "0.25mm solid black",
                borderTop: "0.25mm solid black",
                padding: "1.75mm 1.25mm 1.75mm 1.25mm",
                textAlign: "center",
              }}
            >
              DOSAGE
            </th>
            <th
              style={{
                width: "31.5mm",
                border: "0.25mm solid black",
                padding: "1.75mm 1.25mm 1.75mm 1.25mm",
                textAlign: "center",
              }}
            >
              VOLUME
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ height: "12.5mm" }}>
            <td
              style={{
                borderLeft: "0.25mm solid black",
                borderTop: "0.25mm solid black",
                fontSize: "4mm",
                padding: "1.75 1mm 1.75mm 1mm",
                textAlign: "center",
              }}
            >
              {data.firstName + " " + data.lastName}
            </td>
            <td
              style={{
                borderLeft: "0.25mm solid black",
                borderTop: "0.25mm solid black",
                padding: "1.75mm 1mm 1.75mm 1mm",
                textAlign: "center",
                fontSize: "4mm",
              }}
            >
              {data.description ? data.description : "-"}
            </td>
            <td
              style={{
                borderLeft: "0.25mm solid black",
                borderTop: "0.25mm solid black",
                padding: "1.75mm 1mm 1.75mm 1mm",
                textAlign: "center",
                fontSize: "4mm",
              }}
            >
              {data.dosage}
            </td>
            <td
              style={{
                border: "0.25mm solid black",
                borderTop: "none",
                padding: "1.75mm 1mm 1.75mm 1mm",
                textAlign: "center",
                fontSize: "4mm",
              }}
            >
              {data.volumeOfConcrete}m³
            </td>
          </tr>
          <tr style={{ height: "12.5mm" }}>
            <td
              style={{
                borderLeft: "0.25mm solid black",
                borderTop: "0.25mm solid black",
                padding: "1mm",
                alignContent: "flex-start",
              }}
            >
              <h4 style={{ margin: 0 }}>Delivery Date</h4>
            </td>
            <td
              style={{
                borderLeft: "0.25mm solid black",
                borderTop: "0.25mm solid black",
                padding: "1.75mm 1mm 1.75mm 1mm",
                textAlign: "center",
                fontSize: "4mm",
              }}
            >
              {showDateInvoice(data.deliveryDate)}
            </td>
            <td
              style={{
                borderLeft: "0.25mm solid black",
                borderTop: "0.25mm solid black",
                padding: "1mm",
                alignContent: "flex-start",
              }}
            >
              <h4 style={{ margin: 0 }}>Hour</h4>
            </td>
            <td
              style={{
                border: "0.25mm solid black",
                borderTop: "none",
                borderBottom: "none",
                padding: "1.75mm 1mm 1.75mm 1mm",
                textAlign: "center",
                fontSize: "4mm",
              }}
            >
              {data.timeOfDelivery === "AFTERNOON" ? "Afternoon" : "Morning"}
            </td>
          </tr>
          <tr style={{ height: "12.5mm" }}>
            <td
              style={{
                border: "0.25mm solid black",
                padding: "1mm",
                alignContent: "flex-start",
              }}
            >
              <h4 style={{ margin: 0 }}>TELEPHONE</h4>
            </td>
            <td
              style={{
                border: "0.25mm solid black",
                borderLeft: "none",
                padding: "1.75mm 1mm 1.75mm 1mm",
                textAlign: "center",
                fontSize: "4mm",
              }}
            >
              {data.phoneNumber ? data.phoneNumber : "-"}
            </td>
            <td
              style={{
                border: "0.25mm solid black",
                borderLeft: "none",
                padding: "1.75mm 1mm 1.75mm 1mm",
                textAlign: "center",
                fontSize: "4mm",
              }}
              colSpan={2}
            >
              {data.phone2 ? data.phone2 : "-"}
            </td>
          </tr>
        </tbody>
      </table>
      <section style={{ display: "flex", width: "150mm", minHeight: "12.5mm" }}>
        <div
          style={{
            width: "33.6mm",
            border: "0.25mm solid black",
            borderTop: "none",
            padding: "1.25mm",
            alignContent: "flex-start",
          }}
        >
          <h4 style={{ margin: 0 }}>ADRESSE</h4>
        </div>
        <div
          style={{
            width: "155.4mm",
            border: "0.25mm solid black",
            borderTop: "none",
            borderLeft: "none",
            padding: "1.75mm 1mm 1.75mm 1mm",
            textAlign: "center",
            fontSize: "4mm",
          }}
        >
          {data.deliveryAddress ? data.deliveryAddress : "-"}
        </div>
      </section>
    </div>
  );
};

export default PurchaseOrder;
