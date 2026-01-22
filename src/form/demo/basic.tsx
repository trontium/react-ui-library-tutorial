import React from 'react';

// Assuming Input exists and exports default
import Button from '../../button';
import Input from '../../input';
import Form from '../index';

// Assuming Button exists

export default () => {
  return (
    <Form>
      <Form.Item label="Username" name="username">
        <Input placeholder="Please enter username" />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input type="password" placeholder="Please enter password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};
