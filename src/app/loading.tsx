import GradientCircularProgress from '@/components/GradientCircularProgress';
import { Container } from '@mui/material';

const Loading = () => (
  <Container className="flex h-screen items-center justify-center">
    <GradientCircularProgress />
  </Container>
);

export default Loading;
