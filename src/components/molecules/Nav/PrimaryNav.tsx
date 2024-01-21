import { Link } from 'react-router-dom'

const PrimaryNav = () => {
    const navData = [
        { txt: 'Books', lnk: '/primary' },
        { txt: 'Writers', lnk: '/primary' },
        { txt: 'Subject', lnk: '/primary' },
        { txt: 'Catagory', lnk: '/primary' },
        { txt: 'Book fair', lnk: '/primary' },
        { txt: 'Best seller', lnk: '/primary' },
        { txt: 'pre-order', lnk: '/primary' },
    ]
    return (
        <div className="2xl:container mx-auto p-3 px-10 mt-8 bg-yellow-200 brightness-105 grid grid-cols-12">
            <div className="col-span-8">
                {navData.map((v, i) => {
                    return (
                        <Link key={i} to={v.lnk} className="mr-8 text-gray-600 text-sm font-medium">
                            {v.txt}
                        </Link>
                    )
                })}
            </div>
            <div className="col-span-4">
                <div className="float-right">
                    <Link to="check" className="ml-8 text-gray-600 text-sm font-medium">
                        Offer
                    </Link>
                    <Link to="check" className="ml-8 text-gray-600 text-sm font-medium">
                        Gift card
                    </Link>
                    <Link to="check" className="ml-8 text-gray-600 text-sm font-medium">
                        Discount
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PrimaryNav
