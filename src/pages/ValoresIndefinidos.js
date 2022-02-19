import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Menu from "../components/Menu";
import ThemeContext from "../context/ThemeContext";

const ValoresIndefinidos = () => {
  const {theme} = useContext(ThemeContext);
  
  return (
    <div>
      <Container fluid className={theme}>
        <Row className={theme}>
          <Col sm={2} className="p-0">
            <Menu />
          </Col>
          <Col sm={10}>
            <div className="contenido">
              <h2>Undefined, Null, NaN</h2>
              <h3>Undefined</h3>
              <p>
                Una variable a la que no se la ha asignado ningún valor, o no se
                ha declarado en absoluto. Un método o sentencia también devuelve{" "}
                <b>undefined</b> si la variable que se está evaluando no tiene
                asignado ningún valor.
              </p>
              <h3>Null</h3>
              <p>
                El valor <b>null</b> es un literal de javascript que representa
                intencionamente un valor nulo o "vacío". Es uno de los valores
                primitivos de JavaScript.
              </p>
              <h3>NaN</h3>
              <b>NaN</b> es una propiedad del global object (objeto global), por
              ejemplo, es una variable de alcance global. El valor inicial de
              NaN es Not-A-Number (No es un número).
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ValoresIndefinidos;
