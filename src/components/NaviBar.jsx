import logo from '../assets/logos/wageesha_logo.png'
import { motion } from 'framer-motion'

const NaviBar = () => {
  return (
    <div className='flex h-18 items-center justify-between px-10 mt-4  mx-3 bg-white bg-shadow-3xl'>
        <div className='cursor-pointer'>
            <img src={logo} alt="logo" className='w-80'/>
        </div>
        <div className='flex w-4xl justify-between'>
        <div className='flex justify-around w-3xl font-main '>
            <motion.a 
            whileHover={{ scale: 1.03 }} 
            className='hover:text-primary cursor-pointer'>
                Home
            </motion.a>
            <motion.a 
            whileHover={{ scale: 1.03 }} 
            className='hover:text-primary cursor-pointer'>
                About Me
            </motion.a>
            <motion.a 
            whileHover={{ scale: 1.03 }} 
            className='hover:text-primary cursor-pointer'>
                Education
            </motion.a>
            <motion.a 
            whileHover={{ scale: 1.03 }} 
            className='hover:text-primary cursor-pointer'>
                Projects
            </motion.a>
            <motion.a 
            whileHover={{ scale: 1.03 }} 
            className='hover:text-primary cursor-pointer'>
                Voice
            </motion.a>
        </div>
        <div className='font-main'>
            <motion.a 
            whileHover={{ scale: 1.03 }} 
            className='hover:text-primary cursor-pointer'>
                Contact Me
            </motion.a>
        </div>
        </div>
    </div>
  )
}

export default NaviBar
