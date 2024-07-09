import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"
import Title from "./Title"

const Header = ({title}) => {
  return (
    <div className="mt-3 ml-2">
        <Link to={"/"} className="btn hover:bg-blue-700 bg-blue-900 mb-2 px-6"><FaArrowLeft className="text-xl text-white" /></Link>
        <Title title={title}/>
    </div>
  )
}

export default Header