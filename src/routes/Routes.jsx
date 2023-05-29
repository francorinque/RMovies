import { Routes as Switch, Route } from 'react-router-dom'

import { NotFound } from '../components/UI'
import { Details, Discover, Home, Results } from '../pages'

const Routes = () => {
  return (
    <Switch>
      <Route path='/discover/:mediatype' element={<Discover />} />
      <Route path='/details/:mediatype/:id' element={<Details />} />
      <Route path='/results/:query' element={<Results />} />
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Switch>
  )
}
export default Routes
