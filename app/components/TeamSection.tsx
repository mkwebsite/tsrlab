'use client';

import React from 'react';
import Image from 'next/image';
import LinkedInIcon from './icons/linkedin.svg';
import TwitterIcon from './icons/twitter.svg';
import { Dribbble } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function formatPhoneDisplay(phone: string) {
  const cleaned = phone.replace(/\s/g, '');
  if (/^\+971\d{9}$/.test(cleaned)) {
    return `+971 ${cleaned.slice(4, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(9)}`;
  }
  return phone;
}

type TeamMember = {
  name: string;
  role: string;
  roleClassName: string;
  image: string;
  frameClassName: string;
  bio: string;
  education?: string;
  linkedin: string;
  x?: string;
  dribbble?: string;
  email?: string;
  phone?: string;
};

const team: TeamMember[] = [
  {
    name: 'Anupam Kumar',
    role: 'Founder & Principal',
    roleClassName: 'text-[#0d9488]',
    image: '/images/about/team-member-2.jpg',
    frameClassName: 'bg-gradient-to-br from-gray-200 to-gray-400',
    bio:
      'Anupam Kumar is the Founder & Principal of TSR Lab, with over 9 years of experience across research, analytics, government consulting, and digital transformation in Asia and the Middle East.',
    education:
      'Education: PhD (Innovation & Public Policy) – IIT Delhi. B.Tech/M.Tech – IIT Kharagpur',
    linkedin: 'https://www.linkedin.com/in/anupamiitkgp/',
    email: 'anupam@tsrlab.com',
    phone: '+971585912084',
  },
  {
    name: 'Manish Kumar',
    role: 'CEO & Founder',
    roleClassName: 'text-[#2563eb]',
    image: '/images/about/team-member-1.jpg',
    frameClassName: 'bg-gray-100',
    bio: 'A seasoned entrepreneur with a passion for technology and building products that create lasting impact for clients and communities.',
    linkedin: 'https://www.linkedin.com/company/tsrlab/',
    x: 'https://x.com/TSRLab1',
  },
  {
    name: 'Prem Upadhyay',
    role: 'Creative Director',
    roleClassName: 'text-[#9333ea]',
    image: '/images/about/team-member-3.jpg',
    frameClassName: 'bg-[#84cc16]',
    bio: 'Brings a user-first mindset to every engagement, with a focus on visual storytelling and clarity across digital touchpoints.',
    linkedin: 'https://www.linkedin.com/company/tsrlab/',
    dribbble: '#',
  },
];

export default function TeamSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="team" className="py-16 md:py-20 lg:py-28 bg-white">
      <div className="container-custom">
        <div
          className={`text-center space-y-4 md:space-y-5 mb-12 md:mb-16 max-w-3xl mx-auto px-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827]">Meet Our Team</h2>
          <p className="text-sm md:text-base lg:text-lg text-[#6b7280] leading-relaxed">
            A diverse team of designers, developers, AI specialists, and product strategists passionate about
            building exceptional mobile experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`flex flex-col items-center text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="relative mb-5 md:mb-6">
                <div
                  className={`relative h-36 w-36 sm:h-40 sm:w-40 md:h-44 md:w-44 rounded-full overflow-hidden ${member.frameClassName} p-1`}
                >
                  <div className="relative h-full w-full rounded-full overflow-hidden bg-white">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 144px, 176px"
                    />
                  </div>
                </div>
                <span
                  className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full bg-[#22c55e] ring-[3px] ring-white"
                  aria-hidden
                  title="Available"
                />
              </div>

              <h3 className="text-lg md:text-xl font-bold text-[#111827] mb-1 text-center">{member.name}</h3>
              <p className={`text-sm md:text-base font-semibold mb-4 text-center ${member.roleClassName}`}>
                {member.role}
              </p>
              <div className="w-full max-w-sm mx-auto mb-4 space-y-2 text-xs md:text-sm text-[#6b7280] leading-relaxed text-justify">
                <p>{member.bio}</p>
                {member.education && <p className="text-[11px] md:text-xs">{member.education}</p>}
              </div>

              {(member.email || member.phone) && (
                <div className="mb-5 w-full max-w-sm mx-auto flex flex-col gap-1.5 text-left text-xs md:text-sm text-[#6b7280]">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="hover:text-[#ff3333] transition-colors break-all"
                    >
                      {member.email}
                    </a>
                  )}
                  {member.phone && (
                    <a
                      href={`tel:${member.phone.replace(/\s/g, '')}`}
                      className="hover:text-[#ff3333] transition-colors"
                    >
                      {formatPhoneDisplay(member.phone)}
                    </a>
                  )}
                </div>
              )}

              <div className="flex items-center justify-center gap-4 text-[#9ca3af]">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff3333] transition-colors"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <LinkedInIcon className="w-5 h-5" style={{ color: 'currentColor' }} />
                </a>
                {member.x ? (
                  <a
                    href={member.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ff3333] transition-colors"
                    aria-label={`${member.name} on X`}
                  >
                    <TwitterIcon className="w-5 h-5" style={{ color: 'currentColor' }} />
                  </a>
                ) : null}
                {member.dribbble ? (
                  <a
                    href={member.dribbble}
                    className="hover:text-[#ff3333] transition-colors"
                    aria-label={`${member.name} on Dribbble`}
                  >
                    <Dribbble className="w-5 h-5" strokeWidth={1.75} />
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
