import { useContext } from 'react'
import QuioscoContext from '../context/QuioscoProviders'

/**Para mostrar los datos de quioscoProviders */

const useQuiosco = ()=>{
    return useContext(QuioscoContext)
}

export default useQuiosco