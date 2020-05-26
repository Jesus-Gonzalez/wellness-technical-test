import * as Routes from './routes'

export const setupRoutes = app => {
  Object.values(Routes)
    .forEach(section => {
      Object.values(section)
        .forEach(setup => setup(app))
    })
}
