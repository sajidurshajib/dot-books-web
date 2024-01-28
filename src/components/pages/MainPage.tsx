import { MainHeadTemplate } from '../templates'
import { BookList } from '../molecules'
import { Footer } from '../organisms'

const MainPage = () => {
    return (
        <div>
            <MainHeadTemplate />
            <BookList sectionName="Most Populer" min={0} max={16} />
            <BookList sectionName="Best Seller" min={16} max={32} wrapperClass="bg-back-light" />
            <Footer />
        </div>
    )
}

export default MainPage
