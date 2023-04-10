import { Link } from 'react-router-dom'
import { Button } from './Button'
import { useEffect, useState } from 'react'
import SideBar from './SideBar'
import { AiOutlineMenu } from "react-icons/ai"


const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [showSideBar, setShowSideBar] = useState(false)

    // This is the scroll effect to change the color of the nav bar
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            if (scrollPosition > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <>
            {/* This is the side bar */}
            {showSideBar && (
                <div className="fixed z-50 top-0 bottom-0 left-0 right-0 transition-all ease-in-out duration-1000 ">
                    <SideBar setShowSideBar={setShowSideBar} />
                </div>
            )}

            {/* This is the nav bar */}
            <nav className={!isScrolled ?
                'h-16 flex items-center justify-between z-20  pt-4 pb-4 ps-12 pe-12 text-black-950 bg-mercury-white-50 fixed w-full mobileL:ps-8 mobileL:pe-8'
                :
                (' transition ease-in-out duration-1000 h-16 flex items-center justify-between z-20 bg-mercury-white-100 pt-4 pb-4 ps-12 pe-12 text-pastel-green-800 fixed w-full mobileL:ps-8 mobileL:pe-8 shadow-lg ')
            }
            >

                <div>
                    <Link to='/'>
                        <div className={!isScrolled ? 'border-4 border-pastel-green-800 rounded-full h-12 w-12 flex items-center justify-center text-2xl font-bold text-pastel-green-10 '
                            : 'border-4 border-pastel-green-800 rounded-full h-12 w-12 flex items-center justify-center text-2xl font-bold'
                        }>
                            RL
                        </div>
                    </Link>
                </div>
                <ul className='flex items-center tabletS:hidden' >

                    <li className='mr-10 font-bold text-2xl'>
                        <Link to='/incident'>Incidents</Link>
                    </li>

                    <li className='mr-10 font-bold text-2xl'>
                        <Link to='/report'>Report</Link>
                    </li>

                    <li className='mr-10 font-bold text-xl'>
                        <Link to='/contact'>
                            <Button
                                className=' bg-pastel-green-800 text-mercury-white-50 w-40 text-2xl pb-3
                                hover:bg-pastel-green-600 rounded-[40px]
                                '
                            >
                                Contact
                            </Button>
                        </Link>
                    </li>
                </ul>

                {
                    !showSideBar && (
                        <div className='absolute top-[0.6rem] right-6 hidden tabletS:block'>
                            <Button className='hover:text-mercury-white-50 hover:bg-pastel-green-600'>
                                <AiOutlineMenu className='text-3xl' onClick={() => setShowSideBar(true)} />
                            </Button>
                        </div>)
                }

            </nav>
        </>
    )
}

export default Nav