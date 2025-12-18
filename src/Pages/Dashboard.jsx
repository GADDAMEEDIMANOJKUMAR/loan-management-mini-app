import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loansData } from "../Data/loans";
import { toast } from "react-toastify";
import "../styles/dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedUser"));

  const [search, setSearch] = useState("");
  const [loanType, setLoanType] = useState("");
  const [status, setStatus] = useState("");
  const [city, setCity] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  if (!user) {
    return <h2>Please login</h2>;
  }

  const logout = () => {
    localStorage.clear();
    toast.success("Logout successful");
    navigate("/");
  };

  const filteredLoans = [];

  for (let i = 0; i < loansData.length; i++) {
    const loan = loansData[i];

    if (search && !loan.customerName.toLowerCase().includes(search.toLowerCase())) {
      continue;
    }

    if (loanType && loan.loanType !== loanType) {
      continue;
    }

    if (status && loan.status !== status) {
      continue;
    }

    if (city && loan.city !== city) {
      continue;
    }

    if (fromDate && new Date(loan.applicationDate) < new Date(fromDate)) {
      continue;
    }

    if (toDate && new Date(loan.applicationDate) > new Date(toDate)) {
      continue;
    }

    filteredLoans.push(loan);
  }

  return (
  <div className="dashboard-page">
    {/* HEADER */}
    <div className="dashboard-header">
      <h2>Welcome, {user.name}</h2>
      <button className="logout-btn" onClick={logout}>Logout</button>
    </div>

    {/* FILTERS */}
    <div className="filters">
      <input
        placeholder="Search Name"
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setLoanType(e.target.value)}>
        <option value="">All Loan Types</option>
        <option>Home Loan</option>
        <option>Personal Loan</option>
        <option>Education Loan</option>
        <option>Gold Loan</option>
        <option>Vehicle Loan</option>
        <option>Business Loan</option>
      </select>

      <select onChange={(e) => setStatus(e.target.value)}>
        <option value="">All Status</option>
        <option>Approved</option>
        <option>Pending</option>
        <option>Rejected</option>
        <option>In Review</option>
      </select>

      <select onChange={(e) => setCity(e.target.value)}>
        <option value="">All Cities</option>
        <option>Delhi</option>
        <option>Mumbai</option>
        <option>Ahmedabad</option>
        <option>Jaipur</option>
        <option>Surat</option>
      </select>

      <input type="date" onChange={(e) => setFromDate(e.target.value)} />
      <input type="date" onChange={(e) => setToDate(e.target.value)} />
    </div>

    {/* TABLE */}
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Loan ID</th>
            <th>Loan Type</th>
            <th>Amount</th>
            <th>Status</th>
            <th>City</th>
            <th>Application Date</th>
            <th>Disbursal Date</th>
            <th>EMI Due Date</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          {filteredLoans.length === 0 ? (
            <tr>
              <td colSpan="10" style={{ textAlign: "center" }}>
                No records found
              </td>
            </tr>
          ) : (
            filteredLoans.map((loan) => (
              <tr key={loan.id}>
                <td>{loan.customerName}</td>
                <td>{loan.loanId}</td>
                <td>{loan.loanType}</td>
                <td>{loan.amount}</td>
                <td>{loan.status}</td>
                <td>{loan.city}</td>
                <td>{loan.applicationDate}</td>
                <td>{loan.disbursalDate ? loan.disbursalDate : "-"}</td>
                <td>{loan.emiDueDate ? loan.emiDueDate : "-"}</td>
                <td>{loan.time}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  </div>
);

};

export default Dashboard;
