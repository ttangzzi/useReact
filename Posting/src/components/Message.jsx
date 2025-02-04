const Message = ({post}) => {
  return(
    <>
      {
        post.map((p, index) => {
          return(
            <div>
              <h5 key={index}>{p}</h5>
            </div>
          )
        })
      }
    </>
  )
}

export default Message;