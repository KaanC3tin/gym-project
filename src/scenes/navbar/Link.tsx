import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"



type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Links = ({ page, selectedPage, setSelectedPage }: Props) => {
    const lowerCasePage = page.toLowerCase().trim().replace(/ /g, "") as SelectedPage
    return (

        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-primary-500" : " text-red-950"
                }
                transition duration-500 hover:text-primary-300`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}


        >
            {page}
        </AnchorLink>
    )
}

export default Links