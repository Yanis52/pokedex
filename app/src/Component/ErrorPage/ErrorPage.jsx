import { Link } from "react-router-dom";
import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Oops! La page que vous recherchez n a pas été trouvée.</p>
      <Link to="/">Retourner à la page d accueil</Link>
    </div>
  );
};

export default ErrorPage;
