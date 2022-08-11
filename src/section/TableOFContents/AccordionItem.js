import React from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';


const AccordionItem = ({ faq, onToggle, active }) => {
    const { question, answer } = faq;
    return (
        <div className={`accordion_item mt-1 ${active ? "active" : ""}`}>
            <button className="button" onClick={onToggle}>
                {question}
                <span className="control">{active ? < IoIosArrowUp /> : <IoIosArrowDown />} </span>
            </button>
            <div className={`answer_wrapper ${active ? "open" : ""}`}>
                <div className="answer">
                    <h5>Personal information you disclose to us</h5>
                    <h5>In Short:  We collect personal information that you provide to us.</h5>
                    <p>We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the Services or otherwise contacting us.
                        The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make and the products and features you use. The personal information we collect can include the following:
                        Publicly Available Personal Information. We collect email addresses; first name, maiden name, last name, and nickname; and other similar data.</p>
                    <p>Personal Information Provided by You. We collect data collected from surveys; passwords; and other similar data.
                        Social Media Login Data. We may provide you with the option to register using social media account details, like your Facebook, Twitter or other social media account. If you choose to register in this way, we will collect the Information described in the section called &quot;HOW DO WE HANDLE YOUR SOCIAL LOGINS&quot; below.
                        All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.</p>
                    <h5>
                        Information automatically collected</h5>
                    <h5>In Short:   Some information — such as IP address and/or browser and device characteristics — is collected automatically when you visit our Services.</h5>
                    <p>We automatically collect certain information when you visit, use or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;