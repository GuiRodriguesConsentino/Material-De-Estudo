import { inline } from "./inline.js" // Pode ter mais de um por arquivo
import defaultInline from "./inline.js" // Só pode ter um por arquivo

inline()
defaultInline()

import { group } from "./non-inline.js"
import exportDefault from "./non-inline.js"

group()
exportDefault()