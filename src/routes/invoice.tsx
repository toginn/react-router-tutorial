import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteInvoice, getInvoice } from "../data";

const Invoice = () => {
  let navigate = useNavigate();
  let location = useLocation();
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
        <p>Due Date: {invoice.due}</p>
        <p>
          <button
            onClick={() => {
              deleteInvoice(invoice!.number);
              navigate("/invoices" + location.search);
            }}
          >
            Delete
          </button>
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
