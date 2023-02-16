import { Navbar, Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router"


const Navi = () => {
    const navigate= useNavigate()

    const goRandom = () => {
        const rng: number = Math.ceil(Math.random() * 10000)
        navigate(`/article/${rng.toString()}`)
    }

    return (
        <Navbar collapseOnSelect expand="md" variant="dark">
        <Container>
            <Link to="/">
                <Navbar.Brand className="d-flex align-items-center">
                    FloSpaceNews
                </Navbar.Brand>
            </Link>
            <Button className="rando" variant="info" onClick={goRandom}>
                Randomize
            </Button>
        </Container>
    </Navbar>
    )
}

export default Navi