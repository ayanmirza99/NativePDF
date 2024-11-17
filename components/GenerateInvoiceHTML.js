import { useEffect, useState } from 'react';
import { showDateInvoice } from 'src/constants';
const Invoice = ({ data }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (data.perCubicMeterConcretePrice) {
      setTotalPrice(data?.perCubicMeterConcretePrice * data?.volumeOfConcrete);
    }
  }, [data.perCubicMeterConcretePrice, data.volumeOfConcrete]);
  const totalRows = 6;
  const rowsToRender = [
    { ...data, ref: 1, designation: data.designation ? data.designation : '-', totalPrice: totalPrice },
    ...Array(totalRows - 1).fill({}),
  ];

  return (
    <div
      id="invoice"
      style={{
        width: '210mm',
        height: '297mm',
        display: 'none',
        flexDirection: 'column',
        alignItems: 'center',
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
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ width: '80mm' }}>
          <img src="/header.jpg" alt="" style={{ height: '100%', width: '100%' }} />
        </div>
        <div
          style={{
            width: '130mm',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '65mm',
              textAlign: 'right',
              color: '#898888',
              fontSize: '3.75mm',
            }}
          >
            <h4 style={{ fontWeight: 600 }}>RCCM: CD/KNM/RCM/19-B-0D291</h4>
            <h4 style={{ fontWeight: 600 }}>Id. Nat: 01-490-N499993T</h4>
            <h4 style={{ fontWeight: 600 }}>N{"'"}IMPOT A1915112Y</h4>
          </div>
          <div style={{ width: '40mm', height: 'max-content' }}>
            <img src="/logo.jpeg" style={{ width: '100%', height: '100%' }} alt="logo" />
          </div>
        </div>
      </section>
      <section style={{ width: '190mm', display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            border: '0.5mm solid black',
            padding: '0 22mm 4mm 22mm',
            fontWeight: 500,
            fontSize: '5mm',
          }}
        >
          {t('invoice.bill')} N° {data.orderNumber}
        </div>
      </section>
      <section
        style={{
          width: '190mm',
          textAlign: 'start',
          marginTop: '5mm',
          fontSize: '4.2mm',
        }}
      >
        <h4>Date: {showDateInvoice(data.createdAt)}</h4>
      </section>
      <section style={{ width: '190mm', display: 'flex', justifyContent: 'flex-end' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#eaeaea',
            gap: '2mm',
            width: '95mm',
            height: '30mm',
            padding: '2mm',
            fontSize: '4.2mm',
          }}
        >
          <h4 style={{ fontWeight: 500 }}>Client: {data.firstName + ' ' + data.lastName}</h4>
          <h4 style={{ fontWeight: 500 }}>Tel: {data.phoneNumber}</h4>
        </div>
      </section>
      <table
        style={{
          width: '190mm',
          borderCollapse: 'collapse',
          marginTop: '5mm',
        }}
      >
        <thead>
          <tr>
            <th
              style={{ border: '0.5mm solid black', borderRight: 'none', padding: '0 1.5mm 4mm 1.5mm' }}
            >
              {t('invoice.sNo')}
            </th>
            <th
              style={{ border: '0.5mm solid black', borderRight: 'none', padding: '0 1.5mm 4mm 1.5mm' }}
            >
              {t('invoice.designation')}
            </th>
            <th
              style={{ border: '0.5mm solid black', borderRight: 'none', padding: '0 1.5mm 4mm 1.5mm' }}
            >
              {t('invoice.quantity')}
            </th>
            <th
              style={{ border: '0.5mm solid black', borderRight: 'none', padding: '0 1.5mm 4mm 1.5mm' }}
            >
              {t('invoice.price')} {t('invoice.unit')}
            </th>
            <th style={{ border: '0.5mm solid black', padding: '0 1.5mm 4mm 1.5mm' }}>
              {t('invoice.price')} Total
            </th>
          </tr>
        </thead>
        <tbody>
          {rowsToRender.map((row, index) => (
            <tr key={index} style={{ height: '10mm' }}>
              <td
                style={{
                  borderLeft: '0.5mm solid black',
                  borderBottom: '0.5mm solid black',
                  textAlign: 'center',
                  paddingBottom: '4mm',
                }}
              >
                {row.ref || ''}
              </td>
              <td
                style={{
                  borderLeft: '0.5mm solid black',
                  borderBottom: '0.5mm solid black',
                  textAlign: 'center',
                  paddingBottom: '4mm',
                }}
              >
                {row.designation || ''}
              </td>
              <td
                style={{
                  borderLeft: '0.5mm solid black',
                  borderBottom: '0.5mm solid black',
                  textAlign: 'center',
                  paddingBottom: '4mm',
                }}
              >
                {row.volumeOfConcrete ? `${row.volumeOfConcrete} m³` : ''}
              </td>
              <td
                style={{
                  borderLeft: '0.5mm solid black',
                  borderBottom: '0.5mm solid black',
                  textAlign: 'center',
                  paddingBottom: '4mm',
                }}
              >
                {row.perCubicMeterConcretePrice || ''}
              </td>
              <td style={{ border: '0.5mm solid black', borderTop: 'none', textAlign: 'center', paddingBottom: '4mm' }}>
                {row.totalPrice}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <section
        style={{
          width: '190mm',
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '6mm',
          fontSize: '4.5mm',
        }}
      >
        <div
          style={{
            width: '90mm',
            backgroundColor: '#eaeaea',
            display: 'flex',
            gap: '30mm',
            alignItems: 'center',
            padding: '0 2mm 4mm 2mm',
          }}
        >
          <h4>THT:</h4>
          <h4>{totalPrice} USD</h4>
        </div>
        <div
          style={{
            width: '90mm',
            backgroundColor: '#eaeaea',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: '2mm',
          }}
        >
          <div style={{ paddingBottom: '4mm' }}>
            <h4>{t('invoice.netPay')}:</h4>
          </div>
          <h4
            style={{
              border: '0.5mm solid black',
              width: '30mm',
              paddingBottom: '4mm',
              background: 'white',
              textAlign: 'center',
            }}
          >
            {totalPrice}
          </h4>
        </div>
      </section>
      <section style={{ width: '190mm' }}>
        <h3 style={{ fontWeight: 300 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
      </section>
    </div>
  );
};

export default Invoice;