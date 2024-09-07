import { ErrorStyle } from "../css/ErrorStyle"

const Error=()=>{
    return(
        <ErrorStyle>
        <div id="error-container">
            <h1 class="error-code">404</h1>
            <h2 class="error-message">PAGE NOT FOUND</h2>
            <p class="error-description">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <a href="/Home.jsx" class="homepage-link">HOMEPAGE</a>
         
        </div>
        </ErrorStyle>
    )
}

export default Error