import React from 'react';
import { faJava, faPython, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import ProjectLayout from '../components/ProjectLayout';
function Projects() {
  const creationTravala = 'TELEGRAM CHAT BOT';
  const titleTravala = 'Travala.com';
  const linkTravala = 'https://www.travala.com';
  const descriptionTravala =
    'Custom command BOT created to help Travala.com automate, moderate and engage with their 8000+ users.';

  const featuresTravala = (
    <ul className='list-disc pl-5'>
      <li>Twiter API Integration - Post live Tweets via group chat</li>
      <li>Custom Poll Creation</li>
      <li>Spam Prevention</li>
    </ul>
  );

  const creationBTT = 'PYTHON SCRIPTS';
  const titleBTT = 'MacBook TouchBar Buttons via BetterTouchTool(BTT)';
  const linkBTT = 'https://folivora.ai/';
  const descriptionBTT =
    'Custom TouchBar buttons to show the user real-time market data various Cryptocurrent currencies';

  const featuresBTT = (
    <ul className='list-disc pl-5'>
      <li>CoinGecko API Integration - Gather live market data</li>
      <li>Fully customisable</li>
      <li>User Engagement</li>
    </ul>
  );

  const repoLinkBTT = 'https://github.com/Zidious/BTT-TouchBarScript';

  return (
    <div className='xl:flex-no-wrap xl:flex lg:flex-no-wrap lg:flex sm:flex-wrap md:flex-wrap mb-4 justify-between p-10'>
      <ProjectLayout
        creationName={creationTravala}
        website={linkTravala}
        title={titleTravala}
        description={descriptionTravala}
        features={featuresTravala}
        icon={faJava}
        repo={faLock}
      />
      <ProjectLayout
        creationName={creationBTT}
        website={linkBTT}
        title={titleBTT}
        description={descriptionBTT}
        features={featuresBTT}
        icon={faPython}
        repo={faGithub}
        repoLink={repoLinkBTT}
      />
    </div>
  );
}
export default Projects;
