function Price({ price }) {
  price = price.toFixed(2)
  return (
    <div>
      $ {price}
    </div>
  )
}


export default Price