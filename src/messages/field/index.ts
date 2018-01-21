import basic_en from './basic-en'
import basic_cn from './basic-zh-CN'
import edu_en from './edu-en'
import edu_cn from './edu-zh-CN'

export default {
  'basic-en': basic_en,
  'basic-zh-CN': basic_cn,
  'edu-en': {...basic_en, ...edu_en},
  'edu-zh-CN': {...basic_cn, ...edu_cn},
}
