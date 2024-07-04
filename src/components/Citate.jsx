const Citate = (props) => {
    const {mainText,secondText} = props
  return (
    <div>
        <div className="citate__wrapper">
            <div className="citate__mainText">
                {mainText}
            </div>
            <div className="citate__secondText">
                {secondText}
            </div>
        </div>
    </div>
  )
}

export default Citate;