import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Medicos = () => {

  const { speciality } = useParams()
  const [filterDoc,setFilterDoc]  = useState([])
  const navigate = useNavigate()

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[doctors,speciality])

  return (
    <div>
      <p className='text-gray-600'>Navega a través de los médicos especialistas.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={()=> speciality === 'Medicina General' ? navigate('/medicos') : navigate('/medicos/Medicina General')} className={`w-[94vw] sm:w-auto pl-2 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Medicina General" ? "bg-teal-50 text-black" : ""}`}>Medicina General</p>
          <p onClick={()=> speciality === 'Ginecología' ? navigate('/medicos') : navigate('/medicos/Ginecología')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Ginecología" ? "bg-teal-50 text-black" : ""}`}>Ginecología</p>
          <p onClick={()=> speciality === 'Dermatología' ? navigate('/medicos') : navigate('/medicos/Dermatología')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatología" ? "bg-teal-50 text-black" : ""}`}>Dermatología</p>
          <p onClick={()=> speciality === 'Pediatría' ? navigate('/medicos') : navigate('/medicos/Pediatría')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatría" ? "bg-teal-50 text-black" : ""}`}>Pediatría</p>
          <p onClick={()=> speciality === 'Neurología' ? navigate('/medicos') : navigate('/medicos/Neurología')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurología" ? "bg-teal-50 text-black" : ""}`}>Neurología</p>
          <p onClick={()=> speciality === 'Gastroenterología' ? navigate('/medicos') : navigate('/medicos/Gastroenterología')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterología" ? "bg-teal-50 text-black" : ""}`}>Gastroenterología</p>
        </div>
        <div className='w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 gap-y-6'>
          {
            filterDoc.map((item, index) => (
              <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-green-50' src={item.image} alt="" />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Disponible</p>
                  </div>
                  <p className='text-gray-900 text-md font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Medicos