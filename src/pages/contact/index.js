import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { BiSolidPhoneCall } from 'react-icons/bi';

import Layout from '@components/layout/layout';
import Main from '@components/Main/Main';
import Seo from '@components/seo';
import ContactWrapper from './style';
import contactInfo from '@data/contactInfo';

const ContactPage = () => {
  return (
    <Layout pageTitle="联系我们">
      <Main>
        <ContactWrapper>
          <h1>联系我们</h1>
          <div className="content">
            <div className="top">
              <div className="map">
                <StaticImage src="../../images/address-map.jpg" alt="map" />
              </div>
              <div className="contact-info">
                <div className="address info-text">
                  <div className="icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="text">{contactInfo.officeAddress}</div>
                </div>
                <div className="email info-text">
                  <div className="icon">
                    <GrMail />
                  </div>
                  <div className="text">{contactInfo.mailAddress}</div>
                </div>
                <div className="phone info-text">
                  <div className="icon">
                    <BiSolidPhoneCall />
                  </div>
                  <div className="text">{contactInfo.phoneNumber}</div>
                </div>
              </div>
            </div>

            <div className="bottom">
              <div className="qrcode qrcode-one">
                {/* <StaticImage src="../../images/qrcode/qrcode1.jpeg" alt="qrcode" /> */}
              </div>
              <div className="qrcode qrcode-two">
                <StaticImage src="../../images/qrcode/qrcode2.jpeg" alt="qrcode" />
              </div>
            </div>
          </div>
        </ContactWrapper>
      </Main>
    </Layout>
  );
};

export const Head = () => <Seo title="联系我们" />;

export default ContactPage;
