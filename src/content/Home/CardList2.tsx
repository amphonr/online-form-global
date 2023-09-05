import {
  Card,
  Grid,
  Box,
  CardContent,
  Typography,
  styled,
  CardActions,
  Divider
} from '@mui/material';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SpeedIcon from '@mui/icons-material/Speed';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ReactCardFlip from "react-card-flip";
import React from 'react';

 

const iconCss = { fontSize: '70px', paddingTop: '20px', color: '#0081C9' };

const CardXTrusted = ({ }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        onMouseEnter={() => setIsFlipped((prev) => !prev)}>
        <CardAddAction
          sx={{
            px: 1
          }}>
          <VolunteerActivismIcon style={iconCss} />
          <CardContent  sx={{ display: { md: 'block', xs: 'none' } }}>
            <div style={{ minHeight: '100px' }} >
              <Typography variant="subtitle2">
                Digital Signature <br />
                OTP Verified <br />
                Document Encryption
              </Typography>
            </div>

          </CardContent>

          <Divider variant="middle" />

          <CardActions style={{ justifyContent: 'center' }}>
            <Box style={{color: '#223354', fontWeight: 700}} sx={{ fontSize: { md: 30, xs: 18 }}}>
              Trusted
            </Box>
          </CardActions>


        </CardAddAction>
      </div>

      <div
        onMouseLeave={() => setIsFlipped((prev) => !prev)}>
        <CardAddAction style={{ justifyContent: 'center' }}
          sx={{
            px: 1
          }}>
          <CardContent>

            <Box style={{ minHeight: '100px', color: 'rgba(34, 51, 84, 0.7)'}} sx={{ fontSize: { md: 16, xs: 8 }}}>
                เซ็นต์เอกสารด้วยลายเซ็นดิจิทัล (Digital Signature) <br />
                มีระบบยืนยันตัวตนของผู้เซ็นต์เอกสาร (OTP Verified) <br />
                ปลอดภัยด้วยการเข้ารหัสจัดเก็บเอกสาร (Document Encryption)
            </Box>
          </CardContent>
        </CardAddAction>
      </div>
    </ReactCardFlip>
  );
};

const CardXSimple = ({ }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        onMouseEnter={() => setIsFlipped((prev) => !prev)}>
        <CardAddAction
          sx={{
            px: 1
          }}>
          <SentimentSatisfiedAltIcon style={iconCss} />
          <CardContent  sx={{ display: { md: 'block', xs: 'none' } }}>

          <Box style={{ minHeight: '100px', color: 'rgba(34, 51, 84, 0.7)'}} sx={{ fontSize: { md: 16, xs: 8 }}}>
                Input Form Design <br />
                Workflow Approval <br />
                Share your input form via Line, Facebook, E-Mail, URL Link
          </Box>



          </CardContent>
          <Divider variant="middle" />
          <CardActions style={{ justifyContent: 'center' }} >
            <Box style={{color: '#223354', fontWeight: 700}} sx={{ fontSize: { md: 30, xs: 18 }}}>
              Simple
            </Box>
          </CardActions>
        </CardAddAction>
      </div>

      <div
        onMouseLeave={() => setIsFlipped((prev) => !prev)}>
        <CardAddAction style={{ justifyContent: 'center' }}
          sx={{
            px: 1
          }}>
          <CardContent>
            <Box style={{ minHeight: '100px', color: 'rgba(34, 51, 84, 0.7)'}} sx={{ fontSize: { md: 16, xs: 8 }}}>
                 สร้างแบบฟอร์ม ก็ง่าย (Input Form Design) <br />
                ส่งอนุมัติแบบออนไลน์ ก็ง่าย (Workflow Approval) <br />
                คนกรอกข้อมูล ก็ง่าย (Share your input form via Line, Facebook, E-Mail, URL Link)
             </Box>
          </CardContent>
        </CardAddAction>
      </div>
    </ReactCardFlip>
  );
};

const CardXFast = ({ }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        onMouseEnter={() => setIsFlipped((prev) => !prev)}>
        <CardAddAction
          sx={{
            px: 1
          }}>
          <SpeedIcon style={iconCss} />
          <CardContent  sx={{ display: { md: 'block', xs: 'none' } }}>

            <div style={{ minHeight: '100px' }}>
              <Typography variant="subtitle2">
                No Need for Installation <br />
                No Need for Registration <br />
                Ready to Use Template
              </Typography>
            </div>

          </CardContent>
          <Divider variant="middle" />

          <CardActions style={{ justifyContent: 'center' }}>
            <Box style={{color: '#223354', fontWeight: 700}} sx={{ fontSize: { md: 30, xs: 18 }}}>
              Fast
            </Box>
          </CardActions>
        </CardAddAction>
      </div>

      <div
        onMouseLeave={() => setIsFlipped((prev) => !prev)}>
        <CardAddAction style={{ justifyContent: 'center' }}
          sx={{
            px: 1
          }}>
          <CardContent>

            <Box style={{ minHeight: '100px', color: 'rgba(34, 51, 84, 0.7)'}} sx={{ fontSize: { md: 16, xs: 8 }}}>
                 ไม่ต้องติดตั้งระบบ ไม่ต้องลงโปรแกรม <br />(No Need for Installation)<br />
                ไม่ต้องสมัคร ก็ใช้งานได้เลย <br /> (No Need for Registration)<br />
                มี Template แบบฟอร์มพร้อมใช้งาน <br /> (Ready to Use Template)
             </Box>
          </CardContent>
        </CardAddAction>
      </div>
    </ReactCardFlip>
  );
};

const CardAddAction = styled(Card)(
  ({ theme }) => `
        min-height: 120px;
        color: ${theme.colors.primary.main};
        transition: ${theme.transitions.create(['all'])};
        background: ${theme.colors.primary.main};
        padding: ${theme.spacing(0.5)};
        border-radius: 20px;
        text-align: center; 

        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
          borderRadius: '20px;
        }
        
        .MuiTouchRipple-root {
          opacity: .2;
        }
        
        &:hover {
          border-color: ${theme.colors.alpha.black[70]};
        }
`
);

function CardList2() {
  return (
    <>
      <Grid container spacing={1} justifyContent="center">

        <Grid xs={4} sm={4} md={4} item>
          <CardXSimple></CardXSimple>
        </Grid>
        <Grid xs={4} sm={4} md={4} item>

          <CardXFast></CardXFast>
        </Grid>

        <Grid xs={4} sm={4} md={4} item>
          <CardXTrusted></CardXTrusted>
        </Grid>


      </Grid>
    </>
  );
}

export default CardList2;
