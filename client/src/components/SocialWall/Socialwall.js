import React from 'react';
import { TwitterTimelineEmbed, InstagramEmbed } from 'react-social-media-embed';
import './SocialWall.css';

const SocialWall = () => {
  return (
    <section className="social-wall">
      <h2 className="section-title">SUIVEZ-NOUS EN TEMPS RÉEL</h2>
      <div className="social-grid">
        <div className="social-item">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="entreprendreafro"
            options={{ height: 400 }}
            noHeader
            noFooter
            transparent
          />
        </div>
        <div className="social-item">
          <InstagramEmbed
            url="https://www.instagram.com/p/CxY9G9sIXXJ/"
            width={320}
            captioned
          />
        </div>
      </div>
      <div className="social-tag">
        #EntreprendreAfro2025
      </div>
    </section>
  );
};

export default SocialWall;