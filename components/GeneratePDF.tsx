import React from 'react';
import { Button } from 'react-native';
import { jsPDF } from 'jspdf'; // Import jsPDF
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

const GeneratePDF = () => {
  const generatePDF = async () => {
    try {
      // Create a new instance of jsPDF
      const doc = new jsPDF();

      // Add content to the PDF
      doc.text('Hello, this is your invoice!', 20, 30); // You can add your own content here

      // Save the PDF as a blob
      const pdfBytes = doc.output('arraybuffer'); // Get the PDF as bytes

      // Convert ArrayBuffer to Base64 string
      const base64Pdf = arrayBufferToBase64(pdfBytes);

      // Define file path in device storage
      const filePath = `${FileSystem.documentDirectory}invoice.pdf`;

      // Write the Base64-encoded PDF to file
      await FileSystem.writeAsStringAsync(filePath, base64Pdf, {
        encoding: FileSystem.EncodingType.Base64,
      });

      // Share the PDF file
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(filePath);
      } else {
        alert('Sharing not available');
      }

      console.log('PDF generated and saved successfully!');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  // Function to convert ArrayBuffer to Base64 string
  const arrayBufferToBase64 = (buffer: ArrayBuffer): string => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const length = bytes.length;
    for (let i = 0; i < length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary); // Convert binary string to Base64
  };

  return <Button title="Generate PDF" onPress={generatePDF} />;
};

export default GeneratePDF;
