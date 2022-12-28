import { useState } from "react";

function TransSelector() {

    const [walk, setWalk] = useState(0);
    const [vehicle, setVehicle] = useState(0);

    const walkHandler = () => {
        setWalk(1);
        setVehicle(0);
    }

    const vehicleHandler = () => {
        setVehicle(1);
        setWalk(0);
    }

    if (walk) {
        return (
            <div className="w-full h-12 bg-gray-light">
                <div className="flex">
                    <div className="w-1/2 h-12 border border-solid border-gray-main flex items-center justify-center bg-blue-main text-white">
                        <p>도보</p>
                    </div>
                    <div className="w-1/2 h-12 border-t border-b border-r border-solid border-gray-main flex items-center justify-center hover:bg-blue-light duration-200" onClick={vehicleHandler}>
                        <p>차량</p>
                    </div>
                </div>
            </div>
        )
    } else if (vehicle) {
        return (
            <div className="w-full h-12 bg-gray-light">
                <div className="flex">
                    <div className="w-1/2 h-12 border border-solid border-gray-main flex items-center justify-center hover:bg-blue-light duration-200" onClick={walkHandler}>
                        <p>도보</p>
                    </div>
                    <div className="w-1/2 h-12 border-t border-b border-r border-solid border-gray-main flex items-center justify-center bg-blue-main text-white">
                        <p>차량</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="w-full h-12 bg-gray-light">
                <div className="flex">
                    <div className="w-1/2 h-12 border border-solid border-gray-main flex items-center justify-center hover:bg-blue-light duration-200" onClick={walkHandler}>
                        <p>도보</p>
                    </div>
                    <div className="w-1/2 h-12 border-t border-b border-r border-solid border-gray-main flex items-center justify-center hover:bg-blue-light duration-200" onClick={vehicleHandler}>
                        <p>차량</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default TransSelector;