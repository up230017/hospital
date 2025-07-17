import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
import { doctors } from "../assets/assets";
import { getCitas, getCitaById, createCita, deleteCita} from "../services/cita"
import { getUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario} from "../services/users"

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currencySymbol = '$'

    // const [doctors, setDoctors] = useState([])
    const [userData, setUserData] = useState(false)
    const [citas, setCitasData] = useState([])

    // Getting User Profile using API
    const loadUserProfileData = async (id) => {

        try {

            const data  = await  getUsuarioById(id)

            if (data.success) {
                setUserData(data)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    const loadCitas =  async () => {
        try {
            const data = await getCitas()

            setCitasData(data)

        } catch (error){
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {

    })

    const value = {
        doctors,
        currencySymbol,
        userData, setUserData, loadUserProfileData,
        citas, setCitasData
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider