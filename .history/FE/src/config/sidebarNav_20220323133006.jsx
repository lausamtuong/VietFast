import {
  FcHome,
  FcKindle,
  FcBiotech,
  FcVoicePresentation,
  FcSupport,
  FcBullish,
} from "react-icons/fc";

const sidebarNav = [
    {
        link: '/admin',
        section: 'home',
        icon: <FcHome size={30} />,
        text: 'Home'
    },
    {
        link: './contact',
        section: 'contact',
        icon: <FcKindle size={30} />,
        text: 'Orders'
    },
    {
        link: './products',
        section: 'products',
        icon: <FcBiotech size={30} />,
        text: 'Products'
    },
    {
        link: './customers',
        section: 'customers',
        icon: <FcVoicePresentation size={30}/>,
        text: 'Customers'
    },
    {
        link: './stats',
        section: 'stats',
        icon: <FcBullish size={30} />,
        text: 'Stats'
    },
    {
        link: './settings',
        section: 'settings',
        icon: <FcSupport size={30} />,
        text: 'Settings'
    }
]

export default sidebarNav