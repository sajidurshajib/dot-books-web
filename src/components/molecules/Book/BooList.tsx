import { BookThumb } from '../../atoms'
import bookJson from '../../../config/books.json'

type BookListProps = {
    sectionName?: string
    min: number
    max: number
    wrapperClass?: string
}

const BookList = ({ sectionName = '', min = 0, max = 16, wrapperClass = '' }: BookListProps) => {
    return (
        <div className={wrapperClass}>
            <div className="2xl:container mx-auto px-5 py-10 ">
                <h2 className="px-3 text-primary-dark">{sectionName}</h2>
                <span className="mx-3 mt-2 mb-4 w-[200px] h-[5px] block bg-primary-yellow"></span>
                <div className="grid grid-cols-8">
                    {bookJson.slice(min, max).map((v, i) => {
                        return (
                            <BookThumb
                                img={v.imageLink}
                                link={v.link}
                                bookName={v.title}
                                writer={v.author}
                                price={v.pages}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BookList
