import { Routes, Route } from 'react-router-dom'
import { MainPage, HomePage, LoginPage, SignUpPage, NotFound } from './components/pages'
import { Toaster } from 'react-hot-toast'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/dashboard" element={<HomePage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    )
}

export default App
