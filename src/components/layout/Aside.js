import Button from "./Button";
import {GiCargoShip, GiCargoCrate } from "react-icons/gi";


import { Link } from 'react-router-dom'
function Aside() {
  return (
    <aside className="flex flex-col justify-center w-2/12 pb-6 pt-4 h-screen bg-white border-r-2 border-gray">
      <div className="w-full h-full flex flex-col content-center py-6">
        <div className="mb-16">
          <h1 className="w-full text-center text-2xl text-bold h-16">TANGER MED</h1>
        </div>
        <div className="flex flex-col content-center">
          <Button
            link={"container"}
            title={"Containers"}
            icon={<GiCargoCrate />}
          />
          <Button
            link={"ships"}
            title={"Ships"}
            icon={<GiCargoShip />}
          /> 
        </div>
      </div>
    </aside>
  );
}

export default Aside;
