import { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import ArticleCard from './ArticleCard'
import { IArticle } from '../interfaces/IArticle'

const Homepage = () => {
    const url: string = "https://api.spaceflightnewsapi.net/v3/articles"
    const [articles, setArticles] = useState<IArticle[]>([])

    const getArticles = async () => {
        try {
            const res = await fetch(url)

            if (res.ok) {
                const data = await res.json()
                setArticles(data)
            } else {
                throw new Error(res.status +  " " +  res.statusText)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getArticles()
    }, [])

    return (
        <section>
            <Container>
                <h1>Funky space news right here!</h1>
                <Row>
                    {articles.map((a) => (
                        <ArticleCard article={a} />
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default Homepage