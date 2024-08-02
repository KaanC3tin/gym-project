import useMediaQuery from "@/hooks/useMediaQuery"
import { SelectedPage } from "@/shared/types"
import ActionButton from "@/shared/ActionButton"
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import AnchorLink from "react-anchor-link-smooth-scroll"
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import { motion } from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}


const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    return (
        <section
            id="home"
            className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
        >
            {/* IMAGE AND MAIN HEADER */}
            <motion.div className="md:flex mx-auto w-5/6 items-center md:w-5/6"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/* MAIN HEADER */}
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* HEADINGS */}
                    <motion.div className="md:-mt-20"
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
                        }}
                    >
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                                <img alt="home-page-text" src={HomePageText} />
                            </div>
                        </div>
                        <p className="mt-8 text-sm md:text-start">
                            Unrivaled Gym. Unparalleled Traning Fitness Classes. World Class Studios to get the Body Shapes  That you Dream of... Get Your Dream Body Now.
                        </p>
                    </motion.div>
                    {/* ACTIONS */}
                    <motion.div className="mt-8 flex items-center gap-10"
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
                        }
                    >
                        <ActionButton>
                            Join Now
                        </ActionButton>
                        <AnchorLink
                            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}

                        >
                            <p>Learn More</p>
                        </AnchorLink>

                    </motion.div>
                </div>
                {/* IMAGE */}
                <div className="flex basis-3/5  justify-start md:z-10">
                    <img src={HomePageGraphic} alt="home-page-graphic" />
                </div>
            </motion.div>
            {/* SPONSORS */}
            {
                isAboveMediumScreens && (
                    <div className="h-[150px] w-full bg-primary-100 py-10">
                        <div className=" mx-auto w-5/6">
                            <div className="flex items-center w-3/5  justify-between gap-12">
                                <img src={SponsorRedBull} alt="redbull-sponsor" />
                                <img src={SponsorForbes} alt="Forbes-sponsor" />
                                <img src={SponsorFortune} alt="Fortune-sponsor" />

                            </div>
                        </div>
                    </div>
                )
            }

        </section >
    )
}

export default Home