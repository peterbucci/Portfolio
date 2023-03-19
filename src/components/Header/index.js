import {
  Menu,
  Icon,
  Logo,
  Navigation,
  NavLink,
  NavIcon,
  InneWrapper,
} from "./styles/header";

export default function Header({ width, height, location }) {
  return (
    <Menu height={height}>
      <InneWrapper>
        <Logo>
          <Icon to="/" state={{ behavior: "smooth" }}>
            PB
          </Icon>
        </Logo>
        <Navigation>
          {width >= 600 && height > 400 ? (
            <>
              <NavLink current={location === "/" ? "true" : null} to="/">
                Home
              </NavLink>
              <NavLink
                current={location === "/about" ? "true" : null}
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                current={location === "/portfolio" ? "true" : null}
                to="/portfolio"
              >
                Portfolio
              </NavLink>
              <NavLink
                current={location === "/blog" ? "true" : null}
                to="/blog"
              >
                Blog
              </NavLink>
              <NavLink
                current={location === "/contact" ? "true" : null}
                to="/contact"
              >
                Contact
              </NavLink>
            </>
          ) : (
            <NavIcon>
              <svg
                fill="currentColor"
                height="30px"
                width="30px"
                viewBox="0 0 297 297"
              >
                <g>
                  <path
                    d="M280.214,39.211H16.786C7.531,39.211,0,46.742,0,55.997v24.335c0,9.256,7.531,16.787,16.786,16.787h263.428
			c9.255,0,16.786-7.531,16.786-16.787V55.997C297,46.742,289.469,39.211,280.214,39.211z"
                  />
                  <path
                    d="M280.214,119.546H16.786C7.531,119.546,0,127.077,0,136.332v24.336c0,9.255,7.531,16.786,16.786,16.786h263.428
			c9.255,0,16.786-7.531,16.786-16.786v-24.336C297,127.077,289.469,119.546,280.214,119.546z"
                  />
                  <path
                    d="M280.214,199.881H16.786C7.531,199.881,0,207.411,0,216.668v24.335c0,9.255,7.531,16.786,16.786,16.786h263.428
			c9.255,0,16.786-7.531,16.786-16.786v-24.335C297,207.411,289.469,199.881,280.214,199.881z"
                  />
                </g>
              </svg>
            </NavIcon>
          )}
        </Navigation>
      </InneWrapper>
    </Menu>
  );
}
