import { useParams } from "react-router-dom";
import { getInvoice } from "../data";

const Invoice = () => {
  let params = useParams();
  let invoice = params.invoiceId
    ? getInvoice(parseInt(params.invoiceId, 10))
    : undefined;
  if (invoice) {
    return (
      <main style={{ padding: "1rem" }}>
        <h2>Invoice: {params.invoiceId}</h2>
        <p>
          {invoice.name}: {invoice.number}
        </p>
      </main>
    );
  }
  return (
    <main style={{ padding: "1rem" }}>
      <p>Invoice not found.</p>
    </main>
  );
};

export default Invoice;
