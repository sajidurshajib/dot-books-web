import { MainHeadTemplate } from '../templates'
import { BookList } from '../molecules'

const MainPage = () => {
    return (
        <div>
            <MainHeadTemplate />
            <BookList />
            <BookList />
        </div>
    )
}

export default MainPage
