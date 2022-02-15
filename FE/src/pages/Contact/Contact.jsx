import React from 'react'
import MemberCard from '../../components/memberCard/MemberCard'
import './contact.scss'
import member1 from '../../images/member1.jpg'
import member2 from '../../images/member2.jpg'
import member3 from "../../images/member3.jpg";
import member4 from "../../images/member4.jpg";
const memberList = [
  {
    avt: member1,
    name: "Lâm Tường",
    khoa: "Khoa học máy tính",
    ID: "2012392",
    role: "Full Stack",
    fbURL: "https://www.facebook.com/tuonglam.no/",
    gitURL: "https://github.com/tuonghoccode",
    instagramURL: "https://www.instagram.com/tuong.lam1607/",
    twitterURL: "#",
    color:"success"
  },
  {
    avt: member4,
    name: "Sâm Tường",
    khoa: "Kỹ thuật máy tính",
    ID: "2015007",
    role: "Full Stack",
    fbURL: "https://www.facebook.com/obs.tuongg",
    gitURL: "https://github.com/tuonghoccode",
    instagramURL: "https://www.instagram.com/tuong.lam1607/",
    twitterURL: "#",
    color:"error"
  },
  {
    avt: member3,
    name: "Lê Đình Luân",
    khoa: "Khoa học máy tính",
    ID: "99999",
    role: "Full Stack",
    fbURL: "https://www.facebook.com/luan.le98765",
    gitURL: "https://github.com/tuonghoccode",
    instagramURL: "https://www.instagram.com/tuong.lam1607/",
    twitterURL: "#",
    color:"secondary"
  },
  {
    avt: member2,
    name: "Huỳnh Văn Nhân",
    khoa: "Khoa học máy tính",
    ID: "99999",
    role: "Full Stack",
    fbURL: "https://www.facebook.com/N08A14",
    gitURL: "https://github.com/tuonghoccode",
    instagramURL: "https://www.instagram.com/tuong.lam1607/",
    twitterURL: "#",
    color:"primary"
  },
];
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__header">VIETFAST TEAM</div>
      <div className="contact__content">
        {memberList.map((item, key) => (
          <div className="member" key={key}>
            <MemberCard
              src={item.avt}
              name={item.name}
              khoa={item.khoa}
              ID={item.ID}
              role={item.role}
              fbURL={item.fbURL}
              instagramURL={item.instagramURL}
              gitURL={item.gitURL}
              twitterURL={item.twitterURL}
              color={item.color}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact