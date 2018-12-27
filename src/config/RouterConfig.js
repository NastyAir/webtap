import HelloWorld from '../components/HelloWorld'
import WebSitePage from '../components/WebSitePage'
import Schedule from '../components/Schedule'

const routes = [
    { path: '/helloworld', component: HelloWorld },
    { path: '/schedule', component: Schedule },
    { path: '/website', component: WebSitePage }
]

export default routes;