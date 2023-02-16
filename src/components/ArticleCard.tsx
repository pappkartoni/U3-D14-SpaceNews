import { IArticle } from "../interfaces/IArticle"
import { Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Row from "react-bootstrap/esm/Row"

interface ArticleCardProps {
    article: IArticle
}

const ArticleCard = (props: ArticleCardProps) => {
    const a = props.article
    return (
        <Col xs={12} md={6}>
            <Link to={`/article/${a.id}`}>
                <Card>
                    <Row>
                        <Col md={4}>
                            <div className="img-wrapper">
                                <Card.Img src={a.imageUrl} />
                            </div>
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>{a.title} {a.featured ? "Feat" : ""}</Card.Title>
                                <Card.Subtitle>by {a.newsSite}</Card.Subtitle>
    {/*                             <Card.Text>
                                    {a.summary}...
                                    <Link to={a.url}>READ MORE</Link>
                                </Card.Text> */}
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Link>
        </Col>
    )
}

export default ArticleCard