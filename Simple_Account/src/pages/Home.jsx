import MyCalendar from "../components/MyCalendar";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
    <div>
      <Header text={"왕 간단 가계부"}/>
      <MyCalendar/>
    </div>
    </>
  )
}

export default Home;