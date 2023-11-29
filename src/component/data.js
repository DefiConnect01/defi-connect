import {FaGithub,FaTelegram,FaDiscord,FaTwitter} from 'react-icons/fa'
import {AiFillCheckCircle,AiFillCloseCircle} from 'react-icons/ai'
import file from './asset/docs/Whitepaper_DeFi_Connect.docx'
import {sendTeamA,sendTeamB,sendTeamC} from './asset/images/Images'
const footData =[
    {
        social:'Github',
        path:'',
        icon:<FaGithub/>
    },
    {
        social:'Twiter',
        path:'https://twitter.com/DeFi_credit?t=DmrsbNRMLVVFsFM6PopMpA&s=09',
        icon:<FaTwitter/>
    },
    {
        social:'Telegram',
        path:'https://t.me/+699uMw5F20I3YTY0',
        icon:<FaTelegram/>
    },
    {
        social:'Discord',
        path:'',
        icon:<FaDiscord/>
    },
]

const NavData=[
    {
        id:0,
        name:'Whitepaper',
        path:'#whitepaper',
        file:file
    },
    {
        id:1,
        name:'Usecases',
        path:'#usecase'
    },
    
    {
        id:2,
        name:'Road Map',
        path:'#roadmap'
    },
    {
        id:3,
        name:'Contact',
        path:'#contact'
    }
]

const BorrowHeaderContent=[
    {
        id:0,
        name:'Market',
        path:'/borrow'
    },
    {
        id:0,
        name:'Loan',
        path:'/loan'
    },
    {
        id:0,
        name:'Saving',
        path:'/saving'
    },
]



const whyDefiContent =[
 {
    itemFirst:'',
    itemSecond:'Instant Crypto Credit Lines',
    itemLast:'Conventional Loans'
 },
 {
    itemFirst:'Opportunity to grow your portfolio',
    itemSecond:<AiFillCheckCircle  className='item-icon'/>,
    itemLast:<AiFillCloseCircle className='item-icon'/>
 },
 {
    itemFirst:'Lower interest rates',
    itemSecond:<AiFillCheckCircle className='item-icon'/>,
    itemLast:<AiFillCloseCircle className='item-icon'/>
 },
 {
    itemFirst:'No origination fees',
    itemSecond:<AiFillCheckCircle className='item-icon'/>,
    itemLast:<AiFillCloseCircle className='item-icon'/>
 },
 {
    itemFirst:'Tax-efficiency',
    itemSecond:<AiFillCheckCircle className='item-icon'/>,
    itemLast:<AiFillCloseCircle className='item-icon'/>
 },
 {
    itemFirst:'Instant approval',
    itemSecond:<AiFillCheckCircle className='item-icon'/>,
    itemLast:<AiFillCloseCircle className='item-icon'/>
 },
 {
    itemFirst:'No paperwork to fill',
    itemSecond:<AiFillCheckCircle className='item-icon'/>,
    itemLast:<AiFillCloseCircle className='item-icon'/>
 },
 {
    itemFirst:'No monthly repayments',
    itemSecond:<AiFillCheckCircle className='item-icon'/>,
    itemLast:<AiFillCloseCircle className='item-icon'/>
 },
 {
    itemFirst:'No impact on credit score',
    itemSecond:<AiFillCheckCircle className='item-icon'/>,
    itemLast:<AiFillCloseCircle className='item-icon'/>
 }
]



const templatetHead =[
                    {
                        BorrowData:{
                            index:0,
                            title:'BORROW NOW AT JUST 0% INTEREST',
                            para:`Join our Loyalty Program and get funds at no cost! Just enable our
                            Low-Interest Borrowing feature to automatically keep your LTV ratio
                            below 20% and enjoy our best rates.`,
                            img:require('./asset/images/borrowImg.svg').default
                        }
                    },
                    {
                        whyDefiData:{
                            index:1,
                            title:'WHY USE DEFI CONNECT CREDIT',
                            para:`Get as much or as little as you want, whenever you want with the most flexible crypto credit line out there.`,
                            
                            img:require('./../component/asset/images/borrowImg.svg').default,
                            img1:require('./../component/asset/images/why.svg').default,
                            img2:require('./../component/asset/images/why1.svg').default,
                        }
                    },
                    {
                        UtilizeContent :{
                            index:2,
                            title:`How to Best Utilize Your Credit Line`,
                            para:`With a minimum of $50 and a maximum of $2M,Defi Connect Credit is here to help you afford the necessities and luxuries you are thinking about.`
                        }
                        
                    },
                    
                    {
                        solutionData:{
                            index:3,
                                title:'ALL IN ONE SOLUTION FOR CRYPTOCURRENCY'
                        }
                    },
                    {
                        interestData:{
                            index:4,
                                title:'ALL IN ONE SOLUTION FOR CRYPTOCURRENCY'
                        }
                    },
                    {
                        RoadMapData:{
                            index:5,
                            title:'DEFI CONNECT CREDIT 2023 ROAD MAP',
                        
                        }
                    },
                    {
                        
                        BorrowInputData:{
                            index:6,
                            title:'See How Much you  Can  BORROW',
                            para:`Enter the amount you’d like to borrow to find out how much collateral is required.`,
                        
                        }
                    },
                    {
                        
                        getToKnowUs:{
                            index:7,
                            title:'More Ways to Get the Best Out of Defi Connect Credit',
                            
                        
                        }
                    },
                    {
                        
                        partnerData:{
                            index:8,
                            title:'Partners',
                            partnersImg:[
                                {
                                    id:1,
                                    imgUrl:require('./asset/images/binance.svg').default
                                },
                                {
                                    id:2,
                                    imgUrl:require('./asset/images/gate.svg').default,

                                },
                                {
                                    id:3,
                                    imgUrl:require('./asset/images/coinmarket.svg').default
                                },
                                {
                                    id:4,
                                    // imgUrl:require('./asset/images/coingecko.svg').default
                                    imgUrl:require('./asset/images/chainlink.svg').default,
                                    
                                },
                                {
                                    id:5,
                                    imgUrl:require('./asset/images/sgr.svg').default
                                },
                                
                                {
                                    id:6,
                                    imgUrl:require('./asset/images/naireg.svg').default
                                },
                                
                                {
                                    id:7,
                                    imgUrl:require('./asset/images/harmony.svg').default
                                },
                        
                                {
                                    id:8,
                                    imgUrl:require('./asset/images/247.svg').default
                                },
                                {
                                    id:9,
                                    imgUrl:require('./asset/images/coingecko.svg').default
                                },
                                {
                                    id:10,
                                    imgUrl:require('./asset/images/polygn.svg').default
                                },
                                {
                                    id:11,
                                    imgUrl:require('./asset/images/taker.svg').default
                                },
                                {
                                    id:12,
                                    imgUrl:require('./asset/images/mars.svg').default
                                },
                            ]
                        }
                    },
                    {
                        
                        TeamData:{
                            index:9,
                            title:'Team',
                            teamDetails:[
                                {
                                    id:1,
                                    teamImg:sendTeamA,
                                    teamName:'Fedrico Tula',
                                    teamTitle:'CEO',
                                    teamDescription:`Federico has over a decade of experience in financial technology, having previously led successful blockchain projects. He brings a strategic vision for merging traditional finance with decentralized technologies.`
                                },
                                {
                                    id:2,
                                    teamImg:sendTeamB,
                                    teamName:'Habeeb Ali',
                                    teamTitle:'CTO',
                                    teamDescription:`Habeeb is a seasoned blockchain developer, specializing in smart contract development. With a strong background in computer science, he oversees the technical aspects of the project.`
                                },
                                {
                                    id:3,
                                    teamImg:sendTeamC,
                                    teamName:'Yusuf Adams',
                                    teamTitle:'HOF',
                                    teamDescription:`Yusuf is a certified financial analyst with extensive experience in traditional investment markets. He ensures the alignment of the project with regulatory standards and brings a wealth of financial expertise`
                                }
                            ]
                            
                        
                        }
                    }

                ]

const SliderData = [
    {
        title:require('./asset/images/cards.svg').default,
        subt:'Make a major project',
        // des:'hello'
    },
    {
        title:require('./asset/images/cardsol1.svg').default,
        subt:'Optimize your project',
        // des:'hello'
    },
    {
        title:require('./asset/images/cardsol2.svg').default,
        subt:'Buy more crypto',
        // des:'hello'
    },
    {
        title:require('./asset/images/cardsol2.svg').default,
        subt:'Buy more crypto',
        // des:'hello'
    },
]

const FagData = [
    {
            id:0,
            ques:"How do DEFI CONNECT CREDIT works?",
            ans:`DeFi Connect Credit operates as a decentralized finance (DeFi) platform that tokenizes traditional assets, allowing users to invest in a variety of assets without direct ownership. It employs smart contracts for the creation of synthetic tokens, backed by collateral. Users can deposit crypto assets as collateral to access a credit line, trade synthetic tokens, and participate in decentralized investment funds.`
    },
    {
            id:1,
            ques:"How quickly do i get money?",
            ans:`Upon approval, users can access their credit line almost instantly. The funds are typically available within 24 hours, providing a quick and efficient borrowing experience.`
    },
    {
            id:2,
            ques:"What is the interest rate?",
            ans:`The interest rate varies based on the user's Loyalty Tier, determined by the ratio of the native token (or other specified criteria) against the total portfolio balance. Users with higher Loyalty Tiers enjoy lower interest rates, ranging from 7.9% to 15.9%.`
    },
    {
            id:3,
            ques:"What is the loan-to-value (LTV)?",
            ans:`The Loan-to-Value (LTV) ratio expresses the proportion of the loan amount to the value of the collateral. It is calculated by dividing the loan amount by the collateral value and expressing the result as a percentage. LTV is a key factor in determining the user's risk and eligibility for borrowing.`
    },
    {
            id:4,
            ques:`What is the value of my collateral changes before i repay my credit line?`,
            ans:`If the value of the collateral changes, it may impact the user's Loan-to-Value ratio. To manage this, users can add more collateral, repay a portion of the credit line, or take other actions to maintain a healthy LTV ratio.`
    },
    {
            id:5,
            ques:`How does DEFI CONNECT CREDIT keep my collateral safe?`,
            ans:`DEFI CONNECT CREDIT employs advanced security measures, including cold wallets for storing crypto assets, multi-signature protocols, and regular security audits. These measures are designed to protect user collateral from potential vulnerabilities and ensure a secure platform for users.`
    }
    
]

const solutionDataCard =[
       {
        img:require('./asset/images/convenience.svg').default,
        cardHeader:'Convenience and Accessibility',
        cardBody:`
        Users can access a wide range of decentralized financial services, 
        including loans, synthetic tokens, investments, and more, all from 
        a single platform. This eliminates the need to interact with multiple 
        protocols and applications, making the experience more convenient 
        and accessible.`
       },
       {
        img:require('./asset/images/cost.svg').default,
        cardHeader:'Cost Efficiency',
        cardBody:`By having multiple services under one roof, users can save on 
        commissions and transaction fees that would otherwise be 
        generated by moving assets between different platforms. 
        Cost efficiency translates into greater profitability for users.`
       },
       {
        img:require('./asset/images/simplified.svg').default,
        cardHeader:'Simplified Portfolio Diversification',
        cardBody:`The platform offers the ability to diversify investments and access
        a wide range of traditional and synthetic assets. This allows users 
       to manage their portfolios more effectively and distribute risk 
       intelligently.`
       },
]
const InterestData=[
    {
        title:'Defi Connect Credit Card',
        des:`All Defi Card purchases are deducted 
        from your available credit line while 
        your portfolio remains intact.`,
        btn:'Learn More'
    },
    {
        title:'Earn Interest',
        des:`All Defi Card purchases are deducted 
        from your available credit line while 
        your portfolio remains intact.`,
        btn:'Learn More'
    },
    {
        title:'Defi Connect Credit Card',
        des:`All Defi Card purchases are deducted 
        from your available credit line while 
        your portfolio remains intact.`,
        btn:'Learn More'
    },
    
]

const geToKnowData1 = [
    {
        title:'Borrow Platform',
        img:require('./asset/images/corporate.svg').default,
        para:`Additional way to leverage your
        digital asset portfolio.`
    },
    {
        title:'Earn Synthetic Token',
        img:require('./asset/images/synthethic.svg').default,
        para:`Earn synthetic token by collateralizings
        your asset.`
    },
    {
        title:'Participate in Governance',
        img:require('./asset/images/govern.svg').default,
        para:`Stay active in the community and take
        part in decisions that shape the future
        of Defi connect Credit.`
    },
    {
        title:'Staking',
        img:require('./asset/images/govern.svg').default,
        para:`Stake $DCC or any of the  token in the pool  earn more reward in the pools
        .`
    },
    {
        title:'Dex',
        img:require('./asset/images/dexMain.svg').default,
        para:`Provide Liquidity to the Our Dex and you will earn the swap fees in the pool.
        .`
    },
    {
        title:'Launchpad',
        img:require('./asset/images/launchpad.svg').default,
        para:`Participate in any of the IDO to stand chance to be the first person to buy the sales.`
    }
]


const PartnerContent= {
    subtitle:`Move Faster with Defi Connect Credit  Partners`,
    body:`We know your time is valuable. Find a partner
    to quickly
    deliver the Defi connect experience 
    you need of use Defi connect Apps
    to simply 
    borrow your crypto with o% interest.`,
    img1:require('./asset/images/cost.svg').default,
    img2:require('./asset/images/corporate.svg').default,
    img3:require('./asset/images/corporate.svg').default,
    img4:require('./asset/images/business.jpg').default,

}

const RoadDataMap =[
    {
        id:1,
        head:`Stage 1: Development and Launch of Borrow Platform`,
        body:`
        Q1 [2024]: DeFi Connect Credit Foundation, recruitment of core 
        development and security team, development and audit 
        of smart contracts for the Borrow platform, internal platform 
        testing.`,
        body2:`Q2 [2024]: DeFi Connect Credit launched in closed beta with a 
        select group of users, compilation of feedback and 
        adjustments according to the feedback received, and 
        the launch of the Borrow platform on Nautilus Chain.`
    },
    {
        id:1,
        head:`Stage 2: Development and Launch of Synthetic Stocks`,
        body:`
        Q3 [2024]: Development and audit of smart contracts for 
        Synthetic Stocks, initial testing, and feedback collection.`,
        body2:`Q4 [2024]: Public launch of Synthetic Stocks, 
        marketing and promotional campaigns to
         increase adoption.`
    },
    {
        id:1,
        head:`Stage 3: Native Token and Expansion`,
        body:`
        Q1 [2025]: Create the Native Token, initiate pre-sale of the 
        Native Token, and launch financial and blockchain education 
        campaigns.`,
        body2:`
        Q2 [2025]: Explore strategic collaborations and regulations in 
        key Asian markets, evaluate the possibility of expanding 
        the range of tokenized assets available, 
        and upgrade the roadmap.`
    },
    {
        id:1,
        head:`Stage 4: Platform Enhancement and Global Expansion`,
        body:`
        Q3 [2025]: Implement security and scalability improvements 
        to support increased traffic and volume of assets, and
         consider introducing additional services like 
        lending and staking.`,
        body2:`Q4 [2025]: Evaluate the possibility of becoming a regulated 
        entity, release version 2.0 of DeFi Connect Credit with significant 
        improvements to the user experience, and expand 
        the user base globally.`
    },
]

const footerContent = [
    {
        item: 'Products',
        itemDetail: [
            {
                name: 'Buy',
                path: ''
            },
            {
                name: 'Earn',
                path: ''
            },
            {
                name: 'Exchange',
                path: ''
            },
            {
                name: 'Borrow',
                path: ''
            }         
        ]
    },
    {
        item: 'Company',
        itemDetail: [
            {
                name: 'About',
                path: ''
            },                
            {
                name: 'Careers',
                path: ''
            }         
        ]
    },
    {
        item: 'Resources',
        itemDetail: [
            {
                name: 'Blog',
                path: ''
            }        
        ]
    },
    {
        item: 'Legal',
        itemDetail: [
            {
                name: 'Privacy Policy',
                path: ''
            },
            {
                name: 'Terms & Conditions',
                path: ''
            }       
        ]
    }
];

         
export  {footData,NavData,templatetHead,geToKnowData1,whyDefiContent,SliderData,FagData,InterestData,footerContent,solutionDataCard,PartnerContent,RoadDataMap,BorrowHeaderContent}