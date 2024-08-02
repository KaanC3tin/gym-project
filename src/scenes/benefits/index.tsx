
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { Icon } from "@iconify/react/dist/iconify.js"
import { motion } from "framer-motion"
import Benefit from "./Benefit";
import ActionButton from '@/shared/ActionButton';
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon: < Icon icon="solar:user-linear" height={37} />,
        title: "State of the Art Facilities",
        description: "Consistent exercise and a balanced diet are the keys to achieving your fitness goals. Stay dedicated, and the results will follow."

    },
    {
        icon: <Icon icon="heroicons:user-group" height={37} />,
        title: "100'S of Diverse Classes",
        description: "Fitness is not just about the body, it's about the mind too. Train both for a healthier, happier life."
    },
    {
        icon: <Icon icon="vaadin:academy-cap" height={37} />,
        title: "Expert and Pro Traniers",
        description: "Embrace the journey of fitness, enjoy every step.It's about progress, not perfection. Celebrate your achievements, big or small."
    }
];

const container = {

    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }

    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
    return <section className="mx-auto min-h-full w-5/6 py-20">

        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            {/* HEADER */}
            <motion.div className="md:my-5 md:w-3-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: {
                        opacity: 0, x: -50
                    },
                    visible: {
                        opacity: 1, x: 0
                    }
                }}>
                <HText>
                    MORE THAN JUST GYM
                </HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equiment, traniers and classes to get your ultimate fitness goals with ease.We provite true care into each and every member.
                </p>
            </motion.div>
            {/* BENEFITS */}
            <motion.div className="md:flex mt-5  items-center   justify-between gap-8 "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key={benefit.title}
                        title={benefit.title}
                        description={benefit.description}
                        icon={benefit.icon}
                        setSelectedPage={() => setSelectedPage}


                    />

                ))}
            </motion.div>
            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img
                    className="mx-auto"
                    src={BenefitsPageGraphic}
                    alt="benefits-page-graphic" />

                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1]  before:content-abscractwaves">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: .1, duration: 0.5 }}
                                variants={{
                                    hidden: {
                                        opacity: 0, x: -50
                                    },
                                    visible: {
                                        opacity: 1, x: 0
                                    }
                                }}>

                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING.{" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>

                    {/* DESCRIPT */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: .2, duration: 0.5 }}
                        variants={{
                            hidden: {
                                opacity: 0, x: 50
                            },
                            visible: {
                                opacity: 1, x: 0
                            }
                        }}>
                        <p className="my-5">
                            "At our fitness center, we offer a variety of programs designed to help you achieve your health and wellness goals. Our experienced trainers provide personalized training plans tailored to your needs. Whether you're looking to lose weight, build muscle, or improve overall fitness, we have the resources and support to help you succeed."
                        </p>
                        <p className="mb-5">
                            "Join our fitness community and transform your life with our expert-led training programs. We offer personalized plans, state-of-the-art equipment, and a supportive environment to help you reach your fitness goals and maintain a healthy lifestyle."
                        </p>
                    </motion.div>
                    {/* BUTTON */}
                    <div className="relative mt-16">

                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton
                                setSelectedPage={() => setSelectedPage}>
                                Join Now
                            </ActionButton>

                        </div>
                    </div>
                </div>
            </div>
        </motion.div>


    </section >
    //  style={{ color: #bfbfbf }}  




}

export default Benefits;