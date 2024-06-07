import WhatsAppLink from "@/components/_ui/whatsAppLink"
import { Box } from "@mui/material"
import { ContentHeader } from "./liveTaxStep2.styles"

interface IProps{ 
    text: string
}

export default function HeaderSteps({text}: IProps ) { 

    return(
        <Box>
            <ContentHeader>
                <h2>
                    {text}
                </h2>
                <WhatsAppLink/>
            </ContentHeader>
        </Box>
    )
}