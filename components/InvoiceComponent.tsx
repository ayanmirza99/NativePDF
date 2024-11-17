import { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import logo from "../assets/logo.jpeg";

interface InvoiceData {
  orderNumber: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  perCubicMeterConcretePrice: number;
  volumeOfConcrete: number;
  designation: string;
}

interface InvoiceProps {
  data: InvoiceData;
}
const Invoice = ({ data }: InvoiceProps) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  useEffect(() => {
    if (data.perCubicMeterConcretePrice) {
      setTotalPrice(data?.perCubicMeterConcretePrice * data?.volumeOfConcrete);
    }
  }, [data.perCubicMeterConcretePrice, data.volumeOfConcrete]);
  const totalRows = 6;
  const rowsToRender = [
    {
      ...data,
      ref: 1,
      designation: data.designation ? data.designation : "-",
      totalPrice: totalPrice,
    },
    ...Array(totalRows - 1).fill({}),
  ];

  return (
    <div
      id="invoice"
      style={{
        width: "210mm",
        height: "297mm",
        display: "flex",
        padding: 0,
        margin: 0,
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <style>
        {`
          h4 {
            margin: 0;
          }
        `}
      </style>
      <section
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "80mm" }}>
          {/* <View style={{ width: "100%", height: "100%" }}>
            <Image source={logo} style={{ width: "100%", height: "100%" }} />
          </View> */}
        </div>
        <div
          style={{
            width: "130mm",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "65mm",
              textAlign: "right",
              color: "#898888",
              fontSize: "3.75mm",
            }}
          >
            <h4 style={{ fontWeight: 600 }}>RCCM: CD/KNM/RCM/19-B-0D291</h4>
            <h4 style={{ fontWeight: 600 }}>Id. Nat: 01-490-N499993T</h4>
            <h4 style={{ fontWeight: 600 }}>N{"'"}IMPOT A1915112Y</h4>
          </div>
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image
                source={require("../assets/logo.jpeg")}
                style={styles.logo}
              />
            </View>
          </View>
        </div>
      </section>
      <section
        style={{ width: "190mm", display: "flex", justifyContent: "center" }}
      >
        <div
          style={{
            border: "0.5mm solid black",
            padding: "0 22mm 4mm 22mm",
            fontWeight: 500,
            fontSize: "5mm",
          }}
        >
          invoice.bill N° {data.orderNumber}
        </div>
      </section>
      <section
        style={{
          width: "190mm",
          textAlign: "start",
          marginTop: "5mm",
          fontSize: "4.2mm",
        }}
      >
        <h4>Date: {data.createdAt}</h4>
      </section>
      <section
        style={{ width: "190mm", display: "flex", justifyContent: "flex-end" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#eaeaea",
            gap: "2mm",
            width: "95mm",
            height: "30mm",
            padding: "2mm",
            fontSize: "4.2mm",
          }}
        >
          <h4 style={{ fontWeight: 500 }}>
            Client: {data.firstName + " " + data.lastName}
          </h4>
          <h4 style={{ fontWeight: 500 }}>Tel: {data.phoneNumber}</h4>
        </div>
      </section>
      <table
        style={{
          width: "190mm",
          borderCollapse: "collapse",
          marginTop: "5mm",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "0.5mm solid black",
                borderRight: "none",
                padding: "0 1.5mm 4mm 1.5mm",
              }}
            >
              S. No
            </th>
            <th
              style={{
                border: "0.5mm solid black",
                borderRight: "none",
                padding: "0 1.5mm 4mm 1.5mm",
              }}
            >
              Designation
            </th>
            <th
              style={{
                border: "0.5mm solid black",
                borderRight: "none",
                padding: "0 1.5mm 4mm 1.5mm",
              }}
            >
              Quantity
            </th>
            <th
              style={{
                border: "0.5mm solid black",
                borderRight: "none",
                padding: "0 1.5mm 4mm 1.5mm",
              }}
            >
              Unit Price
            </th>
            <th
              style={{
                border: "0.5mm solid black",
                padding: "0 1.5mm 4mm 1.5mm",
              }}
            >
              Price Total
            </th>
          </tr>
        </thead>
        <tbody>
          {rowsToRender.map((row, index) => (
            <tr key={index} style={{ height: "10mm" }}>
              <td
                style={{
                  borderLeft: "0.5mm solid black",
                  borderBottom: "0.5mm solid black",
                  textAlign: "center",
                  paddingBottom: "4mm",
                }}
              >
                {row.ref || ""}
              </td>
              <td
                style={{
                  borderLeft: "0.5mm solid black",
                  borderBottom: "0.5mm solid black",
                  textAlign: "center",
                  paddingBottom: "4mm",
                }}
              >
                {row.designation || ""}
              </td>
              <td
                style={{
                  borderLeft: "0.5mm solid black",
                  borderBottom: "0.5mm solid black",
                  textAlign: "center",
                  paddingBottom: "4mm",
                }}
              >
                {row.volumeOfConcrete ? `${row.volumeOfConcrete} m³` : ""}
              </td>
              <td
                style={{
                  borderLeft: "0.5mm solid black",
                  borderBottom: "0.5mm solid black",
                  textAlign: "center",
                  paddingBottom: "4mm",
                }}
              >
                {row.perCubicMeterConcretePrice || ""}
              </td>
              <td
                style={{
                  border: "0.5mm solid black",
                  borderTop: "none",
                  textAlign: "center",
                  paddingBottom: "4mm",
                }}
              >
                {row.totalPrice}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <section
        style={{
          width: "190mm",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "6mm",
          fontSize: "4.5mm",
        }}
      >
        <div
          style={{
            width: "90mm",
            backgroundColor: "#eaeaea",
            display: "flex",
            gap: "30mm",
            alignItems: "center",
            padding: "0 2mm 4mm 2mm",
          }}
        >
          <h4>THT:</h4>
          <h4>{totalPrice} USD</h4>
        </div>
        <div
          style={{
            width: "90mm",
            backgroundColor: "#eaeaea",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "2mm",
          }}
        >
          <div style={{ paddingBottom: "4mm" }}>
            <h4>NetPay:</h4>
          </div>
          <h4
            style={{
              border: "0.5mm solid black",
              width: "30mm",
              paddingBottom: "4mm",
              background: "white",
              textAlign: "center",
            }}
          >
            {totalPrice}
          </h4>
        </div>
      </section>
      <section style={{ width: "190mm" }}>
        <h3 style={{ fontWeight: 300 }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h3>
      </section>
    </div>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    width: 120, // Replace '40mm' with pixels
    height: "auto", // Automatically adjust height based on content
  },
  logo: {
    width: "100%",
    height: "100%",
  },
});
export default Invoice;
