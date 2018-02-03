
import registorModule from '../registorModule'
import login from './login'
import settings from './settings'
import follow from './follow'
import stamp from './stamp'
import home from './home'

export default registorModule([
  { name: 'login', module: login },
  { name: 'settings', module: settings },
  { name: 'follow', module: follow },
  { name: 'stamp', module: stamp },
  { name: 'home', module: home },
])
