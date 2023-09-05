import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';

import PageHeader from '@/content/Home/PageHeader';
import { Box, Card, Container, Grid } from '@mui/material';
import Footer from '@/components/Footer';
import CardList2 from '@/content/Home/CardList2';
import CardList3 from '@/content/Home/CardList3';

function Home() {
  return (
    <>
      <Head>
        <title>Crypto Dashboard</title>
      </Head>
      {/* <Grid style={{ color: 'white'}}>
        <PageTitleWrapper >
          <PageHeader />
        </PageTitleWrapper>
      </Grid> */}
      <Container maxWidth="lg" style={{backgroundColor: '#FFFF'}}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
         
        >
        
          <Grid item xs={12} m={1} >
          <Box alignItems="center">
            <Card sx={{ p: 4 }}  style={{borderRadius: '30px'}}>
              <PageHeader />
            </Card>

          </Box>
            
          </Grid>
           
          <Grid item xs={12} m={1}>
          <CardList2 />
          </Grid>
          <Grid item xs={12} m={1}>
            <CardList3 />
          </Grid>
          
        </Grid>
      </Container>
     
      <Footer />
    </>
  );
}

Home.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Home;
