import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Menu from "../components/Menu";
import ThemeContext from "../context/ThemeContext";

const Boleans = () => {
    const { theme } = useContext(ThemeContext);
    
  return (
    <div>
      <Container fluid className={theme}>
        <Row className={theme}>
          <Col sm={2} className="p-0">
            <Menu />
          </Col>
          <Col sm={10}>
            <div className="contenido">
              <h2>Tipo de dato boolean</h2>

              <p>
                Un boolean es un dato lógico que solo puede tener los valores
                true o false.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Boleans;
