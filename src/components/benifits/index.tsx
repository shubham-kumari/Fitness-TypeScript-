import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { SelectedPage } from '../../shared/types'
import { motion } from 'framer-motion'
import Htext from '../../shared/Htext'


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benifits = ({setSelectedPage}: Props) => {
  return (
    <section id='benifits' className='mx-auto min-h-full w-5/6 py-20 '>
      <motion.div  onViewportEnter={() => setSelectedPage(SelectedPage.Benifits)}>
        <div>
            <Htext>MORE THAN JUST A GYM.</Htext>
        </div>
        </motion.div>  
    </section>
  )
}

export default Benifits