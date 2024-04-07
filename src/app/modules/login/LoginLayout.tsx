import {useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import {useThemeMode} from '../../../_metronic/partials'
import {toAbsoluteUrl} from '../../../_metronic/helpers'

const BODY_CLASSES = ['bgi-size-cover', 'bgi-position-center', 'bgi-no-repeat']
const LoginLayout = () => {
  const {mode} = useThemeMode()
  useEffect(() => {
    BODY_CLASSES.forEach((c) => document.body.classList.add(c))
    document.body.style.backgroundImage =
      mode === 'dark'
        ? `url(${toAbsoluteUrl('/media/auth/login_background.png')})`
        : `url(${toAbsoluteUrl('/media/auth/login_background.png')})`

    return () => {
      BODY_CLASSES.forEach((c) => document.body.classList.remove(c))
      document.body.style.backgroundImage = 'none'
    }
  }, [mode])

  return (
    <div className='d-flex flex-column flex-root'>
      <div className='d-flex flex-column flex-center flex-column-fluid'>
        <div className='d-flex flex-column flex-center text-center p-5'>
          <div className='card card-flush  w-lg-300px py-5 bg-primary-subtle'>
            <div className='card-body py-lg-5'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {LoginLayout}
