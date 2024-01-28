import BookDefault from '../../../assets/img/default_book.jpg'

type BookThubProps = {
    img?: string
    link?: string
    bookName: string
    writer: string
    price: number
}

const BookThumb = ({ img = '', link = '', bookName, writer, price }: BookThubProps) => {
    return (
        <div className="p-3 mb-4">
            <a href={link} target="_blank" rel="noreferrer">
                <div className="w-full">
                    <img
                        src={img.length !== 0 ? img : BookDefault}
                        alt={bookName}
                        className="md:w-[170px] min-h-[280px] bg-gray-300"
                    />
                </div>
            </a>

            <div className="min-h-[60px] mt-2">
                <h5>
                    <a href={link} target="_blank" rel="noreferrer">
                        {bookName}
                    </a>
                </h5>
            </div>

            <p className="text-gray-600 text-sm">{writer}</p>
            <p className="text-black font-semibold text-sm">
                Price: <span className="text-red-400">{price}</span>
            </p>
        </div>
    )
}

export default BookThumb
