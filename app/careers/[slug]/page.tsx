'use client'

import { Button } from '@/components/atoms/button'
import { Input } from '@/components/atoms/input/input'
import { PhoneInput } from '@/components/atoms/phone-input'
import { Typography } from '@/components/atoms/typography'
import { UploadInput } from '@/components/atoms/upload-input/upload-input'

export default function Page() {
  return (
    <div className="-mx-8 -mb-28 pb-12 md:-mb-60 md:bg-[url('/images/bgs/1.svg')] md:bg-right md:bg-repeat-y xl:-mx-16 2xl:-mx-28">
      <main className="mb-28 flex flex-col gap-8 px-8 md:mb-60 md:gap-14 xl:px-16 2xl:px-28">
        <div className="flex flex-col items-center gap-4 md:gap-14">
          <Typography variant="h1" className="text-center">
            <span className="text-primary">Full</span> Stack Developer
          </Typography>
          <Typography variant="subtitle1" className="text-center md:w-2/3">
            Join Ograviti as a Full Stack Developer to shape the digital future.
            Contribute to cutting-edge projects, redefine industry standards,
            and be part of a culture that values creativity and collaboration
          </Typography>
        </div>

        <div className="flex flex-col gap-4 md:w-2/3 md:gap-8">
          <Typography variant="h2" className="text-primary md:py-0">
            Background
          </Typography>
          <Typography variant="subtitle2">
            <ul className="flex flex-col gap-1 pl-4">
              <li className="list-outside list-disc">
                Bachelor&apos;s degree in Computer Science, Engineering, or a
                related field.
              </li>
              <li className="list-outside list-disc">
                Proven track record of successful full-stack development
                projects.
              </li>
              <li className="list-outside list-disc">
                Continuous learning mindset to stay updated with emerging
                technologies and industry trends.
              </li>
            </ul>
          </Typography>
        </div>
        <div className="flex flex-col gap-4 md:w-2/3 md:gap-8">
          <Typography variant="h2" className="text-primary md:py-0">
            Requirements
          </Typography>
          <Typography variant="subtitle2">
            <ul className="flex flex-col gap-1 pl-4">
              <li className="list-outside list-decimal">
                Proven experience as a Full Stack Developer or similar role.
              </li>
              <li className="list-outside list-decimal">
                Proficiency in front-end technologies (HTML, CSS, JavaScript)
                and back-end technologies (Node.js, Python, Ruby).
              </li>
              <li className="list-outside list-decimal">
                Experience with database systems (MySQL, MongoDB) and web
                frameworks (Express, Django).
              </li>
              <li className="list-outside list-decimal">
                Strong understanding of server-side templating languages and
                client-side frameworks (React, Angular, Vue).
              </li>
              <li className="list-outside list-decimal">
                Familiarity with version control systems (Git) and agile
                development methodologies.
              </li>
              <li className="list-outside list-decimal">
                Excellent problem-solving skills and ability to work
                collaboratively in a team.
              </li>
            </ul>
          </Typography>
        </div>
        <div className="flex flex-col gap-4 md:w-2/3 md:gap-8">
          <Typography variant="h2" className="text-primary md:py-0">
            Benefits
          </Typography>
          <Typography variant="subtitle2">
            <ul className="flex flex-col gap-1 pl-4">
              <li className="list-outside list-decimal">
                Competitive salary and performance-based bonuses.
              </li>
              <li className="list-outside list-decimal">
                Comprehensive health and dental insurance.
              </li>
              <li className="list-outside list-decimal">
                Flexible work hours and remote work options.
              </li>
              <li className="list-outside list-decimal">
                Professional development opportunities and ongoing training.
              </li>
              <li className="list-outside list-decimal">
                Collaborative and inclusive work environment.
              </li>
              <li className="list-outside list-decimal">
                Opportunities to work on cutting-edge projects and contribute to
                innovative solutions.
              </li>
              <li className="list-outside list-decimal">
                Employee recognition programs and social events.
              </li>
              <li className="list-outside list-decimal">
                Career advancement opportunities within a growing organization.
              </li>
            </ul>
          </Typography>
        </div>
        <Typography variant="subtitle1" className="text-center text-3xl">
          Are you interested?
        </Typography>
        <div className="flex flex-col items-center justify-center gap-14 md:gap-24">
          <div className="grid w-full grid-cols-1 justify-center gap-8 md:w-auto md:grid-cols-2">
            <Input
              label="First Name"
              placeholder="Enter First Name"
              className="md:w-[554px]"
            />
            <Input
              label="Last Name"
              placeholder="Enter Last Name"
              className="md:w-[554px]"
            />
            <Input
              label="Email Address"
              placeholder="Enter Email Address"
              className="md:w-[554px]"
            />
            <div className="w-full md:w-[554px]">
              <PhoneInput
                label="Phone Number"
                placeholder="Enter Phone Number"
                fullWidth
              />
            </div>
            <UploadInput className="w-full md:w-[227px]" />
          </div>
          <Button>Apply Now</Button>
        </div>
      </main>
    </div>
  )
}
