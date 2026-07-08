import "./SummaryCards.css";

function SummaryCards() {
  return (
    <section className="summary-cards">

      <div className="card">
        <h3>Total Equipment</h3>
        <h1>248</h1>
      </div>

      <div className="card">
        <h3>Available</h3>
        <h1>180</h1>
      </div>

      <div className="card">
        <h3>Issued</h3>
        <h1>68</h1>
      </div>

      <div className="card">
        <h3>Employees</h3>
        <h1>52</h1>
      </div>

    </section>
  );
}

export default SummaryCards;