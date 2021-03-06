import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        login:{
            currentUser:null,
            isFetching:false,
            error:false,
            isLogin:false
        },
        register:{
            isFetching:false,
            error:false,
            success:false,
        },
        comment:{
          error:false,
          success:false
        },
        API: {
            BANNER: {
              header: [
                "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw5072fa8b/landingpage/images/banner-evn-vi.jpg",
                "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw232b796b/landingpage/images/banner-thexanh-VN.png",
              ],
              privacy:
                "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw713cee14/landingpage/images/policy.png",
              tutorial: [
                "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw0d6b934b/landingpage/images/step_1.png",
                "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw5e661c6a/landingpage/images/step_2.png",
                "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwd7f2e82a/landingpage/images/step_3.png",
              ],
              footer: [
                "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwa2ceaea9/landingpage/images/banner2_1.png",
                "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw5072fa8b/landingpage/images/banner-evn-vi.jpg",
              ],
            },
            ALL: [
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/vi_VN/dw1ba35212/ldp-all-cars/President.jpg",
                name: "PRESIDENT",
                price: "3.800.000.000 vn??",
                params: "f260104e761c83997b267621c1ff11e3",
                deposits: "100.000.000 vn??",
                type: "petrol",
                slogan: "C??NG B???N B???T PH?? M???I GI???I H???N",
                detail: {
                  text: [
                    {
                      label: "K??CH TH?????C T???NG TH???",
                      text: "D??i x R???ng x Cao\n5146 x 1987 x 1760 (mm)",
                    },
                    {
                      label: "?????NG C??",
                      text: "V8 6.2L",
                    },
                    {
                      label: "C??NG SU???T T???I ??A",
                      text: "420 Hp",
                    },
                    {
                      label: "TH???I GIAN T??NG T???C 0 - 100KM/H",
                      text: "<6.8S",
                    },
                    {
                      label: "M??-MEN XO???N C???C ?????I",
                      text: "624 Nm",
                    },
                    {
                      label: "TI??U CHU???N KH?? TH???I",
                      text: "EU 4 N1C3",
                    },
                  ],
                  img: {
                    banner:
                      "https://vinfast.otohungyen.com/wp-content/uploads/2021/04/president4-4.png",
                    main: "https://vinfast.otohungyen.com/wp-content/uploads/2021/04/president4-4.png",
                  },
                },
              },
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/vi_VN/dwde211470/ldp-all-cars/LuxSA.jpg",
                name: "LUX-SA2.0",
                price: "1.220.965.000 vn??",
                params: "6b8d7fcc6d6935e68cbb0c9463123c0a",
                deposits: "50.000.000 vn??",
                type: "petrol",
                slogan: "C??NG B???N B???T PH?? M???I GI???I H???N",
                detail: {
                  text: [
                    {
                      label: "K??CH TH?????C T???NG TH???",
                      text: "D??i x R???ng x Cao\n4940 x 1960 x 1773 (mm)",
                    },
                    {
                      label: "?????NG C??",
                      text: "2.0L",
                    },
                    {
                      label: "C??NG SU???T T???I ??A",
                      text: "228 HP",
                    },
                    {
                      label: "H???P S???",
                      text: "T??? ?????ng, 8 c???p",
                    },
                    {
                      label: "M??-MEN XO???N C???C ?????I",
                      text: "350 Nm",
                    },
                    {
                      label: "DUNG T??CH NHI??N LI???U",
                      text: "85 (L)",
                    },
                  ],
                  img: {
                    banner:
                      "https://vinfastotovn.vn/upload/news/188lux-sa-m2-white.png",
                    main: "https://vinfastotovn.vn/upload/news/188lux-sa-m2-white.png",
                  },
                },
              },
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/vi_VN/dwa202e18b/ldp-all-cars/LuxA.jpg",
                name: "LUX-A2.0",
                price: "949.435.000 vn??",
                params: "852e08d81c1fbb0662d06e45e4e24216",
                deposits: "50.000.000 vn??",
                type: "petrol",
                slogan: "C??NG B???N B???T PH?? M???I GI???I H???N",
                detail: {
                  text: [
                    {
                      label: "K??CH TH?????C T???NG TH???",
                      text: "D??i x R???ng x Cao\n4973 x 1900 x 1500 (mm)",
                    },
                    {
                      label: "?????NG C??",
                      text: "2.0L",
                    },
                    {
                      label: "C??NG SU???T T???I ??A",
                      text: "174 HP",
                    },
                    {
                      label: "H???P S???",
                      text: "T??? ?????ng, 8 c???p",
                    },
                    {
                      label: "M??-MEN XO???N C???C ?????I",
                      text: "300 Nm",
                    },
                    {
                      label: "DUNG T??CH NHI??N LI???U",
                      text: "70 (L)",
                    },
                  ],
                  img: {
                    banner:
                      "https://i.xeoto.com.vn/auto/vinfast/lux-a20/vinfast-lux-a20-phien-ban-tieu-chuan.png",
                    main: "https://i.xeoto.com.vn/auto/vinfast/lux-a20/vinfast-lux-a20-phien-ban-tieu-chuan.png",
                  },
                },
              },
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/vi_VN/dwd636d80b/ldp-all-cars/Fadil.jpg",
                name: "FADIL",
                price: "382.500.000 vn??",
                params: "10a8089a99d768720e714c4ea2d31bc1",
                deposits: "20.000.000 vn??",
                type: "petrol",
                slogan: "C??NG B???N B???T PH?? M???I GI???I H???N",
                detail: {
                  text: [
                    {
                      label: "K??CH TH?????C T???NG TH???",
                      text: "D??i x R???ng x Cao\n3676 x 1632 x 1495 (mm)",
                    },
                    {
                      label: "?????NG C??",
                      text: "1.4L",
                    },
                    {
                      label: "C??NG SU???T T???I ??A",
                      text: "98 HP",
                    },
                    {
                      label: "H???P S???",
                      text: "Bi???n thi??n v?? c???p (CVT)",
                    },
                    {
                      label: "M??-MEN XO???N C???C ?????I",
                      text: "128 Nm",
                    },
                    {
                      label: "DUNG T??CH NHI??N LI???U",
                      text: "32 (L)",
                    },
                  ],
                  img: {
                    banner:
                      "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw3ffb553c/images/Fadil/Hinh-anh-Mua-xe-VinFast-Fadil-ban-cao-cap-tra-gop-mau-trang-white.png",
                    main: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw3ffb553c/images/Fadil/Hinh-anh-Mua-xe-VinFast-Fadil-ban-cao-cap-tra-gop-mau-trang-white.png",
                  },
                },
              },
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/vi_VN/dw82fbc995/ldp-all-cars/VFe34.jpg",
                name: "VF-e34",
                price: "690.000.000 vn??",
                params: "4595e77181130d268b637271ebfc0008",
                deposits: "30.000.000 vn??",
                type: "electric",
                slogan: "C??NG B???N B???T PH?? M???I GI???I H???N",
                detail: {
                  text: [
                    {
                      label: "K??CH TH?????C",
                      text: "D??i x R???ng x Cao: \n 4.300 mm x 1.768 mm x 1.613 mm. Chi???u d??i c?? s???: 2.610,8 mm.",
                    },
                    {
                      label: "TR???NG L?????NG",
                      text: "T??? tr???ng: 1.490 Kg",
                    },
                    {
                      label: "H??? TH???NG T??I KH??",
                      text: "06 t??i kh??.",
                    },
                    {
                      label: "?????NG C??",
                      text: "C??ng su???t t???i ??a: 110 kW/147 HP. M?? men xo???n c???c ?????i: 242 Nm",
                    },
                    {
                      label: "PIN",
                      text: "Lo???i pin: Lithium-ion (NCA) chu???n IP67 \n Qu??ng ???????ng ??i ???????c sau 01 l???n s???c theo chu???n NEDC: kho???ng 285 km. Ch??? ????? s???c nhanh cho ph??p ??i ???????c kho???ng 180km sau kho???ng 18 ph??t s???c. Pin ???????c thay m???i khi kh??? n??ng ti???p nh???n s???c gi???m xu???ng d?????i 70%.",
                    },
                    {
                      label: "",
                      text: "",
                    },
                  ],
                  img: {
                    banner:
                      "https://shop.vinfastauto.com/on/demandware.static/Sites-app_vinfast_vn-Site/-/default/dwd2f27e9d/images/vfe34/Hinh-anh-dat-coc-Xe-dien-VinFast-VFe34-mau-bac-De-sat-Silver.png",
                    main: "https://shop.vinfastauto.com/on/demandware.static/Sites-app_vinfast_vn-Site/-/default/dwd2f27e9d/images/vfe34/Hinh-anh-dat-coc-Xe-dien-VinFast-VFe34-mau-bac-De-sat-Silver.png",
                  },
                },
              },
              {
                src: "https://storage.googleapis.com/vinfast-data-01/VF8_1642740322.png",
                name: "VF-8",
                price: "1.057.100.000 vn??",
                params: "8d00bf30cfab86fe316464accb573229",
                deposits: "100.000.000 vn??",
                type: "electric",
                slogan: "C??NG B???N B???T PH?? M???I GI???I H???N",
                detail: {
                  text: [
                    {
                      label: "K??CH TH?????C T???NG TH???",
                      text: "D??i x R???ng x Cao\n4.750 x 1.900 x 1.660 (mm)",
                    },
                    {
                      label: "QU??NG ???????NG CH???Y M???T L???N S???C",
                      text: "2 phi??n b???n pin: 460 Km v?? 510 Km (M???c ti??u d??? ki???n)",
                    },
                    {
                      label: "C??NG SU???T T???I ??A",
                      text: "300 kW - 402 hp",
                    },
                    {
                      label: "TH???I GIAN T??NG T???C 0 - 100KM/H",
                      text: "<5,5S",
                    },
                    {
                      label: "M??-MEN XO???N C???C ?????I",
                      text: "640 Nm",
                    },
                    {
                      label: "H??? TH???NG T??I KH??",
                      text: "11 t??i kh??",
                    },
                  ],
                  img: {
                    banner:
                      "https://vinfasthaiphong3s.com.vn/sites/default/files/vfe8_1.png",
                    main: "https://vinfasthaiphong3s.com.vn/sites/default/files/vfe8_1.png",
                  },
                },
              },
              {
                src: "https://storage.googleapis.com/vinfast-data-01/VF9_1642740346.png",
                name: "VF-9",
                price: "1.443.200.000 vn??",
                params: "3124431a125856aa8da3c56914b6f416",
                deposits: "100.000.000 vn??",
                type: "electric",
                slogan: "C??NG B???N B???T PH?? M???I GI???I H???N",
                detail: {
                  text: [
                    {
                      label: "K??CH TH?????C T???NG TH???",
                      text: "D??i x R???ng x Cao\n5.120 x 2.000 x 1.721 (mm)",
                    },
                    {
                      label: "QU??NG ???????NG CH???Y M???T L???N S???C",
                      text: "2 phi??n b???n pin: 485 km v?? 680 km (M???c ti??u d??? ki???n)",
                    },
                    {
                      label: "C??NG SU???T T???I ??A",
                      text: "300 kW - 402 hp",
                    },
                    {
                      label: "TH???I GIAN T??NG T???C 0 - 100KM/H",
                      text: "<6,5S",
                    },
                    {
                      label: "M??-MEN XO???N C???C ?????I",
                      text: "640 Nm",
                    },
                    {
                      label: "H??? TH???NG T??I KH??",
                      text: "11 t??i kh??",
                    },
                  ],
                  img: {
                    banner:
                      "https://vinfasthaiphong3s.com.vn/sites/default/files/styles/800_x_600/public/vf9_newx.png?itok=MD9fkx8K",
                    main: "https://vinfasthaiphong3s.com.vn/sites/default/files/styles/800_x_600/public/vf9_newx.png?itok=MD9fkx8K",
                  },
                },
              },
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwffab4abd/landingpage/images/bike-tempest.jpg",
                name: "TEMPEST",
                params: "0dad95c3f89c96b58d8d34d23d75136f",
                price: "19.250.000 vn??",
                type: "e-bike",
                slogan: "T???A KH?? CH???T - H??T ??NH NH??N",
                detail: {
                  text: [
                    {
                      label: "THI???T K???",
                      text: "Ph?? c??ch - Tr??? trung \n Th???i th?????ng - N??ng ?????ng",
                    },
                    {
                      label: "?????NG C??",
                      text: "C??ng su???t l???n nh???t 1600 W, ?????ng c?? ch???ng n?????c cao c???p",
                    },
                    {
                      label: "QU??NG ???????NG",
                      text: "L??n t???i 80 km trong 01 l???n s???c",
                    },
                    {
                      label: "AN TO??N",
                      text: "H??? th???ng khung g???m ti??u chu???n Ch??u ??u, h??? th???ng ????n LED chi???u s??ng m???nh m???",
                    },
                    {
                      label: "V???N T???C",
                      text: "T???c ????? t???i ??a l??n t???i 49 km/h",
                    },
                    {
                      label: "C???P XE",
                      text: "Th??? t??ch r???ng t???i 15L",
                    },
                  ],
                  img: {
                    banner:
                      "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw45b22704/images/tempest/tempest-10.png",
                    main: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw398dd1ef/images/tempest/tempest-1.png",
                  },
                },
              },
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwf1b9024a/landingpage/images/bike-feliz.jpg",
                name: "FELIZ",
                params: "a2eea0d38e433c288b4fab47862c574c",
                price: "24.900.000 vn??",
                type: "bike",
                slogan: "S???NG XANH THANH L???CH",
                detail: {
                  text: [
                    {
                      label: "V???N H??NH",
                      text: "Hai ch??? ????? l??i Eco v?? Sport linh ho???t tr??n m???i ?????a h??nh, t???c ????? t???i ??a 60km/h.",
                    },
                    {
                      label: "HI???U SU???T",
                      text: "?????ng c?? ??i???n, c??ng su???t 1200W.",
                    },
                    {
                      label: "THI???T K???",
                      text: "Khung xe ch???u l???c theo ti??u chu???n Ch??u ??u. G???m xe cao tho??ng 145 mm. H??? th???ng ????n full LED v?? ????n pha Projector ti??u chu???n ECE Ch??u ??u.",
                    },
                    {
                      label: "CH???NG N?????C",
                      text: "Ti??u chu???n ch???ng n?????c IP67 ho???t ?????ng ???n ?????nh ngay c??? khi ng???p n?????c 0,5m trong 30 Ph??t.",
                    },
                    {
                      label: "AN TO??N",
                      text: "H??? th???ng phanh an to??n Hengtong. H??? th???ng gi???m x??c Kaifa ??m ??i.",
                    },
                    {
                      label: "???C QUY",
                      text: "Dung l?????ng 22Ah, cho qu??ng ???????ng l??n t???i 90km ch??? v???i 1 l???n s???c.",
                    },
                  ],
                  img: {
                    banner:
                      "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw99445204/images/feliz/img_feliz1.png",
                    main: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwa91a26b0/images/feliz/RET.png",
                  },
                },
              },
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw5a4c2de7/landingpage/images/klaras.png",
                name: "KLARA S - Xanh l???c",
                params: "27cd252a8e5cd53f76aec0e5ba8af043",
                price: "39.900.000 vn??",
                type: "bike",
                slogan: "Tinh hoa thi???t k??? ??",
                detail: {
                  text: [
                    {
                      label: "V???N H??NH",
                      text: "Hai ch??? ????? l??i Eco v?? Sport linh ho???t tr??n m???i ?????a h??nh, t???c ????? t???i ??a 60km/h.",
                    },
                    {
                      label: "HI???U SU???T",
                      text: "?????ng c?? ??i???n, c??ng su???t 1200W.",
                    },
                    {
                      label: "THI???T K???",
                      text: "Khung xe ch???u l???c theo ti??u chu???n Ch??u ??u. G???m xe cao tho??ng 145 mm. H??? th???ng ????n full LED v?? ????n pha Projector ti??u chu???n ECE Ch??u ??u.",
                    },
                    {
                      label: "CH???NG N?????C",
                      text: "Ti??u chu???n ch???ng n?????c IP67 ho???t ?????ng ???n ?????nh ngay c??? khi ng???p n?????c 0,5m trong 30 Ph??t.",
                    },
                    {
                      label: "AN TO??N",
                      text: "H??? th???ng phanh an to??n Hengtong. H??? th???ng gi???m x??c Kaifa ??m ??i.",
                    },
                    {
                      label: "???C QUY",
                      text: "Dung l?????ng 22Ah, cho qu??ng ???????ng l??n t???i 90km ch??? v???i 1 l???n s???c.",
                    },
                  ],
                  img: {
                    banner:
                      "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwf15ab7b5/images/kara/GNR.png",
                    main: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwf15ab7b5/images/kara/GNR.png",
                  },
                },
              },
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw0c093e39/landingpage/images/feliz.png",
                name: "FELIZ - ?????",
                params: "d7c450a6d2d3145bc687c7527e1bca47",
                price: "24.900.000 vn??",
                type: "bike",
                slogan: "S???NG XANH THANH L???CH",
                detail: {
                  text: [
                    {
                      label: "THI???T K???",
                      text: "C???m h???ng t??? nh???ng vi??n kim c????ng l???p l??nh, thi???t k??? Klara A2 mang n??t th???i th?????ng, tinh t??? v?? sang tr???ng.",
                    },
                    {
                      label: "?????NG C??",
                      text: "?????ng c?? do VinFast nghi??n c???u v?? ph??t tri???n, m???nh m??? b???n b??? v?? th??n thi???n v???i m??i tr?????ng.",
                    },
                    {
                      label: "T???C ?????",
                      text: "T???c ????? t???i ??a l??n t???i 60km/h.",
                    },
                    {
                      label: "QU??NG ???????NG",
                      text: "Chinh ph???c qu??ng ???????ng l??n t???i 90 km ch??? v???i m???t l???n s???c.",
                    },
                    {
                      label: "AN TO??N",
                      text: "Ti??u chu???n ch???ng n?????c IP67. ?????ng c?? c?? kh??? n??ng ch???ng n?????c v?????t tr???i ??? m???c n?????c ng???p s??u 0,5m trong th???i gian 30 ph??t.",
                    },
                    {
                      label: "TI???N ??CH",
                      text: "Th??? t??ch c???p xe r???ng t???i 20 l??t.",
                    },
                  ],
                  img: {
                    banner:
                      "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw99445204/images/feliz/img_feliz1.png",
                    main: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwa91a26b0/images/feliz/RET.png",
                  },
                },
              },
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw4e54f98c/landingpage/images/bike-klara-a2.jpg",
                name: "KLARA A2 - 2021",
                params: "f4b6854c76fbc79c2528dabbf7c4a495",
                price: "26.900.000 vn??",
                type: "bike",
                slogan: "S???NG XANH THANH L???CH",
                detail: {
                  text: [
                    {
                      label: "THI???T K???",
                      text: "C???m h???ng t??? nh???ng vi??n kim c????ng l???p l??nh, thi???t k??? Klara A2 mang n??t th???i th?????ng, tinh t??? v?? sang tr???ng.",
                    },
                    {
                      label: "?????NG C??",
                      text: "?????ng c?? do VinFast nghi??n c???u v?? ph??t tri???n, m???nh m??? b???n b??? v?? th??n thi???n v???i m??i tr?????ng.",
                    },
                    {
                      label: "T???C ?????",
                      text: "T???c ????? t???i ??a l??n t???i 60km/h.",
                    },
                    {
                      label: "QU??NG ???????NG",
                      text: "Chinh ph???c qu??ng ???????ng l??n t???i 90 km ch??? v???i m???t l???n s???c.",
                    },
                    {
                      label: "AN TO??N",
                      text: "Ti??u chu???n ch???ng n?????c IP67. ?????ng c?? c?? kh??? n??ng ch???ng n?????c v?????t tr???i ??? m???c n?????c ng???p s??u 0,5m trong th???i gian 30 ph??t.",
                    },
                    {
                      label: "TI???N ??CH",
                      text: "Th??? t??ch c???p xe r???ng t???i 20 l??t.",
                    },
                  ],
                  img: {
                    banner:
                      "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw4c5d0ae8/images/klara-a2/klara-a21.png",
                    main: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw2fbd28c0/images/klara-a2/BUT.png",
                  },
                },
              },
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw08b4188d/landingpage/images/impres-blue.jpg",
                name: "IMPES - Xanh ?????m",
                params: "cea53ab6862e5e16f1f75aa32fe8507c",
                price: "14.900.000 vn??",
                type: "e-bike",
                slogan: "T???A KH?? CH???T - H??T ??NH NH??N",
                detail: {
                  text: [
                    {
                      label: "THI???T K???",
                      text: "Ph?? c??ch - Tr??? trung \n Th???i th?????ng - N??ng ?????ng",
                    },
                    {
                      label: "?????NG C??",
                      text: "C??ng su???t l???n nh???t 1600 W, ?????ng c?? ch???ng n?????c cao c???p",
                    },
                    {
                      label: "QU??NG ???????NG",
                      text: "L??n t???i 80 km trong 01 l???n s???c",
                    },
                    {
                      label: "AN TO??N",
                      text: "H??? th???ng khung g???m ti??u chu???n Ch??u ??u, h??? th???ng ????n LED chi???u s??ng m???nh m???",
                    },
                    {
                      label: "V???N T???C",
                      text: "T???c ????? t???i ??a l??n t???i 49 km/h",
                    },
                    {
                      label: "C???P XE",
                      text: "Th??? t??ch r???ng t???i 15L",
                    },
                  ],
                  img: {
                    banner:
                      "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw232b56b6/images/impes/BUR.png",
                    main: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw232b56b6/images/impes/BUR.png",
                  },
                },
              },
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw0ee797ca/landingpage/images/impes-red.jpg",
                name: "IMPES - ?????",
                params: "196c6ef8cdb4e601aa9b84ef24133c40",
                price: "14.900.000 vn??",
                type: "e-bike",
                slogan: "T???A KH?? CH???T - H??T ??NH NH??N",
                detail: {
                  text: [
                    {
                      label: "THI???T K???",
                      text: "Ph?? c??ch - Tr??? trung \n Th???i th?????ng - N??ng ?????ng",
                    },
                    {
                      label: "?????NG C??",
                      text: "C??ng su???t l???n nh???t 1600 W, ?????ng c?? ch???ng n?????c cao c???p",
                    },
                    {
                      label: "QU??NG ???????NG",
                      text: "L??n t???i 80 km trong 01 l???n s???c",
                    },
                    {
                      label: "AN TO??N",
                      text: "H??? th???ng khung g???m ti??u chu???n Ch??u ??u, h??? th???ng ????n LED chi???u s??ng m???nh m???",
                    },
                    {
                      label: "V???N T???C",
                      text: "T???c ????? t???i ??a l??n t???i 49 km/h",
                    },
                    {
                      label: "C???P XE",
                      text: "Th??? t??ch r???ng t???i 15L",
                    },
                  ],
                  img: {
                    banner:
                      "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwae93e65f/images/impes/RER.png",
                    main: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwae93e65f/images/impes/RER.png",
                  },
                },
              },
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw61d44852/landingpage/images/klara-s-black.jpg",
                name: "KLARA S - ??en",
                params: "1255b58f2290e702396762730506c543",
                price: "39.900.000 vn??",
                type: "bike",
                slogan: "Tinh hoa thi???t k??? ??",
                detail: {
                  text: [
                    {
                      label: "V???N H??NH",
                      text: "Hai ch??? ????? l??i Eco v?? Sport linh ho???t tr??n m???i ?????a h??nh, t???c ????? t???i ??a 60km/h.",
                    },
                    {
                      label: "HI???U SU???T",
                      text: "?????ng c?? ??i???n, c??ng su???t 1200W.",
                    },
                    {
                      label: "THI???T K???",
                      text: "Khung xe ch???u l???c theo ti??u chu???n Ch??u ??u. G???m xe cao tho??ng 145 mm. H??? th???ng ????n full LED v?? ????n pha Projector ti??u chu???n ECE Ch??u ??u.",
                    },
                    {
                      label: "CH???NG N?????C",
                      text: "Ti??u chu???n ch???ng n?????c IP67 ho???t ?????ng ???n ?????nh ngay c??? khi ng???p n?????c 0,5m trong 30 Ph??t.",
                    },
                    {
                      label: "AN TO??N",
                      text: "H??? th???ng phanh an to??n Hengtong. H??? th???ng gi???m x??c Kaifa ??m ??i.",
                    },
                    {
                      label: "???C QUY",
                      text: "Dung l?????ng 22Ah, cho qu??ng ???????ng l??n t???i 90km ch??? v???i 1 l???n s???c.",
                    },
                  ],
                  img: {
                    banner:
                      "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw617afad9/images/kara/BAR.png",
                    main: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw617afad9/images/kara/BAR.png",
                  },
                },
              },
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwc825de8a/landingpage/images/ludo-red.jpg",
                name: "LUDO - ?????",
                params: "69aedb74f49ab7a1fc6764f21fd8fd75",
                price: "12.900.000 vn??",
                type: "e-bike",
                slogan: "T???A KH?? CH???T - H??T ??NH NH??N",
                detail: {
                  text: [
                    {
                      label: "THI???T K???",
                      text: "Ph?? c??ch - Tr??? trung \n Th???i th?????ng - N??ng ?????ng",
                    },
                    {
                      label: "?????NG C??",
                      text: "C??ng su???t l???n nh???t 1600 W, ?????ng c?? ch???ng n?????c cao c???p",
                    },
                    {
                      label: "QU??NG ???????NG",
                      text: "L??n t???i 80 km trong 01 l???n s???c",
                    },
                    {
                      label: "AN TO??N",
                      text: "H??? th???ng khung g???m ti??u chu???n Ch??u ??u, h??? th???ng ????n LED chi???u s??ng m???nh m???",
                    },
                    {
                      label: "V???N T???C",
                      text: "T???c ????? t???i ??a l??n t???i 49 km/h",
                    },
                    {
                      label: "C???P XE",
                      text: "Th??? t??ch r???ng t???i 15L",
                    },
                  ],
                  img: {
                    banner:
                      "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwcef50843/images/ludo/RER.png",
                    main: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwcef50843/images/ludo/RER.png",
                  },
                },
              },
            ],
            CAR: [
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/vi_VN/dw1ba35212/ldp-all-cars/President.jpg",
                name: "PRESIDENT",
                price: "3.800.000.000 vn??",
                params: "f260104e761c83997b267621c1ff11e3",
                deposits: "100.000.000 vn??",
                type: "petrol",
                slogan: "C??NG B???N B???T PH?? M???I GI???I H???N",
                detail: {
                  text: [
                    {
                      label: "K??CH TH?????C T???NG TH???",
                      text: "D??i x R???ng x Cao\n5146 x 1987 x 1760 (mm)",
                    },
                    {
                      label: "?????NG C??",
                      text: "V8 6.2L",
                    },
                    {
                      label: "C??NG SU???T T???I ??A",
                      text: "420 Hp",
                    },
                    {
                      label: "TH???I GIAN T??NG T???C 0 - 100KM/H",
                      text: "<6.8S",
                    },
                    {
                      label: "M??-MEN XO???N C???C ?????I",
                      text: "624 Nm",
                    },
                    {
                      label: "TI??U CHU???N KH?? TH???I",
                      text: "EU 4 N1C3",
                    },
                  ],
                  img: {
                    banner:
                      "https://vinfast.otohungyen.com/wp-content/uploads/2021/04/president4-4.png",
                    main: "https://vinfast.otohungyen.com/wp-content/uploads/2021/04/president4-4.png",
                  },
                },
              },
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/vi_VN/dwde211470/ldp-all-cars/LuxSA.jpg",
                name: "LUX-SA2.0",
                price: "1.220.965.000 vn??",
                params: "6b8d7fcc6d6935e68cbb0c9463123c0a",
                deposits: "50.000.000 vn??",
                type: "petrol",
                slogan: "C??NG B???N B???T PH?? M???I GI???I H???N",
                detail: {
                  text: [
                    {
                      label: "K??CH TH?????C T???NG TH???",
                      text: "D??i x R???ng x Cao\n4940 x 1960 x 1773 (mm)",
                    },
                    {
                      label: "?????NG C??",
                      text: "2.0L",
                    },
                    {
                      label: "C??NG SU???T T???I ??A",
                      text: "228 HP",
                    },
                    {
                      label: "H???P S???",
                      text: "T??? ?????ng, 8 c???p",
                    },
                    {
                      label: "M??-MEN XO???N C???C ?????I",
                      text: "350 Nm",
                    },
                    {
                      label: "DUNG T??CH NHI??N LI???U",
                      text: "85 (L)",
                    },
                  ],
                  img: {
                    banner:
                      "https://vinfastotovn.vn/upload/news/188lux-sa-m2-white.png",
                    main: "https://vinfastotovn.vn/upload/news/188lux-sa-m2-white.png",
                  },
                },
              },
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/vi_VN/dwa202e18b/ldp-all-cars/LuxA.jpg",
                name: "LUX-A2.0",
                price: "949.435.000 vn??",
                params: "852e08d81c1fbb0662d06e45e4e24216",
                deposits: "50.000.000 vn??",
                type: "petrol",
                slogan: "C??NG B???N B???T PH?? M???I GI???I H???N",
                detail: {
                  text: [
                    {
                      label: "K??CH TH?????C T???NG TH???",
                      text: "D??i x R???ng x Cao\n4973 x 1900 x 1500 (mm)",
                    },
                    {
                      label: "?????NG C??",
                      text: "2.0L",
                    },
                    {
                      label: "C??NG SU???T T???I ??A",
                      text: "174 HP",
                    },
                    {
                      label: "H???P S???",
                      text: "T??? ?????ng, 8 c???p",
                    },
                    {
                      label: "M??-MEN XO???N C???C ?????I",
                      text: "300 Nm",
                    },
                    {
                      label: "DUNG T??CH NHI??N LI???U",
                      text: "70 (L)",
                    },
                  ],
                  img: {
                    banner:
                      "https://i.xeoto.com.vn/auto/vinfast/lux-a20/vinfast-lux-a20-phien-ban-tieu-chuan.png",
                    main: "https://i.xeoto.com.vn/auto/vinfast/lux-a20/vinfast-lux-a20-phien-ban-tieu-chuan.png",
                  },
                },
              },
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/vi_VN/dwd636d80b/ldp-all-cars/Fadil.jpg",
                name: "FADIL",
                price: "382.500.000 vn??",
                params: "10a8089a99d768720e714c4ea2d31bc1",
                deposits: "20.000.000 vn??",
                type: "petrol",
                slogan: "C??NG B???N B???T PH?? M???I GI???I H???N",
                detail: {
                  text: [
                    {
                      label: "K??CH TH?????C T???NG TH???",
                      text: "D??i x R???ng x Cao\n3676 x 1632 x 1495 (mm)",
                    },
                    {
                      label: "?????NG C??",
                      text: "1.4L",
                    },
                    {
                      label: "C??NG SU???T T???I ??A",
                      text: "98 HP",
                    },
                    {
                      label: "H???P S???",
                      text: "Bi???n thi??n v?? c???p (CVT)",
                    },
                    {
                      label: "M??-MEN XO???N C???C ?????I",
                      text: "128 Nm",
                    },
                    {
                      label: "DUNG T??CH NHI??N LI???U",
                      text: "32 (L)",
                    },
                  ],
                  img: {
                    banner:
                      "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw3ffb553c/images/Fadil/Hinh-anh-Mua-xe-VinFast-Fadil-ban-cao-cap-tra-gop-mau-trang-white.png",
                    main: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw3ffb553c/images/Fadil/Hinh-anh-Mua-xe-VinFast-Fadil-ban-cao-cap-tra-gop-mau-trang-white.png",
                  },
                },
              },
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/vi_VN/dw82fbc995/ldp-all-cars/VFe34.jpg",
                name: "VF-e34",
                price: "690.000.000 vn??",
                params: "4595e77181130d268b637271ebfc0008",
                deposits: "30.000.000 vn??",
                type: "electric",
                slogan: "C??NG B???N B???T PH?? M???I GI???I H???N",
                detail: {
                  text: [
                    {
                      label: "K??CH TH?????C",
                      text: "D??i x R???ng x Cao: \n 4.300 mm x 1.768 mm x 1.613 mm. Chi???u d??i c?? s???: 2.610,8 mm.",
                    },
                    {
                      label: "TR???NG L?????NG",
                      text: "T??? tr???ng: 1.490 Kg",
                    },
                    {
                      label: "H??? TH???NG T??I KH??",
                      text: "06 t??i kh??.",
                    },
                    {
                      label: "?????NG C??",
                      text: "C??ng su???t t???i ??a: 110 kW/147 HP. M?? men xo???n c???c ?????i: 242 Nm",
                    },
                    {
                      label: "PIN",
                      text: "Lo???i pin: Lithium-ion (NCA) chu???n IP67 \n Qu??ng ???????ng ??i ???????c sau 01 l???n s???c theo chu???n NEDC: kho???ng 285 km. Ch??? ????? s???c nhanh cho ph??p ??i ???????c kho???ng 180km sau kho???ng 18 ph??t s???c. Pin ???????c thay m???i khi kh??? n??ng ti???p nh???n s???c gi???m xu???ng d?????i 70%.",
                    },
                    {
                      label: "",
                      text: "",
                    },
                  ],
                  img: {
                    banner:
                      "https://shop.vinfastauto.com/on/demandware.static/Sites-app_vinfast_vn-Site/-/default/dwd2f27e9d/images/vfe34/Hinh-anh-dat-coc-Xe-dien-VinFast-VFe34-mau-bac-De-sat-Silver.png",
                    main: "https://shop.vinfastauto.com/on/demandware.static/Sites-app_vinfast_vn-Site/-/default/dwd2f27e9d/images/vfe34/Hinh-anh-dat-coc-Xe-dien-VinFast-VFe34-mau-bac-De-sat-Silver.png",
                  },
                },
              },
              {
                src: "https://storage.googleapis.com/vinfast-data-01/VF8_1642740322.png",
                name: "VF-8",
                price: "1.057.100.000 vn??",
                params: "8d00bf30cfab86fe316464accb573229",
                deposits: "100.000.000 vn??",
                type: "electric",
                slogan: "C??NG B???N B???T PH?? M???I GI???I H???N",
                detail: {
                  text: [
                    {
                      label: "K??CH TH?????C T???NG TH???",
                      text: "D??i x R???ng x Cao\n4.750 x 1.900 x 1.660 (mm)",
                    },
                    {
                      label: "QU??NG ???????NG CH???Y M???T L???N S???C",
                      text: "2 phi??n b???n pin: 460 Km v?? 510 Km (M???c ti??u d??? ki???n)",
                    },
                    {
                      label: "C??NG SU???T T???I ??A",
                      text: "300 kW - 402 hp",
                    },
                    {
                      label: "TH???I GIAN T??NG T???C 0 - 100KM/H",
                      text: "<5,5S",
                    },
                    {
                      label: "M??-MEN XO???N C???C ?????I",
                      text: "640 Nm",
                    },
                    {
                      label: "H??? TH???NG T??I KH??",
                      text: "11 t??i kh??",
                    },
                  ],
                  img: {
                    banner:
                      "https://vinfasthaiphong3s.com.vn/sites/default/files/vfe8_1.png",
                    main: "https://vinfasthaiphong3s.com.vn/sites/default/files/vfe8_1.png",
                  },
                },
              },
              {
                src: "https://storage.googleapis.com/vinfast-data-01/VF9_1642740346.png",
                name: "VF-9",
                price: "1.443.200.000 vn??",
                params: "3124431a125856aa8da3c56914b6f416",
                deposits: "100.000.000 vn??",
                type: "electric",
                slogan: "C??NG B???N B???T PH?? M???I GI???I H???N",
                detail: {
                  text: [
                    {
                      label: "K??CH TH?????C T???NG TH???",
                      text: "D??i x R???ng x Cao\n5.120 x 2.000 x 1.721 (mm)",
                    },
                    {
                      label: "QU??NG ???????NG CH???Y M???T L???N S???C",
                      text: "2 phi??n b???n pin: 485 km v?? 680 km (M???c ti??u d??? ki???n)",
                    },
                    {
                      label: "C??NG SU???T T???I ??A",
                      text: "300 kW - 402 hp",
                    },
                    {
                      label: "TH???I GIAN T??NG T???C 0 - 100KM/H",
                      text: "<6,5S",
                    },
                    {
                      label: "M??-MEN XO???N C???C ?????I",
                      text: "640 Nm",
                    },
                    {
                      label: "H??? TH???NG T??I KH??",
                      text: "11 t??i kh??",
                    },
                  ],
                  img: {
                    banner:
                      "https://vinfasthaiphong3s.com.vn/sites/default/files/styles/800_x_600/public/vf9_newx.png?itok=MD9fkx8K",
                    main: "https://vinfasthaiphong3s.com.vn/sites/default/files/styles/800_x_600/public/vf9_newx.png?itok=MD9fkx8K",
                  },
                },
              },
            ],
            BIKE: [
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwffab4abd/landingpage/images/bike-tempest.jpg",
                name: "TEMPEST",
                params: "0dad95c3f89c96b58d8d34d23d75136f",
                price: "19.250.000 vn??",
                type: "e-bike",
                slogan: "T???A KH?? CH???T - H??T ??NH NH??N",
                detail: {
                  text: [
                    {
                      label: "THI???T K???",
                      text: "Ph?? c??ch - Tr??? trung \n Th???i th?????ng - N??ng ?????ng",
                    },
                    {
                      label: "?????NG C??",
                      text: "C??ng su???t l???n nh???t 1600 W, ?????ng c?? ch???ng n?????c cao c???p",
                    },
                    {
                      label: "QU??NG ???????NG",
                      text: "L??n t???i 80 km trong 01 l???n s???c",
                    },
                    {
                      label: "AN TO??N",
                      text: "H??? th???ng khung g???m ti??u chu???n Ch??u ??u, h??? th???ng ????n LED chi???u s??ng m???nh m???",
                    },
                    {
                      label: "V???N T???C",
                      text: "T???c ????? t???i ??a l??n t???i 49 km/h",
                    },
                    {
                      label: "C???P XE",
                      text: "Th??? t??ch r???ng t???i 15L",
                    },
                  ],
                  img: {
                    banner:
                      "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw45b22704/images/tempest/tempest-10.png",
                    main: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw398dd1ef/images/tempest/tempest-1.png",
                  },
                },
              },
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwf1b9024a/landingpage/images/bike-feliz.jpg",
                name: "FELIZ",
                params: "a2eea0d38e433c288b4fab47862c574c",
                price: "24.900.000 vn??",
                type: "bike",
                slogan: "S???NG XANH THANH L???CH",
                detail: {
                  text: [
                    {
                      label: "V???N H??NH",
                      text: "Hai ch??? ????? l??i Eco v?? Sport linh ho???t tr??n m???i ?????a h??nh, t???c ????? t???i ??a 60km/h.",
                    },
                    {
                      label: "HI???U SU???T",
                      text: "?????ng c?? ??i???n, c??ng su???t 1200W.",
                    },
                    {
                      label: "THI???T K???",
                      text: "Khung xe ch???u l???c theo ti??u chu???n Ch??u ??u. G???m xe cao tho??ng 145 mm. H??? th???ng ????n full LED v?? ????n pha Projector ti??u chu???n ECE Ch??u ??u.",
                    },
                    {
                      label: "CH???NG N?????C",
                      text: "Ti??u chu???n ch???ng n?????c IP67 ho???t ?????ng ???n ?????nh ngay c??? khi ng???p n?????c 0,5m trong 30 Ph??t.",
                    },
                    {
                      label: "AN TO??N",
                      text: "H??? th???ng phanh an to??n Hengtong. H??? th???ng gi???m x??c Kaifa ??m ??i.",
                    },
                    {
                      label: "???C QUY",
                      text: "Dung l?????ng 22Ah, cho qu??ng ???????ng l??n t???i 90km ch??? v???i 1 l???n s???c.",
                    },
                  ],
                  img: {
                    banner:
                      "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw99445204/images/feliz/img_feliz1.png",
                    main: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwa91a26b0/images/feliz/RET.png",
                  },
                },
              },
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw5a4c2de7/landingpage/images/klaras.png",
                name: "KLARA S - Xanh l???c",
                params: "27cd252a8e5cd53f76aec0e5ba8af043",
                price: "39.900.000 vn??",
                type: "bike",
                slogan: "Tinh hoa thi???t k??? ??",
                detail: {
                  text: [
                    {
                      label: "V???N H??NH",
                      text: "Hai ch??? ????? l??i Eco v?? Sport linh ho???t tr??n m???i ?????a h??nh, t???c ????? t???i ??a 60km/h.",
                    },
                    {
                      label: "HI???U SU???T",
                      text: "?????ng c?? ??i???n, c??ng su???t 1200W.",
                    },
                    {
                      label: "THI???T K???",
                      text: "Khung xe ch???u l???c theo ti??u chu???n Ch??u ??u. G???m xe cao tho??ng 145 mm. H??? th???ng ????n full LED v?? ????n pha Projector ti??u chu???n ECE Ch??u ??u.",
                    },
                    {
                      label: "CH???NG N?????C",
                      text: "Ti??u chu???n ch???ng n?????c IP67 ho???t ?????ng ???n ?????nh ngay c??? khi ng???p n?????c 0,5m trong 30 Ph??t.",
                    },
                    {
                      label: "AN TO??N",
                      text: "H??? th???ng phanh an to??n Hengtong. H??? th???ng gi???m x??c Kaifa ??m ??i.",
                    },
                    {
                      label: "???C QUY",
                      text: "Dung l?????ng 22Ah, cho qu??ng ???????ng l??n t???i 90km ch??? v???i 1 l???n s???c.",
                    },
                  ],
                  img: {
                    banner:
                      "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwf15ab7b5/images/kara/GNR.png",
                    main: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwf15ab7b5/images/kara/GNR.png",
                  },
                },
              },
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw0c093e39/landingpage/images/feliz.png",
                name: "FELIZ - ?????",
                params: "d7c450a6d2d3145bc687c7527e1bca47",
                price: "24.900.000 vn??",
                type: "bike",
                slogan: "S???NG XANH THANH L???CH",
                detail: {
                  text: [
                    {
                      label: "THI???T K???",
                      text: "C???m h???ng t??? nh???ng vi??n kim c????ng l???p l??nh, thi???t k??? Klara A2 mang n??t th???i th?????ng, tinh t??? v?? sang tr???ng.",
                    },
                    {
                      label: "?????NG C??",
                      text: "?????ng c?? do VinFast nghi??n c???u v?? ph??t tri???n, m???nh m??? b???n b??? v?? th??n thi???n v???i m??i tr?????ng.",
                    },
                    {
                      label: "T???C ?????",
                      text: "T???c ????? t???i ??a l??n t???i 60km/h.",
                    },
                    {
                      label: "QU??NG ???????NG",
                      text: "Chinh ph???c qu??ng ???????ng l??n t???i 90 km ch??? v???i m???t l???n s???c.",
                    },
                    {
                      label: "AN TO??N",
                      text: "Ti??u chu???n ch???ng n?????c IP67. ?????ng c?? c?? kh??? n??ng ch???ng n?????c v?????t tr???i ??? m???c n?????c ng???p s??u 0,5m trong th???i gian 30 ph??t.",
                    },
                    {
                      label: "TI???N ??CH",
                      text: "Th??? t??ch c???p xe r???ng t???i 20 l??t.",
                    },
                  ],
                  img: {
                    banner:
                      "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw99445204/images/feliz/img_feliz1.png",
                    main: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwa91a26b0/images/feliz/RET.png",
                  },
                },
              },
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw4e54f98c/landingpage/images/bike-klara-a2.jpg",
                name: "KLARA A2 - 2021",
                params: "f4b6854c76fbc79c2528dabbf7c4a495",
                price: "26.900.000 vn??",
                type: "bike",
                slogan: "S???NG XANH THANH L???CH",
                detail: {
                  text: [
                    {
                      label: "THI???T K???",
                      text: "C???m h???ng t??? nh???ng vi??n kim c????ng l???p l??nh, thi???t k??? Klara A2 mang n??t th???i th?????ng, tinh t??? v?? sang tr???ng.",
                    },
                    {
                      label: "?????NG C??",
                      text: "?????ng c?? do VinFast nghi??n c???u v?? ph??t tri???n, m???nh m??? b???n b??? v?? th??n thi???n v???i m??i tr?????ng.",
                    },
                    {
                      label: "T???C ?????",
                      text: "T???c ????? t???i ??a l??n t???i 60km/h.",
                    },
                    {
                      label: "QU??NG ???????NG",
                      text: "Chinh ph???c qu??ng ???????ng l??n t???i 90 km ch??? v???i m???t l???n s???c.",
                    },
                    {
                      label: "AN TO??N",
                      text: "Ti??u chu???n ch???ng n?????c IP67. ?????ng c?? c?? kh??? n??ng ch???ng n?????c v?????t tr???i ??? m???c n?????c ng???p s??u 0,5m trong th???i gian 30 ph??t.",
                    },
                    {
                      label: "TI???N ??CH",
                      text: "Th??? t??ch c???p xe r???ng t???i 20 l??t.",
                    },
                  ],
                  img: {
                    banner:
                      "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw4c5d0ae8/images/klara-a2/klara-a21.png",
                    main: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw2fbd28c0/images/klara-a2/BUT.png",
                  },
                },
              },
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw08b4188d/landingpage/images/impres-blue.jpg",
                name: "IMPES - Xanh ?????m",
                params: "cea53ab6862e5e16f1f75aa32fe8507c",
                price: "14.900.000 vn??",
                type: "e-bike",
                slogan: "T???A KH?? CH???T - H??T ??NH NH??N",
                detail: {
                  text: [
                    {
                      label: "THI???T K???",
                      text: "Ph?? c??ch - Tr??? trung \n Th???i th?????ng - N??ng ?????ng",
                    },
                    {
                      label: "?????NG C??",
                      text: "C??ng su???t l???n nh???t 1600 W, ?????ng c?? ch???ng n?????c cao c???p",
                    },
                    {
                      label: "QU??NG ???????NG",
                      text: "L??n t???i 80 km trong 01 l???n s???c",
                    },
                    {
                      label: "AN TO??N",
                      text: "H??? th???ng khung g???m ti??u chu???n Ch??u ??u, h??? th???ng ????n LED chi???u s??ng m???nh m???",
                    },
                    {
                      label: "V???N T???C",
                      text: "T???c ????? t???i ??a l??n t???i 49 km/h",
                    },
                    {
                      label: "C???P XE",
                      text: "Th??? t??ch r???ng t???i 15L",
                    },
                  ],
                  img: {
                    banner:
                      "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw232b56b6/images/impes/BUR.png",
                    main: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw232b56b6/images/impes/BUR.png",
                  },
                },
              },
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw0ee797ca/landingpage/images/impes-red.jpg",
                name: "IMPES - ?????",
                params: "196c6ef8cdb4e601aa9b84ef24133c40",
                price: "14.900.000 vn??",
                type: "e-bike",
                slogan: "T???A KH?? CH???T - H??T ??NH NH??N",
                detail: {
                  text: [
                    {
                      label: "THI???T K???",
                      text: "Ph?? c??ch - Tr??? trung \n Th???i th?????ng - N??ng ?????ng",
                    },
                    {
                      label: "?????NG C??",
                      text: "C??ng su???t l???n nh???t 1600 W, ?????ng c?? ch???ng n?????c cao c???p",
                    },
                    {
                      label: "QU??NG ???????NG",
                      text: "L??n t???i 80 km trong 01 l???n s???c",
                    },
                    {
                      label: "AN TO??N",
                      text: "H??? th???ng khung g???m ti??u chu???n Ch??u ??u, h??? th???ng ????n LED chi???u s??ng m???nh m???",
                    },
                    {
                      label: "V???N T???C",
                      text: "T???c ????? t???i ??a l??n t???i 49 km/h",
                    },
                    {
                      label: "C???P XE",
                      text: "Th??? t??ch r???ng t???i 15L",
                    },
                  ],
                  img: {
                    banner:
                      "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwae93e65f/images/impes/RER.png",
                    main: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwae93e65f/images/impes/RER.png",
                  },
                },
              },
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw61d44852/landingpage/images/klara-s-black.jpg",
                name: "KLARA S - ??en",
                params: "1255b58f2290e702396762730506c543",
                price: "39.900.000 vn??",
                type: "bike",
                slogan: "Tinh hoa thi???t k??? ??",
                detail: {
                  text: [
                    {
                      label: "V???N H??NH",
                      text: "Hai ch??? ????? l??i Eco v?? Sport linh ho???t tr??n m???i ?????a h??nh, t???c ????? t???i ??a 60km/h.",
                    },
                    {
                      label: "HI???U SU???T",
                      text: "?????ng c?? ??i???n, c??ng su???t 1200W.",
                    },
                    {
                      label: "THI???T K???",
                      text: "Khung xe ch???u l???c theo ti??u chu???n Ch??u ??u. G???m xe cao tho??ng 145 mm. H??? th???ng ????n full LED v?? ????n pha Projector ti??u chu???n ECE Ch??u ??u.",
                    },
                    {
                      label: "CH???NG N?????C",
                      text: "Ti??u chu???n ch???ng n?????c IP67 ho???t ?????ng ???n ?????nh ngay c??? khi ng???p n?????c 0,5m trong 30 Ph??t.",
                    },
                    {
                      label: "AN TO??N",
                      text: "H??? th???ng phanh an to??n Hengtong. H??? th???ng gi???m x??c Kaifa ??m ??i.",
                    },
                    {
                      label: "???C QUY",
                      text: "Dung l?????ng 22Ah, cho qu??ng ???????ng l??n t???i 90km ch??? v???i 1 l???n s???c.",
                    },
                  ],
                  img: {
                    banner:
                      "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw617afad9/images/kara/BAR.png",
                    main: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw617afad9/images/kara/BAR.png",
                  },
                },
              },
              {
                src: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwc825de8a/landingpage/images/ludo-red.jpg",
                name: "LUDO - ?????",
                params: "69aedb74f49ab7a1fc6764f21fd8fd75",
                price: "12.900.000 vn??",
                type: "e-bike",
                slogan: "T???A KH?? CH???T - H??T ??NH NH??N",
                detail: {
                  text: [
                    {
                      label: "THI???T K???",
                      text: "Ph?? c??ch - Tr??? trung \n Th???i th?????ng - N??ng ?????ng",
                    },
                    {
                      label: "?????NG C??",
                      text: "C??ng su???t l???n nh???t 1600 W, ?????ng c?? ch???ng n?????c cao c???p",
                    },
                    {
                      label: "QU??NG ???????NG",
                      text: "L??n t???i 80 km trong 01 l???n s???c",
                    },
                    {
                      label: "AN TO??N",
                      text: "H??? th???ng khung g???m ti??u chu???n Ch??u ??u, h??? th???ng ????n LED chi???u s??ng m???nh m???",
                    },
                    {
                      label: "V???N T???C",
                      text: "T???c ????? t???i ??a l??n t???i 49 km/h",
                    },
                    {
                      label: "C???P XE",
                      text: "Th??? t??ch r???ng t???i 15L",
                    },
                  ],
                  img: {
                    banner:
                      "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwcef50843/images/ludo/RER.png",
                    main: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwcef50843/images/ludo/RER.png",
                  },
                },
              },
            ],
          },
          type: "ALL",
          fuel: "",
    },
    reducers:{
        loginStart:(state)=>{
            state.login.isFetching=true
        },
        loginSuccess:(state,action)=>{
            state.login.isFetching=false;
            state.login.currentUser=action.payload;
            state.login.isLogin=true;
        },
        loginFalse:(state)=>{
            state.login.isFetching=false;
            state.login.error=true;
        },
       registerStart:(state)=>{
            state.register.isFetching=true
        },
       registerSuccess:(state)=>{
            state.register.isFetching=false;
            state.register.success=true;
        },
       registerFalse:(state)=>{
            state.register.isFetching=false;
            state.register.error=true;
            state.register.success=false;
        },
        filter:(state,action)=>{
            state.type= action.type_;
            state.fuel= action.fuel
        }
        ,logout:(state)=>{
          state.login.isLogin=false;
        },
        commentSuccess:(state)=>{
          state.comment.success=true;

        },
        commentError:(state)=>{
          state.comment.error=true;
        },
        updateAvt:(state)=>{}

    }
})

export const {loginStart,commentSuccess,commentError,logout,filter,loginSuccess,loginFalse,registerFalse,registerSuccess,registerStart,loginInit} = authSlice.actions
export default authSlice.reducer