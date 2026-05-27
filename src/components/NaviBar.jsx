import logo from '../assets/logos/wageesha_logo.png'
import { motion } from 'framer-motion'

const NaviBar = () => {
  return (
    <div className='flex h-15 items-center justify-between px-10 mt-4 rounded-2xl mx-3 bg-white bg-shadow-3xl'>
        <div>
            <img src={logo} alt="logo" className='w-80'/>
        </div>
        <div className='flex w-4xl justify-between'>
        <div className='flex justify-around w-3xl font-main '>
            <motion.button whileHover={{ scale: 1.03 }} className='hover:text-primary'>
                Home
            </motion.button>
            <motion.button whileHover={{ scale: 1.03 }} className='hover:text-primary'>
                About Me
            </motion.button>
            <motion.button whileHover={{ scale: 1.03 }} className='hover:text-primary'>
                Education
            </motion.button>
            <motion.button whileHover={{ scale: 1.03 }} className='hover:text-primary'>
                Projects
            </motion.button>
            <motion.button whileHover={{ scale: 1.03 }} className='hover:text-primary'>
                Voice
            </motion.button>
        </div>
        <div className='font-main'>
            <motion.button whileHover={{ scale: 1.03 }} className='hover:text-primary'>
                Contact Me
            </motion.button>
        </div>
        </div>
    </div>
  )
}

export default NaviBar
