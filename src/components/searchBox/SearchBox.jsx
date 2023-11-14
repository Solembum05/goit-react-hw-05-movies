import { Button, Form, Input } from './searchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          name='search'
          required
          minLength={2}
        />
        <Button type='submit'>Search</Button>
      </Form>
    </div>
  );
};
