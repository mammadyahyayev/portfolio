import NavItem from "./NavItem.tsx";

export default function NavBar() {
    return (
        <nav className="nav hidden lg:block">
            <ul className="mt-16 w-max">
                <NavItem title="About" slug="about"/>
                <NavItem title="Experience" slug="experience"/>
                <NavItem title="Projects" slug="projects"/>
                <NavItem title="Blog" slug="blog"/>
                <NavItem title="Contact me" slug="contact"/>
            </ul>
        </nav>
    )
}
