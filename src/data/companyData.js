import Image from "next/image";
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/images/white-logo.png";

const brandName = "HexaShop Co. Ltd.";
const brandLogo = <Image src={logo} alt={brandName.split(" ")[0]} loading="eager" />
const address = "16501 Collins Ave, Sunny Isles Beach, FL 33160, United States";
const email = "hexashop@company.com";
const phoneNumber = "010-020-0340";

const sM = [
    {
        id: "facebook",
        link: "https://www.facebook.com/user?hexashop",
        icon: faFacebook
    },
    {
        id: "twitter",
        link: "https://www.x.com/hexashop/profile",
        icon: faTwitter
    },
    {
        id: "linkedIn",
        link: "https://www.linkedin.com/profile/hexashop-1234",
        icon: faLinkedin
    }
]

export {
    brandLogo, brandName, address,
    email, phoneNumber, sM
}