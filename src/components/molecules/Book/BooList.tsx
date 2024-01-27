import { BookThumb } from '../../atoms'

const BookList = () => {
    return (
        <div className="grid grid-cols-8 2xl:container mx-auto px-6 mt-10">
            <BookThumb bookName="Demo Name" writer="Jhon Doe" price={120} />
            <BookThumb bookName="Demo Name" writer="Jhon Doe" price={120} />
            <BookThumb bookName="Demo Name" writer="Jhon Doe" price={120} />
            <BookThumb bookName="Demo Name" writer="Jhon Doe" price={120} />
            <BookThumb bookName="Demo Name" writer="Jhon Doe" price={120} />
            <BookThumb bookName="Demo Name" writer="Jhon Doe" price={120} />
            <BookThumb bookName="Demo Name" writer="Jhon Doe" price={120} />
            <BookThumb bookName="Demo Name" writer="Jhon Doe" price={120} />
        </div>
    )
}

export default BookList
