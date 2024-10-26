import Image from "next/image";
import loaderCar from "../../public/loader.svg";
function loading() {
  return (
    <div className="loader">
      <div className="car">
        <Image src={loaderCar} alt="car" width={100} height={100} />
      </div>
    </div>
  );
}

export default loading;
