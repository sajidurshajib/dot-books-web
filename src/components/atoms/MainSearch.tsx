import { IoSearch } from 'react-icons/io5'

const MainSearch = () => {
    return (
        <div>
            <form className="relative">
                <input type="text" className="w-full rounded-md px-2 py-3 outline-none" />
                <button className="absolute top-0 right-0 bg-gray-600 text-white h-full w-12 rounded-r-md">
                    <IoSearch className="inline" />
                </button>
            </form>
        </div>
    )
}

export default MainSearch
