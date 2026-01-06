import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services = () => {

  const servicesData = [
    {
      title: 'Advertising',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage and convert.',
      icon: assets.ads_icon
    },
    {
      title: 'Content marketing',
      description: 'Strategic content marketing that builds trust and drives growth.',
      icon: assets.marketing_icon
    },
    {
      title: 'Content writing',
      description: 'We help you execute your plan and deliver measurable results.',
      icon: assets.content_icon
    },
    {
      title: 'Social media',
      description: 'Build a strong social media presence and engage your audience effectively.',
      icon: assets.social_icon
    }
  ]

  return (
    <div
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 
      sm:px-12 lg:px-40 pt-30 text-gray-700 dark:text-white"
    >
      
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-10 dark:hidden"
      />

      
      <Title
        title="How can we help?"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Services
