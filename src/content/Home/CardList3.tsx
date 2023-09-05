import {
  Grid,
  Typography,
  styled,
  CardMedia
} from '@mui/material';
import React from 'react';
 
const TextTitle= styled(Typography)({
  color: "#00000",
  fontSize: "70px"
});
const TextCaption= styled(Typography)({
  color: "#00000",
  fontSize: "16px"
});

const CardMake = function({ data }){
    return (
   <>
      <Grid  container spacing={4}   justifyContent="center">
        <Grid xs={12} sm={12} md={6} item>
          <TextTitle>
          {data.title}
          </TextTitle>
          <br></br>
          <TextCaption>
            {data.caption}
          </TextCaption>
        </Grid>
        <Grid xs={12} sm={12} md={6} item >
          <CardMedia
                  component='video'
                  image={data.footage}
                  autoPlay
                  loop
                  muted
                  style={{borderRadius: '30px', marginTop: '10px'}}
              />
        </Grid>
      </Grid>
   </>
    );
};

const datas = [ 
  {
    title: "Make",
    caption: "สร้างแบบฟอร์มง่าย ๆ ไม่ต้องมีความรู้ทางด้านโปรแกรมมิ่ง หรือ IT , End User ทำเองได้ง่าย ๆ ด้วยการลากวาง และบันทึกแบบฟอร์มส่งต่อเพื่อใช้ในทีม หรือในองค์กร",
    footage: "/static/images/home/pexels_videos_2838 (1080p).mp4"
  },
  {
    title: "Share",
    caption: "ส่งแบบฟอร์มให้กับผู้ใช้งานได้ง่ายด้วยการแชร์ผ่าน Line , Facebook หรือการ Generate URL Link เพื่อนำไปไว้บน Web Site ของคุณเพื่อให้ผู้ตอบสามารถเข้าถึงการกรอกข้อมูลได้แบบง่ายสุด ๆ",
    footage: "/static/images/home/production_id_4391550 (2160p).mp4"
  },
  {
    title: "Sign",
    caption: "การอนุมัติเอกสารส่งตรงถึงผู้อนุมัติ ไม่ต้องเข้าระบบให้ยุ่งยากอีกต่อไป รองรับการเซ็นต์เอกสารแบบอิเล็กทรอนิกส์ด้วย Digital Signature และยืนยันตัวตนของผู้เซ็นต์เอกสาร ด้วยระบบ OTP",
    footage: "/static/images/home/pexels-mikhail-nilov-7735496 (1080p).mp4"
  },
  {
    title: "Track",
    caption: "ติดตามการอนุมัติ และประวัติการกรอกแบบฟอร์ม ได้ง่ายมาก แม้ยังไม่มี User Name บนระบบ",
    footage: "/static/images/home/video (2160p) (1).mp4"
  }
]

let itemList=datas.map((item,index)=>{
  return  <CardMake key={index} data={item}></CardMake>
})

function CardList3() {
  return (
    <>
      <Grid container spacing={2}   justifyContent="center">
       
        <Grid xs={12} sm={12} md={12} item>
          {itemList}
        </Grid>
       
      </Grid>
    </>
  );
};

export default CardList3;
