import './Links.css';
import CSILogo from '../../Assets/Images/csi.png';

const SocialMedia = () => {
    return(
        <div className='social-links-panel'>
            <div className='panel-container'>
                <div><a href='https://www.pictcsi.com/' target='_blanck' className='csi-logo-social'><img src={CSILogo} alt=''/></a></div>
                <div><a href='http://www.facebook.com/csipict' target='_blanck' className='fb-logo'><i className='fa fa-facebook fa-lg'/></a></div>
                <div><a href='http://www.instagram.com/csipict' target='_blanck' className='ig-logo'><i className='fa fa-instagram fa-lg'/></a></div>
                <div><a href='http://www.linkedin.com/company/pict-csi' target='_blanck' className='in-logo'><i className='fa fa-linkedin fa-lg'/></a></div>
                <div><a href='https://www.youtube.com/channel/UC_lcyqJpGxd7XWBMrcbpgpw/featured' target='_blanck' className='yt-logo'><i className='fa fa-youtube fa-lg'/></a></div>
            </div>
        </div>
    )
}

export default SocialMedia;