import { Grid, Box, Button, BoxProps } from '@mui/material';

function PageHeader() {


  function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          p: 1,
          m: 1,
          ...sx,
        }}
        {...other}
      />
    );
  }

  return (
<>
    <Grid container>
      <Grid container item xs={12} md={6} alignItems="center" spacing={1} >
        {/* <Grid container> */}
          <Grid item xs={12} md={12} mx={2} sx={{display: { md: 'flex', xs: 'none' }}}>
            <Box  sx={{ display: 'flex', p: 1}}  >
            <Item sx={{ order: 1}} style={{paddingTop: '50px'}}>
                <div style={{color:' #a9b8d7', fontWeight: '900'}}>
                {/* <img
              src="/static/images/home/707882.png" style={{    verticalAlign: 'text-bottom',     width: '70px', height: 'auto'}}/> */}
                  <span >Simplified • Fast • Trusted</span></div>
                    <span>
                      <b style={{color:'#071952', fontSize: '50px'}}>
                        focus
                      </b>
                      <span style={{color:'orange', fontSize: '50px', fontWeight: '800'}}>
                      O
                      </span>
                      <b style={{color:'#071952', fontSize: '50px'}}>
                      ne
                      </b>
                  </span>
                  <br/>
                  <span>
                  <b style={{color:'#071952', fontSize: '50px' }}>Online Form</b>
                  </span>
            </Item>

            {/*<Item sx={{ order: 3, paddingLeft: '30px'}}>
           
              <Card sx={{ maxWidth: 500, flexGrow: 1, height: 'auto', boxShadow: 0}}>
        
                  <CardMedia
                      component='video'
                      image={"/static/images/home/30170115.mp4"}
                      autoPlay
                      loop
                      muted
                    
                  />
                  
            </Card> 
            </Item> */}
            
            </Box>
          </Grid>

          <Grid item xs={12} md={12} mx={2} sx={{display: { md: 'none', xs: 'block' }}}>
                  <div style={{color:' #a9b8d7', fontWeight: '900'}}>Simplified • Fast • Trusted</div>
                    <span>
                      <b style={{color:'#071952', fontSize: '30px'}}>
                        focus
                      </b>
                      <span style={{color:'orange', fontSize: '30px', fontWeight: '800'}}>
                      O
                      </span>
                      <b style={{color:'#071952', fontSize: '30px'}}>
                      ne
                      </b>
                  </span>
                  <br/>
                  <span>
                  <b style={{color:'#071952', fontSize: '30px' }}>Online Form</b>
                  </span>
            
          </Grid>
          <Grid item xs={12} md={12} mx={2} sx={{display: { md: 'none', xs: 'block' }}} alignItems="center">
                
              <img
              src="/static/images/home/707882.png" style={{  verticalAlign: 'middle', textAlign:'center',    width: '200px', height: 'auto'}}/>
              
          </Grid>
          
        <Grid item xs={12}>
            <Grid container spacing={1} style={{textAlign: 'center'}}>
                <Grid sm item  sx={{md:6 , xs: 12}}>
                  <Button fullWidth variant="outlined">
                  Forever Free
                  </Button>
                </Grid>
                <Grid sm item sx={{md:6 , xs: 12}}>
                  <Button fullWidth variant="contained" style={{color: '#FFFFF'}}>
                  Get Corporate Edition
                  </Button>
                </Grid>
            </Grid>
            <div style={{color:'rgba(34, 51, 84, 0.7)'}}>Make every requests to bring your business moving fast and trustable by focus<b style={{color:'orange' }}>O</b>ne Online Form</div>
        </Grid>
        
      </Grid>
      <Grid container item xs={6} alignItems="center" spacing={1} sx={{display: { md: 'flex', xs: 'none' }}}>

      <Item sx={{ order: 3, paddingLeft: '30px'}}>
            <img
              src="/static/images/home/707882.png" style={{ verticalAlign: 'text-bottom', textAlign: 'center',    width: '400px', height: 'auto'}}/>
      </Item>
      </Grid>
    </Grid>

    </>
  );
}

export default PageHeader;
