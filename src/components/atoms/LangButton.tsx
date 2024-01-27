import { useTranslation } from 'react-i18next'

const LangButton = () => {
    const [t, i18next] = useTranslation('global')

    const handleChangeLang = () => {
        const lang: string = t('settings.lang') === 'en' ? 'bn' : 'en'
        i18next.changeLanguage(lang)
    }

    return (
        <div className="inline-block bg-primary-yellow p-1 px-2 rounded-md">
            <span className="cursor-pointer text-sm" onClick={() => handleChangeLang()}>
                {t('settings.lang')}
            </span>
        </div>
    )
}

export default LangButton
