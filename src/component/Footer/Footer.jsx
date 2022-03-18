import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <p className='md-text margin-bottom'>
          Made with <i className='fa fa-code'></i> by Srishti Gautam
        </p>
        <div className='quick-links'>
          <FooterLinks
            links='https://github.com/srishtigautam21'
            icon='fa fa-github nav-icons'
          />
          <FooterLinks
            links='https://www.linkedin.com/in/srishti-gautam-385861190/'
            icon='fa fa-linkedin-square nav-icons'
          />
          <FooterLinks
            links='https://twitter.com/SrishtiGautam99'
            icon='fa fa-twitter nav-icons'
          />
        </div>
        <p className='margin-top'>
          <i className='fa fa-copyright'></i> 2022 Umbrella UI Designs
        </p>
      </footer>
    </div>
  );
};
export { Footer };

const FooterLinks = (props) => {
  return (
    <a className='link' href={props.links}>
      <i className={props.icon}></i>
    </a>
  );
};
