import { useState } from "react";
import { Container, Button, Form, Modal } from "react-bootstrap";

const OrderForm = () => {
  const [order, setOrder] = useState({
    name: "",
    address: "",
    phoneNum: "",
    items: [],
    // totalPrice: calculateTotalPrice,
  });

  // const calculateTotalPrice = () => {

  //   return totalPrice
  // };

  const [isOrdered, setIsOrdered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsOrdered(true);
  };

  const handleClose = () => {
    setIsOrdered(false);
  };

  console.log(order);

  return (
    <Container>
      <Form className="mb-3" onSubmit={handleSubmit}>
        <h1>Order Form</h1>
        <Form.Group controlId="formEmail">
          <Form.Label>Name</Form.Label>

          <Form.Control
            type="text"
            placeholder="John Doe"
            value={order.name}
            onChange={(e) => setOrder({ ...order, name: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Delivery Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="123 Sample St, Las Vegas, NV"
            value={order.address}
            onChange={(e) => setOrder({ ...order, address: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group controlId="phoneNum">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="123-456-7890"
            value={order.phoneNum}
            onChange={(e) => setOrder({ ...order, phoneNum: e.target.value })}
            required
          />
        </Form.Group>

        <h1 className="mt-4">Products</h1>

        <div className="mb-3">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <Form.Check
              type="checkbox"
              id="shirtItem"
              label="Limited Edition V88 T-Shirt"
              value="Limited Edition V88 T-Shirt"
              onChange={(e) => {
                if (e.target.checked) {
                  setOrder({
                    ...order,
                    items: [
                      ...order.items,
                      {
                        orderItem: e.target.value,
                        orderQuantity: 1,
                      },
                    ],
                  });
                } else {
                  setOrder({
                    ...order,
                    items: order.items.filter(
                      (item) => item.orderItem !== e.target.value
                    ),
                  });
                }
              }}
            />

            {order.items.some(
              (item) => item.orderItem === "Limited Edition V88 T-Shirt"
            ) && (
              <Form.Group
                controlId="shirtQuantity"
                className="d-flex align-items-center gap-2"
              >
                <Form.Label>QTY</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="1"
                  value={
                    order.items.find(
                      (item) => item.orderItem === "Limited Edition V88 T-Shirt"
                    )?.orderQuantity || 1
                  }
                  onChange={(e) =>
                    setOrder({
                      ...order,
                      items: order.items.map((item) =>
                        item.orderItem === "Limited Edition V88 T-Shirt"
                          ? { ...item, orderQuantity: e.target.value }
                          : item
                      ),
                    })
                  }
                  required
                />
              </Form.Group>
            )}
          </div>

          <div className="d-flex align-items-center gap-4 justify-content-between">
            <Form.Check
              type="checkbox"
              id="capItem"
              label="Limited Edition V88 Cap"
              value="Limited Edition V88 Cap"
              onChange={(e) => {
                if (e.target.checked) {
                  setOrder({
                    ...order,
                    items: [
                      ...order.items,
                      { orderItem: e.target.value, orderQuantity: 1 },
                    ],
                  });
                } else {
                  setOrder({
                    ...order,
                    items: order.items.filter(
                      (item) => item.orderItem !== e.target.value
                    ),
                  });
                }
              }}
            />

            {order.items.some(
              (item) => item.orderItem === "Limited Edition V88 Cap"
            ) && (
              <Form.Group
                controlId="shirtQuantity"
                className="d-flex align-items-center gap-2 justify-self-end"
              >
                <Form.Label>QTY</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="1"
                  value={
                    order.items.find(
                      (item) => item.orderItem === "Limited Edition V88 Cap"
                    )?.orderQuantity || 1
                  }
                  onChange={(e) =>
                    setOrder({
                      ...order,
                      items: order.items.map((item) =>
                        item.orderItem === "Limited Edition V88 Cap"
                          ? { ...item, orderQuantity: e.target.value }
                          : item
                      ),
                    })
                  }
                  required
                />
              </Form.Group>
            )}
          </div>
        </div>

        <Button type="submit" className="mt-3">
          Place Order
        </Button>
      </Form>

      <Modal show={isOrdered} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Complete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Customer Name: {order.name}</p>
          <p>Delivery Address: {order.address}</p>
          <p>Contact #: {order.phoneNum} </p>
          <p>Order Details:</p>
          {order.items.map((item) => (
            <p key={`item-${item.name}`}>
              {item.orderItem} X {item.orderQuantity}
            </p>
          ))}
          <p>Total Price: </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default OrderForm;
