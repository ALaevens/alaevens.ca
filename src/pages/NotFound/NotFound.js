import ContentBox from "../../components/ContentBox/ContentBox";
import "./NotFound.css";

export default function NotFound(props) {
    return (
        <ContentBox className="notFound">
            <h1 className="code">404</h1>
            <h2>Page Not Found</h2>
            <h2>¯\_(ツ)_/¯</h2>
        </ContentBox>
    );
}