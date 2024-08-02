// import HText from "@/shared/HText";
// import { SelectedPage } from "@/shared/types"
// import { motion } from "framer-motion";
// import { useState } from "react"

// // import { useForm } from "react-hook-form";
// // import ContactUseGraphic from "@/assets/ContactUsPageGraphic.png"


// type Props = {
//     setSelectedPage: (value: SelectedPage) => void;
// }

// const ContactUs = ({ setSelectedPage }: Props) => {

//     const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`

//     const {
//         register,
//         trigger,
//         formState: { errors }
//     } = useState()

//     const onSubmit = async (e: any) => {
//         const isValid = await trigger()
//         if (!isValid) {
//             e.preventDefault()
//         }
//     }
//     return (
//         <section id="Contactus" className="mx-auto w-5/6 pt-24 pb-32">
//             <motion.div
//                 onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
//                 {/* HEADER */}
//                 <motion.div
//                     className="md:w-3/5"
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.5 }}
//                     transition={{ duration: 0.5 }}
//                     variants={{
//                         hidden: {
//                             opacity: 0, x: -50
//                         },
//                         visible: {
//                             opacity: 1, x: 0
//                         }
//                     }
//                     }>
//                     <HText>
//                         <span className="text-primary-500 ">
//                             JOIN NOW
//                         </span>TO GET IN SHAPE
//                     </HText>
//                     <p className="my-5">
//                         Get in touch with us for any inquiries or support. We're here to help you with your needs and ensure your experience with us is outstanding.
//                     </p>


//                 </motion.div>
//                 {/* FORM AND IMAGE */}
//                 <div className="mt-10 justify-between gap-8 md:flex">

//                     <motion.div className="mt-10 basis-3/5 md:top-0"
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.5 }}
//                         transition={{ duration: 0.5 }}
//                         variants={{
//                             hidden: {
//                                 opacity: 0, y: -50
//                             },
//                             visible: {
//                                 opacity: 1, y: 0
//                             }
//                         }
//                         }
//                     >
//                         <form
//                             target="_blank"
//                             onSubmit={onSubmit}
//                             method="POST"
//                             action="https://formsubmit.co/your@email.com">
//                             <input className={inputStyles}
//                                 type="text"
//                                 placeholder="NAME"
//                                 {...register("name",
//                                     {
//                                         required: true,
//                                         maxLenght: 100,
//                                     }
//                                 )} />
//                             {errors.name && (
//                                 <p className="mt-1 text-primary-500 ">
//                                     {errors.name.type === "required" && "This filed is required."}
//                                     {errors.name.type === "maxLenght" && "Max Lenght is 100 char."}
//                                 </p>
//                             )}
//                             <input className={inputStyles}
//                                 type="text"
//                                 placeholder="EMIL"
//                                 {...register("email",
//                                     {
//                                         required: true,
//                                         pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,

//                                     }
//                                 )} />
//                             {
//                                 errors.email && (<p className="mt-1 text-primary-500
//                                 " >{errors.email.type === "required" && "This filed is required."}
//                                     {errors.email.type === "pattern" && "Invalid email adress"}


//                                 </p>)
//                             }
//                             <input className={inputStyles}
//                                 type="text"
//                                 placeholder="MESSAGE"
//                                 {...register("message",
//                                     {
//                                         required: true,
//                                         maxLenght: 2000,
//                                     }
//                                 )} />
//                             {errors.message && (
//                                 <p className="mt-1 text-primary-500 ">
//                                     {errors.message.type === "required" && "This filed is required."}
//                                     {errors.message.type === "maxLenght" && "Max Lenght is 2000 char."}
//                                 </p>
//                             )}
//                         </form>

//                     </motion.div>
//                 </div>

//             </motion.div>

//         </section>
//     )
// }

// export default ContactUs
import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
// import ContactUseGraphic from "@/assets/ContactUsPageGraphic.png"


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {

    const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mb-5 `

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm()

    const onSubmit = async (e: any) => {
        const isValid = await trigger()
        if (!isValid) {
            e.preventDefault()
        }
    }
    return (
        <section id="Contactus" className="mx-auto w-5/6 pt-24 pb-32">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
                {/* HEADER */}
                <motion.div
                    className="md:w-3/5"
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
                        <span className="text-primary-500 ">
                            JOIN NOW
                        </span> TO GET IN SHAPE
                    </HText>
                    <p className="my-5">
                        Get in touch with us for any inquiries or support. We're here to help you with your needs and ensure your experience with us is outstanding.
                    </p>
                </motion.div>
                {/* FORM AND IMAGE */}
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div className="mt-10 basis-3/5 md:top-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: {
                                opacity: 0, y: -50
                            },
                            visible: {
                                opacity: 1, y: 0
                            }
                        }}>
                        <form
                            target="_blank"
                            onSubmit={onSubmit}
                            method="POST"
                            action="https://formsubmit.co/b997a9eeb431093b4d4f485db1401743e5e2dc4dea8fcf7bd5126803eb0f9d92">
                            <input className={inputStyles}
                                type="text"
                                placeholder="NAME"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })} />
                            {errors.name && (
                                <p className="mt-2 text-primary-500 ">
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" && "Max Length is 100 char."}
                                </p>
                            )}
                            <input className={inputStyles}
                                type="email"
                                placeholder="EMAIL"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })} />
                            {errors.email && (
                                <p className="mt-2 text-primary-500">
                                    {errors.email.type === "required" && "This field is required."}
                                    {errors.email.type === "pattern" && "Invalid email address"}
                                </p>
                            )}
                            <textarea className={inputStyles}
                                placeholder="MESSAGE"
                                rows={4}
                                cols={50}
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })} />
                            {errors.message && (
                                <p className="mt-2 text-primary-500 ">
                                    {errors.message.type === "required" && "This field is required."}
                                    {errors.message.type === "maxLength" && "Max Length is 2000 char."}
                                </p>
                            )}
                            <button type="submit" className="mt-5 rounded-lg bg-primary-500 hover:bg-secondary-500 opacity-100 hover:opacity-88duration-500 px-20 py-3 text-white hover:text-gray-500">
                                Submit
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        className="relative mt-16 basis-2/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: .2, duration: 0.5 }}
                        variants={{
                            hidden: {
                                opacity: 0, y: 50
                            },
                            visible: {
                                opacity: 1, y: 0
                            }
                        }}
                    >
                        <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                            <img src={ContactUsPageGraphic} alt="contact-us-page-graphic" className="w-full" />
                        </div>


                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default ContactUs;
