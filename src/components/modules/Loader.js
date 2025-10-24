import { HashLoader } from "react-spinners"

function Loader() {
  return (
    <div className="fixed top-0 w-screen h-screen flex justify-center items-center bottom-0 bg-gray-300/75 left-0 right-0 z-[1000]">
        <HashLoader speedMultiplier="1" color="#28a745" size={80} />
    </div>
  )
}
export default Loader