import { HomeSagas } from "./Home/index.ts"
import { LoginSagas } from "./Login/index.ts"
import { DashboardSagas } from "./Dashboard/index.ts"
import { ChatWindowSagas } from "./ChatWindow/index.ts"
import { OAuthSagas } from "./OAuth/index.ts"
import { AppSidebarSagas } from "./AppSidebar/index.ts"

export default [ 
    ...LoginSagas,
    ...HomeSagas,
    ...DashboardSagas,
    ...ChatWindowSagas,
    ...OAuthSagas,
    ...AppSidebarSagas
]

