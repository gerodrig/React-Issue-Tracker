import { Outlet } from 'react-router-dom'

export const GitApp = () => {
  
  return (
    <div className="text-center mt-3">
    <h1 className="text-2xl">Git Issues <small className="text-sm">problem tracker</small></h1>
    <Outlet />
  </div>
  )
}

