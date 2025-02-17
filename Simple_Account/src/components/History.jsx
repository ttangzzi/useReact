import "./History.css"

const History = ({selectDate}) => {
  return (
    <div className="History">
      <div className="date">{selectDate.toLocaleDateString()}</div>
      <div>목록들</div>
    </div>
  )
}

export default History;