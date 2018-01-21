import locale from './locale'
import field from './field'

const messages = (config: {language: string, field: string}) => {
  const languagePack = locale[config.language]
  const fieldPack = field[config.field + '-' + config.language]
  console.log({
    ...languagePack,
    ...fieldPack
  })
  return {
    ...languagePack,
    ...fieldPack
  }
}

export default messages
