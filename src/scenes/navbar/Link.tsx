import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"



type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: string)=> void;
}

const Links = ({page,selectedPage,setSelectedPage}: Props) => {
    const lowerCasePage= page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage
    return (
      
      <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-primary-500" : " text-red-950"
                }
                transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={()=> setSelectedPage(lowerCasePage) }
      
          
      >
          {page}    
  </AnchorLink>
  )
}

export default Links