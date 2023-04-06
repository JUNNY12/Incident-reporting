import { Link } from 'react-router-dom'
import { Button } from './Button'


const Nav = () => {
    return (
        <nav className='h-16 flex items-center justify-between z-20
         text-mercury-white-50 pt-4 pb-4 ps-12 pe-12 bg-pastel-green-800 fixed w-full
         mobileL:ps-8 mobileL:pe-8

         '>

            <div>
                <Link to='/'>Logo</Link>
            </div>
            <ul className='flex items-center' >

                <li className='mr-10 font-bold text-xl'>
                    <Link to='/incident'>Incidents</Link>
                </li>

                <li className='mr-10 font-bold text-xl'>
                    <Link to='/contact'>
                        <Button>
                            Contact
                        </Button>
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default Nav