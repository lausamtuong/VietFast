import {createStore} from 'redux'
import rootReducer from './reducer';

const initialState = {
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
        price: "3.800.000.000 vnđ",
        params: "f260104e761c83997b267621c1ff11e3",
        deposits: "100.000.000 vnđ",
        type: "petrol",
        slogan: "CÙNG BẠN BỨT PHÁ MỌI GIỚI HẠN",
        detail: {
          text: [
            {
              label: "KÍCH THƯỚC TỔNG THỂ",
              text: "Dài x Rộng x Cao\n5146 x 1987 x 1760 (mm)",
            },
            {
              label: "ĐỘNG CƠ",
              text: "V8 6.2L",
            },
            {
              label: "CÔNG SUẤT TỐI ĐA",
              text: "420 Hp",
            },
            {
              label: "THỜI GIAN TĂNG TỐC 0 - 100KM/H",
              text: "<6.8S",
            },
            {
              label: "MÔ-MEN XOẮN CỰC ĐẠI",
              text: "624 Nm",
            },
            {
              label: "TIÊU CHUẨN KHÍ THẢI",
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
        price: "1.220.965.000 vnđ",
        params: "6b8d7fcc6d6935e68cbb0c9463123c0a",
        deposits: "50.000.000 vnđ",
        type: "petrol",
        slogan: "CÙNG BẠN BỨT PHÁ MỌI GIỚI HẠN",
        detail: {
          text: [
            {
              label: "KÍCH THƯỚC TỔNG THỂ",
              text: "Dài x Rộng x Cao\n4940 x 1960 x 1773 (mm)",
            },
            {
              label: "ĐỘNG CƠ",
              text: "2.0L",
            },
            {
              label: "CÔNG SUẤT TỐI ĐA",
              text: "228 HP",
            },
            {
              label: "HỘP SỐ",
              text: "Tự động, 8 cấp",
            },
            {
              label: "MÔ-MEN XOẮN CỰC ĐẠI",
              text: "350 Nm",
            },
            {
              label: "DUNG TÍCH NHIÊN LIỆU",
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
        price: "949.435.000 vnđ",
        params: "852e08d81c1fbb0662d06e45e4e24216",
        deposits: "50.000.000 vnđ",
        type: "petrol",
        slogan: "CÙNG BẠN BỨT PHÁ MỌI GIỚI HẠN",
        detail: {
          text: [
            {
              label: "KÍCH THƯỚC TỔNG THỂ",
              text: "Dài x Rộng x Cao\n4973 x 1900 x 1500 (mm)",
            },
            {
              label: "ĐỘNG CƠ",
              text: "2.0L",
            },
            {
              label: "CÔNG SUẤT TỐI ĐA",
              text: "174 HP",
            },
            {
              label: "HỘP SỐ",
              text: "Tự động, 8 cấp",
            },
            {
              label: "MÔ-MEN XOẮN CỰC ĐẠI",
              text: "300 Nm",
            },
            {
              label: "DUNG TÍCH NHIÊN LIỆU",
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
        price: "382.500.000 vnđ",
        params: "10a8089a99d768720e714c4ea2d31bc1",
        deposits: "20.000.000 vnđ",
        type: "petrol",
        slogan: "CÙNG BẠN BỨT PHÁ MỌI GIỚI HẠN",
        detail: {
          text: [
            {
              label: "KÍCH THƯỚC TỔNG THỂ",
              text: "Dài x Rộng x Cao\n3676 x 1632 x 1495 (mm)",
            },
            {
              label: "ĐỘNG CƠ",
              text: "1.4L",
            },
            {
              label: "CÔNG SUẤT TỐI ĐA",
              text: "98 HP",
            },
            {
              label: "HỘP SỐ",
              text: "Biến thiên vô cấp (CVT)",
            },
            {
              label: "MÔ-MEN XOẮN CỰC ĐẠI",
              text: "128 Nm",
            },
            {
              label: "DUNG TÍCH NHIÊN LIỆU",
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
        price: "690.000.000 vnđ",
        params: "4595e77181130d268b637271ebfc0008",
        deposits: "30.000.000 vnđ",
        type: "electric",
        slogan: "CÙNG BẠN BỨT PHÁ MỌI GIỚI HẠN",
        detail: {
          text: [
            {
              label: "KÍCH THƯỚC",
              text: "Dài x Rộng x Cao: \n 4.300 mm x 1.768 mm x 1.613 mm. Chiều dài cơ sở: 2.610,8 mm.",
            },
            {
              label: "TRỌNG LƯỢNG",
              text: "Tự trọng: 1.490 Kg",
            },
            {
              label: "HỆ THỐNG TÚI KHÍ",
              text: "06 túi khí.",
            },
            {
              label: "ĐỘNG CƠ",
              text: "Công suất tối đa: 110 kW/147 HP. Mô men xoắn cực đại: 242 Nm",
            },
            {
              label: "PIN",
              text: "Loại pin: Lithium-ion (NCA) chuẩn IP67 \n Quãng đường đi được sau 01 lần sạc theo chuẩn NEDC: khoảng 285 km. Chế độ sạc nhanh cho phép đi được khoảng 180km sau khoảng 18 phút sạc. Pin được thay mới khi khả năng tiếp nhận sạc giảm xuống dưới 70%.",
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
        price: "1.057.100.000 vnđ",
        params: "8d00bf30cfab86fe316464accb573229",
        deposits: "100.000.000 vnđ",
        type: "electric",
        slogan: "CÙNG BẠN BỨT PHÁ MỌI GIỚI HẠN",
        detail: {
          text: [
            {
              label: "KÍCH THƯỚC TỔNG THỂ",
              text: "Dài x Rộng x Cao\n4.750 x 1.900 x 1.660 (mm)",
            },
            {
              label: "QUÃNG ĐƯỜNG CHẠY MỘT LẦN SẠC",
              text: "2 phiên bản pin: 460 Km và 510 Km (Mục tiêu dự kiến)",
            },
            {
              label: "CÔNG SUẤT TỐI ĐA",
              text: "300 kW - 402 hp",
            },
            {
              label: "THỜI GIAN TĂNG TỐC 0 - 100KM/H",
              text: "<5,5S",
            },
            {
              label: "MÔ-MEN XOẮN CỰC ĐẠI",
              text: "640 Nm",
            },
            {
              label: "HỆ THỐNG TÚI KHÍ",
              text: "11 túi khí",
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
        price: "1.443.200.000 vnđ",
        params: "3124431a125856aa8da3c56914b6f416",
        deposits: "100.000.000 vnđ",
        type: "electric",
        slogan: "CÙNG BẠN BỨT PHÁ MỌI GIỚI HẠN",
        detail: {
          text: [
            {
              label: "KÍCH THƯỚC TỔNG THỂ",
              text: "Dài x Rộng x Cao\n5.120 x 2.000 x 1.721 (mm)",
            },
            {
              label: "QUÃNG ĐƯỜNG CHẠY MỘT LẦN SẠC",
              text: "2 phiên bản pin: 485 km và 680 km (Mục tiêu dự kiến)",
            },
            {
              label: "CÔNG SUẤT TỐI ĐA",
              text: "300 kW - 402 hp",
            },
            {
              label: "THỜI GIAN TĂNG TỐC 0 - 100KM/H",
              text: "<6,5S",
            },
            {
              label: "MÔ-MEN XOẮN CỰC ĐẠI",
              text: "640 Nm",
            },
            {
              label: "HỆ THỐNG TÚI KHÍ",
              text: "11 túi khí",
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
        price: "19.250.000 vnđ",
        type: "e-bike",
        slogan: "TỎA KHÍ CHẤT - HÚT ÁNH NHÌN",
        detail: {
          text: [
            {
              label: "THIẾT KẾ",
              text: "Phá cách - Trẻ trung \n Thời thượng - Năng động",
            },
            {
              label: "ĐỘNG CƠ",
              text: "Công suất lớn nhất 1600 W, động cơ chống nước cao cấp",
            },
            {
              label: "QUÃNG ĐƯỜNG",
              text: "Lên tới 80 km trong 01 lần sạc",
            },
            {
              label: "AN TOÀN",
              text: "Hệ thống khung gầm tiêu chuẩn Châu Âu, hệ thống đèn LED chiếu sáng mạnh mẽ",
            },
            {
              label: "VẬN TỐC",
              text: "Tốc độ tối đa lên tới 49 km/h",
            },
            {
              label: "CỐP XE",
              text: "Thể tích rộng tới 15L",
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
        price: "24.900.000 vnđ",
        type: "bike",
        slogan: "SỐNG XANH THANH LỊCH",
        detail: {
          text: [
            {
              label: "VẬN HÀNH",
              text: "Hai chế độ lái Eco và Sport linh hoạt trên mọi địa hình, tốc độ tối đa 60km/h.",
            },
            {
              label: "HIỆU SUẤT",
              text: "Động cơ điện, công suất 1200W.",
            },
            {
              label: "THIẾT KẾ",
              text: "Khung xe chịu lực theo tiêu chuẩn Châu Âu. Gầm xe cao thoáng 145 mm. Hệ thống đèn full LED và đèn pha Projector tiêu chuẩn ECE Châu Âu.",
            },
            {
              label: "CHỐNG NƯỚC",
              text: "Tiêu chuẩn chống nước IP67 hoạt động ổn định ngay cả khi ngập nước 0,5m trong 30 Phút.",
            },
            {
              label: "AN TOÀN",
              text: "Hệ thống phanh an toàn Hengtong. Hệ thống giảm xóc Kaifa êm ái.",
            },
            {
              label: "ẮC QUY",
              text: "Dung lượng 22Ah, cho quãng đường lên tới 90km chỉ với 1 lần sạc.",
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
        name: "KLARA S - Xanh lục",
        params: "27cd252a8e5cd53f76aec0e5ba8af043",
        price: "39.900.000 vnđ",
        type: "bike",
        slogan: "Tinh hoa thiết kế Ý",
        detail: {
          text: [
            {
              label: "VẬN HÀNH",
              text: "Hai chế độ lái Eco và Sport linh hoạt trên mọi địa hình, tốc độ tối đa 60km/h.",
            },
            {
              label: "HIỆU SUẤT",
              text: "Động cơ điện, công suất 1200W.",
            },
            {
              label: "THIẾT KẾ",
              text: "Khung xe chịu lực theo tiêu chuẩn Châu Âu. Gầm xe cao thoáng 145 mm. Hệ thống đèn full LED và đèn pha Projector tiêu chuẩn ECE Châu Âu.",
            },
            {
              label: "CHỐNG NƯỚC",
              text: "Tiêu chuẩn chống nước IP67 hoạt động ổn định ngay cả khi ngập nước 0,5m trong 30 Phút.",
            },
            {
              label: "AN TOÀN",
              text: "Hệ thống phanh an toàn Hengtong. Hệ thống giảm xóc Kaifa êm ái.",
            },
            {
              label: "ẮC QUY",
              text: "Dung lượng 22Ah, cho quãng đường lên tới 90km chỉ với 1 lần sạc.",
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
        name: "FELIZ - Đỏ",
        params: "d7c450a6d2d3145bc687c7527e1bca47",
        price: "24.900.000 vnđ",
        type: "bike",
        slogan: "SỐNG XANH THANH LỊCH",
        detail: {
          text: [
            {
              label: "THIẾT KẾ",
              text: "Cảm hứng từ những viên kim cương lấp lánh, thiết kế Klara A2 mang nét thời thượng, tinh tế và sang trọng.",
            },
            {
              label: "ĐỘNG CƠ",
              text: "Động cơ do VinFast nghiên cứu và phát triển, mạnh mẽ bền bỉ và thân thiện với môi trường.",
            },
            {
              label: "TỐC ĐỘ",
              text: "Tốc độ tối đa lên tới 60km/h.",
            },
            {
              label: "QUÃNG ĐƯỜNG",
              text: "Chinh phục quãng đường lên tới 90 km chỉ với một lần sạc.",
            },
            {
              label: "AN TOÀN",
              text: "Tiêu chuẩn chống nước IP67. Động cơ có khả năng chống nước vượt trội ở mức nước ngập sâu 0,5m trong thời gian 30 phút.",
            },
            {
              label: "TIỆN ÍCH",
              text: "Thể tích cốp xe rộng tới 20 lít.",
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
        price: "26.900.000 vnđ",
        type: "bike",
        slogan: "SỐNG XANH THANH LỊCH",
        detail: {
          text: [
            {
              label: "THIẾT KẾ",
              text: "Cảm hứng từ những viên kim cương lấp lánh, thiết kế Klara A2 mang nét thời thượng, tinh tế và sang trọng.",
            },
            {
              label: "ĐỘNG CƠ",
              text: "Động cơ do VinFast nghiên cứu và phát triển, mạnh mẽ bền bỉ và thân thiện với môi trường.",
            },
            {
              label: "TỐC ĐỘ",
              text: "Tốc độ tối đa lên tới 60km/h.",
            },
            {
              label: "QUÃNG ĐƯỜNG",
              text: "Chinh phục quãng đường lên tới 90 km chỉ với một lần sạc.",
            },
            {
              label: "AN TOÀN",
              text: "Tiêu chuẩn chống nước IP67. Động cơ có khả năng chống nước vượt trội ở mức nước ngập sâu 0,5m trong thời gian 30 phút.",
            },
            {
              label: "TIỆN ÍCH",
              text: "Thể tích cốp xe rộng tới 20 lít.",
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
        name: "IMPES - Xanh đậm",
        params: "cea53ab6862e5e16f1f75aa32fe8507c",
        price: "14.900.000 vnđ",
        type: "e-bike",
        slogan: "TỎA KHÍ CHẤT - HÚT ÁNH NHÌN",
        detail: {
          text: [
            {
              label: "THIẾT KẾ",
              text: "Phá cách - Trẻ trung \n Thời thượng - Năng động",
            },
            {
              label: "ĐỘNG CƠ",
              text: "Công suất lớn nhất 1600 W, động cơ chống nước cao cấp",
            },
            {
              label: "QUÃNG ĐƯỜNG",
              text: "Lên tới 80 km trong 01 lần sạc",
            },
            {
              label: "AN TOÀN",
              text: "Hệ thống khung gầm tiêu chuẩn Châu Âu, hệ thống đèn LED chiếu sáng mạnh mẽ",
            },
            {
              label: "VẬN TỐC",
              text: "Tốc độ tối đa lên tới 49 km/h",
            },
            {
              label: "CỐP XE",
              text: "Thể tích rộng tới 15L",
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
        name: "IMPES - Đỏ",
        params: "196c6ef8cdb4e601aa9b84ef24133c40",
        price: "14.900.000 vnđ",
        type: "e-bike",
        slogan: "TỎA KHÍ CHẤT - HÚT ÁNH NHÌN",
        detail: {
          text: [
            {
              label: "THIẾT KẾ",
              text: "Phá cách - Trẻ trung \n Thời thượng - Năng động",
            },
            {
              label: "ĐỘNG CƠ",
              text: "Công suất lớn nhất 1600 W, động cơ chống nước cao cấp",
            },
            {
              label: "QUÃNG ĐƯỜNG",
              text: "Lên tới 80 km trong 01 lần sạc",
            },
            {
              label: "AN TOÀN",
              text: "Hệ thống khung gầm tiêu chuẩn Châu Âu, hệ thống đèn LED chiếu sáng mạnh mẽ",
            },
            {
              label: "VẬN TỐC",
              text: "Tốc độ tối đa lên tới 49 km/h",
            },
            {
              label: "CỐP XE",
              text: "Thể tích rộng tới 15L",
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
        name: "KLARA S - Đen",
        params: "1255b58f2290e702396762730506c543",
        price: "39.900.000 vnđ",
        type: "bike",
        slogan: "Tinh hoa thiết kế Ý",
        detail: {
          text: [
            {
              label: "VẬN HÀNH",
              text: "Hai chế độ lái Eco và Sport linh hoạt trên mọi địa hình, tốc độ tối đa 60km/h.",
            },
            {
              label: "HIỆU SUẤT",
              text: "Động cơ điện, công suất 1200W.",
            },
            {
              label: "THIẾT KẾ",
              text: "Khung xe chịu lực theo tiêu chuẩn Châu Âu. Gầm xe cao thoáng 145 mm. Hệ thống đèn full LED và đèn pha Projector tiêu chuẩn ECE Châu Âu.",
            },
            {
              label: "CHỐNG NƯỚC",
              text: "Tiêu chuẩn chống nước IP67 hoạt động ổn định ngay cả khi ngập nước 0,5m trong 30 Phút.",
            },
            {
              label: "AN TOÀN",
              text: "Hệ thống phanh an toàn Hengtong. Hệ thống giảm xóc Kaifa êm ái.",
            },
            {
              label: "ẮC QUY",
              text: "Dung lượng 22Ah, cho quãng đường lên tới 90km chỉ với 1 lần sạc.",
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
        name: "LUDO - Đỏ",
        params: "69aedb74f49ab7a1fc6764f21fd8fd75",
        price: "12.900.000 vnđ",
        type: "e-bike",
        slogan: "TỎA KHÍ CHẤT - HÚT ÁNH NHÌN",
        detail: {
          text: [
            {
              label: "THIẾT KẾ",
              text: "Phá cách - Trẻ trung \n Thời thượng - Năng động",
            },
            {
              label: "ĐỘNG CƠ",
              text: "Công suất lớn nhất 1600 W, động cơ chống nước cao cấp",
            },
            {
              label: "QUÃNG ĐƯỜNG",
              text: "Lên tới 80 km trong 01 lần sạc",
            },
            {
              label: "AN TOÀN",
              text: "Hệ thống khung gầm tiêu chuẩn Châu Âu, hệ thống đèn LED chiếu sáng mạnh mẽ",
            },
            {
              label: "VẬN TỐC",
              text: "Tốc độ tối đa lên tới 49 km/h",
            },
            {
              label: "CỐP XE",
              text: "Thể tích rộng tới 15L",
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
        price: "3.800.000.000 vnđ",
        params: "f260104e761c83997b267621c1ff11e3",
        deposits: "100.000.000 vnđ",
        type: "petrol",
        slogan: "CÙNG BẠN BỨT PHÁ MỌI GIỚI HẠN",
        detail: {
          text: [
            {
              label: "KÍCH THƯỚC TỔNG THỂ",
              text: "Dài x Rộng x Cao\n5146 x 1987 x 1760 (mm)",
            },
            {
              label: "ĐỘNG CƠ",
              text: "V8 6.2L",
            },
            {
              label: "CÔNG SUẤT TỐI ĐA",
              text: "420 Hp",
            },
            {
              label: "THỜI GIAN TĂNG TỐC 0 - 100KM/H",
              text: "<6.8S",
            },
            {
              label: "MÔ-MEN XOẮN CỰC ĐẠI",
              text: "624 Nm",
            },
            {
              label: "TIÊU CHUẨN KHÍ THẢI",
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
        price: "1.220.965.000 vnđ",
        params: "6b8d7fcc6d6935e68cbb0c9463123c0a",
        deposits: "50.000.000 vnđ",
        type: "petrol",
        slogan: "CÙNG BẠN BỨT PHÁ MỌI GIỚI HẠN",
        detail: {
          text: [
            {
              label: "KÍCH THƯỚC TỔNG THỂ",
              text: "Dài x Rộng x Cao\n4940 x 1960 x 1773 (mm)",
            },
            {
              label: "ĐỘNG CƠ",
              text: "2.0L",
            },
            {
              label: "CÔNG SUẤT TỐI ĐA",
              text: "228 HP",
            },
            {
              label: "HỘP SỐ",
              text: "Tự động, 8 cấp",
            },
            {
              label: "MÔ-MEN XOẮN CỰC ĐẠI",
              text: "350 Nm",
            },
            {
              label: "DUNG TÍCH NHIÊN LIỆU",
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
        price: "949.435.000 vnđ",
        params: "852e08d81c1fbb0662d06e45e4e24216",
        deposits: "50.000.000 vnđ",
        type: "petrol",
        slogan: "CÙNG BẠN BỨT PHÁ MỌI GIỚI HẠN",
        detail: {
          text: [
            {
              label: "KÍCH THƯỚC TỔNG THỂ",
              text: "Dài x Rộng x Cao\n4973 x 1900 x 1500 (mm)",
            },
            {
              label: "ĐỘNG CƠ",
              text: "2.0L",
            },
            {
              label: "CÔNG SUẤT TỐI ĐA",
              text: "174 HP",
            },
            {
              label: "HỘP SỐ",
              text: "Tự động, 8 cấp",
            },
            {
              label: "MÔ-MEN XOẮN CỰC ĐẠI",
              text: "300 Nm",
            },
            {
              label: "DUNG TÍCH NHIÊN LIỆU",
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
        price: "382.500.000 vnđ",
        params: "10a8089a99d768720e714c4ea2d31bc1",
        deposits: "20.000.000 vnđ",
        type: "petrol",
        slogan: "CÙNG BẠN BỨT PHÁ MỌI GIỚI HẠN",
        detail: {
          text: [
            {
              label: "KÍCH THƯỚC TỔNG THỂ",
              text: "Dài x Rộng x Cao\n3676 x 1632 x 1495 (mm)",
            },
            {
              label: "ĐỘNG CƠ",
              text: "1.4L",
            },
            {
              label: "CÔNG SUẤT TỐI ĐA",
              text: "98 HP",
            },
            {
              label: "HỘP SỐ",
              text: "Biến thiên vô cấp (CVT)",
            },
            {
              label: "MÔ-MEN XOẮN CỰC ĐẠI",
              text: "128 Nm",
            },
            {
              label: "DUNG TÍCH NHIÊN LIỆU",
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
        price: "690.000.000 vnđ",
        params: "4595e77181130d268b637271ebfc0008",
        deposits: "30.000.000 vnđ",
        type: "electric",
        slogan: "CÙNG BẠN BỨT PHÁ MỌI GIỚI HẠN",
        detail: {
          text: [
            {
              label: "KÍCH THƯỚC",
              text: "Dài x Rộng x Cao: \n 4.300 mm x 1.768 mm x 1.613 mm. Chiều dài cơ sở: 2.610,8 mm.",
            },
            {
              label: "TRỌNG LƯỢNG",
              text: "Tự trọng: 1.490 Kg",
            },
            {
              label: "HỆ THỐNG TÚI KHÍ",
              text: "06 túi khí.",
            },
            {
              label: "ĐỘNG CƠ",
              text: "Công suất tối đa: 110 kW/147 HP. Mô men xoắn cực đại: 242 Nm",
            },
            {
              label: "PIN",
              text: "Loại pin: Lithium-ion (NCA) chuẩn IP67 \n Quãng đường đi được sau 01 lần sạc theo chuẩn NEDC: khoảng 285 km. Chế độ sạc nhanh cho phép đi được khoảng 180km sau khoảng 18 phút sạc. Pin được thay mới khi khả năng tiếp nhận sạc giảm xuống dưới 70%.",
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
        price: "1.057.100.000 vnđ",
        params: "8d00bf30cfab86fe316464accb573229",
        deposits: "100.000.000 vnđ",
        type: "electric",
        slogan: "CÙNG BẠN BỨT PHÁ MỌI GIỚI HẠN",
        detail: {
          text: [
            {
              label: "KÍCH THƯỚC TỔNG THỂ",
              text: "Dài x Rộng x Cao\n4.750 x 1.900 x 1.660 (mm)",
            },
            {
              label: "QUÃNG ĐƯỜNG CHẠY MỘT LẦN SẠC",
              text: "2 phiên bản pin: 460 Km và 510 Km (Mục tiêu dự kiến)",
            },
            {
              label: "CÔNG SUẤT TỐI ĐA",
              text: "300 kW - 402 hp",
            },
            {
              label: "THỜI GIAN TĂNG TỐC 0 - 100KM/H",
              text: "<5,5S",
            },
            {
              label: "MÔ-MEN XOẮN CỰC ĐẠI",
              text: "640 Nm",
            },
            {
              label: "HỆ THỐNG TÚI KHÍ",
              text: "11 túi khí",
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
        price: "1.443.200.000 vnđ",
        params: "3124431a125856aa8da3c56914b6f416",
        deposits: "100.000.000 vnđ",
        type: "electric",
        slogan: "CÙNG BẠN BỨT PHÁ MỌI GIỚI HẠN",
        detail: {
          text: [
            {
              label: "KÍCH THƯỚC TỔNG THỂ",
              text: "Dài x Rộng x Cao\n5.120 x 2.000 x 1.721 (mm)",
            },
            {
              label: "QUÃNG ĐƯỜNG CHẠY MỘT LẦN SẠC",
              text: "2 phiên bản pin: 485 km và 680 km (Mục tiêu dự kiến)",
            },
            {
              label: "CÔNG SUẤT TỐI ĐA",
              text: "300 kW - 402 hp",
            },
            {
              label: "THỜI GIAN TĂNG TỐC 0 - 100KM/H",
              text: "<6,5S",
            },
            {
              label: "MÔ-MEN XOẮN CỰC ĐẠI",
              text: "640 Nm",
            },
            {
              label: "HỆ THỐNG TÚI KHÍ",
              text: "11 túi khí",
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
        price: "19.250.000 vnđ",
        type: "e-bike",
        slogan: "TỎA KHÍ CHẤT - HÚT ÁNH NHÌN",
        detail: {
          text: [
            {
              label: "THIẾT KẾ",
              text: "Phá cách - Trẻ trung \n Thời thượng - Năng động",
            },
            {
              label: "ĐỘNG CƠ",
              text: "Công suất lớn nhất 1600 W, động cơ chống nước cao cấp",
            },
            {
              label: "QUÃNG ĐƯỜNG",
              text: "Lên tới 80 km trong 01 lần sạc",
            },
            {
              label: "AN TOÀN",
              text: "Hệ thống khung gầm tiêu chuẩn Châu Âu, hệ thống đèn LED chiếu sáng mạnh mẽ",
            },
            {
              label: "VẬN TỐC",
              text: "Tốc độ tối đa lên tới 49 km/h",
            },
            {
              label: "CỐP XE",
              text: "Thể tích rộng tới 15L",
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
        price: "24.900.000 vnđ",
        type: "bike",
        slogan: "SỐNG XANH THANH LỊCH",
        detail: {
          text: [
            {
              label: "VẬN HÀNH",
              text: "Hai chế độ lái Eco và Sport linh hoạt trên mọi địa hình, tốc độ tối đa 60km/h.",
            },
            {
              label: "HIỆU SUẤT",
              text: "Động cơ điện, công suất 1200W.",
            },
            {
              label: "THIẾT KẾ",
              text: "Khung xe chịu lực theo tiêu chuẩn Châu Âu. Gầm xe cao thoáng 145 mm. Hệ thống đèn full LED và đèn pha Projector tiêu chuẩn ECE Châu Âu.",
            },
            {
              label: "CHỐNG NƯỚC",
              text: "Tiêu chuẩn chống nước IP67 hoạt động ổn định ngay cả khi ngập nước 0,5m trong 30 Phút.",
            },
            {
              label: "AN TOÀN",
              text: "Hệ thống phanh an toàn Hengtong. Hệ thống giảm xóc Kaifa êm ái.",
            },
            {
              label: "ẮC QUY",
              text: "Dung lượng 22Ah, cho quãng đường lên tới 90km chỉ với 1 lần sạc.",
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
        name: "KLARA S - Xanh lục",
        params: "27cd252a8e5cd53f76aec0e5ba8af043",
        price: "39.900.000 vnđ",
        type: "bike",
        slogan: "Tinh hoa thiết kế Ý",
        detail: {
          text: [
            {
              label: "VẬN HÀNH",
              text: "Hai chế độ lái Eco và Sport linh hoạt trên mọi địa hình, tốc độ tối đa 60km/h.",
            },
            {
              label: "HIỆU SUẤT",
              text: "Động cơ điện, công suất 1200W.",
            },
            {
              label: "THIẾT KẾ",
              text: "Khung xe chịu lực theo tiêu chuẩn Châu Âu. Gầm xe cao thoáng 145 mm. Hệ thống đèn full LED và đèn pha Projector tiêu chuẩn ECE Châu Âu.",
            },
            {
              label: "CHỐNG NƯỚC",
              text: "Tiêu chuẩn chống nước IP67 hoạt động ổn định ngay cả khi ngập nước 0,5m trong 30 Phút.",
            },
            {
              label: "AN TOÀN",
              text: "Hệ thống phanh an toàn Hengtong. Hệ thống giảm xóc Kaifa êm ái.",
            },
            {
              label: "ẮC QUY",
              text: "Dung lượng 22Ah, cho quãng đường lên tới 90km chỉ với 1 lần sạc.",
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
        name: "FELIZ - Đỏ",
        params: "d7c450a6d2d3145bc687c7527e1bca47",
        price: "24.900.000 vnđ",
        type: "bike",
        slogan: "SỐNG XANH THANH LỊCH",
        detail: {
          text: [
            {
              label: "THIẾT KẾ",
              text: "Cảm hứng từ những viên kim cương lấp lánh, thiết kế Klara A2 mang nét thời thượng, tinh tế và sang trọng.",
            },
            {
              label: "ĐỘNG CƠ",
              text: "Động cơ do VinFast nghiên cứu và phát triển, mạnh mẽ bền bỉ và thân thiện với môi trường.",
            },
            {
              label: "TỐC ĐỘ",
              text: "Tốc độ tối đa lên tới 60km/h.",
            },
            {
              label: "QUÃNG ĐƯỜNG",
              text: "Chinh phục quãng đường lên tới 90 km chỉ với một lần sạc.",
            },
            {
              label: "AN TOÀN",
              text: "Tiêu chuẩn chống nước IP67. Động cơ có khả năng chống nước vượt trội ở mức nước ngập sâu 0,5m trong thời gian 30 phút.",
            },
            {
              label: "TIỆN ÍCH",
              text: "Thể tích cốp xe rộng tới 20 lít.",
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
        price: "26.900.000 vnđ",
        type: "bike",
        slogan: "SỐNG XANH THANH LỊCH",
        detail: {
          text: [
            {
              label: "THIẾT KẾ",
              text: "Cảm hứng từ những viên kim cương lấp lánh, thiết kế Klara A2 mang nét thời thượng, tinh tế và sang trọng.",
            },
            {
              label: "ĐỘNG CƠ",
              text: "Động cơ do VinFast nghiên cứu và phát triển, mạnh mẽ bền bỉ và thân thiện với môi trường.",
            },
            {
              label: "TỐC ĐỘ",
              text: "Tốc độ tối đa lên tới 60km/h.",
            },
            {
              label: "QUÃNG ĐƯỜNG",
              text: "Chinh phục quãng đường lên tới 90 km chỉ với một lần sạc.",
            },
            {
              label: "AN TOÀN",
              text: "Tiêu chuẩn chống nước IP67. Động cơ có khả năng chống nước vượt trội ở mức nước ngập sâu 0,5m trong thời gian 30 phút.",
            },
            {
              label: "TIỆN ÍCH",
              text: "Thể tích cốp xe rộng tới 20 lít.",
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
        name: "IMPES - Xanh đậm",
        params: "cea53ab6862e5e16f1f75aa32fe8507c",
        price: "14.900.000 vnđ",
        type: "e-bike",
        slogan: "TỎA KHÍ CHẤT - HÚT ÁNH NHÌN",
        detail: {
          text: [
            {
              label: "THIẾT KẾ",
              text: "Phá cách - Trẻ trung \n Thời thượng - Năng động",
            },
            {
              label: "ĐỘNG CƠ",
              text: "Công suất lớn nhất 1600 W, động cơ chống nước cao cấp",
            },
            {
              label: "QUÃNG ĐƯỜNG",
              text: "Lên tới 80 km trong 01 lần sạc",
            },
            {
              label: "AN TOÀN",
              text: "Hệ thống khung gầm tiêu chuẩn Châu Âu, hệ thống đèn LED chiếu sáng mạnh mẽ",
            },
            {
              label: "VẬN TỐC",
              text: "Tốc độ tối đa lên tới 49 km/h",
            },
            {
              label: "CỐP XE",
              text: "Thể tích rộng tới 15L",
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
        name: "IMPES - Đỏ",
        params: "196c6ef8cdb4e601aa9b84ef24133c40",
        price: "14.900.000 vnđ",
        type: "e-bike",
        slogan: "TỎA KHÍ CHẤT - HÚT ÁNH NHÌN",
        detail: {
          text: [
            {
              label: "THIẾT KẾ",
              text: "Phá cách - Trẻ trung \n Thời thượng - Năng động",
            },
            {
              label: "ĐỘNG CƠ",
              text: "Công suất lớn nhất 1600 W, động cơ chống nước cao cấp",
            },
            {
              label: "QUÃNG ĐƯỜNG",
              text: "Lên tới 80 km trong 01 lần sạc",
            },
            {
              label: "AN TOÀN",
              text: "Hệ thống khung gầm tiêu chuẩn Châu Âu, hệ thống đèn LED chiếu sáng mạnh mẽ",
            },
            {
              label: "VẬN TỐC",
              text: "Tốc độ tối đa lên tới 49 km/h",
            },
            {
              label: "CỐP XE",
              text: "Thể tích rộng tới 15L",
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
        name: "KLARA S - Đen",
        params: "1255b58f2290e702396762730506c543",
        price: "39.900.000 vnđ",
        type: "bike",
        slogan: "Tinh hoa thiết kế Ý",
        detail: {
          text: [
            {
              label: "VẬN HÀNH",
              text: "Hai chế độ lái Eco và Sport linh hoạt trên mọi địa hình, tốc độ tối đa 60km/h.",
            },
            {
              label: "HIỆU SUẤT",
              text: "Động cơ điện, công suất 1200W.",
            },
            {
              label: "THIẾT KẾ",
              text: "Khung xe chịu lực theo tiêu chuẩn Châu Âu. Gầm xe cao thoáng 145 mm. Hệ thống đèn full LED và đèn pha Projector tiêu chuẩn ECE Châu Âu.",
            },
            {
              label: "CHỐNG NƯỚC",
              text: "Tiêu chuẩn chống nước IP67 hoạt động ổn định ngay cả khi ngập nước 0,5m trong 30 Phút.",
            },
            {
              label: "AN TOÀN",
              text: "Hệ thống phanh an toàn Hengtong. Hệ thống giảm xóc Kaifa êm ái.",
            },
            {
              label: "ẮC QUY",
              text: "Dung lượng 22Ah, cho quãng đường lên tới 90km chỉ với 1 lần sạc.",
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
        name: "LUDO - Đỏ",
        params: "69aedb74f49ab7a1fc6764f21fd8fd75",
        price: "12.900.000 vnđ",
        type: "e-bike",
        slogan: "TỎA KHÍ CHẤT - HÚT ÁNH NHÌN",
        detail: {
          text: [
            {
              label: "THIẾT KẾ",
              text: "Phá cách - Trẻ trung \n Thời thượng - Năng động",
            },
            {
              label: "ĐỘNG CƠ",
              text: "Công suất lớn nhất 1600 W, động cơ chống nước cao cấp",
            },
            {
              label: "QUÃNG ĐƯỜNG",
              text: "Lên tới 80 km trong 01 lần sạc",
            },
            {
              label: "AN TOÀN",
              text: "Hệ thống khung gầm tiêu chuẩn Châu Âu, hệ thống đèn LED chiếu sáng mạnh mẽ",
            },
            {
              label: "VẬN TỐC",
              text: "Tốc độ tối đa lên tới 49 km/h",
            },
            {
              label: "CỐP XE",
              text: "Thể tích rộng tới 15L",
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
};
const store = createStore(rootReducer, initialState)

export default store;