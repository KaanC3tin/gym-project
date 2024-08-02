
import Logooo from '@/assets/Logooo.png'
import Link from "./Link"
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import { Icon } from '@iconify/react'
import { useState } from 'react';
import ActionButton from '@/shared/ActionButton';



type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between"
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    const navbarBackground = isTopOfPage ? "bg-primary-100" : "bg-primary-100 drop-shadow"
    return <nav>
        <div
            className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* LEFT SIDE */}
                    <img src={Logooo} alt="logo" width="66px" height="66px" />
                    {/* RIGHT SIDE */}
                    {isAboveMediumScreens ? (<div
                        className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={() => setSelectedPage} />
                            <Link
                                page="Benefits"
                                selectedPage={selectedPage}
                                setSelectedPage={() => setSelectedPage} />
                            <Link
                                page=" Our Classes"
                                selectedPage={selectedPage}
                                setSelectedPage={() => setSelectedPage} />
                            <Link
                                page=" Contact Us"
                                selectedPage={selectedPage}
                                setSelectedPage={() => setSelectedPage} />


                        </div>

                        <div className={`${flexBetween} gap-8`}>

                            <p>Sign In</p>
                            {/* <ActionButton selectedPage={()=> setSelectedPage}>Become A Member</ActionButton> */}
                            <ActionButton setSelectedPage={() => setSelectedPage}>Become A Member</ActionButton>

                            {/* <Icon icon="mdi:menu"  width="56" height="64"/> */}

                        </div>


                    </div>) : (<button
                        className="rounded-full bg-secondary-500 p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <Icon icon="mdi:menu" width="19" height="19" />


                    </button>)}
                </div>
            </div>
        </div>
        {/* MOBILE MENU MODULE*/}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
                {/* CLOSE ICON */}
                <div className="flex justify-end p-12">
                    <button
                        onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        < Icon icon="material-symbols-light:close" width="25" height="25" />
                    </button>
                </div>
                {/* MENU ITEMS */}
                <div className="ml-[33%] flex flex-col gap-10  text-2xl">
                    <Link
                        page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={() => setSelectedPage} />
                    <Link
                        page="Benefits"
                        selectedPage={selectedPage}
                        setSelectedPage={() => setSelectedPage} />

                    <Link
                        page=" Our Classes"
                        selectedPage={selectedPage}
                        setSelectedPage={() => setSelectedPage} />

                    <Link
                        page=" Contact Us"
                        selectedPage={selectedPage}
                        setSelectedPage={() => setSelectedPage} />



                </div>
            </div>
        )}
    </nav>
}

export default Navbar;