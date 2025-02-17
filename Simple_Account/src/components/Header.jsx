import "./Header.css"

const Header = ({text}) => {
  return (
    <div className="Header">
      <div className="title">{text}</div>
    </div>
  )
}

export default Header;