import { Container, Grid, Typography, Paper, TextField, Box } from '@mui/material';
import './App.css';

const App = () => {

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        IELTS Reading Practice
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper elevation={3} style={{ padding: '16px', height: '80vh' }}>
            <Typography variant="h6" gutterBottom>
              Paste Text Here
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={24}
              variant="outlined"
              placeholder="Paste your reading passage here..."
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} style={{ display: 'flex', flexDirection: 'column', padding: '16px', height: '80vh' }}>
            <Typography style={{ flex: 1 }} variant="h6" gutterBottom>
              Paste Screenshot Here
            </Typography>
            <Box
              sx={{
                flex: 98,
                border: '1px dashed grey',
                padding: '16px',
                textAlign: 'center',
                overflowY: 'auto'
              }}
              contentEditable
            >
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
