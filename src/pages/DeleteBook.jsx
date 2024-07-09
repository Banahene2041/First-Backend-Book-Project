import axios from "axios"
import Header from "../components/Header"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const DeleteBook = () => {
  const {id} = useParams()

  const handleDelete = async() => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/books/${id}`)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
        <Header title="Delete Book" />
        <div className="flex items-center justify-center">
          <div className="flex flex-col rounded-md items-center justify-center border-2 border-blue-400 mt-20 p-4">
          <h2>Are You Sure You want to delete this book</h2>
          <Link to={'/'} className="bg-red-600 hover:bg-red-500 rounded-md text-white mt-4 px-36 py-2 items-center transition " onClick={() => handleDelete(id)}>Yes, Delete it</Link>
        </div>
        </div>
    </section>
  )
}

export default DeleteBook