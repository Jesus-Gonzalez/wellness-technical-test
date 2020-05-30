import * as Development from './development'
import * as Production from './production'

const Configuration = process.env.NODE_ENV === 'production'
  ? Production.Configuration
  : Development.Configuration

export default Configuration
