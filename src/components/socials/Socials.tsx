import BuyMeACoffeeIcon from "./BuyMeACoffeeIcon.tsx";
import GithubIcon from "./GithubIcon.tsx";
import LinkedInIcon from "./LinkedInIcon.tsx";
import MediumIcon from "./MediumIcon.tsx";

const Socials = () => {
    return (
        <ul className="ml-1 mt-8 flex items-center" aria-label="social-media">
            <li className="mr-5 text-xs">
                <a className="block hover:text-slate-200" target="_blank" href="https://github.com/mammadyahyayev"
                    rel="noreferrer noopener">
                    <span className="sr-only">Github</span>
                    <GithubIcon />
                </a>
            </li>

            <li className="mr-5 text-xs">
                <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/mammadyahya/"
                    target="_blank" rel="noreferrer noopener"
                    aria-label="LinkedIn (opens in a new tab)">
                    <span className="sr-only">LinkedIn</span>
                    <LinkedInIcon />
                </a>
            </li>

            <li className="mr-5 text-xs">
                <a className="block hover:text-slate-200" href="https://medium.com/@mammadyahya"
                    target="_blank" rel="noreferrer noopener" aria-label="Medium (opens in a new tab)">
                    <span className="sr-only">Medium</span>
                    <MediumIcon />
                </a>
            </li>

            <li className="mr-5 text-xs">
                <a className="block hover:text-slate-200" href="https://www.buymeacoffee.com/mammadyahya"
                    target="_blank" rel="noreferrer noopener" aria-label="BuyMeACoffee (opens in a new tab)">
                    <span className="sr-only">BuyMeACoffee</span>
                    <BuyMeACoffeeIcon />
                </a>
            </li>
        </ul>
    );
};

export default Socials;
