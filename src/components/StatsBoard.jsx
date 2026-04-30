function StatsBoard({ students }) {
  const total = students.length;
  const passed = students.filter(s => s.score >= 40).length;
  const failed = total - passed;

  const avg =
    total === 0
      ? 0
      : Math.round(
          students.reduce((sum, s) => sum + s.score, 0) / total
        );

  return (
    <div className="stats-board">
      <div className="stat-card">
        <p>Total</p>
        <h2>{total}</h2>
      </div>

      <div className="stat-card pass">
        <p>Passed</p>
        <h2>{passed}</h2>
      </div>

      <div className="stat-card fail">
        <p>Failed</p>
        <h2>{failed}</h2>
      </div>

      <div className="stat-card">
        <p>Average</p>
        <h2>{avg}</h2>
      </div>
    </div>
  );
}

export default StatsBoard;
