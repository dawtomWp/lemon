import { useStaticQuery, graphql } from "gatsby";


export const useTestimonialsQuery = () => {
    const data = useStaticQuery(graphql`
       query TestimonialsQuery {
        opinions: allWpTestimonial(limit: 6) {
           edges {
             node {
               id
               acfTestimonials {
                 fieldGroupName
                 testimonialsCompany
                 testimonialsEmail
                 testimonialsName
                 testimonialsOpinion
                 testimonialsRating
                 testimonialsSurname
               }
             }
           }
        }
    }
    `)
    return data;
}
 
