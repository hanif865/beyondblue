import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import { graphql, useStaticQuery } from "gatsby"
//import Img from "gatsby-image"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BookingButton } from "../components/buttons"

const Index = props => {
  // const images = useStaticQuery(graphql`
  //   query {
  //     tumee: file(
  //       relativePath: {
  //         eq: "tumee-bayanbileg-english-speaking-therapist-in-tokyo-beyondbleu.jpg"
  //       }
  //     ) {
  //       childImageSharp {
  //         fluid(maxWidth: 500) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout {...props}>
      <SEO
        title="Psychotherapy for Trauma, Depression &amp; Anxiety. English speaking psychologist in Tokyo"
        description="Psychotherapy for trauma, depression, anxiety, relationship issues &amp; general struggles of modern life."
      />
      <section className="py-6 md:py-16 bg-image bg-image-plant">
    <div className="container">
      <div className="lg:flex">
        <div className="lg:w-2/3">
          <div className="lg:flex items-center">
            <div className="lg:w-2/3">
              <div className="max-w-xl mx-auto">
                <h1 className="text-4xl lg:text-5xl text-center lg:text-left font-light">
                  Psychotherapy for testing
                  <br />
                  <span className="font-bold">trauma</span>,{" "}
                  <span className="font-bold">depression</span>,{" "}
                  <span className="font-bold">anxiety</span>, relationship
                  issues &amp; general struggles of modern life.
                </h1>
              </div>
            </div>
          </div>

          <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl mb-0">
              Most of us reach a point in our lives when we begin to feel that
              it is time for change, but when we recognize how difficult it is
              to alter our existing patterns of thinking and behaviors we tend
              to give up. This in turn leads to further avoidance, fears,
              disappointments, and decreased motivation. Ultimately these
              experiences can leave you feeling anxious or depressed, lead to
              difficulties in relationships, and have you living an unhappy
              life. Although it may feel like a dead end, in reality there are
              many ways in which you could be helped. Psychotherapy is a process
              through which you can explore your issues, improve insight into
              what is holding you back, and develop efficient ways to deal with
              your problems.
            </p>
          </div>
        </div>

            <div className="w-full">
              <h2 className="text-3xl">What is Gottman Method Couples Therapy?</h2>
              <p>
                Gottman Method Couple Therapy is a structured, goal-oriented and
                evidence-based therapy. Intervention strategies are based upon
                Dr.John Gottman’s three decades of scientific research with over
                3,000 couples. This research shows us what actually works to help
                couples achieve a long-term healthy relationship.
                <strong>Some skills that you and your spouse or partner will learn
                  include:</strong>
                  <ul className="list-disc list-outside mx-10 my-6 text-sm">
                    <li>Work through and resolve conflict, even around arguments
                      that you’ve been having for years</li>
                      <li>Develop a greater sense of understanding and appreciation for
                        your partner</li>
                        <li>Increase your fondness and love for each other</li>
                        <li>Build soothing and coping strategies to help you and your
                          partner through the inevitable, tough times</li>
                  </ul>
              </p>
            </div>
            <div className="w-full">
              <h2 className="text-3xl">Most couples wait too long…</h2>
              <p>
                Most couples wait too long before they seek the help that they
                need. If you are browsing this page, chances are that it’s time for
                you to take some action.
              </p>
            </div>
            <div className="w-full">
              <h2 className="text-3xl">Imagine how you and your partner would feel
                if you:</h2>
              <p>
                <ul className="list-disc list-outside mx-10 my-6 text-sm">
                  <li>Felt a sense of trust and ease with each other
                  </li>
                    <li>Had confidence and skills to talk about anything without
                      fighting</li>
                      <li>Enjoyed a more passionate sex life</li>
                      <li>Knew how to support each other to be the best version of
                        yourselves</li>
                </ul>
               
              </p>
            </div>
<div class="aspect-w-16 aspect-h-9 mx-auto">
  <div class="w-full" style={{height:'400px'}}>
    <iframe class=" w-full h-full" src="https://www.youtube.com/embed/Ap1TxCYZCHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</div>


          <div className="text-center md:text-left mt-8">
            <BookingButton />
          </div>
        </div>
        <div className="w-1/3"></div>
      </div>
    </div>
  </section>
    </Layout>
  )
}

export default Index
