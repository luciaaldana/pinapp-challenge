import { CircularProgress, Container } from '@mui/material';

const Loading = () => (
  <Container className="flex h-screen items-center justify-center">
    <CircularProgress color="success" />
  </Container>
);

export default Loading;
