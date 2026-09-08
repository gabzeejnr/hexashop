import logo from "../assets/images/white-logo.png";
import Image from "next/image";

const brandName = "HexaShop Co. Ltd.";
const brandLogo = <Image src={logo} alt={brandName.split(" ")[0]} loading="eager" />
const address = "16501 Collins Ave, Sunny Isles Beach, FL 33160, United States";
const email = "hexashop@company.com";
const phoneNumber = "010-020-0340";

export {
    brandLogo, brandName, address,
    email, phoneNumber
}