import { Provider} from 'react-redux'
import {store} from '../state/index'
import RepositoriesList from "../RepositoriesList"

const App = () => {
  return (
    <Provider store={store}>
      <div>Hello from App</div>
      <RepositoriesList/>
    </Provider>
  )
}

export default App