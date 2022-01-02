import styled,{css} from 'styled-components';

export const Paragraph = styled.p`


    ${({contentText}) => contentText && css `
        font-size: ${({theme})=> theme.fontSize.medium};
        font-weight: ${({theme})=> theme.fontWeight.xbold};
        color:${({theme}) => theme.elemColor.primary}
       `
    }
    ${({contentTextAlt}) => contentTextAlt && css `
        font-size: ${({theme})=> theme.fontSize.xsmall};
        font-weight: ${({theme})=> theme.fontWeight.xbold};
        color:#fff;
       `
    }
    ${({decorativeText}) => decorativeText && css`
         display: block;
         background-color: ${({theme})=> theme.elemColor.alternative};
         font-size: ${({theme})=> theme.fontSize.xsmall};
         padding: 8px 10px;
         border-radius: 30px;
         color: #fff;
         width: 230px;
         margin-top:10px;
         margin-bottom:0px;
         text-transform: uppercase;
    `}
    ${({smallText}) => smallText && css`
         font-weight: ${({theme})=> theme.fontWeight.thin};
         margin-top: 14px;
         font-size: ${({theme})=> theme.fontSize.small};
         @media(min-width: 768px) {
           font-size: ${({theme})=> theme.fontSize.medium};
         }
    `}
    ${({opinionsText}) => opinionsText && css`
         font-weight: ${({theme})=> theme.fontWeight.regular};
         margin-top: 14px;
         color:#fff;
         font-size: ${({theme})=> theme.fontSize.xsmall};
    `}
`