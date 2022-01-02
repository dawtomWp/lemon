import React, { useState } from "react"
import styled from "styled-components"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import PageTemplate from "../templates/PageTemplate"
import { PageBanner } from "../components/molecules/PageBanner"
import lemonPlant from "../assets/images/lemonPlant1.png"
import { Heading } from "../components/atoms/Heading"
import { ContactCards } from "../components/organisms/ContactCards"
import { Paragraph } from "../components/atoms/Paragraph"

const CONTACT_MUTATION = gql`
  mutation CreateSubmissionMutation(
    $clientMutationId: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $messageTopic: String!
    $message: String!
  ) {
    createSubmission(
      input: {
        clientMutationId: $clientMutationId
        firstName: $firstName
        lastName: $lastName
        email: $email
        messageTopic: $messageTopic
        message: $message
      }
    ) {
      success
      data
    }
  }
`

const ContactPage = () => {
  const [firstNameValue, setFirstNameValue] = useState("")
  const [lastNameValue, setLastNameValue] = useState("")
  const [emailValue, setEmailValue] = useState("")
  const [messageTopicValue, setMessageTopicValue] = useState("")
  const [messageValue, setMessageValue] = useState("")
  return (
    <PageTemplate>
      <PageBanner
        title="Kontakt"
        desc="Wypełnij formularz kontaktowy lub zadzwoń"
      />
      <InnerWrapper>
  
        <Mutation mutation={CONTACT_MUTATION}>
          {(createSubmission, { loading, error, data }) => (
            <React.Fragment>
              <form
                onSubmit={async event => {
                  event.preventDefault()
                  createSubmission({
                    variables: {
                      clientMutationId: "example",
                      firstName: firstNameValue,
                      lastName: lastNameValue,
                      email: emailValue,
                      messageTopic: messageTopicValue,
                      message: messageValue,
                    },
                  })
                }}
              >
                <Paragraph decorativeText>Napisz do nas</Paragraph>
                <Heading children="Formularz kontaktowy" />
                <NameWrapper>
                  <label htmlFor="firstNameInput">Imię </label>
                  <input
                    id="firstNameInput"
                    value={firstNameValue}
                    onChange={event => {
                      setFirstNameValue(event.target.value)
                    }}
                  />

                  <br />

                  <label htmlFor="lastNameInput">Nazwisko </label>
                  <input
                    id="lastNameInput"
                    value={lastNameValue}
                    onChange={event => {
                      setLastNameValue(event.target.value)
                    }}
                  />

                  <br />

                  <label htmlFor="emailInput">Email </label>
                  <input
                    id="emailInput"
                    value={emailValue}
                    onChange={event => {
                      setEmailValue(event.target.value)
                    }}
                  />

                  <br />

                  <label htmlFor="favoriteFoodInput">Temat wiadomości </label>
                  <select
                    id="messageTopicInput"
                    value={messageTopicValue}
                    onChange={event => {
                      setMessageTopicValue(event.target.value)
                    }}
                  >
                    <option>Wycena projektu</option>
                    <option>Współpraca</option>
                    <option>Reklamacja</option>
                    <option>Inne</option>
                  </select>

                  <br />

                  <label htmlFor="messageInput">Wiadomość </label>
                  <textarea
                    id="messageInput"
                    cols="6"
                    rows="9"
                    value={messageValue}
                    onChange={event => {
                      setMessageValue(event.target.value)
                    }}
                  ></textarea>

                  <br />

                  <button type="submit">Wyślij</button>
                </NameWrapper>
              </form>

              <div style={{ padding: "20px" }}>
                {loading && <p>Loading...</p>}
                {error && (
                  <p>An unknown error has occured, please try again later...</p>
                )}
                {data && <p>Wysłano wiadomość</p>}
              </div>
            </React.Fragment>
          )}
        </Mutation>

        <img src={lemonPlant} class="" alt="" />
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#4C57CF"
            d="M39.9,-51.9C54.4,-44.4,70.6,-36.3,72.8,-24.8C75,-13.2,63.2,1.7,56.6,17.3C50.1,32.9,48.7,49,40.1,52.7C31.6,56.4,15.8,47.8,2.2,44.8C-11.4,41.8,-22.8,44.5,-29.1,40C-35.4,35.5,-36.5,23.9,-46.5,10.9C-56.4,-2,-75.2,-16.3,-74,-25.3C-72.8,-34.4,-51.7,-38.2,-36,-45.3C-20.4,-52.5,-10.2,-62.9,1.3,-64.6C12.7,-66.4,25.4,-59.4,39.9,-51.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </InnerWrapper>

      <ContactCards/>
    </PageTemplate>
  )
}

export default ContactPage

const InnerWrapper = styled.div`
  display: flex;
  position: relative;

  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 25px;
  max-width: 1300px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  margin: 50px auto;
  & > div {
    flex: 1;
    z-index:2;
  }
  & > form {
    z-index:5;
  }
  & > img {
    width: 30%;
  }
  & > svg {
    width:800px;
    position: absolute;
    opacity:.1;
    z-index:0;
    right:-50%;
  }
`

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > input,
  select,
  textarea {
    border: none;
    padding: 12px 10px;
  }

  & > button {
    display: block;
    position: relative;
    font-size: ${({ theme }) => theme.fontSize.medium};
    height: 42px;
    padding: 7px 15px;
    background-color: ${({ theme }) => theme.elemColor.black};
    border: none;
    color: #fff;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    border-radius: 30px;
    font-weight: 600;
    width: 220px;
    &::before {
      content: "";
      position: absolute;
      background-color: black;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: 0.2;
      transform: translateX(-230px);
      transition: all 0.5s;
    }
    &:hover:before {
      transform: translateX(0px);
    }
  }
`
