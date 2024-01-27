import { FaBookBookmark } from 'react-icons/fa6'
import { LuUserPlus, LuUser } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { MainSearch } from '../atoms'
import { PrimaryNav } from '../molecules'
import { useTranslation } from 'react-i18next'

const MainHeadTemplate = () => {
    const [t, i18next] = useTranslation('global')
    return (
        <div className="bg-primary-yellow shadow-md">
            <div className="2xl:container mx-auto pt-8 px-10 grid grid-cols-12">
                <div className="col-span-2">
                    <h2 className="text-primary-dark">
                        <Link to="/">
                            <FaBookBookmark className="inline" /> {t('main.name')}
                        </Link>
                    </h2>
                    <p className="text-sm text-primary-dark">Your trusted online bookstore</p>
                </div>
                <div className="col-span-8">
                    <MainSearch />
                </div>
                <div className="col-span-2 p-2 relative">
                    <div className="absolute right-0">
                        <Link to="/login" className="text-primary-dark mx-2 font-medium">
                            <LuUser className="inline" /> Login
                        </Link>
                        <Link to="/signup" className="text-primary-dark ml-4 font-medium">
                            <LuUserPlus className="inline" /> Signup
                        </Link>
                    </div>
                </div>
            </div>
            <PrimaryNav />
        </div>
    )
}

export default MainHeadTemplate
