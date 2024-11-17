import ReactDOMServer from "react-dom/server";
import { Button, Text, View } from "react-native";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import * as FileSystem from "expo-file-system";
import Invoice from "../components/InvoiceComponent";

export default function Index() {
  const data = {
    orderNumber: '1234aqw',
  createdAt: '12/11/24',
  firstName: 'Ayan',
  lastName: 'Mirza',
  phoneNumber: '12345678909',
  perCubicMeterConcretePrice: 123,
  volumeOfConcrete: 123,
  designation: 'Cememnt'
  };

  const invoiceHTML = ReactDOMServer.renderToStaticMarkup(
    <Invoice data={data} />
  );
  const html = `
  <!DOCTYPE html>
<html>
<head>
  <style>
    @page {
      size: A4; /* Define the paper size as A4 */
      margin: 0; /* Remove any default margins */
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
      const newFilePath = FileSystem.documentDirectory + "Invoice_Ayan.pdf";

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
