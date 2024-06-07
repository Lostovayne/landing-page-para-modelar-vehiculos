const DetailsCar = () => {
  return (
    <div className="flex gap-10 ">
    {/* Temperature */}
    <div className="flex flex-col items-center">
      <img src="/images/Header/icon-1.svg" className="mb-3" alt="" />
      <span className="text-3xl">24°</span>
      <span>TEMPERATURE</span>
    </div>
    {/* Mileage */}
    <div className="flex flex-col items-center">
      <img src="/images/Header/icon-2.svg" className="mb-3" alt="" />
      <span className="text-3xl">873</span>
      <span>MILEAGE</span>
    </div>
    {/* Battery */}
    <div className="flex flex-col items-center">
      <img src="/images/Header/icon-3.svg" className="mb-3" alt="" />
      <span className="text-3xl">94%</span>
      <span>BATTERY</span>
    </div>
  </div>
  )
}
export default DetailsCar