import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Footer = () => {
    const [t, i18next] = useTranslation('global')

    return (
        <div className="bg-primary-dark">
            <div className=" 2xl:container mx-auto px-8 py-8">
                <div className="grid grid-cols-12">
                    <div className="col-span-4">
                        <h1 className="text-primary-yellow">{t('main.name')}</h1>
                        <p className="text-white my-2">12 - Rampura, (House no: 4) Dhaka, Bangladesh</p>
                        <p className="text-white my-2">151/2 Narayanganj, Bangladesh</p>
                    </div>
                    <div className="col-span-4">
                        <ul className="text-white">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-4"></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
