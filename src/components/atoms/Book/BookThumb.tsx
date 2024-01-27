import BookDefault from '../../../assets/img/default_book.jpg'

type BookThubProps = {
    img?: string
    bookName: string
    writer: string
    price: number
}

const BookThumb = ({ img = '', bookName, writer, price }: BookThubProps) => {
    return (
        <div className="p-2">
            <img
                src={img.length !== 0 ? img : BookDefault}
                alt={bookName}
                className="md:w-[170px] h-auto bg-gray-300"
            />
            <h4>{bookName}</h4>
            <p>{writer}</p>
            <p>{price}</p>
        </div>
    )
}

export default BookThumb
