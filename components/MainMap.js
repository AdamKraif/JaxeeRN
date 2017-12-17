import React, {Component} from 'react';
import {
    View,
    Dimensions,
    Text,
    ScrollView,
    PanResponder,
    TouchableHighlight,
    Animated,
    Image,
    Easing,
    StyleSheet
} from 'react-native';
import MapView from 'react-native-maps';
import Swiper from 'react-native-swiper';
import AnimatedMarker from './AnimatedMarker'

const {height, width} = Dimensions.get('window');
const FIRST_LEVEL_HEIGHT = 80;

class MainMap extends Component {

    constructor() {
        super();

        this.state = {
            items: {
                "adamkraifgmailcom": {
                    "accessToken": "ya29.GlzyBMM1S7LneIoIBcMluqCYYec4fx5b1xLNuOx6Sj8-3N9M8UM4MtFinraRLvnWbkpCn_MYh-PMlwK2gpRY3oLJ4Hlj8qN_cuYgAtMIoGrU7d1c5igtsJ-Fa4ev2A",
                    "app_version": "1.193",
                    "availability": false,
                    "bankAccount": {
                        "account_number": "",
                        "routing_number": ""
                    },
                    "checkedTerms": {
                        "consumer": {
                            "checked": true,
                            "dateSign": "2017-10-28T19:03:56.307Z"
                        },
                        "sp": {
                            "checked": true,
                            "dateSign": "2017-11-25T12:35:02.385Z",
                            "terms": "<h3>Jaxee Terms of Service - Service Provider Agreement</h3>\n\n<p>This Terms of Service &ndash; Service Provider Agreement constitutes a legally binding agreement (&ldquo;Agreement&rdquo;) between the service provider who desires to use the Platform to offer Jobs (herein, &ldquo;You&rdquo; or &ldquo;Expert&rdquo;) and Jaxee, LLC. (&ldquo;Company&rdquo; or &ldquo;Jaxee&rdquo;) governing your use of the Jaxee Platform (as defined below), Company&rsquo;s website (Jaxee.com or the &ldquo;Site&rdquo;) or mobile applications. The platform services provided by Company, the Site and mobile applications together are hereinafter collectively referred to as the &ldquo;Jaxee Platform.&rdquo; Your use of the Jaxee Platform constitutes your acceptance of and agreement to all of the terms and conditions in this Agreement and the Privacy Policy (the &ldquo;Privacy Policy&rdquo;), and any future amendments and additions to this Agreement (as defined below) as we may publish from time to time.</p>\n\n<h5>1. The Jaxee Platform connects Experts and Customer Members seeking Jobs.</h5>\n\n<p>The Jaxee Platform is a platform which enables Customer Members and Experts to meet. &ldquo;Customer Members&rdquo; are individuals and/or businesses seeking to obtain services (&ldquo;Jobs&rdquo;) from Experts and are therefore Customer Members of Experts, and &ldquo;Experts&rdquo; are individuals and/or businesses that specialize in a particular field of service that are seeking to perform Jobs for Customer Members. EXPERTS ARE INDEPENDENT CONTRACTORS AND NOT EMPLOYEES, JOINT VENTURERS, PARTNERS OR IN ANY OTHER RELATIONSHIP WITH THE COMPANY. COMPANY DOES NOT PERFORM JOBS AND DOES NOT EMPLOY INDIVIDUALS TO PERFORM JOBS FOR CUSTOMER MEMBERS. EXPERT HEREBY ACKNOWLEDGES THAT COMPANY DOES NOT SUPERVISE, DIRECT, CONTROL OR MONITOR AN EXPERT&rsquo;S WORK AND IS NOT RESPONSIBLE FOR THE WORK PERFORMED OR THE JOBS IN ANY MANNER. EXPERTS ASSUME FULL RESPONSIBILITY AND LIABILITY FOR ALL WORK PERFORMED AS A RESULT OF THE USE OF THE COMPANY&rsquo;S WEBSITE OR MOBILE APPLICATIONS. The Jaxee Platform only enables referrals between Customer Members and Experts for the fulfillment of Jobs. Company is not responsible for the performance of the Customer Members, nor does it have control over the quality, timing, legality, failure to provide, or any other element whatsoever of Jobs, Experts, Customer Members, nor of the integrity, responsibility, qualifications or any of the actions or omissions whatsoever of any Customer Members or Expert. Company makes no representations about the suitability, reliability, timeliness, fitness or, warranty or accuracy of the Jobs requested and Jobs provided by Experts referred through the Jaxee Platform whether in public, private, or offline interactions.</p>\n\n<h5>2. Screening of Experts and Representation and Warranties of Experts</h5>\n\n<p>In Company&rsquo;s sole discretion, Experts may be subject to an extensive screening process before they can register for and during their use of the Jaxee Platform, including but not limited to a verification of identity and a comprehensive criminal background check, at the Country, State and local level, and license and/or permit checks if applicable. Experts hereby give consent to Company to conduct background checks as often as required in compliance with federal and state laws, including, without limitation, the Fair Credit Reporting Act. Although Company may perform background checks of Experts, as outlined above, Company is not required to do so and cannot confirm that each Expert is who they claim to be and therefore, Company cannot and does not assume any responsibility for the accuracy or reliability of identity or background check information or any information provided through the Jaxee Platform. By registering or using the Platform to offer, post or provide Jobs, Expert Members represent and warrant that they, and the employees, agents, contractors, and subcontractors who may perform work for them, are properly and fully qualified and experienced, and licensed, certified, bonded, and insured, as required by applicable laws or regulations to which they may be subject in the jurisdiction(s) in which they offer their Job and in relation to the specific Job they are performing. Jaxee is not in the business of providing Jobs. Expert Members understand and agree that by creating and maintaining an account on the Platform, they receive only the ability to use the Jaxee Platform to access persons interested in receiving Jobs and related tools, including but not limited to the ability to message Customer Members or schedule appointments, that facilitate the provision of Jobs. Expert Members understand and agree that using the Platform does not guarantee that any Jaxee users will engage them for Jobs. Expert Members understand and agree that they are customers of Jaxee, and are not Jaxee employees, joint venturers, partners, or agents. Expert acknowledges that it sets or confirms its own prices, provides its own equipment, and determines its own work schedule. Jaxee does not control, and has no right to control, the services an Expert provides (including how the Expert provides such services) if the Expert is engaged by a Customer Member, except as specifically noted herein. Company does not screen its Customer Members. When interacting with Customer Members or other Experts, you should exercise caution and common sense to protect your personal safety and property, just as you would when interacting with other persons whom you don&rsquo;t know. NEITHER COMPANY NOR ITS AFFILIATES OR LICENSORS IS RESPONSIBLE FOR THE CONDUCT, WHETHER ONLINE OR OFFLINE, OF ANY CUSTOMER MEMBER CUSTOMER MEMBER OR EXPERT USER OF THE JAXEE PLATFORM AND YOU HEREBY RELEASE COMPANY AND ITS AFFILIATES OR LICENSORS FROM ANY LIABILITY RELATED THERETO. COMPANY AND ITS AFFILIATES AND LICENSORS WILL NOT BE LIABLE FOR ANY CLAIM, INJURY OR DAMAGE ARISING IN CONNECTION WITH YOUR USE OF THE JAXEE PLATFORM. Expert Representations and Warranties You represent and warrant that that: (1) you are 18 years of age or older and are at least of the legally required age in the jurisdiction in which you reside, and are otherwise capable of entering into binding contracts, and (2) you have the right, authority and capacity to enter into this Agreement and to abide by the terms and conditions of this Agreement, and that you will so abide. Where you enter into this Agreement on behalf of a company or other organization, you represent and warrant that you have authority to act on behalf of that entity and to bind that entity to this Agreement. You represent and warrant that you have read, understand and are required to agree to and be bound by the terms of this Agreement and the Privacy Policy in order to access and use the Jaxee Platform. You hereby warrant and represent that you will respect the privacy, property and data protection rights of Customer Members and other Experts and that you will not record (whether video or audio or otherwise) any Job or any interaction by or with any Customer Member User and/or Expert in connection with the Jaxee Platform without the prior written consent of such party. You further represent and warrant that you will fulfill the commitments you make to Customer Members including receiving payment through the Jaxee Platform (where you have elected to accept payment via credit card) or otherwise (where you have elected to accept payment via cash or check), communicating clearly and promptly with the Customer Member and/or respond to inquiries promptly, being present and/or available at the time you agree upon with the Customer Member and utilizing the third party payment processing system specified or approved by us to make or receive payment for Jobs provided through the Jaxee Platform. You also represent and warrant that you will act professionally and responsibly in your interactions with Customer Members. Experts represent and warrant that you will provide timely, high quality services to your Customer Members, you will only offer and provide Jobs for which you have the necessary skills and expertise and you will provide the Jobs safely, cleanly and to the best of your abilities. Experts represent and warrant that they hold all licenses and certification necessary to perform the Jobs for which they are hired, are active and in good standing with the applicable licensing authorities, do not have any outstanding or unresolved disciplinary actions against them by the relevant licensing or permitting board, hold the requisite insurance and acknowledge that their insurance shall be primary for all Jobs performed. Experts acknowledge they will personally perform the Job for which they are hired or, with the Consumer&rsquo;s permission, will only send other Licensed Experts in their employ who (i) hold the requisite license, (ii) are covered by the requisite insurance and (iii) are registered as an Expert on the Jaxee Platform. Contract between Customer Members and Experts You acknowledge and agree that a contract (the &ldquo;Service Agreement&rdquo;) is formed between you and the Customer Member when you agree on the terms of a Service with the Customer Member. The terms of the Service Agreement include the terms set forth in this Section 3, the engagement terms proposed by you and accepted by the Customer Member on the Jaxee Platform, and any other contractual terms accepted by both the Expert and the Customer Member to the extent such terms do not conflict with the terms in this Agreement including this Section and do not expand Company&rsquo;s obligations or restrict Company&rsquo;s rights under this Agreement. You agree that Company is not a party to any Service Agreement and the formation of a Service Agreement will not, under any circumstance, create an employment or other service relationship between Company and the Expert. Customer Member Expert</p>\n\n<h5>4. Billing and Payment</h5>\n\n<p>Users of the Jaxee Platform contract for Jobs directly with Customer Members. Company will not be a party to any contracts for Jobs or other services. Payment for Jobs through the Jaxee Platform is made directly from the Customer Member to the Expert and not by Company. Company is not obligated to pay the Expert for a Customer Member&rsquo;s failure to pay for Jobs. Payment processing services for Expert on the Jaxee Platform are provided by Stripe, Paypal and any other payment services provider utilized by Jaxee from time to time in connection with the Jaxee Platform (each a &ldquo;PSP&rdquo;, and collectively, the &ldquo;PSPs&rdquo; ) and are subject to the PSPs&rsquo; agreements and terms of service governing their respective payment services (collectively, the &ldquo;PSP Services Agreement&rdquo;). By agreeing to this Agreement or continuing to operate as a an Expert on the Jaxee Platform, you agree to be bound by the PSP Services Agreement, as the same may be amended or modified by the PSPs from time to time. As a condition of the Jaxee Platform enabling payment processing services through the PSPs, you agree to provide the Jaxee Platform accurate and complete information about you and your business, and you authorize Jaxee to share it and transaction information related to your use of the payment processing services provided by the PSPs. Customer Members using the Jaxee Platform will be required to provide their credit card and/or PayPal account information to Company and the PSPs retained by Company (the &ldquo;PSP&rdquo;), to the extent any you have elected to accept payment for Jobs via the Jaxee Platform by and through the PSPs. Experts are responsible for invoicing their Customer Members within 24 hours of the work being performed even if the Job is not completed in its entirety or is designed as &ldquo;ongoing&rdquo;. Customer Members will be responsible for paying the invoice for each Job (the &ldquo;Invoice&rdquo;), which will include: (i) the pricing terms of the Job agreed upon, (ii) any out of pocket expenses agreed with and submitted by an Expert in connection with the Jobs provided; and (iii) any tip or gratuity, if applicable. Experts will be responsible for paying to Company: (i) Jaxee Platform marketing/booking fees, (ii) repayment of erroneous payments made by the PSP, (iii) any and all fees PayPal may charge the Expert or the Company for processing a payment via PayPal and (iv) a handling fee of six percent (6%) of the aggregate amount of any Invoice paid by a Customer Member via credit card. Jaxee reserves the right, in its sole discretion, upon request from the Customer Member or the Expert upon notice of any potential fraud, unauthorized charges or other misuse of the Jaxee Platform, to (i) place on hold any payment relating to or arising out of an Invoice, or (ii) refund, provide credits or arrange for the PSP to do so. Experts are responsible for calculating and invoicing for any applicable taxes due from the Customer Member for the Job performed.</p>\n\n<h5>5. Release; Limitation of Liability</h5>\n\n<p>The Jaxee Platform is only a venue for connecting Customer Members and Experts. Because Company is not involved in the actual contact between Customer Members or in the completion of the Job, in the event that you have a dispute with one or more Customer Members, you, the Expert, release Company and its affiliates (and their respective officers, directors, agents, investors, subsidiaries, and employees) from any and all claims, demands, or damages (actual or consequential) of every kind and nature, known and unknown, suspected and unsuspected, disclosed and undisclosed, arising out of or in any way connected with such disputes. COMPANY EXPRESSLY DISCLAIMS ANY LIABILITY THAT MAY ARISE BETWEEN THE USERS OF ITS JAXEE PLATFORM. TO THE EXTENT APPLICABLE, YOU HEREBY WAIVE THE PROTECTIONS OF CALIFORNIA CIVIL CODE &sect; 1542 (AND ANY ANALOGOUS LAW IN ANY OTHER APPLICABLE JURISDICTION) WHICH SAYS: &ldquo;A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM OR HER MUST HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR.&rdquo;</p>\n\n<h5>6. Public Areas; Acceptable Use</h5>\n\n<p>The Jaxee Platform may contain profiles, email systems, blogs, message boards, reviews, ratings, applications, job postings, chat areas, news groups, forums, communities and/or other message or communication facilities (&ldquo;Public Areas&rdquo;) that allow Customer Members to communicate with other Customer Members or Experts, including the option for Customer Members to provide reviews or comments about Experts they have worked with through the Platform. You may only use such community areas to send and receive messages and material that are relevant to the applicable forum. Without limitation, while using the Jaxee Platform, you may not: Defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (such as, but not limited to, rights of privacy and publicity) of others, including Customer Members, Company staff or other Experts and/or their employees, or use information learned from the Jaxee Platform or during the performance of Jobs to otherwise defame, abuse, harass, stalk, threaten, intimidate or mislead, or otherwise violate the legal rights of any other User or Company staff outside of the Jaxee Platform. Publish, post, upload, distribute or disseminate any profane, defamatory, infringing, obscene or unlawful topic, name, material or information on the Jaxee Platform. Use the Jaxee Platform for any purpose, including, but not limited to posting or completing a Job, in violation of local, state, national, or international law. Upload files that contain software or other material that violates the intellectual property rights (or rights of privacy or publicity) of any third party. Upload files that contain viruses, Trojan horses, corrupted files, or any other similar software that may damage the operation of another&#39;s computer. Post or upload any content to which you have not obtained any necessary rights or permissions to use accordingly. Advertise or offer to sell any goods or services for any commercial purpose through the Jaxee Platform which are not relevant to the Jobs offered through the Jaxee Platform. Post or complete a Job requiring a User to engage in activity that is illegal or deemed dangerous, harmful or otherwise inappropriate by Company in its sole discretion. Conduct or forward surveys, contests, pyramid schemes, or chain letters. Impersonate another person or a Customer Member or allow any other person or entity to use your identification to post or view comments. Post the same Job offering repeatedly (&ldquo;Spamming&rdquo;). Spamming is strictly prohibited. Restrict or inhibit any other person or business from using and enjoying any aspect of the Platform. Imply or state that any statements you make are endorsed by Company, without the prior written consent of Company. Use a robot, spider, manual and/or automatic processes or devices to data-mine, data-crawl, scrape or index the Jaxee Platform in any manner. Hack or interfere with the Jaxee Platform, its servers or any connected networks. Adapt, alter, license, sublicense or translate the Jaxee Platform for your own personal or commercial use. Remove or alter, visually or otherwise, any copyrights, trademarks or proprietary marks and intellectual property rights owned by Company. Upload content to the Jaxee Platform that is offensive and/or harmful, including, but not limited to, content that advocates, endorses, condones or promotes racism, bigotry, hatred or physical harm of any kind against any individual or group of individuals. Upload content that provides materials or access to materials that exploit people under the age of 18 in an abusive, violent or sexual manner. Use the Jaxee Platform to solicit for any other business, website or service, or otherwise contact Users for employment, contracting or any purpose not related to use of the Jaxee Platform as set forth herein. Use the Jaxee Platform to collect usernames and or/email addresses of Users by electronic or other means. Use the Jaxee Platform or the Jobs in violation of this Agreement. Use the Jaxee Platform in a manner which is false or misleading (directly or by omission or failure to update information) or for the purpose of accessing or otherwise obtaining Company&rsquo;s trade secret information for public disclosure or other purposes. Attempt to circumvent the payments system or service fees in anyway including, but not limited to, including inaccurate information on invoices, or otherwise invoicing in a fraudulent manner; Register under different usernames or identities, after your account has been suspended or terminated or register under multiple usernames or identities. Cause any third party to engage in the restricted activities above. You understand that all submissions made to Public Areas of the Platform will be public and that you will be publicly identified by your name or login identification when communicating in Public Areas, and Company will not be responsible for the action of any Users with respect to any information or materials posted in Public Areas.</p>\n\n<h5>7. Termination and Suspension</h5>\n\n<p>Company may terminate, limit or suspend your right to use the Jaxee Platform in the event that we believe that you have breached this Agreement (a &ldquo;Breach&rdquo;) by providing you with written or email notice of such Breach and such termination or suspension, and termination or suspension will be effective immediately upon delivery of such notice. We reserve the right at any time to (i) monitor your use of the Platform, and (ii) terminate or suspend your use of some or all of the Platform if you engage in activities that we conclude, in our discretion, breach the terms of this Agreement or our Privacy Policy. Although we have no - and assume no - obligation to monitor activities on the Platform, please understand that we may employ filters designed to detect and block inappropriate content described in this Agreement. We reserve the right to request edits to your submission, to refuse to post or to remove any information or materials, in whole or in part, that we believe, in our sole discretion, is incompatible with these terms. If Company terminates, limits, or suspends your right to use the Jaxee Platform as an Expert for a breach, you will not be entitled to any refund of unused balance in your account, and you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating, limiting, or suspending your account, Company reserves the right to take appropriate legal action, including without limitation pursuing arbitration, criminal, and injunctive remedies. Even after your right to use the Jaxee Platform is terminated, limited, or suspended, this Agreement will remain enforceable against you. Company reserves the right to modify or discontinue, temporarily or permanently, all or any portion of the Jaxee Platform at its sole discretion. Except for refundable fees you have advanced to Company (if any), Company is not liable to you for any modification or discontinuance of all or any portion of the Jaxee Platform. Notwithstanding anything to the contrary in this Section 8, Company has the right to restrict anyone from completing registration as an Expert if Company believes such person may threaten the safety and integrity of the Jaxee Platform, or if, in Company&rsquo;s discretion, such restriction is necessary to address any other reasonable business concern. You may terminate this Agreement at any time by ceasing all use of the Jaxee Platform. All sections which by their nature should survive the expiration or termination of this Agreement shall continue in full force and effect subsequent to and notwithstanding the expiration or termination of this Agreement.</p>\n\n<h5>8. Your Information and Likeness</h5>\n\n<p>&ldquo;Your Information&rdquo; is defined as any information and materials you provide to Company or Customer Members in connection with your registration for and use of the Jaxee Platform, including without limitation that is posted or transmitted for use in Public Areas. You are solely responsible for Your Information, and we act merely as a conduit for your online distribution and publication of Your Information. You hereby represent and warrant to Company that Your Information (a) will not be false, inaccurate, incomplete or misleading; (b) will not be fraudulent or involve the sale of counterfeit or stolen items; (c) will not infringe any third party&#39;s copyright, patent, trademark, trade secret or other proprietary right or rights of publicity or privacy; (d) will not violate any law, statute, ordinance, or regulation (including without limitation those governing export control, Customer Member protection, unfair competition, anti-discrimination or false advertising); (e) will not be defamatory, libelous, unlawfully threatening, or unlawfully harassing; (f) will not be obscene or contain child pornography or be harmful to minors; (g) will not contain any viruses, Trojan Horses, worms, time bombs, cancelbots or other computer programming routines that are intended to damage, detrimentally interfere with, surreptitiously intercept or expropriate any system, data or personal information; and (h) will not create liability for Company or cause Company to lose (in whole or in part) the services of its internet service providers or other partners or suppliers. The Jaxee Platform hosts generated content from Customer Members and Experts (collectively, &ldquo;User Generated Content&rdquo;), including content relating to reviews and ratings of specific Experts (&ldquo;Feedback&rdquo;). Such Feedback is such Customer Member&rsquo;s opinion and not the opinion of Company, has not been verified or approved by Company and each Customer Member should undertake their own research to be satisfied that a specific Expert is the right person for a Job. You agree that Company is not liable for any Feedback or other Customer Member User Generated Content. Company encourages each Customer Member to give objective, constructive and honest Feedback about the Experts with whom they have transacted. Company does not investigate any remarks posted by Customer Members for accuracy or reliability, though we do reserve the right to remove User Generated Content which, in our sole discretion, violates this Agreement or our Terms of Use. You hereby grant Company a non-exclusive, worldwide, perpetual, irrevocable, royalty-free, right to exercise all copyright, publicity rights, and any other rights you have in Your Information, in any media now known or not currently known in order to perform and improve upon the Jaxee Platform. Each Expert who provides to Company any User Generated Content, including any videotape, film, record, photograph, voice, or all related instrumental, musical, or other sound effects, in connection with your use of the Jaxee Platform, hereby irrevocably grants to Company the non-exclusive, fully-paid, royalty-free, worldwide, unrestricted, and perpetual right to use such content that Expert provides to Company or that Company takes/creates of Expert (i) to use, reproduce, modify, or create derivatives of such content, in and in connection with the exhibition, distribution, display, performance, transmission, broadcasting on any and all media, including, without limitation, the internet, of any videos or images of such Expert in connection with the Jaxee Platform; (ii) to reproduce in all media any recordings of such Expert&rsquo;s voice, and all related instrumental, musical, or other sound effects (collectively, the &ldquo;Voice&rdquo;), made in connection with the Jaxee Platform; to use, and permit to be used, such Expert&rsquo;s Physical Likeness and Voice in the advertising, marketing, and/or publicizing of the Jaxee Platform in any media; and to use, and permit to be used, such Expert&rsquo;s name and identity in connection with the Jaxee Platform. In addition to the foregoing, you consent to Jaxee&rsquo;s disclosure of Your Information and User Generated Content to third parties (including PSPs or Jaxee&rsquo;s other services providers): (a) where it is necessary for accepting or booking Jobs through the Jaxee Platform; (b) in order to complete or accept payments via the Jaxee Platform by and through the PSPs; (c) in order to comply with government agency, court orders or applicable law; or (d) where you otherwise have consented to such disclosure. Each Expert hereby waives all rights and releases Company from, and shall neither sue nor bring any proceeding against any such parties for, any claim or cause of action, whether now known or unknown, for defamation, invasion of right to privacy, publicity or personality or any similar matter, based upon or relating to the use and exploitation of such Expert&rsquo;s identity, likeness or voice in connection with the Jaxee Platform. Each Expert acknowledges that Company shall not owe any financial or other remuneration for using the recordings provided hereunder by such Expert, either for initial or subsequent transmission or playback, and further acknowledges that Company is not responsible for any expense or liability incurred as a result of such Expert&rsquo;s recordings or participation in any recordings, including any loss of such recording data.</p>\n\n<h5>9. Worker Classification and Withholdings</h5>\n\n<p>AS SET FORTH HEREIN, COMPANY DOES NOT PERFORM JOBS AND DOES NOT EMPLOY INDIVIDUALS TO PERFORM JOBS. Each Service Provider assumes all liability for proper classification of its workers based on applicable legal guidelines. Experts do not have authority to enter into written or oral &mdash; whether implied or express &mdash; contracts on behalf of Company. Company does not set an Expert&rsquo;s fees, work hours or location of work. Company will not provide any equipment, labor or materials needed for a particular Tazk. Company does not provide any supervision to Experts. The Jaxee Platform is not an employment service and Company is not an employer of any Expert. As such, Company is not responsible for and will not be liable for any tax payments or withholding, including but not limited to unemployment insurance, social security, disability insurance or any other applicable federal or state withholdings in connection with Jobs provided hereunder.</p>\n\n<h5>10. Intellectual Property Rights</h5>\n\n<p>All text, graphics, editorial content, data, formatting, graphs, designs, HTML, look and feel, photographs, music, sounds, images, software, videos, designs, typefaces and other content (collectively &ldquo;Proprietary Material&rdquo;) that Users see or read through the Jaxee Platform is owned or licensed by Company, excluding User Generated Content that Company has the right to use. Proprietary Material is protected in all forms, media and technologies now known or hereinafter developed. Company or its licensors own all Proprietary Material, as well as the coordination, selection, arrangement and enhancement of such Proprietary Materials as a Collective Work under the United States Copyright Act, as amended. The Proprietary Material is protected by the domestic and international laws of copyright, patents, and other proprietary rights and laws. Users may not copy, download, use, redesign, reconfigure, or retransmit anything from the Jaxee Platform without Company&#39;s express prior written consent and, if applicable, the holder of the rights to the User Generated Content. Any use of such Proprietary Material, other than as permitted therein, is expressly prohibited without the prior permission of Company and, if applicable, the holder of the rights to the User Generated Content. The service marks and trademarks of Company, including without limitation the JAXEE mark and associated Company logos are service marks owned by Company. Any other trademarks, service marks, logos and/or trade names appearing via the Jaxee Platform are the property of their respective owners. You may not copy or use any of these marks, logos or trade names without the express prior written consent of the owner.</p>\n\n<h5>11. Confidential Information</h5>\n\n<p>You acknowledge that Confidential Information (as defined below) is a valuable, special and unique asset of Company and agree that you will not disclose, transfer, use (or seek to induce others to disclose, transfer or use) any Confidential Information for any purpose other than disclosure to your authorized employees and agents who are bound to maintain the confidentiality of Confidential Information. You shall promptly notify Company in writing of any circumstances which may constitute unauthorized disclosure, transfer, or use of Confidential Information. You shall use best efforts to protect Confidential Information from unauthorized disclosure, transfer or use. You shall return all originals and any copies of any and all materials containing Confidential Information to Company upon termination of this Agreement for any reason whatsoever. The term &ldquo;Confidential Information&rdquo; shall mean any and all of Company&rsquo;s trade secrets, confidential and proprietary information and all other information and data of Company that is not generally known to the public or other third parties who could derive value, economic or otherwise, from its use or disclosure. Confidential Information shall be deemed to include technical, financial, strategic and other proprietary and confidential information relating to Company&rsquo;s business, operations and properties, including information about Company&rsquo;s Users or partners, or other business information disclosed directly or indirectly in writing, orally or by drawings or observation.</p>\n\n<h5>12. Disclaimer of Warranties</h5>\n\n<p>USE OF THE SERVICE IS ENTIRELY AT YOUR OWN RISK. THE JAXEE PLATFORM IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. COMPANY MAKES NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE CONTENT PROVIDED THROUGH THE JAXEE PLATFORM OR THE CONTENT OF ANY SITES LINKED TO THE JAXEE PLATFORM AND ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT, (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE JAXEE PLATFORM, (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN. COMPANY DOES NOT WARRANT, ENDORSE, GUARANTEE OR ASSUME RESPONSIBILITY FOR ANY SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE JAXEE PLATFORM OR ANY HYPERLINKED WEBSITE OR FEATURED IN ANY BANNER OR OTHER ADVERTISING AND COMPANY WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY CUSTOMER MEMBER OR ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR JOBS, OTHER THAN AS PROVIDED HEREIN. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE. WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR ITS AFFILIATES OR LICENSORS WARRANT THAT ACCESS TO THE JAXEE PLATFORM WILL BE UNINTERRUPTED OR THAT THE JAXEE PLATFORM WILL BE ERROR-FREE; NOR DO THEY MAKE ANY WARRANTY AS TO THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE JAXEE PLATFORM, OR AS TO THE TIMELINESS, ACCURACY, RELIABILITY, COMPLETENESS OR CONTENT OF ANY JOB OR SERVICE, INFORMATION OR MATERIALS PROVIDED THROUGH OR IN CONNECTION WITH THE USE OF THE JAXEE PLATFORM. NEITHER COMPANY NOR ITS AFFILIATES OR LICENSORS IS RESPONSIBLE FOR THE CONDUCT, WHETHER ONLINE OR OFFLINE, OF ANY USER. NEITHER COMPANY NOR ITS AFFILIATES OR LICENSORS WARRANT THAT THE JAXEE PLATFORM IS FREE FROM VIRUSES, WORMS, TROJAN HORSES, OR OTHER HARMFUL COMPONENTS. COMPANY AND ITS AFFILIATES AND LICENSORS CANNOT AND DO NOT GUARANTEE THAT ANY PERSONAL INFORMATION SUPPLIED BY YOU WILL NOT BE MISAPPROPRIATED, INTERCEPTED, DELETED, DESTROYED OR USED BY OTHERS. IN ADDITION, NOTWITHSTANDING ANY FEATURE A CUSTOMER MEMBER MAY USE TO EXPEDITE JAXEE SELECTION, EACH CUSTOMER MEMBER IS RESPONSIBLE FOR DETERMINING THE JOB AND SELECTING THEIR EXPERT AND COMPANY DOES NOT GUARANTEE THAT ANY JOB YOU OFFER WILL BE SELECTED BY A CUSTOMER MEMBER, NOR DOES COMPANY WARRANT ANY GOODS OR JOBS PURCHASED BY A CUSTOMER MEMBER AND COMPANY DOES NOT RECOMMEND ANY PARTICULAR EXPERT. COMPANY DOES NOT PROVIDE ANY WARRANTIES OR GUARANTEES REGARDING ANY EXPERT&rsquo;S PROFESSIONAL ACCREDITATION, REGISTRATION OR LICENSE.</p>\n\n<h5>13. No Liability</h5>\n\n<p>YOU ACKNOWLEDGE AND AGREE THAT COMPANY IS ONLY WILLING TO PROVIDE THE JAXEE PLATFORM IF YOU AGREE TO CERTAIN LIMITATIONS OF OUR LIABILITY TO YOU AND THIRD PARTIES. THEREFORE, YOU AGREE NOT TO HOLD COMPANY, ITS AFFILIATES, ITS LICENSORS, ITS PARTNERS IN PROMOTIONS, SWEEPSTAKES OR CONTESTS, OR ANY OF SUCH PARTIES&rsquo; AGENTS, EMPLOYEES, OFFICERS, DIRECTORS, CORPORATE PARTNERS, OR PARTICIPANTS LIABLE FOR ANY DAMAGE, SUITS, CLAIMS, AND/OR CONTROVERSIES (COLLECTIVELY, &ldquo;LIABILITIES&rdquo;) THAT HAVE ARISEN OR MAY ARISE, WHETHER KNOWN OR UNKNOWN, RELATING TO YOUR OR ANY OTHER PARTY&rsquo;S USE OF OR INABILITY TO USE THE JAXEE PLATFORM, INCLUDING WITHOUT LIMITATION ANY LIABILITIES ARISING IN CONNECTION WITH THE CONDUCT, ACT OR OMISSION OF ANY USER (INCLUDING WITHOUT LIMITATION STALKING, HARASSMENT THAT IS SEXUAL OR OTHERWISE, ACTS OF PHYSICAL VIOLENCE, AND DESTRUCTION OF PERSONAL PROPERTY), ANY DISPUTE WITH ANY CUSTOMER MEMBER OR OTHER EXPERT, ANY INSTRUCTION, ADVICE, ACT, OR SERVICE PROVIDED BY COMPANY OR ITS AFFILIATES OR LICENSORS AND ANY DESTRUCTION OF YOUR INFORMATION. UNDER NO CIRCUMSTANCES WILL COMPANY, ITS AFFILIATES, ITS LICENSORS, OR ANY OF SUCH PARTIES&rsquo; AGENTS, EMPLOYEES, OFFICERS, DIRECTORS, CORPORATE PARTNERS, OR PARTICIPANTS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL OR EXEMPLARY DAMAGES ARISING IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE JAXEE PLATFORM OR THE OFFERING OR PROVISION OF JOBS, EVEN IF ADVISED OF THE POSSIBILITY OF THE SAME. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU. COMPANY DOES NOT ACCEPT ANY LIABILITY WITH RESPECT TO THE QUALITY OR FITNESS OF ANY WORK PERFORMED VIA THE JAXEE PLATFORM. IF, NOTWITHSTANDING THE FOREGOING EXCLUSIONS, IT IS DETERMINED THAT COMPANY OR ITS PARTNERS IN PROMOTIONS, SWEEPSTAKES OR CONTESTS, AFFILIATES, ITS LICENSORS, OR ANY OF SUCH PARTIES&rsquo; AGENTS, EMPLOYEES, OFFICERS, DIRECTORS, CORPORATE PARTNERS, OR PARTICIPANTS IS LIABLE FOR DAMAGES IN EXCESS OF THE FOREGOING, IN NO EVENT WILL COMPANY&rsquo;S OR ITS AFFILIATES, ITS LICENSORS, OR ANY OF SUCH PARTIES&rsquo; AGENTS, EMPLOYEES, OFFICERS, DIRECTORS, CORPORATE PARTNERS&rsquo; AGGREGATE LIABILITY, WHETHER ARISING IN CONTRACT, TORT, STRICT LIABILITY OR OTHERWISE, EXCEED THE TOTAL FEES PAID BY YOU TO COMPANY DURING THE SIX (6) MONTHS PRIOR TO THE TIME SUCH CLAIM AROSE.</p>\n\n<h5>14. Indemnification</h5>\n\n<p>You hereby agree to indemnify, defend, and hold harmless Company, its directors, officers, employees, agents, licensors, attorneys, independent contractors, providers, successors and assigns, subsidiaries, and affiliates from and against any and all claim, loss, expense or demand of liability, including attorneys&#39; fees and costs incurred, in connection with (i) your use or inability to use the Jaxee Platform or Job Jobs, (ii) your breach or violation of this Agreement; (iii) your violation of any law or the rights of any User or third party, (iv) any User Generated Content submitted by you or through your account to the Jaxee Platform, including, but not limited to the extent such User Generated Content may infringe on the intellectual rights of a third party or otherwise be illegal or unlawful. Company reserves the right, at its own expense, to assume the exclusive defense and control of any matter otherwise subject to your indemnification. You will not, in any event, settle any claim or matter without the written consent of Company.</p>\n\n<h5>15. Dispute Resolution</h5>\n\n<p>To expedite resolution and reduce the cost of any dispute, controversy or claim between you and Company (each a &ldquo;Claim&rdquo; and collectively &ldquo;Claims&rdquo;), you and Company agree to first attempt to negotiate any Claim (except those Claims expressly excluded below) informally for at least thirty (30) days before initiating any court proceeding. Such informal negotiations will commence upon written notice. Your address for such notices is your billing address, with an email copy to the email address you have provided to Company. Company&rsquo;s address for such notices is Jaxee, LLC., 14311 Biscayne Blvd, # 612530, North Miami FL 33261 Attention: Legal. If necessary to preserve a Claim under any applicable statute of limitations, you or Company may initiate court proceedings while engaging in the informal negotiations.</p>\n\n<h5>16. Governing Law</h5>\n\n<p>Except as provided in Section 20 or expressly provided otherwise, this Agreement will be governed by, and will be construed under, the laws of the State of Delaware, without regard to choice of law principles. You agree that any claim or dispute you may have against Jaxee must be resolved by a court located in Delaware in the county where the Registered Agent for the corporation is located. You agree to submit to the personal jurisdiction of the courts located within the State of Delaware or the United States District Court located in Delaware, for the purpose of litigating all such claims or disputes. You hereby waive any and all jurisdictional and venue defenses otherwise available.</p>\n\n<h5>17. No Agency</h5>\n\n<p>No agency, partnership, joint venture, employer-employee or franchiser-franchisee relationship is intended or created by this Agreement.</p>\n\n<h5>18. General Provisions</h5>\n\n<p>Failure by Company to enforce any provision(s) of this Agreement will not be construed as a waiver of any provision or right. This Agreement constitutes the entire agreement between you and Company with respect to its subject matter. If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions will be enforced to the fullest extent possible, and the remaining provisions will remain in full force and effect. This Agreement may not be assigned or transferred by you without our prior written approval. We may assign or transfer this Agreement without your consent, including but not limited to assignments: (i) to a parent or subsidiary, (ii) to an acquirer of assets, or (iii) to any other successor or acquirer. Any assignment in violation of this section shall be null and void. This Agreement will inure to the benefit of Company, its successors and assigns.</p>\n\n<h5>20. 1099 Reporting System</h5>\n\n<p>Upon registration as an Expert you will be required to provide the Company with your EIN or TIN information. If the Company is the third party payment processor or facilitates the processing of payments in any way, pursuant to the IRS Code, Company will be required to issue a 1099-K to all Experts and report all payments to such professionals if the Company has processed over 200 transactions and pays out more than $20,000 to such Expert in a calendar year. Please contact your tax professional on tax reporting requirements for your profession.</p>\n\n<h5>21. Changes to this Agreement and the Jaxee Platform</h5>\n\n<p>Company reserves the right, at its sole and absolute discretion, to change, modify, add to, supplement or delete any of the terms and conditions of this Agreement (including the Privacy Policy) and we will provide notice of any such changes the next time you visit the Platform. If any future changes to this Agreement are unacceptable to you or cause you to no longer be in compliance with this Agreement, you must terminate, and immediately stop using, the Jaxee Platform. Your continued use of the Jaxee Platform following any revision to this Agreement constitutes your complete and irrevocable acceptance of any and all such changes. Company may change, modify, suspend, or discontinue any aspect of the Jaxee Platform at any time without notice or liability. Company may also impose limits on certain features or restrict your access to parts or all of the Jaxee Platform without notice or liability. YOU HEREBY ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTAND THE FOREGOING TERMS OF SERVICE AND PRIVACY POLICY AND AGREE THAT YOUR USE OF THE JAXEE PLATFORM IS AN ACKNOWLEDGMENT OF YOUR AGREEMENT TO BE BOUND BY THE TERMS AND CONDITIONS OF THIS AGREEMENT.</p>\n"
                        }
                    },
                    "creditAmount": 0,
                    "deleted_email": "adamkraif@gmail.com",
                    "device_type": "android",
                    "device_uuid": "c864412817c23f6d",
                    "displayName": "Adam Kraif",
                    "email": "adamkraif@gmail.com",
                    "expires": 1509221018,
                    "expires_in": 3598,
                    "familyName": "Kraif",
                    "fcm_token": "d5Ajdd6OH1Q:APA91bFuWdDUhP2vodSGEiSFZJSSkOq9uooKMfmwMZo5_IzwasEIGP1QQbB0hpnugQ0N1V3QgGm_Xxp9Gm5goL-0bDjTnyas2bF8NkBsRgUpghffGr7Hjhi56P7vLO-a2T725lqotHJz",
                    "future_payment_token": "R23AAFk9ceSqCQ6XPkeYRCKiAzwVZY0ImO_XntwGC5U7D7EWaDeBTqUQVV5pDAKU8N5p0tNkLlpIPRHLF2baTPzLFcV8L54dH2-7ldpjfjxq3FzmECI5j_U6RSFF5s1AVQGt7vF4ClVjTvDpXzqqg",
                    "geoAddress": "Afrodita St, Tel Aviv-Yafo, Israel",
                    "givenName": "Adam",
                    "id": "AK200002",
                    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImNhMDViMmEwYzRjMTYxMGNlYzVkNzQ1MTAyNDc2MGE4NjRiMGRmOWQifQ.eyJhenAiOiI5MTc3NjA4ODk4MjctaGVtNm1wZ2YzbzYxZGRpNW9lZWxza2M3Mjh1YXNsbDkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5MTc3NjA4ODk4MjctdjBiNHExcHN2NmJpOWZtNG41b2YzMzIzanI0bjI4MjYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDMzMjQwMDIxODMwNzkzOTExOTEiLCJlbWFpbCI6ImFkYW1rcmFpZkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tIiwiaWF0IjoxNTA5MjE3NDIwLCJleHAiOjE1MDkyMjEwMjAsIm5hbWUiOiJBZGFtIEtyYWlmIiwicGljdHVyZSI6Imh0dHBzOi8vbGg2Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tc2Z0TWN3enlOcWcvQUFBQUFBQUFBQUkvQUFBQUFBQUFBSzAvcE55ME03dmhybjQvczk2LWMvcGhvdG8uanBnIiwiZ2l2ZW5fbmFtZSI6IkFkYW0iLCJmYW1pbHlfbmFtZSI6IktyYWlmIiwibG9jYWxlIjoiaXcifQ.c7XNffHP2soM1YKP37YVzIPwUTUgSqOiLfL9-EovZ7Kdtz-SMqxIGkrvj88V8Q-DIpuHWT90SL3tIpfE3KIc744J68jtEQvfHS0H4J5wGY8hMh_zoiKCXfMfDATtLXXrbC_eJiQOe-7q5KKew3IMzcM6BVWj-hi2nOtiIwVzgZFvP8KEETeqHx8u5yVNuUtQ-LBCht-kA5SxXJjBy3EK_RZGj3NCiafBDZcxAl6NqqtORD8l38b7yp9Z4HL8CWadam1nTj47Wi8bafCn_E-qpZDJ6NdUsHByRGpFfk8eYfoDmMHcBixDJEpRWM1XrZFPGJbUK0WWFkgjy-3oabNXlQ",
                    "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImNmMjI5MTE3MGEzNmUyNTliYmY2NmY1MjE0NjhhZDJjNGU5YTYxZGUifQ.eyJhenAiOiI5MTc3NjA4ODk4MjctaGVtNm1wZ2YzbzYxZGRpNW9lZWxza2M3Mjh1YXNsbDkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5MTc3NjA4ODk4MjctdjBiNHExcHN2NmJpOWZtNG41b2YzMzIzanI0bjI4MjYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDMzMjQwMDIxODMwNzkzOTExOTEiLCJlbWFpbCI6ImFkYW1rcmFpZkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tIiwiaWF0IjoxNTExODIzNDU1LCJleHAiOjE1MTE4MjcwNTUsIm5hbWUiOiJBZGFtIEtyYWlmIiwicGljdHVyZSI6Imh0dHBzOi8vbGg2Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tc2Z0TWN3enlOcWcvQUFBQUFBQUFBQUkvQUFBQUFBQUFBSzAvcE55ME03dmhybjQvczk2LWMvcGhvdG8uanBnIiwiZ2l2ZW5fbmFtZSI6IkFkYW0iLCJmYW1pbHlfbmFtZSI6IktyYWlmIiwibG9jYWxlIjoiaXcifQ.I74kRpDf6GKLNjxO2z4gP3CaNKrMenIBnfV6P28eBAcPhW9UXVH-SEvCNWki7t7vH_3C6nqjdPW3nVBtFOZNAIM3biAoA_muOB9AeOZL9BHD6IrvOS-3s21peu-LIQ12Bk1cnKM2vejTZKiFiGV05n7fn0ObT_wDAuHqANwUJ8srmWmG8X_qrxVvDzdWnxTA259Xs4zYp4766VvwOaBoEa9Uc0KWwRaovwLQYuO0qgdDgpjf0LgsXXnUWfMctoyiAreO-CU27NMX4UwPPiQgB-kImkc5kLG0nqCzgxj15-dOGxTFN07X2mXocJG6ycwJ4Kt21G8NRS7zRd96EFzDSA",
                    "imageUrl": "https://lh6.googleusercontent.com/-sftMcwzyNqg/AAAAAAAAAAI/AAAAAAAAAK0/pNy0M7vhrn4/s96-c/photo.jpg",
                    "ip": "192.168.1.11",
                    "jobs": [{
                        "backgroundCheck": false,
                        "businessAddress": {
                            "city": "Ccc",
                            "line1": "Ccf",
                            "postal_code": "988",
                            "state": "arkansas"
                        },
                        "businessName": "",
                        "businessType": "Self employed",
                        "driverLis": true,
                        "fee": 100,
                        "files": [{
                            "fileName": "1510566752026.jpg",
                            "name": "driver-lis",
                            "url": "https://firebasestorage.googleapis.com/v0/b/jaxee-276a7.appspot.com/o/files%2Fadamkraifgmailcom%2Ffile%2Fjobs%2Fdog%20walking%2Fdriver-lis?alt=media&token=240d79c5-3ddd-494c-82af-e332dede0b05"
                        }],
                        "icon": "https://lh3.googleusercontent.com/x3TKnV91wjf0GpA4JvNgJulOoCnuJ5M38Ud-dIepVr11ZaVXnuJYzLLsp5whMo329H4=w300-rw",
                        "insurance": true,
                        "isBusiness": false,
                        "jobName": "Handyman",
                        "jobNameGenerated": "handyman",
                        "phone": {
                            "cellNumber": "053-221-6896",
                            "officeNumber": ""
                        },
                        "questions": [{
                            "text": "Years of experience"
                        }, {
                            "text": "Tell us about yourself"
                        }, {
                            "text": "Your hourly rate"
                        }],
                        "recivePaymentsMethods": {
                            "cash": true,
                            "cheque": true,
                            "creditCard": false,
                            "payPal": false
                        },
                        "spChangedSettings": "11/13/2017, 11:52:37 AM",
                        "spCreatedJob": "11/13/2017, 11:52:37 AM",
                        "tags": ["handyman", "repairman", "tiling services", "bathtub refinishing", "shower door installation"],
                        "taxId": true,
                        "tax_id": ""
                    }],
                    "lastEntry": "2017-12-16T11:57:11.027Z",
                    "lastname": "Kraif",
                    "leftApp": "2017-12-16T11:57:21.527Z",
                    "location": [{
                        "accuracy": 8,
                        "altitude": 14.4317390598573,
                        "latitude": 32.0988771,
                        "locationProvider": 0,
                        "longitude": 34.7965958,
                        "provider": "fused",
                        "speed": 0,
                        "time": 1513425432999
                    }],
                    "locationBad": [{
                        "accuracy": 12,
                        "altitude": 32.71089933821098,
                        "bearing": 15.063973426818848,
                        "latitude": 32.065429415458894,
                        "locationProvider": 0,
                        "longitude": 34.786313103892915,
                        "provider": "gps",
                        "speed": 9.801586151123047,
                        "time": 1504807087441
                    }, {
                        "accuracy": 128,
                        "altitude": 53.83633754628605,
                        "bearing": 249.64486694335938,
                        "latitude": 32.075157744671074,
                        "locationProvider": 0,
                        "longitude": 34.782911600369324,
                        "provider": "gps",
                        "speed": 0.3395053446292877,
                        "time": 1504818479159
                    }, {
                        "accuracy": 200,
                        "altitude": 1011.5853093086878,
                        "bearing": 256.7913513183594,
                        "latitude": 32.07564678029437,
                        "locationProvider": 0,
                        "longitude": 34.78337004024434,
                        "provider": "gps",
                        "speed": 2.3781137466430664,
                        "time": 1504821596002
                    }, {
                        "accuracy": 8,
                        "altitude": 19.69144257184432,
                        "bearing": 355.39483642578125,
                        "latitude": 31.974007289634105,
                        "locationProvider": 0,
                        "longitude": 34.79312790935142,
                        "provider": "gps",
                        "speed": 1.261099934577942,
                        "time": 1504887628838
                    }, {
                        "accuracy": 72.9000015258789,
                        "latitude": 31.9738782,
                        "locationProvider": 0,
                        "longitude": 34.7930478,
                        "provider": "network",
                        "time": 1504899963836
                    }, {
                        "accuracy": 24,
                        "altitude": 70.71596125372399,
                        "bearing": 24.132598876953125,
                        "latitude": 31.974062139883873,
                        "locationProvider": 0,
                        "longitude": 34.79317272284023,
                        "provider": "gps",
                        "speed": 0.6030542254447937,
                        "time": 1504957076432
                    }, {
                        "accuracy": 32,
                        "altitude": 57.93992507747005,
                        "bearing": 127.65821838378906,
                        "latitude": 31.974034099047124,
                        "locationProvider": 0,
                        "longitude": 34.793710999223336,
                        "provider": "gps",
                        "speed": 0.7415533065795898,
                        "time": 1505020327631
                    }, {
                        "accuracy": 16,
                        "altitude": 48.29023750570996,
                        "bearing": 353.7984924316406,
                        "latitude": 32.02369662889433,
                        "locationProvider": 0,
                        "longitude": 34.754863705165526,
                        "provider": "gps",
                        "speed": 5.71151065826416,
                        "time": 1505022066806
                    }, {
                        "accuracy": 48,
                        "altitude": 31.070708830516462,
                        "bearing": 124.30390930175781,
                        "latitude": 31.97410445310978,
                        "locationProvider": 0,
                        "longitude": 34.79350556102041,
                        "provider": "gps",
                        "speed": 1.446092963218689,
                        "time": 1505080087669
                    }, {
                        "accuracy": 1,
                        "altitude": 54.856406324815346,
                        "bearing": 261.53338623046875,
                        "latitude": 31.973855109400073,
                        "locationProvider": 0,
                        "longitude": 34.79342372337561,
                        "provider": "gps",
                        "speed": 2.260150671005249,
                        "time": 1505080425354
                    }, {
                        "accuracy": 24,
                        "altitude": 67.49725868173839,
                        "bearing": 346.5284118652344,
                        "latitude": 31.9743883750936,
                        "locationProvider": 0,
                        "longitude": 34.79303891042421,
                        "provider": "gps",
                        "speed": 1.3559246063232422,
                        "time": 1505124460862
                    }, {
                        "accuracy": 48,
                        "altitude": 93.46561447822624,
                        "bearing": 69.10548400878906,
                        "latitude": 31.974602272530213,
                        "locationProvider": 0,
                        "longitude": 34.79317799709771,
                        "provider": "gps",
                        "speed": 0.7357141375541687,
                        "time": 1505124484118
                    }, {
                        "accuracy": 192,
                        "altitude": 113.43107027448872,
                        "bearing": 315.27191162109375,
                        "latitude": 31.97422218141457,
                        "locationProvider": 0,
                        "longitude": 34.792771429836186,
                        "provider": "gps",
                        "speed": 19.955852508544922,
                        "time": 1505124987870
                    }, {
                        "accuracy": 64,
                        "altitude": 89.76013807669177,
                        "bearing": 293.6788635253906,
                        "latitude": 31.973791954754887,
                        "locationProvider": 0,
                        "longitude": 34.79331985033525,
                        "provider": "gps",
                        "speed": 1.3184829950332642,
                        "time": 1505124991862
                    }, {
                        "accuracy": 2,
                        "altitude": 66.11061129388415,
                        "bearing": 111.29708099365234,
                        "latitude": 31.973999370464377,
                        "locationProvider": 0,
                        "longitude": 34.793499084614496,
                        "provider": "gps",
                        "speed": 0.38716042041778564,
                        "time": 1505228639999
                    }, {
                        "accuracy": 350,
                        "altitude": 93.66360010935354,
                        "bearing": 6.599880695343018,
                        "latitude": 31.974119642266764,
                        "locationProvider": 0,
                        "longitude": 34.79278959103713,
                        "provider": "gps",
                        "speed": 1.6299046277999878,
                        "time": 1505235957146
                    }, {
                        "accuracy": 96,
                        "altitude": 70.05570856374173,
                        "bearing": 51.5909538269043,
                        "latitude": 31.97426637099357,
                        "locationProvider": 0,
                        "longitude": 34.79306585554729,
                        "provider": "gps",
                        "speed": 1.084579586982727,
                        "time": 1505235983526
                    }, {
                        "accuracy": 48,
                        "altitude": 77.08767236968208,
                        "bearing": 140.82228088378906,
                        "latitude": 31.973557860057312,
                        "locationProvider": 0,
                        "longitude": 34.79323732581639,
                        "provider": "gps",
                        "speed": 0.7699347138404846,
                        "time": 1505413503451
                    }, {
                        "accuracy": 12,
                        "altitude": 59.35831079389957,
                        "bearing": 216.64109802246094,
                        "latitude": 31.973698362908724,
                        "locationProvider": 0,
                        "longitude": 34.7933399264227,
                        "provider": "gps",
                        "speed": 0.5578567981719971,
                        "time": 1505414429754
                    }, {
                        "accuracy": 48,
                        "altitude": 98.47342374984414,
                        "bearing": 132.10853576660156,
                        "latitude": 31.974410481395903,
                        "locationProvider": 0,
                        "longitude": 34.79308769596652,
                        "provider": "gps",
                        "speed": 2.8417348861694336,
                        "time": 1505490383713
                    }, {
                        "accuracy": 24,
                        "altitude": 65.02299033034495,
                        "bearing": 103.43962097167969,
                        "latitude": 31.974204366250564,
                        "locationProvider": 0,
                        "longitude": 34.79338665869456,
                        "provider": "gps",
                        "speed": 6.30277681350708,
                        "time": 1505490385740
                    }, {
                        "accuracy": 32,
                        "altitude": 50.328374877364,
                        "bearing": 18.18147087097168,
                        "latitude": 31.97447795448314,
                        "locationProvider": 0,
                        "longitude": 34.79309809193222,
                        "provider": "gps",
                        "speed": 1.3421481847763062,
                        "time": 1505540021101
                    }, {
                        "accuracy": 24,
                        "altitude": 36.58347454756125,
                        "bearing": 212.75839233398438,
                        "latitude": 31.974092421633028,
                        "locationProvider": 0,
                        "longitude": 34.79284841869209,
                        "provider": "gps",
                        "speed": 0.8900353908538818,
                        "time": 1505552474519
                    }, {
                        "accuracy": 24,
                        "altitude": 68.88969694072102,
                        "bearing": 168.28207397460938,
                        "latitude": 31.974180891781607,
                        "locationProvider": 0,
                        "longitude": 34.79279914717873,
                        "provider": "gps",
                        "speed": 0.824604868888855,
                        "time": 1505588687782
                    }, {
                        "accuracy": 48,
                        "altitude": 90.99103880889457,
                        "bearing": 309.6183776855469,
                        "latitude": 31.97426890218938,
                        "locationProvider": 0,
                        "longitude": 34.79310706736215,
                        "provider": "gps",
                        "speed": 0.550423264503479,
                        "time": 1505718263789
                    }, {
                        "accuracy": 24,
                        "altitude": 67.94981657459387,
                        "bearing": 73.1680679321289,
                        "latitude": 31.974048946704734,
                        "locationProvider": 0,
                        "longitude": 34.793252757067805,
                        "provider": "gps",
                        "speed": 1.3274778127670288,
                        "time": 1505731533565
                    }, {
                        "accuracy": 32,
                        "altitude": 59.05471352408236,
                        "bearing": 167.19229125976562,
                        "latitude": 31.974125952247686,
                        "locationProvider": 0,
                        "longitude": 34.793460299536406,
                        "provider": "gps",
                        "speed": 1.2129679918289185,
                        "time": 1505755550962
                    }, {
                        "accuracy": 48,
                        "altitude": 50.25352384327361,
                        "bearing": 118.00304412841797,
                        "latitude": 31.97406229017956,
                        "locationProvider": 0,
                        "longitude": 34.793243805842025,
                        "provider": "gps",
                        "speed": 0.7334681749343872,
                        "time": 1505900378836
                    }, {
                        "accuracy": 350,
                        "altitude": -93.56933621528643,
                        "bearing": 359.3132629394531,
                        "latitude": 31.97320291514702,
                        "locationProvider": 0,
                        "longitude": 34.79285640849451,
                        "provider": "gps",
                        "speed": 0.3567779064178467,
                        "time": 1505986774707
                    }, {
                        "accuracy": 400,
                        "altitude": 203.61470704901822,
                        "bearing": 339.84161376953125,
                        "latitude": 31.975104668145274,
                        "locationProvider": 0,
                        "longitude": 34.79386932883562,
                        "provider": "gps",
                        "speed": 1.4857218265533447,
                        "time": 1505986819933
                    }, {
                        "accuracy": 3,
                        "altitude": 10.209607967598926,
                        "bearing": 353.2066955566406,
                        "latitude": 31.974057228366622,
                        "locationProvider": 0,
                        "longitude": 34.79315940809528,
                        "provider": "gps",
                        "speed": 1.6226495504379272,
                        "time": 1505986850340
                    }, {
                        "accuracy": 48,
                        "altitude": 80.1025553492387,
                        "bearing": 121.9902114868164,
                        "latitude": 51.51507120200028,
                        "locationProvider": 0,
                        "longitude": -0.1476333491770508,
                        "provider": "gps",
                        "speed": 0.39151817560195923,
                        "time": 1506078845414
                    }, {
                        "accuracy": 6,
                        "altitude": 74.75584908916163,
                        "bearing": 329.1602783203125,
                        "latitude": 51.53960247784337,
                        "locationProvider": 0,
                        "longitude": -0.14325467003393563,
                        "provider": "gps",
                        "speed": 0,
                        "time": 1506082096000
                    }, {
                        "accuracy": 12,
                        "altitude": 75.16138922708393,
                        "bearing": 330.796875,
                        "latitude": 51.53981180402818,
                        "locationProvider": 0,
                        "longitude": -0.14344076218922283,
                        "provider": "gps",
                        "speed": 0.9731900691986084,
                        "time": 1506082155000
                    }, {
                        "accuracy": 6,
                        "altitude": 75.28881840186294,
                        "bearing": 318.5743408203125,
                        "latitude": 51.540747435603905,
                        "locationProvider": 0,
                        "longitude": -0.14442999857629168,
                        "provider": "gps",
                        "speed": 4.252340793609619,
                        "time": 1506082185000
                    }, {
                        "accuracy": 6,
                        "altitude": 74.31951221945351,
                        "bearing": 313.78338623046875,
                        "latitude": 51.54135389475862,
                        "locationProvider": 0,
                        "longitude": -0.14521779276463673,
                        "provider": "gps",
                        "speed": 4.455428123474121,
                        "time": 1506082206000
                    }, {
                        "accuracy": 16,
                        "altitude": 80.39611493457639,
                        "bearing": 84.08354187011719,
                        "latitude": 51.54181156182343,
                        "locationProvider": 0,
                        "longitude": -0.1456862380757831,
                        "provider": "gps",
                        "speed": 0.08979275077581406,
                        "time": 1506087801100
                    }, {
                        "accuracy": 96,
                        "altitude": 69.24378217129676,
                        "bearing": 223.51597595214844,
                        "latitude": 51.54151503082702,
                        "locationProvider": 0,
                        "longitude": -0.1457621318737733,
                        "provider": "gps",
                        "speed": 0.7198232412338257,
                        "time": 1506087828333
                    }, {
                        "accuracy": 96,
                        "altitude": 64.8560918250842,
                        "bearing": 120.85807800292969,
                        "latitude": 51.541271565973865,
                        "locationProvider": 0,
                        "longitude": -0.14558688440349546,
                        "provider": "gps",
                        "speed": 1.2345468997955322,
                        "time": 1506087854608
                    }, {
                        "accuracy": 6,
                        "altitude": -91.89733625779036,
                        "bearing": 214.0637969970703,
                        "latitude": 51.54123698993509,
                        "locationProvider": 0,
                        "longitude": -0.14608612355849393,
                        "provider": "gps",
                        "speed": 6.176893711090088,
                        "time": 1506089240648
                    }, {
                        "accuracy": 64,
                        "altitude": 133.3002654112807,
                        "bearing": 282.7057800292969,
                        "latitude": 51.54165863080936,
                        "locationProvider": 0,
                        "longitude": -0.14600167445046106,
                        "provider": "gps",
                        "speed": 0.6002849340438843,
                        "time": 1506089961783
                    }, {
                        "accuracy": 24,
                        "altitude": 43.94698335375991,
                        "bearing": 254.00990295410156,
                        "latitude": 51.54111599024463,
                        "locationProvider": 0,
                        "longitude": -0.1460107342045516,
                        "provider": "gps",
                        "speed": 0.20787112414836884,
                        "time": 1506089987959
                    }, {
                        "accuracy": 32,
                        "altitude": 64.41193913197026,
                        "bearing": 267.69451904296875,
                        "latitude": 51.54132688642834,
                        "locationProvider": 0,
                        "longitude": -0.14634266814947117,
                        "provider": "gps",
                        "speed": 0.5781503319740295,
                        "time": 1506091068979
                    }, {
                        "accuracy": 24,
                        "altitude": 126.37375065304037,
                        "bearing": 111.00627899169922,
                        "latitude": 51.5412726491337,
                        "locationProvider": 0,
                        "longitude": -0.14667495145124285,
                        "provider": "gps",
                        "speed": 0.32777076959609985,
                        "time": 1506091102460
                    }, {
                        "accuracy": 24,
                        "altitude": 74.42669119161603,
                        "bearing": 351.77044677734375,
                        "latitude": 51.54098452220345,
                        "locationProvider": 0,
                        "longitude": -0.14643928176764712,
                        "provider": "gps",
                        "speed": 1.338342308998108,
                        "time": 1506091621394
                    }, {
                        "accuracy": 48,
                        "altitude": 152.67024199842643,
                        "bearing": 234.44769287109375,
                        "latitude": 51.540554506532494,
                        "locationProvider": 0,
                        "longitude": -0.14667080738390068,
                        "provider": "gps",
                        "speed": 0.9674427509307861,
                        "time": 1506091657531
                    }, {
                        "accuracy": 12,
                        "altitude": 82.29620336595383,
                        "bearing": 99.47407531738281,
                        "latitude": 51.5407608614186,
                        "locationProvider": 0,
                        "longitude": -0.14595031583027473,
                        "provider": "gps",
                        "speed": 1.1634668111801147,
                        "time": 1506091683856
                    }, {
                        "accuracy": 48,
                        "altitude": 117.49213842230549,
                        "bearing": 121.16325378417969,
                        "latitude": 51.54164733254474,
                        "locationProvider": 0,
                        "longitude": -0.14493641998092602,
                        "provider": "gps",
                        "speed": 0.5490265488624573,
                        "time": 1506093606745
                    }, {
                        "accuracy": 8,
                        "altitude": 119.61371085682848,
                        "bearing": 109.52362060546875,
                        "latitude": 51.54078503286962,
                        "locationProvider": 0,
                        "longitude": -0.14427207363611402,
                        "provider": "gps",
                        "speed": 0.8534573316574097,
                        "time": 1506093643094
                    }, {
                        "accuracy": 32,
                        "altitude": 45.44534181185066,
                        "bearing": 158.87762451171875,
                        "latitude": 51.53971358552551,
                        "locationProvider": 0,
                        "longitude": -0.14308969556579804,
                        "provider": "gps",
                        "speed": 1.1700758934020996,
                        "time": 1506093849500
                    }, {
                        "accuracy": 12,
                        "altitude": 109.33612106191295,
                        "bearing": 170.8290557861328,
                        "latitude": 51.53933306827073,
                        "locationProvider": 0,
                        "longitude": -0.1434683826252525,
                        "provider": "gps",
                        "speed": 0.8796268105506897,
                        "time": 1506093883775
                    }, {
                        "accuracy": 48,
                        "altitude": 120.03962758797829,
                        "bearing": 211.87184143066406,
                        "latitude": 51.5391846817583,
                        "locationProvider": 0,
                        "longitude": -0.1429528771932348,
                        "provider": "gps",
                        "speed": 0.9650321006774902,
                        "time": 1506093909512
                    }, {
                        "accuracy": 32,
                        "altitude": 39.68773058166875,
                        "bearing": 209.27951049804688,
                        "latitude": 51.52273842410805,
                        "locationProvider": 0,
                        "longitude": -0.15272871311126704,
                        "provider": "gps",
                        "speed": 1.6375900506973267,
                        "time": 1506097985807
                    }, {
                        "accuracy": 192,
                        "altitude": 77.48551086609706,
                        "bearing": 193.1294403076172,
                        "latitude": 51.52119076745336,
                        "locationProvider": 0,
                        "longitude": -0.15245077210967978,
                        "provider": "gps",
                        "speed": 1.2553139925003052,
                        "time": 1506098018235
                    }, {
                        "accuracy": 24,
                        "altitude": 162.1969288295902,
                        "bearing": 242.9000701904297,
                        "latitude": 51.520781171456846,
                        "locationProvider": 0,
                        "longitude": -0.1525617125853475,
                        "provider": "gps",
                        "speed": 1.6757761240005493,
                        "time": 1506102994300
                    }, {
                        "accuracy": 64,
                        "altitude": 39.51908414030013,
                        "bearing": 83.41153717041016,
                        "latitude": 51.50241014891737,
                        "locationProvider": 0,
                        "longitude": -0.18797085762794796,
                        "provider": "gps",
                        "speed": 2.459028720855713,
                        "time": 1506171314887
                    }, {
                        "accuracy": 8,
                        "altitude": 87.87562195970094,
                        "latitude": 51.50267063767566,
                        "locationProvider": 0,
                        "longitude": -0.1879297799124273,
                        "provider": "gps",
                        "speed": 0,
                        "time": 1506171335000
                    }, {
                        "accuracy": 4,
                        "altitude": 80.73402486668353,
                        "bearing": 104.48284149169922,
                        "latitude": 51.5026158876892,
                        "locationProvider": 0,
                        "longitude": -0.18757503939260675,
                        "provider": "gps",
                        "speed": 0.3445044457912445,
                        "time": 1506171366000
                    }, {
                        "accuracy": 128,
                        "altitude": 74.67571715534733,
                        "bearing": 5.111556053161621,
                        "latitude": 51.52185957429242,
                        "locationProvider": 0,
                        "longitude": -0.15308736111693452,
                        "provider": "gps",
                        "speed": 1.029559850692749,
                        "time": 1506329804425
                    }, {
                        "accuracy": 6,
                        "altitude": 102.63423676722445,
                        "latitude": 51.521433111473314,
                        "locationProvider": 0,
                        "longitude": -0.15329327261803227,
                        "provider": "gps",
                        "speed": 0,
                        "time": 1506329824999
                    }, {
                        "accuracy": 500,
                        "latitude": 51.5229493,
                        "locationProvider": 0,
                        "longitude": -0.1592137,
                        "provider": "network",
                        "time": 1506330844520
                    }, {
                        "accuracy": 500,
                        "latitude": 51.5229493,
                        "locationProvider": 0,
                        "longitude": -0.1592137,
                        "provider": "network",
                        "time": 1506331161366
                    }, {
                        "accuracy": 18.558000564575195,
                        "altitude": 68.5,
                        "latitude": 51.5106452,
                        "locationProvider": 0,
                        "longitude": -0.1384752,
                        "provider": "network",
                        "time": 1506344164233
                    }, {
                        "accuracy": 12,
                        "altitude": 89.08074816715951,
                        "bearing": 43.567665100097656,
                        "latitude": 51.51084735878532,
                        "locationProvider": 0,
                        "longitude": -0.13893561314965996,
                        "provider": "gps",
                        "speed": 0.7693256139755249,
                        "time": 1506345830265
                    }, {
                        "accuracy": 4,
                        "altitude": 60.997349446372375,
                        "bearing": 111.3391342163086,
                        "latitude": 31.97402589441628,
                        "locationProvider": 0,
                        "longitude": 34.79339831292727,
                        "provider": "gps",
                        "speed": 3.37955904006958,
                        "time": 1509087014999
                    }, {
                        "accuracy": 24,
                        "altitude": 65.26287214781827,
                        "bearing": 356.0028991699219,
                        "latitude": 31.974497725253507,
                        "locationProvider": 0,
                        "longitude": 34.793142660905104,
                        "provider": "gps",
                        "speed": 1.0080407857894897,
                        "time": 1509267166972
                    }, {
                        "accuracy": 6,
                        "altitude": 54.514331077857435,
                        "bearing": 123.13156127929688,
                        "latitude": 31.974018295239325,
                        "locationProvider": 0,
                        "longitude": 34.79344217366111,
                        "provider": "gps",
                        "speed": 2.1723721027374268,
                        "time": 1509274879000
                    }, {
                        "accuracy": 96,
                        "altitude": 56.86008640479551,
                        "bearing": 200.48692321777344,
                        "latitude": 31.97382632951784,
                        "locationProvider": 0,
                        "longitude": 34.79375793002824,
                        "provider": "gps",
                        "speed": 5.440792083740234,
                        "time": 1509303622431
                    }, {
                        "accuracy": 48,
                        "altitude": 85.38811597325277,
                        "bearing": 140.92782592773438,
                        "latitude": 31.9737499009898,
                        "locationProvider": 0,
                        "longitude": 34.79331892649666,
                        "provider": "gps",
                        "speed": 0.28069549798965454,
                        "time": 1509306167684
                    }, {
                        "accuracy": 32,
                        "altitude": 54.74233300384943,
                        "bearing": 53.817989349365234,
                        "latitude": 31.974353193111718,
                        "locationProvider": 0,
                        "longitude": 34.793153201459305,
                        "provider": "gps",
                        "speed": 0.7192003130912781,
                        "time": 1509307120938
                    }, {
                        "accuracy": 8,
                        "altitude": 111.17971849902041,
                        "bearing": 213.9624481201172,
                        "latitude": 31.974100312547407,
                        "locationProvider": 0,
                        "longitude": 34.79331571876634,
                        "provider": "gps",
                        "speed": 0.9513957500457764,
                        "time": 1509307144339
                    }, {
                        "accuracy": 24,
                        "altitude": 86.20096912743071,
                        "bearing": 18.348323822021484,
                        "latitude": 31.974328064548953,
                        "locationProvider": 0,
                        "longitude": 34.79319677379731,
                        "provider": "gps",
                        "speed": 0.9341971278190613,
                        "time": 1509434824291
                    }, {
                        "accuracy": 400,
                        "altitude": 657.3122747745347,
                        "bearing": 147.8698272705078,
                        "latitude": 31.97538831506103,
                        "locationProvider": 0,
                        "longitude": 34.79294073094588,
                        "provider": "gps",
                        "speed": 0.4001181125640869,
                        "time": 1509435952832
                    }, {
                        "accuracy": 6,
                        "altitude": 44.5096556427622,
                        "bearing": 167.93324279785156,
                        "latitude": 31.973942813251806,
                        "locationProvider": 0,
                        "longitude": 34.7934081080027,
                        "provider": "gps",
                        "speed": 1.3190627098083496,
                        "time": 1509435988142
                    }, {
                        "accuracy": 32,
                        "altitude": 73.8209346587341,
                        "bearing": 195.59420776367188,
                        "latitude": 32.07163592248544,
                        "locationProvider": 0,
                        "longitude": 34.78655583475036,
                        "provider": "gps",
                        "speed": 0.4014478921890259,
                        "time": 1509455754099
                    }, {
                        "accuracy": 64,
                        "altitude": 21.101582754468403,
                        "bearing": 35.2621955871582,
                        "latitude": 31.973952344217466,
                        "locationProvider": 0,
                        "longitude": 34.79318836148719,
                        "provider": "gps",
                        "speed": 0.656461238861084,
                        "time": 1509470691604
                    }, {
                        "accuracy": 64,
                        "altitude": 61.82348102767625,
                        "bearing": 104.12303161621094,
                        "latitude": 31.974135899792063,
                        "locationProvider": 0,
                        "longitude": 34.79355103432935,
                        "provider": "gps",
                        "speed": 4.5041069984436035,
                        "time": 1509470751885
                    }, {
                        "accuracy": 128,
                        "altitude": 49.80281432126581,
                        "bearing": 167.13284301757812,
                        "latitude": 31.974157878713463,
                        "locationProvider": 0,
                        "longitude": 34.79320443725929,
                        "provider": "gps",
                        "speed": 3.491793632507324,
                        "time": 1510604580156
                    }, {
                        "accuracy": 32,
                        "altitude": 44.711587466359376,
                        "bearing": 226.7339630126953,
                        "latitude": 31.97394904462416,
                        "locationProvider": 0,
                        "longitude": 34.79307680155242,
                        "provider": "gps",
                        "speed": 1.0024206638336182,
                        "time": 1510604583156
                    }, {
                        "accuracy": 8,
                        "altitude": 58.95245831978672,
                        "bearing": 13.51846981048584,
                        "latitude": 31.9741260038515,
                        "locationProvider": 0,
                        "longitude": 34.793114949506645,
                        "provider": "gps",
                        "speed": 0.6926841139793396,
                        "time": 1510639023576
                    }, {
                        "accuracy": 96,
                        "altitude": 172.62754293469507,
                        "bearing": 194.07888793945312,
                        "latitude": 32.084913561186674,
                        "locationProvider": 0,
                        "longitude": 34.801633970128194,
                        "provider": "gps",
                        "speed": 0.10996711999177933,
                        "time": 1510646919479
                    }, {
                        "accuracy": 64,
                        "altitude": 44.04515901145476,
                        "bearing": 218.83346557617188,
                        "latitude": 32.084710091263105,
                        "locationProvider": 0,
                        "longitude": 34.80458642674796,
                        "provider": "gps",
                        "speed": 0.2557288408279419,
                        "time": 1510646954592
                    }, {
                        "accuracy": 12,
                        "altitude": 124.40662092799974,
                        "latitude": 32.08422427435907,
                        "locationProvider": 0,
                        "longitude": 34.803874529051875,
                        "provider": "gps",
                        "speed": 0,
                        "time": 1510658838088
                    }, {
                        "accuracy": 96,
                        "altitude": 52.16428285756024,
                        "bearing": 324.0173034667969,
                        "latitude": 32.08463965443885,
                        "locationProvider": 0,
                        "longitude": 34.804595558981475,
                        "provider": "gps",
                        "speed": 0.4895479083061218,
                        "time": 1510677433031
                    }, {
                        "accuracy": 64,
                        "altitude": 71.89083788313702,
                        "bearing": 121.06671142578125,
                        "latitude": 31.97386162053895,
                        "locationProvider": 0,
                        "longitude": 34.793262421678754,
                        "provider": "gps",
                        "speed": 1.6283591985702515,
                        "time": 1510685721791
                    }, {
                        "accuracy": 4,
                        "altitude": 44.13011500778102,
                        "bearing": 217.821533203125,
                        "latitude": 31.974016442490935,
                        "locationProvider": 0,
                        "longitude": 34.79320702851621,
                        "provider": "gps",
                        "speed": 0.22448419034481049,
                        "time": 1510686040618
                    }, {
                        "accuracy": 48,
                        "altitude": 109.03283100237734,
                        "bearing": 39.949832916259766,
                        "latitude": 31.974148837182124,
                        "locationProvider": 0,
                        "longitude": 34.79331015621314,
                        "provider": "gps",
                        "speed": 2.352126121520996,
                        "time": 1510701062170
                    }, {
                        "accuracy": 48,
                        "altitude": 61.270033829589515,
                        "bearing": 224.1793975830078,
                        "latitude": 31.974021701729093,
                        "locationProvider": 0,
                        "longitude": 34.79322625304529,
                        "provider": "gps",
                        "speed": 0.6789906024932861,
                        "time": 1510724528009
                    }, {
                        "accuracy": 128,
                        "altitude": -74.7657218143654,
                        "bearing": 17.443777084350586,
                        "latitude": 31.973482932397985,
                        "locationProvider": 0,
                        "longitude": 34.79317899045308,
                        "provider": "gps",
                        "speed": 0.6052984595298767,
                        "time": 1510724672683
                    }, {
                        "accuracy": 48,
                        "altitude": 110.05205721380592,
                        "bearing": 192.4773712158203,
                        "latitude": 31.97374405724689,
                        "locationProvider": 0,
                        "longitude": 34.79253927761942,
                        "provider": "gps",
                        "speed": 0.18285515904426575,
                        "time": 1510727065821
                    }, {
                        "accuracy": 48,
                        "altitude": 73.12352866592471,
                        "bearing": 84.6346435546875,
                        "latitude": 31.974036757694375,
                        "locationProvider": 0,
                        "longitude": 34.79296265143823,
                        "provider": "gps",
                        "speed": 1.076344609260559,
                        "time": 1510728351961
                    }, {
                        "accuracy": 64,
                        "altitude": 53.418834183242055,
                        "bearing": 159.24148559570312,
                        "latitude": 31.974300985598926,
                        "locationProvider": 0,
                        "longitude": 34.79330895577157,
                        "provider": "gps",
                        "speed": 0.06829993426799774,
                        "time": 1510728387695
                    }, {
                        "accuracy": 128,
                        "altitude": 209.70561764246816,
                        "bearing": 112.10242462158203,
                        "latitude": 31.97373835706413,
                        "locationProvider": 0,
                        "longitude": 34.79411977940989,
                        "provider": "gps",
                        "speed": 4.607977390289307,
                        "time": 1510728427906
                    }, {
                        "accuracy": 8,
                        "altitude": 46.34064053122661,
                        "latitude": 31.97385523087621,
                        "locationProvider": 0,
                        "longitude": 34.79371531492255,
                        "provider": "gps",
                        "speed": 0,
                        "time": 1510728433906
                    }, {
                        "accuracy": 350,
                        "altitude": 48.4943617806817,
                        "bearing": 159.09970092773438,
                        "latitude": 32.0838188800159,
                        "locationProvider": 0,
                        "longitude": 34.804721026042905,
                        "provider": "gps",
                        "speed": 3.918114185333252,
                        "time": 1510831945677
                    }, {
                        "accuracy": 192,
                        "altitude": 44.70609295676102,
                        "bearing": 324.8389587402344,
                        "latitude": 32.0829264000033,
                        "locationProvider": 0,
                        "longitude": 34.80473461657723,
                        "provider": "gps",
                        "speed": 6.454309463500977,
                        "time": 1510831952677
                    }, {
                        "accuracy": 128,
                        "altitude": 42.58518278103596,
                        "bearing": 226.49652099609375,
                        "latitude": 32.083827180627104,
                        "locationProvider": 0,
                        "longitude": 34.80317311952409,
                        "provider": "gps",
                        "speed": 0.06808438152074814,
                        "time": 1510906274441
                    }, {
                        "accuracy": 192,
                        "altitude": 47.267044899018245,
                        "bearing": 1.7689521312713623,
                        "latitude": 32.0850083714822,
                        "locationProvider": 0,
                        "longitude": 34.802319667347255,
                        "provider": "gps",
                        "speed": 0.789130687713623,
                        "time": 1510907678626
                    }, {
                        "accuracy": 128,
                        "altitude": 486.3469042432916,
                        "bearing": 45.48550033569336,
                        "latitude": 32.08408083915739,
                        "locationProvider": 0,
                        "longitude": 34.80396774935451,
                        "provider": "gps",
                        "speed": 0.929187536239624,
                        "time": 1510907939896
                    }, {
                        "accuracy": 64,
                        "altitude": 188.0092968614461,
                        "bearing": 243.97702026367188,
                        "latitude": 32.08479874631623,
                        "locationProvider": 0,
                        "longitude": 34.80429837861191,
                        "provider": "gps",
                        "speed": 8.598332405090332,
                        "time": 1510907977244
                    }, {
                        "accuracy": 24,
                        "altitude": 176.72209507242073,
                        "latitude": 32.08498838324177,
                        "locationProvider": 0,
                        "longitude": 34.80448238505404,
                        "provider": "gps",
                        "speed": 0,
                        "time": 1510907980244
                    }],
                    "middleName": "",
                    "name": "Adam",
                    "notifications": [{
                        "active": false,
                        "createdDate": "2017-11-16T16:38:27.190Z",
                        "icon": "https://firebasestorage.googleapis.com/v0/b/jaxee-276a7.appspot.com/o/files%2Famishashouagmailcom%2Fimages%2F1509211208283?alt=media&token=1b79041e-e8d5-4ce4-a3c3-2614a2825d5c",
                        "state": {
                            "name": "root.starter.order",
                            "params": {
                                "orderKey": "-Kz4gVn2Yztc8piXTiBQ"
                            }
                        },
                        "text": "Great news! You have a new job request."
                    }, {
                        "active": false,
                        "createdDate": "2017-11-16T16:38:27.182Z",
                        "icon": "https://firebasestorage.googleapis.com/v0/b/jaxee-276a7.appspot.com/o/files%2Famishashouagmailcom%2Fimages%2F1509211208283?alt=media&token=1b79041e-e8d5-4ce4-a3c3-2614a2825d5c",
                        "state": {
                            "name": "root.starter.order",
                            "params": {
                                "orderKey": "-Kz4gVn2Yztc8piXTiBQ"
                            }
                        },
                        "text": "Great news! You have a new job request."
                    }, {
                        "active": false,
                        "createdDate": "2017-11-13T10:06:55.576Z",
                        "icon": "https://firebasestorage.googleapis.com/v0/b/jaxee-276a7.appspot.com/o/files%2Fnetasaarwallacoil%2Fimages%2F1509216097911?alt=media&token=80167a0b-fb66-4e12-8cad-63ac4aac2fc0",
                        "state": {
                            "name": "root.starter.order",
                            "params": {
                                "orderKey": "-Kyopu9S938LNR-dp1ts"
                            }
                        },
                        "text": "Great news! You have a new job request."
                    }, {
                        "active": false,
                        "createdDate": "2017-11-13T10:06:53.163Z",
                        "icon": "https://firebasestorage.googleapis.com/v0/b/jaxee-276a7.appspot.com/o/files%2Fnetasaarwallacoil%2Fimages%2F1509216097911?alt=media&token=80167a0b-fb66-4e12-8cad-63ac4aac2fc0",
                        "state": {
                            "name": "root.starter.order",
                            "params": {
                                "orderKey": "-Kyopu9S938LNR-dp1ts"
                            }
                        },
                        "text": "Great news! You have a new job request."
                    }, {
                        "active": false,
                        "createdDate": "2017-11-13T10:04:29.456Z",
                        "icon": "https://firebasestorage.googleapis.com/v0/b/jaxee-276a7.appspot.com/o/files%2Fnetasaarwallacoil%2Fimages%2F1509216097911?alt=media&token=80167a0b-fb66-4e12-8cad-63ac4aac2fc0",
                        "state": {
                            "name": "root.starter.order",
                            "params": {
                                "orderKey": "-Kyop5AkqM-eP8wHRmod"
                            }
                        },
                        "text": "Great news! You have a new job request."
                    }, {
                        "active": false,
                        "createdDate": "2017-11-13T10:04:03.656Z",
                        "icon": "https://firebasestorage.googleapis.com/v0/b/jaxee-276a7.appspot.com/o/files%2Fnetasaarwallacoil%2Fimages%2F1509216097911?alt=media&token=80167a0b-fb66-4e12-8cad-63ac4aac2fc0",
                        "state": {
                            "name": "root.starter.order",
                            "params": {
                                "orderKey": "-Kyop5AkqM-eP8wHRmod"
                            }
                        },
                        "text": "Great news! You have a new job request."
                    }, {
                        "active": false,
                        "createdDate": "2017-11-13T10:01:15.901Z",
                        "icon": "https://firebasestorage.googleapis.com/v0/b/jaxee-276a7.appspot.com/o/files%2Fnetasaarwallacoil%2Fimages%2F1509216097911?alt=media&token=80167a0b-fb66-4e12-8cad-63ac4aac2fc0",
                        "state": {
                            "name": "root.starter.order",
                            "params": {
                                "orderKey": "-KyoobkmeStcP60IfPnI"
                            }
                        },
                        "text": "Great news! You have a new job request."
                    }, {
                        "active": false,
                        "createdDate": "2017-11-13T09:58:41.099Z",
                        "icon": "./img/app/images/icon-small.png",
                        "state": {
                            "name": "root.starter.profile",
                            "params": {
                                "whichTab": "prof"
                            }
                        },
                        "text": "Your account (Dog Walking) has been approved"
                    }],
                    "paypalPaymentEmail": "adamkraif@gmail.com",
                    "photoURL": "https://lh6.googleusercontent.com/-sftMcwzyNqg/AAAAAAAAAAI/AAAAAAAAAK0/pNy0M7vhrn4/s96-c/photo.jpg",
                    "provider": "google-oauth2",
                    "serverAuthCode": "4/U3kynVL7cKDMVgahcOVp-eK8LY9xF1dMgG5utE941Q0",
                    "sessionTimeInMinutes": [{
                        "Entry": "2017-12-14T16:59:04.011Z",
                        "left": "2017-12-14T17:00:26.156Z",
                        "timeDiffInMinutes": 1
                    }, {
                        "Entry": "2017-12-12T08:32:53.812Z",
                        "left": "2017-12-12T09:22:56.104Z",
                        "timeDiffInMinutes": 50
                    }, {
                        "Entry": "2017-12-12T08:32:53.812Z",
                        "left": "2017-12-12T08:40:42.973Z",
                        "timeDiffInMinutes": 7
                    }, {
                        "Entry": "2017-12-12T08:32:53.812Z",
                        "left": "2017-12-12T08:34:03.743Z",
                        "timeDiffInMinutes": 1
                    }, {
                        "Entry": "2017-11-30T15:22:51.723Z",
                        "left": "2017-11-30T16:06:49.928Z",
                        "timeDiffInMinutes": 43
                    }, {
                        "Entry": "2017-11-30T15:22:51.723Z",
                        "left": "2017-11-30T15:28:52.122Z",
                        "timeDiffInMinutes": 6
                    }, {
                        "Entry": "2017-11-27T22:57:36.138Z",
                        "left": "2017-11-27T22:59:45.871Z",
                        "timeDiffInMinutes": 2
                    }, {
                        "Entry": "2017-11-27T22:49:58.050Z",
                        "left": "2017-11-27T22:57:30.402Z",
                        "timeDiffInMinutes": 7
                    }, {
                        "Entry": "2017-11-27T16:18:23.235Z",
                        "left": "2017-11-27T18:09:31.294Z",
                        "timeDiffInMinutes": 51
                    }, {
                        "Entry": "2017-11-27T16:18:23.235Z",
                        "left": "2017-11-27T16:33:18.883Z",
                        "timeDiffInMinutes": 14
                    }, {
                        "Entry": "2017-11-27T16:18:23.235Z",
                        "left": "2017-11-27T16:31:34.514Z",
                        "timeDiffInMinutes": 13
                    }, {
                        "Entry": "2017-11-27T16:18:23.235Z",
                        "left": "2017-11-27T16:25:20.046Z",
                        "timeDiffInMinutes": 6
                    }, {
                        "Entry": "2017-11-25T12:55:09.733Z",
                        "left": "2017-11-25T12:58:41.040Z",
                        "timeDiffInMinutes": 3
                    }, {
                        "Entry": "2017-11-25T12:34:55.576Z",
                        "left": "2017-11-25T12:53:47.996Z",
                        "timeDiffInMinutes": 18
                    }, {
                        "Entry": "2017-11-25T11:12:31.080Z",
                        "left": "2017-11-25T12:30:25.648Z",
                        "timeDiffInMinutes": 17
                    }, {
                        "Entry": "2017-11-25T11:12:31.080Z",
                        "left": "2017-11-25T11:26:17.969Z",
                        "timeDiffInMinutes": 13
                    }, {
                        "Entry": "2017-11-25T11:12:31.080Z",
                        "left": "2017-11-25T11:25:25.172Z",
                        "timeDiffInMinutes": 12
                    }, {
                        "Entry": "2017-11-25T11:12:31.080Z",
                        "left": "2017-11-25T11:15:12.175Z",
                        "timeDiffInMinutes": 2
                    }, {
                        "Entry": "2017-11-25T09:53:31.798Z",
                        "left": "2017-11-25T10:13:57.388Z",
                        "timeDiffInMinutes": 20
                    }, {
                        "Entry": "2017-11-25T09:53:31.798Z",
                        "left": "2017-11-25T10:13:08.314Z",
                        "timeDiffInMinutes": 19
                    }, {
                        "Entry": "2017-11-25T09:53:31.798Z",
                        "left": "2017-11-25T10:04:17.936Z",
                        "timeDiffInMinutes": 10
                    }, {
                        "Entry": "2017-11-25T09:53:31.798Z",
                        "left": "2017-11-25T10:01:34.792Z",
                        "timeDiffInMinutes": 8
                    }, {
                        "Entry": "2017-11-24T15:11:08.367Z",
                        "left": "2017-11-24T15:20:19.129Z",
                        "timeDiffInMinutes": 9
                    }, {
                        "Entry": "2017-11-24T15:11:08.367Z",
                        "left": "2017-11-24T15:18:42.899Z",
                        "timeDiffInMinutes": 7
                    }, {
                        "Entry": "2017-11-24T15:11:08.367Z",
                        "left": "2017-11-24T15:12:28.758Z",
                        "timeDiffInMinutes": 1
                    }, {
                        "Entry": "2017-11-24T14:49:29.316Z",
                        "left": "2017-11-24T14:51:30.609Z",
                        "timeDiffInMinutes": 2
                    }, {
                        "Entry": "2017-11-24T09:26:16.627Z",
                        "left": "2017-11-24T12:45:13.557Z",
                        "timeDiffInMinutes": 18
                    }, {
                        "Entry": "2017-11-24T09:26:16.627Z",
                        "left": "2017-11-24T09:31:27.487Z",
                        "timeDiffInMinutes": 5
                    }, {
                        "Entry": "2017-11-24T09:26:16.627Z",
                        "left": "2017-11-24T09:30:42.680Z",
                        "timeDiffInMinutes": 4
                    }, {
                        "Entry": "2017-11-24T09:26:16.627Z",
                        "left": "2017-11-24T09:28:19.357Z",
                        "timeDiffInMinutes": 2
                    }],
                    "social_security_number": "",
                    "stripedEmail": "adamkraifgmailcom",
                    "tags": {
                        "ADAM": 2,
                        "AdaM": 1,
                        "Adam": 2,
                        "adam": 1,
                        "assembly": 1,
                        "bathtub refinishing": 1,
                        "cat sitting": 2,
                        "dog": 2,
                        "dog sitting": 2,
                        "dog walking": 2,
                        "furniture": 1,
                        "handyman": 1,
                        "ikea": 1,
                        "ikea furniture assembly": 1,
                        "pet sitter": 2,
                        "pet walking": 2,
                        "repairman": 1,
                        "shower door installation": 1,
                        "tiling services": 1,
                        "walking": 2
                    },
                    "tel": "053-221-6896",
                    "tz": "Asia/Jerusalem",
                    "ua": "Mozilla/5.0 (Linux; Android 7.0; SM-G955F Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/63.0.3239.107 Mobile Safari/537.36",
                    "uid": "JTOzvLfajiS2Qe51DlhufRKzhCj1",
                    "userChangedSettings": "2017-11-25T11:13:57.445Z",
                    "userCreated": "2017-10-24T19:40:15.506Z",
                    "userCreatedAt": "2017-11-07T15:34:59.896Z",
                    "userId": "103324002183079391191"
                },
                "adamkraifwallacom": {
                    "age_range": {
                        "min": 21
                    },
                    "app_version": "1.193",
                    "availability": false,
                    "bankAccount": {
                        "account_number": "",
                        "routing_number": ""
                    },
                    "checkedTerms": {
                        "consumer": {
                            "checked": true,
                            "dateSign": "2017-10-27T05:57:16.818Z"
                        },
                        "sp": {
                            "checked": true,
                            "dateSign": "2017-11-19T10:32:48.978Z",
                            "terms": "<h3>Jaxee Terms of Service - Service Provider Agreement</h3>\n\n<p>This Terms of Service &ndash; Service Provider Agreement constitutes a legally binding agreement (&ldquo;Agreement&rdquo;) between the service provider who desires to use the Platform to offer Jobs (herein, &ldquo;You&rdquo; or &ldquo;Expert&rdquo;) and Jaxee, LLC. (&ldquo;Company&rdquo; or &ldquo;Jaxee&rdquo;) governing your use of the Jaxee Platform (as defined below), Company&rsquo;s website (Jaxee.com or the &ldquo;Site&rdquo;) or mobile applications. The platform services provided by Company, the Site and mobile applications together are hereinafter collectively referred to as the &ldquo;Jaxee Platform.&rdquo; Your use of the Jaxee Platform constitutes your acceptance of and agreement to all of the terms and conditions in this Agreement and the Privacy Policy (the &ldquo;Privacy Policy&rdquo;), and any future amendments and additions to this Agreement (as defined below) as we may publish from time to time.</p>\n\n<h5>1. The Jaxee Platform connects Experts and Customer Members seeking Jobs.</h5>\n\n<p>The Jaxee Platform is a platform which enables Customer Members and Experts to meet. &ldquo;Customer Members&rdquo; are individuals and/or businesses seeking to obtain services (&ldquo;Jobs&rdquo;) from Experts and are therefore Customer Members of Experts, and &ldquo;Experts&rdquo; are individuals and/or businesses that specialize in a particular field of service that are seeking to perform Jobs for Customer Members. EXPERTS ARE INDEPENDENT CONTRACTORS AND NOT EMPLOYEES, JOINT VENTURERS, PARTNERS OR IN ANY OTHER RELATIONSHIP WITH THE COMPANY. COMPANY DOES NOT PERFORM JOBS AND DOES NOT EMPLOY INDIVIDUALS TO PERFORM JOBS FOR CUSTOMER MEMBERS. EXPERT HEREBY ACKNOWLEDGES THAT COMPANY DOES NOT SUPERVISE, DIRECT, CONTROL OR MONITOR AN EXPERT&rsquo;S WORK AND IS NOT RESPONSIBLE FOR THE WORK PERFORMED OR THE JOBS IN ANY MANNER. EXPERTS ASSUME FULL RESPONSIBILITY AND LIABILITY FOR ALL WORK PERFORMED AS A RESULT OF THE USE OF THE COMPANY&rsquo;S WEBSITE OR MOBILE APPLICATIONS. The Jaxee Platform only enables referrals between Customer Members and Experts for the fulfillment of Jobs. Company is not responsible for the performance of the Customer Members, nor does it have control over the quality, timing, legality, failure to provide, or any other element whatsoever of Jobs, Experts, Customer Members, nor of the integrity, responsibility, qualifications or any of the actions or omissions whatsoever of any Customer Members or Expert. Company makes no representations about the suitability, reliability, timeliness, fitness or, warranty or accuracy of the Jobs requested and Jobs provided by Experts referred through the Jaxee Platform whether in public, private, or offline interactions.</p>\n\n<h5>2. Screening of Experts and Representation and Warranties of Experts</h5>\n\n<p>In Company&rsquo;s sole discretion, Experts may be subject to an extensive screening process before they can register for and during their use of the Jaxee Platform, including but not limited to a verification of identity and a comprehensive criminal background check, at the Country, State and local level, and license and/or permit checks if applicable. Experts hereby give consent to Company to conduct background checks as often as required in compliance with federal and state laws, including, without limitation, the Fair Credit Reporting Act. Although Company may perform background checks of Experts, as outlined above, Company is not required to do so and cannot confirm that each Expert is who they claim to be and therefore, Company cannot and does not assume any responsibility for the accuracy or reliability of identity or background check information or any information provided through the Jaxee Platform. By registering or using the Platform to offer, post or provide Jobs, Expert Members represent and warrant that they, and the employees, agents, contractors, and subcontractors who may perform work for them, are properly and fully qualified and experienced, and licensed, certified, bonded, and insured, as required by applicable laws or regulations to which they may be subject in the jurisdiction(s) in which they offer their Job and in relation to the specific Job they are performing. Jaxee is not in the business of providing Jobs. Expert Members understand and agree that by creating and maintaining an account on the Platform, they receive only the ability to use the Jaxee Platform to access persons interested in receiving Jobs and related tools, including but not limited to the ability to message Customer Members or schedule appointments, that facilitate the provision of Jobs. Expert Members understand and agree that using the Platform does not guarantee that any Jaxee users will engage them for Jobs. Expert Members understand and agree that they are customers of Jaxee, and are not Jaxee employees, joint venturers, partners, or agents. Expert acknowledges that it sets or confirms its own prices, provides its own equipment, and determines its own work schedule. Jaxee does not control, and has no right to control, the services an Expert provides (including how the Expert provides such services) if the Expert is engaged by a Customer Member, except as specifically noted herein. Company does not screen its Customer Members. When interacting with Customer Members or other Experts, you should exercise caution and common sense to protect your personal safety and property, just as you would when interacting with other persons whom you don&rsquo;t know. NEITHER COMPANY NOR ITS AFFILIATES OR LICENSORS IS RESPONSIBLE FOR THE CONDUCT, WHETHER ONLINE OR OFFLINE, OF ANY CUSTOMER MEMBER CUSTOMER MEMBER OR EXPERT USER OF THE JAXEE PLATFORM AND YOU HEREBY RELEASE COMPANY AND ITS AFFILIATES OR LICENSORS FROM ANY LIABILITY RELATED THERETO. COMPANY AND ITS AFFILIATES AND LICENSORS WILL NOT BE LIABLE FOR ANY CLAIM, INJURY OR DAMAGE ARISING IN CONNECTION WITH YOUR USE OF THE JAXEE PLATFORM. Expert Representations and Warranties You represent and warrant that that: (1) you are 18 years of age or older and are at least of the legally required age in the jurisdiction in which you reside, and are otherwise capable of entering into binding contracts, and (2) you have the right, authority and capacity to enter into this Agreement and to abide by the terms and conditions of this Agreement, and that you will so abide. Where you enter into this Agreement on behalf of a company or other organization, you represent and warrant that you have authority to act on behalf of that entity and to bind that entity to this Agreement. You represent and warrant that you have read, understand and are required to agree to and be bound by the terms of this Agreement and the Privacy Policy in order to access and use the Jaxee Platform. You hereby warrant and represent that you will respect the privacy, property and data protection rights of Customer Members and other Experts and that you will not record (whether video or audio or otherwise) any Job or any interaction by or with any Customer Member User and/or Expert in connection with the Jaxee Platform without the prior written consent of such party. You further represent and warrant that you will fulfill the commitments you make to Customer Members including receiving payment through the Jaxee Platform (where you have elected to accept payment via credit card) or otherwise (where you have elected to accept payment via cash or check), communicating clearly and promptly with the Customer Member and/or respond to inquiries promptly, being present and/or available at the time you agree upon with the Customer Member and utilizing the third party payment processing system specified or approved by us to make or receive payment for Jobs provided through the Jaxee Platform. You also represent and warrant that you will act professionally and responsibly in your interactions with Customer Members. Experts represent and warrant that you will provide timely, high quality services to your Customer Members, you will only offer and provide Jobs for which you have the necessary skills and expertise and you will provide the Jobs safely, cleanly and to the best of your abilities. Experts represent and warrant that they hold all licenses and certification necessary to perform the Jobs for which they are hired, are active and in good standing with the applicable licensing authorities, do not have any outstanding or unresolved disciplinary actions against them by the relevant licensing or permitting board, hold the requisite insurance and acknowledge that their insurance shall be primary for all Jobs performed. Experts acknowledge they will personally perform the Job for which they are hired or, with the Consumer&rsquo;s permission, will only send other Licensed Experts in their employ who (i) hold the requisite license, (ii) are covered by the requisite insurance and (iii) are registered as an Expert on the Jaxee Platform. Contract between Customer Members and Experts You acknowledge and agree that a contract (the &ldquo;Service Agreement&rdquo;) is formed between you and the Customer Member when you agree on the terms of a Service with the Customer Member. The terms of the Service Agreement include the terms set forth in this Section 3, the engagement terms proposed by you and accepted by the Customer Member on the Jaxee Platform, and any other contractual terms accepted by both the Expert and the Customer Member to the extent such terms do not conflict with the terms in this Agreement including this Section and do not expand Company&rsquo;s obligations or restrict Company&rsquo;s rights under this Agreement. You agree that Company is not a party to any Service Agreement and the formation of a Service Agreement will not, under any circumstance, create an employment or other service relationship between Company and the Expert. Customer Member Expert</p>\n\n<h5>4. Billing and Payment</h5>\n\n<p>Users of the Jaxee Platform contract for Jobs directly with Customer Members. Company will not be a party to any contracts for Jobs or other services. Payment for Jobs through the Jaxee Platform is made directly from the Customer Member to the Expert and not by Company. Company is not obligated to pay the Expert for a Customer Member&rsquo;s failure to pay for Jobs. Payment processing services for Expert on the Jaxee Platform are provided by Stripe, Paypal and any other payment services provider utilized by Jaxee from time to time in connection with the Jaxee Platform (each a &ldquo;PSP&rdquo;, and collectively, the &ldquo;PSPs&rdquo; ) and are subject to the PSPs&rsquo; agreements and terms of service governing their respective payment services (collectively, the &ldquo;PSP Services Agreement&rdquo;). By agreeing to this Agreement or continuing to operate as a an Expert on the Jaxee Platform, you agree to be bound by the PSP Services Agreement, as the same may be amended or modified by the PSPs from time to time. As a condition of the Jaxee Platform enabling payment processing services through the PSPs, you agree to provide the Jaxee Platform accurate and complete information about you and your business, and you authorize Jaxee to share it and transaction information related to your use of the payment processing services provided by the PSPs. Customer Members using the Jaxee Platform will be required to provide their credit card and/or PayPal account information to Company and the PSPs retained by Company (the &ldquo;PSP&rdquo;), to the extent any you have elected to accept payment for Jobs via the Jaxee Platform by and through the PSPs. Experts are responsible for invoicing their Customer Members within 24 hours of the work being performed even if the Job is not completed in its entirety or is designed as &ldquo;ongoing&rdquo;. Customer Members will be responsible for paying the invoice for each Job (the &ldquo;Invoice&rdquo;), which will include: (i) the pricing terms of the Job agreed upon, (ii) any out of pocket expenses agreed with and submitted by an Expert in connection with the Jobs provided; and (iii) any tip or gratuity, if applicable. Experts will be responsible for paying to Company: (i) Jaxee Platform marketing/booking fees, (ii) repayment of erroneous payments made by the PSP, (iii) any and all fees PayPal may charge the Expert or the Company for processing a payment via PayPal and (iv) a handling fee of six percent (6%) of the aggregate amount of any Invoice paid by a Customer Member via credit card. Jaxee reserves the right, in its sole discretion, upon request from the Customer Member or the Expert upon notice of any potential fraud, unauthorized charges or other misuse of the Jaxee Platform, to (i) place on hold any payment relating to or arising out of an Invoice, or (ii) refund, provide credits or arrange for the PSP to do so. Experts are responsible for calculating and invoicing for any applicable taxes due from the Customer Member for the Job performed.</p>\n\n<h5>5. Release; Limitation of Liability</h5>\n\n<p>The Jaxee Platform is only a venue for connecting Customer Members and Experts. Because Company is not involved in the actual contact between Customer Members or in the completion of the Job, in the event that you have a dispute with one or more Customer Members, you, the Expert, release Company and its affiliates (and their respective officers, directors, agents, investors, subsidiaries, and employees) from any and all claims, demands, or damages (actual or consequential) of every kind and nature, known and unknown, suspected and unsuspected, disclosed and undisclosed, arising out of or in any way connected with such disputes. COMPANY EXPRESSLY DISCLAIMS ANY LIABILITY THAT MAY ARISE BETWEEN THE USERS OF ITS JAXEE PLATFORM. TO THE EXTENT APPLICABLE, YOU HEREBY WAIVE THE PROTECTIONS OF CALIFORNIA CIVIL CODE &sect; 1542 (AND ANY ANALOGOUS LAW IN ANY OTHER APPLICABLE JURISDICTION) WHICH SAYS: &ldquo;A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM OR HER MUST HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR.&rdquo;</p>\n\n<h5>6. Public Areas; Acceptable Use</h5>\n\n<p>The Jaxee Platform may contain profiles, email systems, blogs, message boards, reviews, ratings, applications, job postings, chat areas, news groups, forums, communities and/or other message or communication facilities (&ldquo;Public Areas&rdquo;) that allow Customer Members to communicate with other Customer Members or Experts, including the option for Customer Members to provide reviews or comments about Experts they have worked with through the Platform. You may only use such community areas to send and receive messages and material that are relevant to the applicable forum. Without limitation, while using the Jaxee Platform, you may not: Defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (such as, but not limited to, rights of privacy and publicity) of others, including Customer Members, Company staff or other Experts and/or their employees, or use information learned from the Jaxee Platform or during the performance of Jobs to otherwise defame, abuse, harass, stalk, threaten, intimidate or mislead, or otherwise violate the legal rights of any other User or Company staff outside of the Jaxee Platform. Publish, post, upload, distribute or disseminate any profane, defamatory, infringing, obscene or unlawful topic, name, material or information on the Jaxee Platform. Use the Jaxee Platform for any purpose, including, but not limited to posting or completing a Job, in violation of local, state, national, or international law. Upload files that contain software or other material that violates the intellectual property rights (or rights of privacy or publicity) of any third party. Upload files that contain viruses, Trojan horses, corrupted files, or any other similar software that may damage the operation of another&#39;s computer. Post or upload any content to which you have not obtained any necessary rights or permissions to use accordingly. Advertise or offer to sell any goods or services for any commercial purpose through the Jaxee Platform which are not relevant to the Jobs offered through the Jaxee Platform. Post or complete a Job requiring a User to engage in activity that is illegal or deemed dangerous, harmful or otherwise inappropriate by Company in its sole discretion. Conduct or forward surveys, contests, pyramid schemes, or chain letters. Impersonate another person or a Customer Member or allow any other person or entity to use your identification to post or view comments. Post the same Job offering repeatedly (&ldquo;Spamming&rdquo;). Spamming is strictly prohibited. Restrict or inhibit any other person or business from using and enjoying any aspect of the Platform. Imply or state that any statements you make are endorsed by Company, without the prior written consent of Company. Use a robot, spider, manual and/or automatic processes or devices to data-mine, data-crawl, scrape or index the Jaxee Platform in any manner. Hack or interfere with the Jaxee Platform, its servers or any connected networks. Adapt, alter, license, sublicense or translate the Jaxee Platform for your own personal or commercial use. Remove or alter, visually or otherwise, any copyrights, trademarks or proprietary marks and intellectual property rights owned by Company. Upload content to the Jaxee Platform that is offensive and/or harmful, including, but not limited to, content that advocates, endorses, condones or promotes racism, bigotry, hatred or physical harm of any kind against any individual or group of individuals. Upload content that provides materials or access to materials that exploit people under the age of 18 in an abusive, violent or sexual manner. Use the Jaxee Platform to solicit for any other business, website or service, or otherwise contact Users for employment, contracting or any purpose not related to use of the Jaxee Platform as set forth herein. Use the Jaxee Platform to collect usernames and or/email addresses of Users by electronic or other means. Use the Jaxee Platform or the Jobs in violation of this Agreement. Use the Jaxee Platform in a manner which is false or misleading (directly or by omission or failure to update information) or for the purpose of accessing or otherwise obtaining Company&rsquo;s trade secret information for public disclosure or other purposes. Attempt to circumvent the payments system or service fees in anyway including, but not limited to, including inaccurate information on invoices, or otherwise invoicing in a fraudulent manner; Register under different usernames or identities, after your account has been suspended or terminated or register under multiple usernames or identities. Cause any third party to engage in the restricted activities above. You understand that all submissions made to Public Areas of the Platform will be public and that you will be publicly identified by your name or login identification when communicating in Public Areas, and Company will not be responsible for the action of any Users with respect to any information or materials posted in Public Areas.</p>\n\n<h5>7. Termination and Suspension</h5>\n\n<p>Company may terminate, limit or suspend your right to use the Jaxee Platform in the event that we believe that you have breached this Agreement (a &ldquo;Breach&rdquo;) by providing you with written or email notice of such Breach and such termination or suspension, and termination or suspension will be effective immediately upon delivery of such notice. We reserve the right at any time to (i) monitor your use of the Platform, and (ii) terminate or suspend your use of some or all of the Platform if you engage in activities that we conclude, in our discretion, breach the terms of this Agreement or our Privacy Policy. Although we have no - and assume no - obligation to monitor activities on the Platform, please understand that we may employ filters designed to detect and block inappropriate content described in this Agreement. We reserve the right to request edits to your submission, to refuse to post or to remove any information or materials, in whole or in part, that we believe, in our sole discretion, is incompatible with these terms. If Company terminates, limits, or suspends your right to use the Jaxee Platform as an Expert for a breach, you will not be entitled to any refund of unused balance in your account, and you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating, limiting, or suspending your account, Company reserves the right to take appropriate legal action, including without limitation pursuing arbitration, criminal, and injunctive remedies. Even after your right to use the Jaxee Platform is terminated, limited, or suspended, this Agreement will remain enforceable against you. Company reserves the right to modify or discontinue, temporarily or permanently, all or any portion of the Jaxee Platform at its sole discretion. Except for refundable fees you have advanced to Company (if any), Company is not liable to you for any modification or discontinuance of all or any portion of the Jaxee Platform. Notwithstanding anything to the contrary in this Section 8, Company has the right to restrict anyone from completing registration as an Expert if Company believes such person may threaten the safety and integrity of the Jaxee Platform, or if, in Company&rsquo;s discretion, such restriction is necessary to address any other reasonable business concern. You may terminate this Agreement at any time by ceasing all use of the Jaxee Platform. All sections which by their nature should survive the expiration or termination of this Agreement shall continue in full force and effect subsequent to and notwithstanding the expiration or termination of this Agreement.</p>\n\n<h5>8. Your Information and Likeness</h5>\n\n<p>&ldquo;Your Information&rdquo; is defined as any information and materials you provide to Company or Customer Members in connection with your registration for and use of the Jaxee Platform, including without limitation that is posted or transmitted for use in Public Areas. You are solely responsible for Your Information, and we act merely as a conduit for your online distribution and publication of Your Information. You hereby represent and warrant to Company that Your Information (a) will not be false, inaccurate, incomplete or misleading; (b) will not be fraudulent or involve the sale of counterfeit or stolen items; (c) will not infringe any third party&#39;s copyright, patent, trademark, trade secret or other proprietary right or rights of publicity or privacy; (d) will not violate any law, statute, ordinance, or regulation (including without limitation those governing export control, Customer Member protection, unfair competition, anti-discrimination or false advertising); (e) will not be defamatory, libelous, unlawfully threatening, or unlawfully harassing; (f) will not be obscene or contain child pornography or be harmful to minors; (g) will not contain any viruses, Trojan Horses, worms, time bombs, cancelbots or other computer programming routines that are intended to damage, detrimentally interfere with, surreptitiously intercept or expropriate any system, data or personal information; and (h) will not create liability for Company or cause Company to lose (in whole or in part) the services of its internet service providers or other partners or suppliers. The Jaxee Platform hosts generated content from Customer Members and Experts (collectively, &ldquo;User Generated Content&rdquo;), including content relating to reviews and ratings of specific Experts (&ldquo;Feedback&rdquo;). Such Feedback is such Customer Member&rsquo;s opinion and not the opinion of Company, has not been verified or approved by Company and each Customer Member should undertake their own research to be satisfied that a specific Expert is the right person for a Job. You agree that Company is not liable for any Feedback or other Customer Member User Generated Content. Company encourages each Customer Member to give objective, constructive and honest Feedback about the Experts with whom they have transacted. Company does not investigate any remarks posted by Customer Members for accuracy or reliability, though we do reserve the right to remove User Generated Content which, in our sole discretion, violates this Agreement or our Terms of Use. You hereby grant Company a non-exclusive, worldwide, perpetual, irrevocable, royalty-free, right to exercise all copyright, publicity rights, and any other rights you have in Your Information, in any media now known or not currently known in order to perform and improve upon the Jaxee Platform. Each Expert who provides to Company any User Generated Content, including any videotape, film, record, photograph, voice, or all related instrumental, musical, or other sound effects, in connection with your use of the Jaxee Platform, hereby irrevocably grants to Company the non-exclusive, fully-paid, royalty-free, worldwide, unrestricted, and perpetual right to use such content that Expert provides to Company or that Company takes/creates of Expert (i) to use, reproduce, modify, or create derivatives of such content, in and in connection with the exhibition, distribution, display, performance, transmission, broadcasting on any and all media, including, without limitation, the internet, of any videos or images of such Expert in connection with the Jaxee Platform; (ii) to reproduce in all media any recordings of such Expert&rsquo;s voice, and all related instrumental, musical, or other sound effects (collectively, the &ldquo;Voice&rdquo;), made in connection with the Jaxee Platform; to use, and permit to be used, such Expert&rsquo;s Physical Likeness and Voice in the advertising, marketing, and/or publicizing of the Jaxee Platform in any media; and to use, and permit to be used, such Expert&rsquo;s name and identity in connection with the Jaxee Platform. In addition to the foregoing, you consent to Jaxee&rsquo;s disclosure of Your Information and User Generated Content to third parties (including PSPs or Jaxee&rsquo;s other services providers): (a) where it is necessary for accepting or booking Jobs through the Jaxee Platform; (b) in order to complete or accept payments via the Jaxee Platform by and through the PSPs; (c) in order to comply with government agency, court orders or applicable law; or (d) where you otherwise have consented to such disclosure. Each Expert hereby waives all rights and releases Company from, and shall neither sue nor bring any proceeding against any such parties for, any claim or cause of action, whether now known or unknown, for defamation, invasion of right to privacy, publicity or personality or any similar matter, based upon or relating to the use and exploitation of such Expert&rsquo;s identity, likeness or voice in connection with the Jaxee Platform. Each Expert acknowledges that Company shall not owe any financial or other remuneration for using the recordings provided hereunder by such Expert, either for initial or subsequent transmission or playback, and further acknowledges that Company is not responsible for any expense or liability incurred as a result of such Expert&rsquo;s recordings or participation in any recordings, including any loss of such recording data.</p>\n\n<h5>9. Worker Classification and Withholdings</h5>\n\n<p>AS SET FORTH HEREIN, COMPANY DOES NOT PERFORM JOBS AND DOES NOT EMPLOY INDIVIDUALS TO PERFORM JOBS. Each Service Provider assumes all liability for proper classification of its workers based on applicable legal guidelines. Experts do not have authority to enter into written or oral &mdash; whether implied or express &mdash; contracts on behalf of Company. Company does not set an Expert&rsquo;s fees, work hours or location of work. Company will not provide any equipment, labor or materials needed for a particular Tazk. Company does not provide any supervision to Experts. The Jaxee Platform is not an employment service and Company is not an employer of any Expert. As such, Company is not responsible for and will not be liable for any tax payments or withholding, including but not limited to unemployment insurance, social security, disability insurance or any other applicable federal or state withholdings in connection with Jobs provided hereunder.</p>\n\n<h5>10. Intellectual Property Rights</h5>\n\n<p>All text, graphics, editorial content, data, formatting, graphs, designs, HTML, look and feel, photographs, music, sounds, images, software, videos, designs, typefaces and other content (collectively &ldquo;Proprietary Material&rdquo;) that Users see or read through the Jaxee Platform is owned or licensed by Company, excluding User Generated Content that Company has the right to use. Proprietary Material is protected in all forms, media and technologies now known or hereinafter developed. Company or its licensors own all Proprietary Material, as well as the coordination, selection, arrangement and enhancement of such Proprietary Materials as a Collective Work under the United States Copyright Act, as amended. The Proprietary Material is protected by the domestic and international laws of copyright, patents, and other proprietary rights and laws. Users may not copy, download, use, redesign, reconfigure, or retransmit anything from the Jaxee Platform without Company&#39;s express prior written consent and, if applicable, the holder of the rights to the User Generated Content. Any use of such Proprietary Material, other than as permitted therein, is expressly prohibited without the prior permission of Company and, if applicable, the holder of the rights to the User Generated Content. The service marks and trademarks of Company, including without limitation the JAXEE mark and associated Company logos are service marks owned by Company. Any other trademarks, service marks, logos and/or trade names appearing via the Jaxee Platform are the property of their respective owners. You may not copy or use any of these marks, logos or trade names without the express prior written consent of the owner.</p>\n\n<h5>11. Confidential Information</h5>\n\n<p>You acknowledge that Confidential Information (as defined below) is a valuable, special and unique asset of Company and agree that you will not disclose, transfer, use (or seek to induce others to disclose, transfer or use) any Confidential Information for any purpose other than disclosure to your authorized employees and agents who are bound to maintain the confidentiality of Confidential Information. You shall promptly notify Company in writing of any circumstances which may constitute unauthorized disclosure, transfer, or use of Confidential Information. You shall use best efforts to protect Confidential Information from unauthorized disclosure, transfer or use. You shall return all originals and any copies of any and all materials containing Confidential Information to Company upon termination of this Agreement for any reason whatsoever. The term &ldquo;Confidential Information&rdquo; shall mean any and all of Company&rsquo;s trade secrets, confidential and proprietary information and all other information and data of Company that is not generally known to the public or other third parties who could derive value, economic or otherwise, from its use or disclosure. Confidential Information shall be deemed to include technical, financial, strategic and other proprietary and confidential information relating to Company&rsquo;s business, operations and properties, including information about Company&rsquo;s Users or partners, or other business information disclosed directly or indirectly in writing, orally or by drawings or observation.</p>\n\n<h5>12. Disclaimer of Warranties</h5>\n\n<p>USE OF THE SERVICE IS ENTIRELY AT YOUR OWN RISK. THE JAXEE PLATFORM IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. COMPANY MAKES NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE CONTENT PROVIDED THROUGH THE JAXEE PLATFORM OR THE CONTENT OF ANY SITES LINKED TO THE JAXEE PLATFORM AND ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT, (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE JAXEE PLATFORM, (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN. COMPANY DOES NOT WARRANT, ENDORSE, GUARANTEE OR ASSUME RESPONSIBILITY FOR ANY SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE JAXEE PLATFORM OR ANY HYPERLINKED WEBSITE OR FEATURED IN ANY BANNER OR OTHER ADVERTISING AND COMPANY WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY CUSTOMER MEMBER OR ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR JOBS, OTHER THAN AS PROVIDED HEREIN. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE. WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR ITS AFFILIATES OR LICENSORS WARRANT THAT ACCESS TO THE JAXEE PLATFORM WILL BE UNINTERRUPTED OR THAT THE JAXEE PLATFORM WILL BE ERROR-FREE; NOR DO THEY MAKE ANY WARRANTY AS TO THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE JAXEE PLATFORM, OR AS TO THE TIMELINESS, ACCURACY, RELIABILITY, COMPLETENESS OR CONTENT OF ANY JOB OR SERVICE, INFORMATION OR MATERIALS PROVIDED THROUGH OR IN CONNECTION WITH THE USE OF THE JAXEE PLATFORM. NEITHER COMPANY NOR ITS AFFILIATES OR LICENSORS IS RESPONSIBLE FOR THE CONDUCT, WHETHER ONLINE OR OFFLINE, OF ANY USER. NEITHER COMPANY NOR ITS AFFILIATES OR LICENSORS WARRANT THAT THE JAXEE PLATFORM IS FREE FROM VIRUSES, WORMS, TROJAN HORSES, OR OTHER HARMFUL COMPONENTS. COMPANY AND ITS AFFILIATES AND LICENSORS CANNOT AND DO NOT GUARANTEE THAT ANY PERSONAL INFORMATION SUPPLIED BY YOU WILL NOT BE MISAPPROPRIATED, INTERCEPTED, DELETED, DESTROYED OR USED BY OTHERS. IN ADDITION, NOTWITHSTANDING ANY FEATURE A CUSTOMER MEMBER MAY USE TO EXPEDITE JAXEE SELECTION, EACH CUSTOMER MEMBER IS RESPONSIBLE FOR DETERMINING THE JOB AND SELECTING THEIR EXPERT AND COMPANY DOES NOT GUARANTEE THAT ANY JOB YOU OFFER WILL BE SELECTED BY A CUSTOMER MEMBER, NOR DOES COMPANY WARRANT ANY GOODS OR JOBS PURCHASED BY A CUSTOMER MEMBER AND COMPANY DOES NOT RECOMMEND ANY PARTICULAR EXPERT. COMPANY DOES NOT PROVIDE ANY WARRANTIES OR GUARANTEES REGARDING ANY EXPERT&rsquo;S PROFESSIONAL ACCREDITATION, REGISTRATION OR LICENSE.</p>\n\n<h5>13. No Liability</h5>\n\n<p>YOU ACKNOWLEDGE AND AGREE THAT COMPANY IS ONLY WILLING TO PROVIDE THE JAXEE PLATFORM IF YOU AGREE TO CERTAIN LIMITATIONS OF OUR LIABILITY TO YOU AND THIRD PARTIES. THEREFORE, YOU AGREE NOT TO HOLD COMPANY, ITS AFFILIATES, ITS LICENSORS, ITS PARTNERS IN PROMOTIONS, SWEEPSTAKES OR CONTESTS, OR ANY OF SUCH PARTIES&rsquo; AGENTS, EMPLOYEES, OFFICERS, DIRECTORS, CORPORATE PARTNERS, OR PARTICIPANTS LIABLE FOR ANY DAMAGE, SUITS, CLAIMS, AND/OR CONTROVERSIES (COLLECTIVELY, &ldquo;LIABILITIES&rdquo;) THAT HAVE ARISEN OR MAY ARISE, WHETHER KNOWN OR UNKNOWN, RELATING TO YOUR OR ANY OTHER PARTY&rsquo;S USE OF OR INABILITY TO USE THE JAXEE PLATFORM, INCLUDING WITHOUT LIMITATION ANY LIABILITIES ARISING IN CONNECTION WITH THE CONDUCT, ACT OR OMISSION OF ANY USER (INCLUDING WITHOUT LIMITATION STALKING, HARASSMENT THAT IS SEXUAL OR OTHERWISE, ACTS OF PHYSICAL VIOLENCE, AND DESTRUCTION OF PERSONAL PROPERTY), ANY DISPUTE WITH ANY CUSTOMER MEMBER OR OTHER EXPERT, ANY INSTRUCTION, ADVICE, ACT, OR SERVICE PROVIDED BY COMPANY OR ITS AFFILIATES OR LICENSORS AND ANY DESTRUCTION OF YOUR INFORMATION. UNDER NO CIRCUMSTANCES WILL COMPANY, ITS AFFILIATES, ITS LICENSORS, OR ANY OF SUCH PARTIES&rsquo; AGENTS, EMPLOYEES, OFFICERS, DIRECTORS, CORPORATE PARTNERS, OR PARTICIPANTS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL OR EXEMPLARY DAMAGES ARISING IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE JAXEE PLATFORM OR THE OFFERING OR PROVISION OF JOBS, EVEN IF ADVISED OF THE POSSIBILITY OF THE SAME. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU. COMPANY DOES NOT ACCEPT ANY LIABILITY WITH RESPECT TO THE QUALITY OR FITNESS OF ANY WORK PERFORMED VIA THE JAXEE PLATFORM. IF, NOTWITHSTANDING THE FOREGOING EXCLUSIONS, IT IS DETERMINED THAT COMPANY OR ITS PARTNERS IN PROMOTIONS, SWEEPSTAKES OR CONTESTS, AFFILIATES, ITS LICENSORS, OR ANY OF SUCH PARTIES&rsquo; AGENTS, EMPLOYEES, OFFICERS, DIRECTORS, CORPORATE PARTNERS, OR PARTICIPANTS IS LIABLE FOR DAMAGES IN EXCESS OF THE FOREGOING, IN NO EVENT WILL COMPANY&rsquo;S OR ITS AFFILIATES, ITS LICENSORS, OR ANY OF SUCH PARTIES&rsquo; AGENTS, EMPLOYEES, OFFICERS, DIRECTORS, CORPORATE PARTNERS&rsquo; AGGREGATE LIABILITY, WHETHER ARISING IN CONTRACT, TORT, STRICT LIABILITY OR OTHERWISE, EXCEED THE TOTAL FEES PAID BY YOU TO COMPANY DURING THE SIX (6) MONTHS PRIOR TO THE TIME SUCH CLAIM AROSE.</p>\n\n<h5>14. Indemnification</h5>\n\n<p>You hereby agree to indemnify, defend, and hold harmless Company, its directors, officers, employees, agents, licensors, attorneys, independent contractors, providers, successors and assigns, subsidiaries, and affiliates from and against any and all claim, loss, expense or demand of liability, including attorneys&#39; fees and costs incurred, in connection with (i) your use or inability to use the Jaxee Platform or Job Jobs, (ii) your breach or violation of this Agreement; (iii) your violation of any law or the rights of any User or third party, (iv) any User Generated Content submitted by you or through your account to the Jaxee Platform, including, but not limited to the extent such User Generated Content may infringe on the intellectual rights of a third party or otherwise be illegal or unlawful. Company reserves the right, at its own expense, to assume the exclusive defense and control of any matter otherwise subject to your indemnification. You will not, in any event, settle any claim or matter without the written consent of Company.</p>\n\n<h5>15. Dispute Resolution</h5>\n\n<p>To expedite resolution and reduce the cost of any dispute, controversy or claim between you and Company (each a &ldquo;Claim&rdquo; and collectively &ldquo;Claims&rdquo;), you and Company agree to first attempt to negotiate any Claim (except those Claims expressly excluded below) informally for at least thirty (30) days before initiating any court proceeding. Such informal negotiations will commence upon written notice. Your address for such notices is your billing address, with an email copy to the email address you have provided to Company. Company&rsquo;s address for such notices is Jaxee, LLC., 14311 Biscayne Blvd, # 612530, North Miami FL 33261 Attention: Legal. If necessary to preserve a Claim under any applicable statute of limitations, you or Company may initiate court proceedings while engaging in the informal negotiations.</p>\n\n<h5>16. Governing Law</h5>\n\n<p>Except as provided in Section 20 or expressly provided otherwise, this Agreement will be governed by, and will be construed under, the laws of the State of Delaware, without regard to choice of law principles. You agree that any claim or dispute you may have against Jaxee must be resolved by a court located in Delaware in the county where the Registered Agent for the corporation is located. You agree to submit to the personal jurisdiction of the courts located within the State of Delaware or the United States District Court located in Delaware, for the purpose of litigating all such claims or disputes. You hereby waive any and all jurisdictional and venue defenses otherwise available.</p>\n\n<h5>17. No Agency</h5>\n\n<p>No agency, partnership, joint venture, employer-employee or franchiser-franchisee relationship is intended or created by this Agreement.</p>\n\n<h5>18. General Provisions</h5>\n\n<p>Failure by Company to enforce any provision(s) of this Agreement will not be construed as a waiver of any provision or right. This Agreement constitutes the entire agreement between you and Company with respect to its subject matter. If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions will be enforced to the fullest extent possible, and the remaining provisions will remain in full force and effect. This Agreement may not be assigned or transferred by you without our prior written approval. We may assign or transfer this Agreement without your consent, including but not limited to assignments: (i) to a parent or subsidiary, (ii) to an acquirer of assets, or (iii) to any other successor or acquirer. Any assignment in violation of this section shall be null and void. This Agreement will inure to the benefit of Company, its successors and assigns.</p>\n\n<h5>20. 1099 Reporting System</h5>\n\n<p>Upon registration as an Expert you will be required to provide the Company with your EIN or TIN information. If the Company is the third party payment processor or facilitates the processing of payments in any way, pursuant to the IRS Code, Company will be required to issue a 1099-K to all Experts and report all payments to such professionals if the Company has processed over 200 transactions and pays out more than $20,000 to such Expert in a calendar year. Please contact your tax professional on tax reporting requirements for your profession.</p>\n\n<h5>21. Changes to this Agreement and the Jaxee Platform</h5>\n\n<p>Company reserves the right, at its sole and absolute discretion, to change, modify, add to, supplement or delete any of the terms and conditions of this Agreement (including the Privacy Policy) and we will provide notice of any such changes the next time you visit the Platform. If any future changes to this Agreement are unacceptable to you or cause you to no longer be in compliance with this Agreement, you must terminate, and immediately stop using, the Jaxee Platform. Your continued use of the Jaxee Platform following any revision to this Agreement constitutes your complete and irrevocable acceptance of any and all such changes. Company may change, modify, suspend, or discontinue any aspect of the Jaxee Platform at any time without notice or liability. Company may also impose limits on certain features or restrict your access to parts or all of the Jaxee Platform without notice or liability. YOU HEREBY ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTAND THE FOREGOING TERMS OF SERVICE AND PRIVACY POLICY AND AGREE THAT YOUR USE OF THE JAXEE PLATFORM IS AN ACKNOWLEDGMENT OF YOUR AGREEMENT TO BE BOUND BY THE TERMS AND CONDITIONS OF THIS AGREEMENT.</p>\n"
                        }
                    },
                    "clientID": "KOnXuk8dmWv2sQI0ZXhM7DpQmzM4hmTS",
                    "context": {
                        "id": "dXNlcl9jb250ZAXh0OgGQdFCNtqQxC4FTNbDVKdzI3wpuikQ7MRdalIvetCZBR2ZBsiUqBtws9aQq3S5nZBZAAc6moLwoN62k2HK6Vli5SWaV4yajxgL87PkLHraX5jVf60EZD",
                        "mutual_likes": {
                            "summary": {
                                "total_count": 64
                            }
                        }
                    },
                    "created_at": "2017-10-27T05:56:43.902Z",
                    "creditAmount": 0,
                    "deleted_email": "adamkraif@walla.com",
                    "device_type": "iphone",
                    "device_uuid": "1278552A-E621-45F9-884D-AE651543E6A6",
                    "devices": [{
                        "hardware": "iPhone",
                        "os": "iOS"
                    }, {
                        "os": "Android"
                    }],
                    "email": "adamkraif@walla.com",
                    "email_verified": true,
                    "family_name": "Kraif",
                    "gender": "male",
                    "geoAddress": "הרי הגלעד 4, רמת גן, ישראל",
                    "given_name": "Adam",
                    "global_client_id": "Txt5qaRBVQ1AEkhl1xg9CczXdfbQzu8C",
                    "id": "AK200185",
                    "id_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjYwNDUwZjM0ODZjODFkOTYwZmQ2MGU2OTczZDY5OGM3YWYwODYwNTIifQ.eyJ1aWQiOiJmYWNlYm9va3wxMzM0NzEyOTc2NTQwNDA5IiwiaWF0IjoxNTEzMzY4MzkxLCJleHAiOjE1MTMzNzE5OTEsImF1ZCI6Imh0dHBzOi8vaWRlbnRpdHl0b29sa2l0Lmdvb2dsZWFwaXMuY29tL2dvb2dsZS5pZGVudGl0eS5pZGVudGl0eXRvb2xraXQudjEuSWRlbnRpdHlUb29sa2l0IiwiaXNzIjoiZmlyZWJhc2UtYWRtaW5zZGstamxhbW5AamF4ZWUtMjc2YTcuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzdWIiOiJmaXJlYmFzZS1hZG1pbnNkay1qbGFtbkBqYXhlZS0yNzZhNy5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSJ9.bRvaWuWRb3TeRox1prTf1HBT6qUqB96VHpR7MWN9JHPRJ4d-2iBYjsMRTmuLjqL8Cx8MqQPRpEYxG1m42g1xNJmIMSTibfw7dKi18BThaf9KDfE2MJznIm67v5iOFH-bSVPi_lSyRB24rkDZ91-rkNVayyd1PrMqXXwRvQ8OCYvpf2KCf-DWnJXf4giCNlNpPgTj01s1GXf409Xq24iWwS-ayx3t4XgXS7IRiaWgnl933ypvZAl7jCGPFoScFPgWhHWlkIzUJPJ5si2tGHUaM1tyckaDhbQLaLxcCsBZAIgyjv_tOoIZ-SNOr5tHpc26rwmK1OHXQHIQicHoG_4g_g",
                    "installed": true,
                    "is_verified": false,
                    "jobs": [{
                        "backgroundCheck": false,
                        "businessAddress": {
                            "city": "asd",
                            "line1": "sad",
                            "postal_code": "123",
                            "state": "arkansas"
                        },
                        "businessType": "Self employed",
                        "driverLis": true,
                        "fee": 100,
                        "files": [{
                            "fileName": "498062241.jpg",
                            "name": "driver-lis",
                            "url": "https://firebasestorage.googleapis.com/v0/b/jaxee-276a7.appspot.com/o/files%2Fadamkraifwallacom%2Ffile%2Fjobs%2Facupuncture%20services%2Fdriver-lis?alt=media&token=0b1654a6-6f57-4891-bde0-8f43c42dda9b"
                        }],
                        "icon": "https://lh3.googleusercontent.com/x3TKnV91wjf0GpA4JvNgJulOoCnuJ5M38Ud-dIepVr11ZaVXnuJYzLLsp5whMo329H4=w300-rw",
                        "insurance": true,
                        "isBusiness": false,
                        "jobName": "Acupuncture Services",
                        "jobNameGenerated": "acupuncture services",
                        "phone": {
                            "cellNumber": "053-221-3009"
                        },
                        "questions": [{
                            "answer": 32,
                            "text": "Years of experience"
                        }, {
                            "text": "Tell us about yourself"
                        }, {
                            "answer": 23,
                            "text": "Your hourly rate"
                        }],
                        "recivePaymentsMethods": {
                            "cash": true,
                            "cheque": true,
                            "creditCard": false,
                            "payPal": false
                        },
                        "spChangedSettings": "2017-11-29T17:19:21.787Z",
                        "spCreatedJob": "2017-11-29T17:19:21.787Z",
                        "tags": ["acupuncture", "services", "acupuncture services", "acupuncturist", "alternative medicine"],
                        "taxId": true
                    }],
                    "lastEntry": "2017-12-15T15:36:46.894Z",
                    "lastname": "Kraif",
                    "leftApp": "2017-12-04T15:55:10.985Z",
                    "link": "https://www.facebook.com/app_scoped_user_id/1334712976540409/",
                    "locale": "en_US",
                    "location": [{
                        "accuracy": 65,
                        "altitude": 3.460289716720581,
                        "altitudeAccuracy": 10,
                        "bearing": -1,
                        "heading": -1,
                        "latitude": 32.0716286,
                        "location_type": "current",
                        "longitude": 34.7874712,
                        "speed": -1,
                        "time": 1.512402870844237E12
                    }],
                    "middleName": "Me",
                    "name": "Adam",
                    "name_format": "{first} {last}",
                    "nickname": "adamkraif",
                    "paypalPaymentEmail": "adamkraif@gmail.com",
                    "photoURL": "https://firebasestorage.googleapis.com/v0/b/jaxee-276a7.appspot.com/o/files%2Fadamkraifwallacom%2Fimages%2F1509445623657?alt=media&token=b4b53c3f-035c-455e-b1bd-f53e6c7588e4",
                    "picture": "https://scontent.xx.fbcdn.net/v/t1.0-1/c27.27.342.342/s50x50/249813_225912494087135_8107152_n.jpg?oh=660900a36a81f2580d299317f124ca5a&oe=5A6BBA9B",
                    "picture_large": "https://scontent.xx.fbcdn.net/v/t1.0-1/249813_225912494087135_8107152_n.jpg?oh=97c2b2a09db273e9359fcba2333b578a&oe=5AAB9A3E",
                    "redactedCardNumber": "",
                    "sessionTimeInMinutes": [{
                        "Entry": "2017-11-29T17:33:55.389Z",
                        "left": "2017-12-04T15:53:35.721Z",
                        "timeDiffInMinutes": 19
                    }, {
                        "Entry": "2017-11-25T10:17:14.401Z",
                        "left": "2017-11-25T10:36:50.584Z",
                        "timeDiffInMinutes": 19
                    }, {
                        "Entry": "2017-11-25T10:17:14.401Z",
                        "left": "2017-11-25T10:22:48.374Z",
                        "timeDiffInMinutes": 5
                    }, {
                        "Entry": "2017-11-25T10:10:00.147Z",
                        "left": "2017-11-25T10:17:00.521Z",
                        "timeDiffInMinutes": 7
                    }, {
                        "Entry": "2017-11-23T12:48:24.305Z",
                        "left": "2017-11-25T09:58:59.507Z",
                        "timeDiffInMinutes": 10
                    }, {
                        "Entry": "2017-11-23T12:48:24.305Z",
                        "left": "2017-11-24T15:50:31.318Z",
                        "timeDiffInMinutes": 2
                    }, {
                        "Entry": "2017-11-09T09:06:30.756Z",
                        "left": "2017-11-09T10:01:40.077Z",
                        "timeDiffInMinutes": 55
                    }, {
                        "Entry": "2017-11-07T14:10:19.999Z",
                        "left": "2017-11-07T14:30:44.787Z",
                        "timeDiffInMinutes": 20
                    }, {
                        "Entry": "2017-10-26T09:37:45.712Z",
                        "left": "2017-10-26T10:20:36.480Z",
                        "timeDiffInMinutes": 42
                    }, {
                        "Entry": "2017-10-24T21:31:11.746Z",
                        "left": "2017-10-25T07:29:05.551Z",
                        "timeDiffInMinutes": 57
                    }, {
                        "Entry": "2017-10-24T20:51:56.325Z",
                        "left": "2017-10-24T21:03:20.022Z",
                        "timeDiffInMinutes": 11
                    }, {
                        "Entry": "2017-10-24T20:51:56.325Z",
                        "left": "2017-10-24T20:54:40.935Z",
                        "timeDiffInMinutes": 2
                    }, {
                        "Entry": "2017-10-24T20:51:56.325Z",
                        "left": "2017-10-24T20:53:44.416Z",
                        "timeDiffInMinutes": 1
                    }, {
                        "Entry": "2017-10-24T19:54:41.913Z",
                        "left": "2017-10-24T20:51:42.363Z",
                        "timeDiffInMinutes": 57
                    }, {
                        "Entry": "2017-10-24T19:54:41.913Z",
                        "left": "2017-10-24T19:56:05.763Z",
                        "timeDiffInMinutes": 1
                    }, {
                        "Entry": "2017-10-24T19:54:41.913Z",
                        "left": "2017-10-24T19:55:56.720Z",
                        "timeDiffInMinutes": 1
                    }, {
                        "Entry": "2017-10-24T19:45:28.908Z",
                        "left": "2017-10-24T19:53:53.717Z",
                        "timeDiffInMinutes": 8
                    }, {
                        "Entry": "2017-10-24T19:45:28.908Z",
                        "left": "2017-10-24T19:51:04.250Z",
                        "timeDiffInMinutes": 5
                    }, {
                        "Entry": "2017-10-24T19:44:05.607Z",
                        "left": "2017-10-24T19:45:26.234Z",
                        "timeDiffInMinutes": 1
                    }, {
                        "Entry": "2017-10-24T12:59:21.396Z",
                        "left": "2017-10-24T19:41:04.158Z",
                        "timeDiffInMinutes": 41
                    }, {
                        "Entry": "2017-10-23T12:35:22.827Z",
                        "left": "2017-10-24T12:59:24.984Z",
                        "timeDiffInMinutes": 24
                    }, {
                        "Entry": "2017-10-23T12:35:22.827Z",
                        "left": "2017-10-24T12:59:14.828Z",
                        "timeDiffInMinutes": 23
                    }, {
                        "Entry": "2017-10-23T11:24:32.241Z",
                        "left": "2017-10-23T12:08:37.132Z",
                        "timeDiffInMinutes": 44
                    }, {
                        "Entry": "2017-10-23T11:24:32.241Z",
                        "left": "2017-10-23T12:03:29.811Z",
                        "timeDiffInMinutes": 38
                    }, {
                        "Entry": "2017-10-23T09:57:38.481Z",
                        "left": "2017-10-23T10:55:06.916Z",
                        "timeDiffInMinutes": 57
                    }, {
                        "Entry": "2017-10-23T09:57:38.481Z",
                        "left": "2017-10-23T10:04:02.697Z",
                        "timeDiffInMinutes": 6
                    }, {
                        "Entry": "2017-10-23T09:10:33.350Z",
                        "left": "2017-10-23T09:39:26.973Z",
                        "timeDiffInMinutes": 28
                    }, {
                        "Entry": "2017-10-23T09:10:33.350Z",
                        "left": "2017-10-23T09:16:23.353Z",
                        "timeDiffInMinutes": 5
                    }, {
                        "Entry": "2017-10-23T07:09:39.722Z",
                        "left": "2017-10-23T07:13:07.186Z",
                        "timeDiffInMinutes": 3
                    }, {
                        "Entry": "2017-10-22T21:03:23.989Z",
                        "left": "2017-10-22T21:05:31.290Z",
                        "timeDiffInMinutes": 2
                    }],
                    "social_security_number": "",
                    "stripedEmail": "adamkraifwallacom",
                    "tags": {
                        "acupuncture": 1,
                        "acupuncture services": 1,
                        "acupuncturist": 1,
                        "alternative medicine": 1,
                        "services": 1
                    },
                    "tel": "053-221-3009",
                    "third_party_id": "mWMHywQGdkAA3qATTt-xOV6v3Pg",
                    "timezone": 3,
                    "tz": "America/New_York",
                    "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0_2 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Mobile/15A421 (4397788048)",
                    "uid": "facebook|1334712976540409",
                    "updated_at": "2017-10-27T05:56:43.902Z",
                    "updated_time": "2017-04-18T14:31:25+0000",
                    "userChangedSettings": "2017-11-29T17:49:57.009Z",
                    "userCreated": "2017-10-24T10:39:43.522Z",
                    "userCreatedAt": "2017-11-25T10:35:58.556Z",
                    "user_id": "facebook|1334712976540409",
                    "user_metadata": {
                        "geoip": {
                            "city_name": "Rishon LeZiyyon",
                            "continent_code": "AS",
                            "country_code": "IL",
                            "country_code3": "ISR",
                            "country_name": "Israel",
                            "latitude": 31.964199999999998,
                            "longitude": 34.8044,
                            "time_zone": "Asia/Jerusalem"
                        }
                    },
                    "verified": true
                }
            },
            scrollEnabled: true,
            layoutHeight: 0,
            spContainerTranslateY: new Animated.Value(height),
            spContainerScaleX: new Animated.Value(0),
            spContainerImageWidth: new Animated.Value(30),
            spContainerImageHeight: new Animated.Value(30),
            spContainerOpacity: [],
            overlayOpacityAnim: new Animated.Value(0),
            overlayScaleAnim: new Animated.Value(1),
            locationResult: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            cardIndex: 0,
            visibleSwiper: false,
            markers: [
                {
                    id: 0,
                    amount: 1,
                    coordinate: {
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    },
                },
                {
                    id: 1,
                    amount: 2,
                    coordinate: {
                        latitude: 37.78825 + 0.004,
                        longitude: -122.4324 - 0.004,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    },
                }
            ]
        };


        this.spContainerScaleXValue = this.state.spContainerScaleX.interpolate({
            inputRange: [0, 1],
            outputRange: [0.9, 1]
        });

        this.spContainerImageWidth = this.state.spContainerImageWidth.interpolate({
            inputRange: [0, 1],
            outputRange: [30, width]
        });

        this.spContainerImageHeight = this.state.spContainerImageHeight.interpolate({
            inputRange: [0, 1],
            outputRange: [30, height * 0.35]
        });

        this.overlayOpacityValue = this.state.overlayOpacityAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.6]
        });

        this.overlayScaleValue = this.state.overlayScaleAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0.99, 1]
        });
    }

    componentWillMount() {
        this._panResponder = (index) => {
            return PanResponder.create({
                onStartShouldSetPanResponder: (event, gestureState) => {
                    return false

                },
                onStartShouldSetPanResponderCapture: (event, gestureState) => {
                    return false
                },
                onMoveShouldSetPanResponder: (event, gestureState) => {
                    // console.log("this one", gestureState.dy, (Math.abs(gestureState.dy)) > 10);
                    return (Math.abs(gestureState.dy)) > 10;
                },
                onMoveShouldSetPanResponderCapture: (event, gestureState) => {
                    return false;
                },

                onPanResponderGrant: (event, gestureState) => {
                    this.onStart(event, gestureState, index);
                },
                onPanResponderMove: (event, gestureState) => {
                    this.onMove(event, gestureState, index);
                },
                onPanResponderRelease: (event, gestureState) => {
                    this.onEnd(event, gestureState, index);
                }
            })
        };
    }

    componentDidMount() {
        // this.getLocationAsync();
        navigator.geolocation.getCurrentPosition((position) => {
            // alert("position: " + JSON.stringify(position));
            this.setState({
                locationResult: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                },
                markers: [
                    {
                        id: 0,
                        amount: 1,
                        coordinate: {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        },
                    },
                    {
                        id: 1,
                        amount: 2,
                        coordinate: {
                            latitude: position.coords.latitude + 0.006,
                            longitude: position.coords.longitude - 0.006,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        },
                    }
                ]
            });
        });

        setTimeout(() => {
            this.setState({
                visibleSwiper: true
            });
        }, 100);
    }


    // getLocationAsync = async () => {
    //     let { status } = await Permissions.askAsync(Permissions.LOCATION);
    //     if (status !== 'granted') {
    //         this.setState({
    //             locationResult: 'Permission to access location was denied',
    //         });
    //     }
    //
    //     let location = await Location.getCurrentPositionAsync({});
    //     this.setState({ locationResult: JSON.stringify(location) });
    // };


    onStart(e, g, index) {
        this.setState({scrollEnabled: false});
    }

    onMove(e, g, index) {

        const {dy} = g;
        const {locationY} = e.nativeEvent;

        const {spContainerTranslateY, spContainerScaleX, layoutHeight, spContainerOpacity, overlayOpacityAnim, overlayScaleAnim, spContainerImageWidth, spContainerImageHeight} = this.state;

        if (this.shoiuldGoToTop) {
            this.newPosition = dy;
        } else {
            this.newPosition = (layoutHeight - FIRST_LEVEL_HEIGHT) + dy;
        }


        // if (this.shouldChangeScroll) {
        //     this.scrollViewRef.scrollTo({
        //         x: width * index,
        //         y: 0,
        //         animation: false
        //     });
        //     this.shouldChangeScroll = false;
        // }

        const present = (1 - (this.newPosition / layoutHeight));


        Animated.parallel([
            Animated.timing(spContainerTranslateY, {
                duration: 0,
                toValue: this.newPosition < 0 ? 0 : this.newPosition,
                useNativeDriver: true
            }),
            Animated.timing(spContainerScaleX, {
                duration: 0,
                toValue: present > 1 ? 1 : present,
                useNativeDriver: true
            }),
            Animated.timing(spContainerImageWidth, {
                duration: 0,
                toValue: present > 1 ? 1 : present,
            }),
            Animated.timing(spContainerImageHeight, {
                duration: 0,
                toValue: present > 1 ? 1 : present,
            }),
            Animated.timing(overlayOpacityAnim, {
                duration: 0,
                toValue: present > 1 ? 1 : present,
                useNativeDriver: true
            }),
            Animated.timing(overlayScaleAnim, {
                duration: 0,
                toValue: present > 1 ? 0 : 1 - present,
                useNativeDriver: true
            })

        ]).start();

    }

    onEnd(e, g, index) {

        const {spContainerTranslateY, layoutHeight, spContainerScaleX, spContainerOpacity, overlayOpacityAnim, overlayScaleAnim, spContainerImageWidth, spContainerImageHeight} = this.state;

        const duration = 200;

        if (this.shoiuldGoToTop) {
            this.shoiuldGoToTop = this.newPosition < (layoutHeight * 0.2);
        } else {
            this.shoiuldGoToTop = this.newPosition < (layoutHeight * 0.6);
        }

        // console.log("this.shoiuldGoToTop", this.shoiuldGoToTop);


        Animated.parallel([
            Animated.timing(spContainerTranslateY, {
                duration,
                toValue: this.shoiuldGoToTop ? 0 : (layoutHeight - FIRST_LEVEL_HEIGHT),
                useNativeDriver: true,
                easing: Easing.out(Easing.cubic)
            }),
            Animated.timing(spContainerScaleX, {
                duration,
                toValue: this.shoiuldGoToTop ? 1 : 0,
                useNativeDriver: true
            }),
            Animated.timing(spContainerImageWidth, {
                duration: 0,
                toValue: this.shoiuldGoToTop ? 1 : 0,
            }),
            Animated.timing(spContainerImageHeight, {
                duration: 0,
                toValue: this.shoiuldGoToTop ? 1 : 0,
            }),
            Animated.timing(overlayOpacityAnim, {
                duration,
                toValue: this.shoiuldGoToTop ? 1 : 0,
                useNativeDriver: true
            }),
            Animated.timing(overlayScaleAnim, {
                duration,
                toValue: this.shoiuldGoToTop ? 0 : 1,
                useNativeDriver: true
            }),

        ]).start(() => {
            if (this.shoiuldGoToTop) {
                this.setState({scrollEnabled: false});
            } else {
                this.setState({scrollEnabled: true});
            }
        });
    }

    _renderSp = () => {

            const {spContainerOpacity} = this.state;
        return Object.keys(this.state.items).map((item, index) => {
                        return (<Animated.View key={index} {...this._panResponder(index).panHandlers}
                                   style={{
                                       transform: [
                                           {scale: this.spContainerScaleXValue},
                                       ],
                                       flex: 1, flexDirection: this.shoiuldGoToTop ? 'column' : 'row',
                                       opacity: spContainerOpacity[index],
                                       width: width,
                                       height: this.state.layoutHeight,
                                       backgroundColor: '#5e5587',
                                   }}>
                <Animated.Image
                    style={{
                      width: this.spContainerImageWidth,
                      height: this.spContainerImageHeight
                    }}
                    source={{uri: this.state.items[item].imageUrl}}
                />
                <Text style={{color: 'white', marginLeft: 15}}>{this.state.items[item].name + " " + this.state.items[item].lastname}</Text>
            </Animated.View>)
        });
    };

    _renderMarkers = () => {

            const {cardIndex, markers} = this.state;
        return (markers.map((marker, i) => {
            console.log("marker.id", cardIndex, marker.id);

            return (

        <MapView.Marker style={{
                    opacity: cardIndex === marker.id ? 1 : 0.7,
                    transform: [
                        {scale: cardIndex === marker.id ? 1.1 : 1},
                    ],
                }} key={marker.id}
                        coordinate={marker.coordinate}
                        onPress={() => {
                                    this.swiperRef.scrollBy((marker.id - cardIndex), true);
                                    this.setState({
                                        cardIndex: marker.id,
                                        locationResult: markers[marker.id].coordinate
                                    })
                                }}
        >
            <AnimatedMarker

                amount={marker.amount}
            />
        </MapView.Marker>
            );
        }))

    };

    render() {
            return (
        <View onLayout={(event) => {
                const {x, y, width, height} = event.nativeEvent.layout;

                if (this.state.layoutHeight === 0) {
                    this.setState({layoutHeight: height}, () => {

                        let animationParalel = [];
                        animationParalel.push(Animated.timing(this.state.spContainerTranslateY, {
                            duration: 100,
                            toValue: height - FIRST_LEVEL_HEIGHT,
                            easing: Easing.out(Easing.cubic),
                            useNativeDriver: true
                        }));


                        Animated.parallel(animationParalel).start();

                    });
                }
            }}
              style={{flex: 1}}>
            <MapView.Animated
                style={{...StyleSheet.absoluteFillObject, transform: [{scale: this.overlayScaleValue}]}}
                region={this.state.locationResult}
            >
                {this._renderMarkers()}
            </MapView.Animated>

            <Animated.View pointerEvents={"none"}
                           style={[StyleSheet.absoluteFillObject, {
                                   backgroundColor: 'black',
                                   opacity: this.overlayOpacityValue
                               }]}/>

            <Animated.View style={{
                    elevation: 50,
                    ...StyleSheet.absoluteFillObject,
                    transform: [
                        {translateY: this.state.spContainerTranslateY},
                    ]
                }}>
                {this.state.visibleSwiper ? <Swiper
                        ref={(ref) => {
                            this.swiperRef = ref;
                        }}
                        loop={false}
                        scrollEnabled={this.state.scrollEnabled}
                        showsPagination={false}
                        showsButtons={false}
                        onIndexChanged={(index) => {
                            if (this.state.markers[index]) {
                                this.setState({cardIndex: index, locationResult: this.state.markers[index].coordinate});
                            }
                        }}
                    >
                        {this._renderSp()}
                    </Swiper> : null}
            </Animated.View>
        </View>
            );
        }
    }

    export default MainMap