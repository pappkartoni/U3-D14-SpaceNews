import { useEffect, useState } from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { IArticle } from '../interfaces/IArticle'
import { useParams } from "react-router"
import { format, parseISO } from 'date-fns'

const DetailsPage = () => {
    const url: string = "https://api.spaceflightnewsapi.net/v3/articles/"
    const id = useParams().id
    const [article, setArticle] = useState<null | IArticle>(null)

    const getArticle = async () => {
        try {
            const res = await fetch(url + id)
            if (res.ok) {
                const data = await res.json()
                setArticle(data)
            } else {
                throw new Error(res.status +  " " +  res.statusText)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getArticle()
    }, [id])

    return (
        <section>
            {article && <Container className='mt-5'>
                <Card className='details'>
                    <div className="img-wrapper">
                        <Card.Img src={article.imageUrl} />
                    </div>
                    <Card.Body className='d-flex flex-column'>
                        <Card.Title>{article.title} {article.featured ? "Featured" : ""}</Card.Title>
                        <Card.Subtitle>by {article.newsSite}</Card.Subtitle>
                        <Card.Text>
                            {article.summary}
                            {"\n"}
                            <Link to={article.url}>READ MORE</Link>
                        </Card.Text>
                        {article.events.length > 0 && 
                            <>
                                <h6>Event Info</h6>
                                <Row>
                                    {article.events.map((ev) => (
                                        <Col key={ev.id}>
                                            <p>ID: {ev.id}</p>
                                            <p>Provider: {ev.provider}</p>
                                        </Col>
                                    ))}
                                </Row>
                            </>
                        }
                        {article.launches.length > 0 && 
                            <>
                                <h6>Launch Info</h6>
                                <Row>
                                    {article.launches.map((l) => (
                                        <Col key={l.id}>
                                            <p>ID: {l.id}</p>
                                            <p>Provider: {l.provider}</p>
                                        </Col>
                                    ))}
                                </Row>
                            </>
                        }
                        <span className='text-muted'>
                            <>
                                Published: {format(parseISO(article.publishedAt.toString()), "dd.MM.yyyy 'at' HH:mm")} - Updated: {format(new Date(article.updatedAt.toString()), "dd.MM.yyyy 'at' HH:mm")}
                            </>
                        </span>
                    </Card.Body>
                </Card>
            </Container>}
        </section>
    )
}

export default DetailsPage