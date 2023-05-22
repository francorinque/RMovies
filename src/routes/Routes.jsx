import { Routes as Switch, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Results from '../pages/Results/Results'
import { NotFound } from '../components/UI'

const Routes = () => {
  return (
    <Switch>
      <Route path='*' element={<NotFound />} />
      <Route path='/results/:query' element={<Results />} />
      <Route path='/' element={<Home />} />
    </Switch>
  )
}
export default Routes
