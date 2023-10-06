import { useLoaderData, useParams } from "react-router-dom"

function CareerDetails() {

    const {id} = useParams()
    const career = useLoaderData()

  return (
    <div className="career-details">
        <h2>Career Details for {career.title}</h2>
        <p>Starting salary: {career.salary}</p>
        <p>Loacation: {career.location}</p>
        <div className="details">
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
        </div>
    </div>
  )
}

export default CareerDetails

//loader function

export const careerDetailsLoader = async ({ params }) => {
    const { id } = params

    const res = await fetch('http://localhost:4000/careers/'+id)

    return res.json()
}