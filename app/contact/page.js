// Next.js Contact Us page migrated from src/pages/ContactUs.js
"use client";
import { Button, Card, Form } from 'react-bootstrap';

export default function ContactUs() {
  return (
    <>
      <h2 className="text-center mb-4">Contact Us</h2>
      <Card className="shadow p-4">
        <Form>
          <Form.Group controlId="name" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="email" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="message" className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Write your message here..." />
          </Form.Group>
          <Button variant="dark" type="submit">Submit</Button>
        </Form>
      </Card>
    </>
  );
}
