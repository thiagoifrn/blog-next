import utilStyles from '../styles/utils.module.css'

export default function RedesSociais() {
    return (
        <div>
            <a rel="noopener noreferrer" href="https://github.com/thiagoifrn/blog-next" target="_blank">
                <div className={utilStyles.lightText}>GitHub: thiagoifrn/blog-next</div>
            </a>
            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/thiagopds-developer" target="_blank">
                <div className={utilStyles.lightText}>Linkedin: thiagopds-developer</div>
            </a>
        </div>
    );
}