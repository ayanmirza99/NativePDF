import InventoryTable1 from "./InventoryTable1";
import InventoryTable2 from "./InventoryTable2";

interface InventoryItem {
  totalCementAdd?: number;
  totalCementSub?: number;
  totalSandAdd?: number;
  totalSandSub?: number;
  totalGravel815Add?: number;
  totalGravel815Sub?: number;
  totalGrave1525Add?: number;
  totalGrave1525Sub?: number;
  totalConcrete?: number;
  date?: string; // optional because the last item does not have a date
  cementEod?: number;
  sandEod?: number;
  gravel815Eod?: number;
  gravel1525Eod?: number;
}

interface InventoryResponse {
  data: InventoryItem[];
}

const InventoryReport = ({ data }: InventoryResponse) => {
  const initialStock = data[0] || {};
  const total = data[data.length - 1] || {};
  const restStock = data[data.length - 2] || {};

  const dateStr = initialStock.date || "";
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const firstPage = [
    ...data.slice(1, Math.min(data.length - 1, 16)),
    ...Array.from({ length: Math.max(15 - (data.length - 2), 0) }, () => ({})),
  ].slice(0, 15);

  const secondPageLength = daysInMonth - 15;
  const secondPage = [
    ...data.slice(16, data.length - 1),
    ...Array.from(
      { length: Math.max(secondPageLength - (data.length - 16), 0) },
      () => ({})
    ),
  ].slice(0, secondPageLength);

  return (
    <>
      <div
        id="page1"
        style={{
          height: "210mm",
          width: "297mm",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <section
          style={{
            width: "100%",
            paddingLeft: "6mm",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ width: "12%" }}>
            {/* <img
              src={"/logo.jpeg"}
              alt="Logo"
              style={{ height: "100%", width: "100%" }}
            /> */}
          </div>
          <div
            style={{
              width: "70%",
              height: "1mm",
              backgroundColor: "#047bcb",
            }}
          ></div>
        </section>
        <section
          style={{
            width: "100%",
            height: "max-content",
            display: "flex",
            justifyContent: "center",
            gap: "2mm",
            padding: "0 4mm 0 4mm",
          }}
        >
          <InventoryTable1 rows={firstPage} />
          <InventoryTable2
            heading={"CIMENT"}
            rows={firstPage}
            initialStock={initialStock.totalCementAdd}
          />
          <InventoryTable2
            heading={"SABLE"}
            rows={firstPage}
            initialStock={initialStock.totalSandAdd}
          />
          <InventoryTable2
            heading={"GRAVIER 8/15"}
            rows={firstPage}
            initialStock={initialStock.totalGravel815Add}
          />
          <InventoryTable2
            heading={"GRAVIER 15/25"}
            rows={firstPage}
            initialStock={initialStock.totalGrave1525Add}
          />
        </section>
      </div>
      <div
        id="page2"
        style={{
          height: "210mm",
          width: "297mm",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <section
          style={{
            width: "100%",
            height: "max-content",
            display: "flex",
            justifyContent: "center",
            gap: "2mm",
            padding: "0 4mm 0 4mm",
          }}
        >
          <InventoryTable1
            rows={secondPage}
            isSecondPage={true}
            total={{ total: total.totalConcrete }}
          />
          <InventoryTable2
            heading={"CIMENT"}
            rows={secondPage}
            total={{
              totalAdd: total.totalCementAdd,
              totalSub: total.totalCementSub,
            }}
            restStock={{ rest: restStock.cementEod }}
          />
          <InventoryTable2
            heading={"SABLE"}
            rows={secondPage}
            total={{
              totalAdd: total.totalSandAdd,
              totalSub: total.totalSandSub,
            }}
            restStock={{ rest: restStock.sandEod }}
          />
          <InventoryTable2
            heading={"GRAVIER 8/15"}
            rows={secondPage}
            total={{
              totalAdd: total.totalGravel815Add,
              totalSub: total.totalGravel815Sub,
            }}
            restStock={{ rest: restStock.gravel815Eod }}
          />
          <InventoryTable2
            heading={"GRAVIER 15/25"}
            rows={secondPage}
            total={{
              totalAdd: total.totalGrave1525Add,
              totalSub: total.totalGrave1525Sub,
            }}
            restStock={{ rest: restStock.gravel1525Eod }}
          />
        </section>
      </div>
    </>
  );
};

export default InventoryReport;
