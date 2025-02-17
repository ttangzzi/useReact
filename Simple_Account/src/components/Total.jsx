import "./Total.css"

const Total = ({showDate}) => {
  return(
    <div className="Total">
      {showDate.getFullYear()}년 {showDate.getMonth()+1}월 총 지출
    </div>
  )
}

export default Total