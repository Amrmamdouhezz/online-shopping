import React, { useContext } from 'react'
import MainContent from '../components/MainContent'
import { ErrorContext } from '../context/ErrorContextProvider'

const Home = () => {
    const { errorMessage } = useContext(ErrorContext)
    return (
        <div>
            {!errorMessage && <MainContent />}
        </div>

    )
}

export default Home