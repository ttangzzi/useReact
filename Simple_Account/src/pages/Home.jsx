import MyCalendar from "../components/MyCalendar";
import Total from "../components/Total";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
    <div>
      <Header text={"간단한 가계부"}/>
      <MyCalendar/>
      <Total/>
      <div style={{clear:"both"}}></div>
    </div>
    </>
    
  )
}

export default Home;