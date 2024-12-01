import ReactDOMServer from "react-dom/server";
import { Button, Text, View } from "react-native";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import * as FileSystem from "expo-file-system";
// import Invoice from "../components/InvoiceComponent";
// import PurchaseOrder from "@/components/PurchaseOrder";
// import OrderReport from "@/components/OrderReport";
// import TransportBill from "@/components/TransportBill";
import InventoryReport from "@/components/InventoryReport";

export default function Index() {
  const billData = {
    createdAt: "2024-11-27T16:12:56.650Z",
    customerId: {
      id: "674745080eccc56faacac0da",
      firstName: "Saad",
      lastName: "Khan",
      email: "saad2811@gmail.com",
      phoneNumber: "+2433333333333",
      reference: "Asad",
      role: "CUSTOMER",
      status: "PENDING",
      streetAddress: "Karachi",
      streetNumber: "22",
      municipality: "Gulshan",
      city: "Karachi",
      country: "RD Congo",
      notificationToken: [],
      createdAt: "2024-11-27T16:12:56.456Z",
      updatedAt: "2024-11-27T16:12:56.456Z",
    },
    orderNumber: "0026/11",
    paymentMethod: "CASH",
    status: [
      {
        createdAt: "2024-11-27T16:12:56.649Z",
        status: "PENDING_REVIEW",
        updatedAt: "2024-11-27T16:12:56.649Z",
        _id: "674745080eccc56faacac0dd",
      },
      {
        createdAt: "2024-11-27T16:15:35.795Z",
        status: "NEGOTIATION_SUCCESSFUL",
        updatedAt: "2024-11-27T16:15:35.795Z",
        _id: "674745a70eccc56faacac0f7",
      },
      {
        createdAt: "2024-11-27T16:16:07.134Z",
        status: "PAYMENT_RECEIVED",
        updatedAt: "2024-11-27T16:16:07.134Z",
        _id: "674745c70eccc56faacac105",
      },
    ],
    subOrder: [
      {
        id: "674745090eccc56faacac0e3",
        subOrderNumber: "2",
        country: "RD Congo",
        deliveryDate: "2024-11-28T00:00:00.000Z",
        dosage: "350",
        perCubicMeterConcretePrice: 110,
        volumeOfConcrete: 20,
        timeOfDelivery: "AFTERNOON",
        totalAmount: "20200",
        status: [
          {
            createdAt: "2024-11-27T16:12:57.238Z",
            status: "IN_QUEUE",
            updatedAt: "2024-11-27T16:12:57.238Z",
            _id: "674745090eccc56faacac0e4",
          },
          {
            createdAt: "2024-11-27T16:15:35.605Z",
            status: "IN_QUEUE",
            updatedAt: "2024-11-27T16:15:35.605Z",
            _id: "674745a70eccc56faacac0f3",
          },
          {
            createdAt: "2024-11-30T13:42:06.423Z",
            status: "IN_PROGRESS",
            updatedAt: "2024-11-30T13:42:06.423Z",
            _id: "674b162eb460e68cac4e1d6b",
          },
        ],
        createdAt: "2024-11-27T16:12:57.238Z",
        updatedAt: "2024-11-30T13:42:06.423Z",
      },
    ],
    updatedAt: "2024-11-27T16:16:07.134Z",
    id: "674745080eccc56faacac0dc",
  };

  const purchaseOrderData = {
    city: "Karachi",
    country: "RD Congo",
    createdAt: "2024-11-27T16:12:56.456Z",
    customerId: "674745080eccc56faacac0da",
    deliveryDate: "2024-11-28T00:00:00.000Z",
    dosage: "350",
    email: "saad2811@gmail.com",
    firstName: "Saad",
    lastName: "Khan",
    municipality: "Gulshan",
    notificationToken: [],
    orderId: "674745080eccc56faacac0dc",
    orderNumber: "0026/11",
    perCubicMeterConcretePrice: 110,
    phoneNumber: "+2433333333333",
    reference: "Asad",
    role: "CUSTOMER",
    status: "PENDING",
    streetAddress: "Karachi",
    streetNumber: "22",
    subOrderNumber: "2",
    timeOfDelivery: "AFTERNOON",
    updatedAt: "2024-11-27T16:12:56.456Z",
    volumeOfConcrete: 20,
    _id: "674745080eccc56faacac0da",
  };

  const orderReportData = [
    {
      _id: "67399088e89a9603d4c95faf",
      customerId: {
        notificationToken: [],
        _id: "6702971aa10590d08d98b1d2",
        email: "asadali54012@gmail.com",
        firstName: "Asad Ali",
        lastName: "Khan",
        phoneNumber: "+923042145412",
        role: "CUSTOMER",
        status: "PENDING",
        streetAddress: "x",
        streetNumber: "x",
        reference: "x",
        municipality: "x",
        city: "x",
        country: "RD Congo",
        createdAt: "2024-10-06T13:56:42.846Z",
        updatedAt: "2024-10-06T13:56:42.846Z",
      },
      createdAt: "2024-11-17T06:43:20.417Z",
      orderNumber: "0001/08",
    },
    {
      _id: "673a541836a984a6f3ff92c8",
      customerId: {
        notificationToken: [],
        _id: "6702971aa10590d08d98b1d2",
        email: "asadali54012@gmail.com",
        firstName: "Asad Ali",
        lastName: "Khan",
        phoneNumber: "+923042145412",
        role: "CUSTOMER",
        status: "PENDING",
        streetAddress: "x",
        streetNumber: "x",
        reference: "x",
        municipality: "x",
        city: "x",
        country: "RD Congo",
        createdAt: "2024-10-06T13:56:42.846Z",
        updatedAt: "2024-10-06T13:56:42.846Z",
      },
      createdAt: "2024-11-17T20:37:44.430Z",
      orderNumber: "0002/11",
    },
    {
      _id: "673b83763cc2797fb29ea180",
      customerId: {
        country: "RD Congo",
        notificationToken: [],
        _id: "66f0a0943992ffef7769ff66",
        email: "ayan@mail.com",
        firstName: "Ayan",
        lastName: "Mirza",
        phoneNumber: "+440987654321",
        role: "ADMINISTRATOR",
        status: "PENDING",
        createdAt: "2024-09-22T22:56:20.227Z",
        updatedAt: "2024-10-06T20:37:05.556Z",
        password:
          "$2b$10$SJtPNo15QnEGXGV3sDPe5ORDiG9ZEyqSuIZWfWxbBCWFhCm.TJVOe",
      },
      createdAt: "2024-11-18T18:12:06.573Z",
      orderNumber: "0003/11",
      totalAmount: "11000",
    },
    {
      _id: "673b837e3cc2797fb29ea186",
      customerId: {
        country: "RD Congo",
        notificationToken: [],
        _id: "66f0a0943992ffef7769ff66",
        email: "ayan@mail.com",
        firstName: "Ayan",
        lastName: "Mirza",
        phoneNumber: "+440987654321",
        role: "ADMINISTRATOR",
        status: "PENDING",
        createdAt: "2024-09-22T22:56:20.227Z",
        updatedAt: "2024-10-06T20:37:05.556Z",
        password:
          "$2b$10$SJtPNo15QnEGXGV3sDPe5ORDiG9ZEyqSuIZWfWxbBCWFhCm.TJVOe",
      },
      createdAt: "2024-11-18T18:12:14.218Z",
      orderNumber: "0004/11",
      totalAmount: "2200",
    },
  ];
  const inventoryReportData = [
    {
      totalCementAdd: 10,
      totalSandAdd: 100,
      totalGravel815Add: 50,
      totalGrave1525Add: 75,
      date: "2024-11-01T08:53:44.177Z",
    },
    {
      totalCementAdd: 200,
      totalCementSub: 110,
      totalSandAdd: 66,
      totalSandSub: 83,
      totalGravel815Add: 6,
      totalGravel815Sub: 13,
      totalGrave1525Add: 6666,
      totalGrave1525Sub: 3333,
      totalConcrete: 75,
      date: "2024-11-03T00:00:00.000Z",
      cementEod: 100,
      sandEod: 83,
      gravel815Eod: 43,
      gravel1525Eod: 3408,
    },
    {
      totalCementAdd: 12,
      totalCementSub: 12,
      totalSandAdd: 0,
      totalSandSub: 21,
      totalGravel815Add: 0,
      totalGravel815Sub: 12,
      totalGrave1525Add: 0,
      totalGrave1525Sub: 21,
      totalConcrete: 0,
      date: "2024-11-04T00:00:00.000Z",
      cementEod: 100,
      sandEod: 62,
      gravel815Eod: 31,
      gravel1525Eod: 3387,
    },
    {
      totalCementAdd: 12,
      totalCementSub: 62,
      totalSandAdd: 0,
      totalSandSub: 62,
      totalGravel815Add: 0,
      totalGravel815Sub: 62,
      totalGrave1525Add: 0,
      totalGrave1525Sub: 87,
      totalConcrete: 112,
      date: "2024-11-09T00:00:00.000Z",
      cementEod: 50,
      sandEod: 0,
      gravel815Eod: -31,
      gravel1525Eod: 3300,
    },
    {
      totalCementAdd: 0,
      totalCementSub: 45445,
      totalSandAdd: 0,
      totalSandSub: 454545,
      totalGravel815Add: 0,
      totalGravel815Sub: 4545,
      totalGrave1525Add: 0,
      totalGrave1525Sub: 454554,
      totalConcrete: 455454,
      date: "2024-11-10T00:00:00.000Z",
      cementEod: -45395,
      sandEod: -454545,
      gravel815Eod: -4576,
      gravel1525Eod: -451254,
    },
    {
      totalCementAdd: 240,
      totalCementSub: 264,
      totalSandAdd: 740,
      totalSandSub: 1122,
      totalGravel815Add: 454,
      totalGravel815Sub: 119,
      totalGrave1525Add: 640,
      totalGrave1525Sub: 152,
      totalConcrete: 5460,
      date: "2024-11-24T00:00:00.000Z",
      cementEod: -45419,
      sandEod: -454927,
      gravel815Eod: -4241,
      gravel1525Eod: -450766,
    },
    {
      totalCementAdd: 474,
      totalSandAdd: 906,
      totalGravel815Add: 510,
      totalGrave1525Add: 7381,
      totalCementSub: 45893,
      totalSandSub: 455833,
      totalGravel815Sub: 4751,
      totalGrave1525Sub: 458147,
      totalConcrete: 461101,
    },
  ];

  const invoiceHTML = ReactDOMServer.renderToStaticMarkup(
    // <Invoice data={billData} />
    // <PurchaseOrder data={purchaseOrderData} />
    // <OrderReport data={orderReportData} />
    // <TransportBill />
    <InventoryReport data={inventoryReportData} />
  );
  const html = `
    <!DOCTYPE html>
  <html>
  <head>
    <style>
      @page {
        size: A4;
        margin: 0;
      }
    </style>
  </head>
    <body>
     ${invoiceHTML}
    </body>
    </html>
    `;

  const generatePDF = async () => {
    try {
      // Generate the PDF file from the HTML content
      const file = await printToFileAsync({
        html: html,
        base64: false,
      });

      // Define the new file path with the desired name
      const newFilePath = FileSystem.documentDirectory + "Inventory_Report.pdf";

      // Rename the generated file by copying it to a new file path
      await FileSystem.moveAsync({
        from: file.uri,
        to: newFilePath,
      });

      // Share the renamed file
      await shareAsync(newFilePath);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello World.</Text>
      <Button title="Generate PDF" onPress={generatePDF} />
    </View>
  );
}
