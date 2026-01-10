import { HomeSagas } from "./Home/index.ts"
import { LoginSagas } from "./Login/index.ts"
import { DashboardSagas } from "./Dashboard/index.ts"
import { TasksSagas } from "./Tasks/index.ts"
import { ChatWindowSagas } from "./ChatWindow/index.ts"

export default [ 
    ...LoginSagas,
    ...HomeSagas,
    ...DashboardSagas,
    ...TasksSagas,
    ...ChatWindowSagas
]

