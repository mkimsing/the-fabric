import React, { useState } from 'react'
import { StyledDiv, StyledModal } from './ResourceDetails.styled'
import { ResourceTitle, ResourceBody, PageHeader } from '../../components/typography'
import blanked_pug from '../../assets/images/blanket_pug.jpg'
import Chip from '../../components/Chip'
import { MdError, MdCheckCircle, MdLocationOn, MdShare, MdClose } from 'react-icons/md'
import { IoIosMail } from 'react-icons/io'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa'
import NavigationButton from '../../components/buttons/NavigationButton'
import BackButton from '../../components/buttons/BackButton'
import { useMediaQuery } from 'react-responsive'
export default function ResourceDetails({ history }) {
  const [shareModalOpen, setShareModalOpen] = useState(false)

  const isTabletLandscape_Up = useMediaQuery({ query: `(min-width: 768px)` })
  let chips_needed = [
    'Grocery Delivery',
    'Emotional Support',
    'Educational Resources',
    'Financial Assistance',
    'Resource Directory'
  ]
  let chips_available = [
    'Grocery Delivery',
    'Emotional Support',
    'Educational Resources',
    'Financial Assistance',
    'Resource Directory'
  ]

  function openModal() {
    setShareModalOpen(true)
  }

  function closeModal() {
    setShareModalOpen(false)
  }
  return (
    <StyledDiv>
      {
        isTabletLandscape_Up ?
          <>
            <BackButton className='back-button' text='Return to results' onClick={() => { history.goBack() }}></BackButton>
            <div className='flex-container'>
              <div className='col-left'>
                <img src={blanked_pug} className='resource-logo'></img>
                <div className='location'>
                  <MdLocationOn color='black' size={21} className='location__icon' />
                  <h4 className='location__title'>
                    Location
                </h4>
                  <ResourceBody tag='p'>Vancouver, BC</ResourceBody>
                </div>
                <div className='divider'> </div>
                <div className='share'>
                  <div className='share__title-container'>

                    <MdShare color='black' size={21} className='share__icon' />
                    <h4 className='share__title'>
                      Share to:
                  </h4>
                  </div>
                  <div className='share__icon-container'>
                    <FaFacebookSquare color='black' size={24} />
                    <FaTwitterSquare color='black' size={24} className='facebook-icon' />
                    <FaLinkedin color='black' size={24} className='linkedin-icon' />
                    <IoIosMail color='black' size={32} />
                  </div>
                </div>
                <div className='divider'> </div>
                <a target="_blank" href="https://www.nationalgeographic.com/animals/mammals/p/platypus/" style={{ textDecoration: 'none' }}>
                  <NavigationButton text='visit their website' onClick={() => { }} className='navigation-button' />
                </a>
              </div>
              <div className='col-right'>
                <ResourceTitle tag='h2'>Coming Together Vancouver</ResourceTitle>
                <ResourceBody tag='p'>Our world is changing and so are we.

                In this time of uncertainty, we can choose fear, division, hoarding, and increasing inequality across society.

                Or we can choose to change the narrative.
                We choose the latter.

                We are bringing together people who want to tell a different story.

                This is for all of us who want to connect to share resources, extend a helping hand to our neighbours, show solidarity for healthcare workers and the vulnerable, and highlight social movements that are fighting for access to healthcare, housing, and workers’ rights.

                This is for people from across Vancouver to create the kind of community that we want to be a part of.
              </ResourceBody>
                <div className='support-title support-title__needed'>
                  <MdError color='black' size={15} className='support-title__icon' />
                Help Needed
              </div>
                <div className='chip-container chip-container__needed'>
                  {
                    chips_needed.map(chip => {
                      return <Chip>{chip}</Chip>
                    })
                  }
                </div>
                <div className='support-title support-title__available'>
                  <MdCheckCircle color='black' size={15} className='support-title__icon' />
                Help Available
              </div>
                <div className='chip-container chip-container__available'>
                  {
                    chips_available.map(chip => {
                      return <Chip>{chip}</Chip>
                    })
                  }
                </div>
              </div>
            </div>
          </>
          :
          <>
            <ResourceTitle tag='h2'>Coming Together Vancouver</ResourceTitle>
            <img src={blanked_pug} className='resource-logo'></img>
            <div className='divider'> </div>
            <ResourceBody tag='p'>Our world is changing and so are we.

            In this time of uncertainty, we can choose fear, division, hoarding, and increasing inequality across society.

            Or we can choose to change the narrative.
            We choose the latter.

            We are bringing together people who want to tell a different story.

            This is for all of us who want to connect to share resources, extend a helping hand to our neighbours, show solidarity for healthcare workers and the vulnerable, and highlight social movements that are fighting for access to healthcare, housing, and workers’ rights.

            This is for people from across Vancouver to create the kind of community that we want to be a part of.
            </ResourceBody>
            <div className='divider'> </div>
            <div className='support-title support-title__needed'>
              <MdError color='black' size={15} className='support-title__icon' />
              Help Needed
            </div>
            <div className='chip-container chip-container__needed'>
              {
                chips_needed.map(chip => {
                  return <Chip>{chip}</Chip>
                })
              }
            </div>
            <div className='support-title support-title__available'>
              <MdCheckCircle color='black' size={15} className='support-title__icon' />
              Help Available
            </div>
            <div className='chip-container chip-container__available'>
              {
                chips_available.map(chip => {
                  return <Chip>{chip}</Chip>
                })
              }
            </div>
            <div className='divider'> </div>
            <div className='location'>
              <MdLocationOn color='black' size={21} className='location__icon' />
              <h4 className='location__title'>
                Location
              </h4>
              <ResourceBody tag='p'>Vancouver, BC</ResourceBody>
            </div>
            <div className='divider'> </div>
            <div className='share' onClick={() => {
              setShareModalOpen(true)
            }}>
              <div className='share__title-container'>
                <MdShare color='black' size={21} className='share__icon' />
                <h4 className='share__title'>
                  Share this resource
              </h4>
              </div>
            </div>
            <div className='divider'> </div>
            <a target="_blank" href="https://www.nationalgeographic.com/animals/mammals/p/platypus/" style={{ textDecoration: 'none' }}>
              <NavigationButton text='visit their website' onClick={() => { }} className='navigation-button' />
            </a>
            <BackButton text='Return to results' onClick={() => { history.goBack() }}></BackButton>
            <StyledModal isOpen={shareModalOpen}>
              <div onClick={closeModal} className='modal__close'>
                <MdClose color='black' size={19} />
              </div>
              <PageHeader tag='h2' className='modal__title' size={'18'}>Share to:</PageHeader>
              <div className='modal__icon-container'>
                <FaFacebookSquare color='black' size={32} />
                <FaTwitterSquare color='black' size={32} className='facebook-icon' />
                <FaLinkedin color='black' size={32} className='linkedin-icon' />
                <IoIosMail color='black' size={40} />
              </div>
            </StyledModal>
          </>
      }
    </StyledDiv >
  )
}
