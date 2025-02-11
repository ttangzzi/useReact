import { useContext } from "react"
import { DateContext } from "../App.jsx"

const Detail = () => {
  const formattedDate = useContext(DateContext);

  return(
    <div className="Detail">
      {formattedDate}
      <button>지출</button>
      <button>수입</button>
    </div>
  )
}

export default Detail