import React from 'react';
import linkedin from '../../assets/images/linkedin.png';
import teamm from '../../assets/images/teamm1.png';

const Team = () => {
    const Card = ({ position, name, image, description }) => {
        return (
            <div className="p-4">
                
                <div className='flex flex-row gap-3 items-center'>
                    <img className="w-[100px] h-[100px]" src={image} alt="Team member"/>
                    <div className='relative '>
                        <h2>{name}</h2>
                        <p>{position}</p>
                        <div className='absolute top-2 right-2'>
                            <img src={linkedin} alt="linkedin logo" />
                        </div>
                    </div>                
                </div>
                <div>
                    <p>{description}</p>
                </div>
                
            </div>
        )
    }
  return (
    <div>
        <h1>Team</h1>
        <p>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
        {/* Team members */}
        <div>
            <Card image={teamm} name="Jane Doe" position="Director of Operations" description="7+ years of experience in project management and team leadership. Strong organizational and communication skills"  />
            <Card image={teamm} name="John Smith" position="CEO and Founder " description="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy" />
            <Card image={teamm} name="Emily Brown" position="Marketing Manager" description="5+ years of experience in digital marketing. Strong creative and problem-solving skills" />    
            <Card image={teamm} name="David Garcia" position="Digital Strategist" description="3+ years of experience in digital marketing. Expertise in social media marketing, content marketing, and email marketing" />
            <Card image={teamm} name="Sarah Wilson" position="Content Writer" description="4+ years of experience in digital marketing. Expertise in blog writing, social media content, and email marketing" />
            <Card image={teamm} name="Michael Davis" position="UX/UI Designer" description="6+ years of experience in digital marketing. Strong design and user experience skills" />
            <Card image={teamm} name="Laura Thompson" position="Product Manager" description="8+ years of experience in digital marketing. Strong project management and team leadership skills" />
        </div>
    </div>
  )
}

export default Team