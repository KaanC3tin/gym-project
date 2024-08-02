import { SelectedPage, ClassesType } from '@/shared/types'
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from 'framer-motion'
import HText from '@/shared/HText';
import Class from './Class'



const classes: Array<ClassesType> = [{
    name: "Weight Traning Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorum omnis aspernatur facere saepe quo aliquam! Doloribus eos quam dolores blanditiis eum aut inventore magnam distinctio nesciunt similique, voluptatum culpa sit!",
    image: image1
},
{
    name: "Yoga  Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorum omnis aspernatur facere saepe quo aliquam! Doloribus eos quam dolores blanditiis eum aut inventore magnam distinctio nesciunt similique, voluptatum culpa sit!",
    image: image2
},
{
    name: "Ab Core Traning Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorum omnis aspernatur facere saepe quo aliquam! Doloribus eos quam dolores blanditiis eum aut inventore magnam distinctio nesciunt similique, voluptatum culpa sit!",
    image: image3
},
{
    name: "Advanture  Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorum omnis aspernatur facere saepe quo aliquam! Doloribus eos quam dolores blanditiis eum aut inventore magnam distinctio nesciunt similique, voluptatum culpa sit!",
    image: image4
},
{
    name: "Fitness Classes",
    description: "",
    image: image5
},
{
    name: " Traning Classes",
    image: image6
},
]
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id="ourclasses" className='w-full bg-primary-100 py-40 '>
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)
                }>
                <motion.div
                    className='mx-auto w-5/6'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: {
                            opacity: 0, x: -50
                        },
                        visible: {
                            opacity: 1, x: 0
                        }
                    }
                    }>
                    <div className='md:w-3/5'>


                        <HText>
                            OUR CLASSES

                        </HText>
                        <p className='py-5'>
                            At KFitness, we offer a variety of classes designed to fit your fitness goals. Whether you're into high-intensity workouts or relaxing yoga sessions, our expert trainers are here to guide you. Join us and take the first step towards a healthier lifestyle!
                        </p>
                    </div>
                </motion.div>

            </motion.div>
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {classes.map((item: ClassesType, index) => (
                        <Class
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image} />
                    ))}
                </ul>

            </div>

        </section>
    )
}

export default OurClasses