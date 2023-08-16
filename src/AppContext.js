import { createContext, useState, useEffect } from "react";

import img1 from "../../mynewproject/src/components/imgs/blog_img/img1.png"
import img2 from "../../mynewproject/src/components/imgs/blog_img/img2.png"
import img3 from "../../mynewproject/src/components/imgs/blog_img/img3.png"
import img4 from "../../mynewproject/src/components/imgs/blog_img/img4.png"
import img5 from "../../mynewproject/src/components/imgs/blog_img/img5.png"
import img6 from "../../mynewproject/src/components/imgs/blog_img/img6.png"
import img7 from "../../mynewproject/src/components/imgs/blog_img/img7.png"
import img8 from "../../mynewproject/src/components/imgs/blog_img/goi_y_ta.png"
import img9 from "../../mynewproject/src/components/imgs/blog_img/goi_trong_vs.png"
import img10 from "../../mynewproject/src/components/imgs/blog_img/bao_khan_cap.jpg"
import img11 from "../../mynewproject/src/components/imgs/blog_img/bao_dong_do.jpg"
import img12 from "../../mynewproject/src/components/imgs/blog_img/chuong-goi-phuc-vu.png"
import img13 from "../../mynewproject/src/components/imgs/blog_img/call_stt.jpg"
import img14 from "../../mynewproject/src/components/imgs/blog_img/the_rung.jpg"
import st_100 from "../../mynewproject/src/components/imgs/st-100-w.jpg"

import avatar1 from "../../mynewproject/src/imgs/avatar/z4582627996871_279af0f29621f0f292e0e98accfc3da5.jpg"
import avatar2 from "../../mynewproject/src/imgs/avatar/z4582625498814_386caf976bab8d7d34972ffa8c33eff0.jpg.jpg"
import avatar3 from "../../mynewproject/src/imgs/avatar/z4582639731288_a072f54b90f144e304b5a61c091b3553.jpg"
import avatar4 from "../../mynewproject/src/imgs/avatar/z4582635741795_e1f4f46a3ebc24f490a43903b94e85bd.jpg"
import avatar5 from "../../mynewproject/src/imgs/avatar/z4582648734702_f203dca90f41808797a2fb36eef2fe36.jpg"
import avatar6 from "../../mynewproject/src/imgs/avatar/z4582678304336_4e0d04d1ac94bf3abc82f4f581c3f166.jpg"
import avatar7 from "../../mynewproject/src/imgs/avatar/z4582703067844_5b4c9cf1c52ce113d6083cd99c3d9f63.jpg"

const images1 = require.context('../../mynewproject/public/imgs/1', false, /\.(png|jpg|jpeg|gif)$/);
const imagePaths1 = images1.keys();
const imageArray1 = imagePaths1.map((imagePath) => images1(imagePath));


const images2 = require.context('../../mynewproject/public/imgs/2', false, /\.(png|jpg|jpeg|gif)$/);
const imagePaths2 = images2.keys();
const imageArray2 = imagePaths2.map((imagePath) => images2(imagePath));


const images3 = require.context('../../mynewproject/public/imgs/2', false, /\.(png|jpg|jpeg|gif)$/);
const imagePaths3 = images3.keys();
const imageArray3 = imagePaths3.map((imagePath) => images3(imagePath));


const images4 = require.context('../../mynewproject/public/imgs/2', false, /\.(png|jpg|jpeg|gif)$/);
const imagePaths4 = images4.keys();
const imageArray4 = imagePaths4.map((imagePath) => images4(imagePath));


const images5 = require.context('../../mynewproject/public/imgs/2', false, /\.(png|jpg|jpeg|gif)$/);
const imagePaths5 = images5.keys();
const imageArray5 = imagePaths5.map((imagePath) => images5(imagePath));


const images6 = require.context('../../mynewproject/public/imgs/2', false, /\.(png|jpg|jpeg|gif)$/);
const imagePaths6 = images6.keys();
const imageArray6 = imagePaths6.map((imagePath) => images6(imagePath));


const images7 = require.context('../../mynewproject/public/imgs/2', false, /\.(png|jpg|jpeg|gif)$/);
const imagePaths7 = images7.keys();
const imageArray7 = imagePaths7.map((imagePath) => images7(imagePath));






export const AppContext = createContext({})
export const AppProvider = ({ children }) => {
  const [show, setShow] = useState(false)
  const handle_click = () => {
    setShow(!show)
  }
  const handle_click_close = () => {
    setShow(false)
  }
  const [showcart, setShowcart] = useState(false)
  const handle_click_cart = () => {
    setShowcart(!showcart)
  }
  const handle_click_cart_close = () => {
    setShowcart(false)
  }
  const [shownav, setShownav] = useState(false)
  const handle_click_menu = () => {
    setShownav(!shownav)
  }
  const close_menu = () => {
    setShownav(false)
  }
  const [backrgoudNav, setBackrgoudNav] = useState(false)



  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrollTop > 0) {
        setBackrgoudNav(true);
      } else {
        setBackrgoudNav(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const [blog, setBlog] = useState([
    {
      id: 1,
      name_blog: 'HƯỚNG DẪN NẠP TIỀN HỆ THỐNG CẢNH BÁO DALIAN',
      short_description_blog: 'Hướng dẫn cách nạp tiền hệ thống giám sát và cảnh báo Dalian',
      description_blog: 'HƯỚNG DẪN NẠP TIỀN HỆ THỐNG CẢNH BÁO DALIAN Hướng dẫn cách nạp tiền hệ thống giám sát và cảnh báo Dalian Truy cập địa chỉ: https://console.ubibot.comvà đăng nhập bằng tài khoản đã lập Bấm chọn “Credits” từ giao diện chính như hình bên dưới Chọn thanh toán bằng thẻ Visa/MasterCard bằng cách chọn “Stripe” (số 1) Điền số tiền cần USD nạp vào mục số 2 Bấm “Top-up” để sang bước tiếp theo Điền thông tin thẻ Visa/ MasterCard để tiến hành thanh toán, làm theo các bước yêu cầu điền thông tin thẻ HƯỚNG DẪN CÁCH TẠO CẢNH BÁO BẰNG CUỘC GỌI Để tạo cảnh báo bằng cuộc gọi, chọn “Voice Call” (1) Sau đó điền số điện thoại theo định dạng +84… (2), bấm “OK” (3) để xác nhận Chi phí cuộc gọi là 0.47 USD/ cuộc gọi, bấm “OK” (4) để hoàn tất',
      img_blog: img1
    },
    {
      id: 2,
      name_blog: 'HƯỚNG DẪN DOWNLOAD BÁO CÁO GIÁM SÁT NHIỆT ĐỘ DALIAN',
      short_description_blog: 'Hướng dẫn download báo cáo phần mềm giám sát nhiệt độ Dalian trên trình duyệt Web',
      description_blog: 'Truy cập địa chỉ: http://iot.ecall.com.vn và đăng nhập bằng tài khoản đã lập Chọn “Data Warehouse” sau đó chọn thiết bị cần Download báo cáo Một cửa sổ mới mở ra, chọn “Private View” Sau đó chọn Sensor cần download báo cáo ở mục “Select sensor” Bấm chọn vào Sensor cần download báo cáo  Tiếp sau đó là chọn khoảng thời gian cần lập báo cáo. Sau đó bấm chọn cách thức xuất dữ liệu báo cáo Dowload Image: Tải dữ liệu dạng hình ảnh Preview raw data: Tải dữ liệu dạng file excel, có thể chỉnh sửa Create PDF Report: Tải dữ liệu dạng file PDF, không thể chỉnh sửa',
      img_blog: img2
    },
    {
      id: 3,
      name_blog: 'HƯỚNG DẪN SỬ DỤNG PHẦN MỀM UBIBOT CHO GS1-AETH1RS-AL',
      short_description_blog: 'HƯỚNG DẪN SỬ DỤNG PHẦN MỀM UBIBOT CHO GS1-AETH1RS-AL',
      description_blog: 'Hướng dẫn cài đặt cảnh báo và sử dụng app UbiBot Truy cập địa chỉ: http://iot.ecall.com.vnvà đăng nhập bằng tài khoản đã lập Bấm vào thiết bị muốn cài đặt, một cửa sổ mới hiện ra Cài đặt cảnh báo khi quá nhiệt độ, độ ẩm Chọn “Rules”, sau đó chọn “Create Sensor Alert” như hình phía dưới Bấm chọn “Temperature” cho cảnh báo quá nhiệt độ, giá trị cảm biến trên thiết bị chính (1)< Ví dụ chọn nhiệt độ cho phép không quá 32 độ C, sẽ bấm chọn “>” (2) và điền 32 vào mục (3) Đặt tên cho cảnh báo tại (4) Bấm chọn kiểu lặp lại cảnh báo, ví dụ chọn chỉ báo một lần (5) Bấm “Next step: select the alarm method” (6) để sang bước tiếp theo Tại cửa sổ tiếp theo, chọn hình thức nhận cảnh báo như hình dưới Cảnh báo qua email, nhập email muốn nhận cảnh báo, có thể thêm nhiều email cùng nhận cảnh báo Có thể chọn cảnh báo khi nhiệt độ đã về dải cho phép, bằng cách chọn “Recovery Notification” Để chọn đèn còi cảnh báo tại chỗ, trong mục “Command”, ví dụ muốn đèn còi tại chỗ trong 60 giây, chọn “Sound and light alert 60s” (1) Sau đó bấm “Next step…” (2) để sang bước tiếp theo Một cửa sổ hiển thị các thông tin chi tiết, để xác nhận và hoàn tất, bấm “OK” Nếu muốn lập thêm khoảng nhiệt độ hoặc độ ẩm, làm tương tự các bước ở trên. Trường hợp mở rộng dây sensor, cần cài đặt dây sensor trước khi sử dụng Chọn “Settings”, sau đó chọn “Sensor Display Settings (Beta)” Các dây mở rộng là từ field7 đến field10, để cài bấm vào “Edit” (3) Chọn kiểu sensor “DS18B20 Temperature-E1” như hình bên dưới, sau đó bấm “Save” để hoàn tất. Cài đặt cảnh báo mất điện Chọn “Rules” (1) sau đó chọn “Create USB Down Alert” (2) Đặt tên cảnh báo (1), chọn kiểu cảnh báo một lần (2), bấm (3) để sang bước tiếp theo Chọn hình thức nhận cảnh báo tương tự như ở phần hướng dẫn cảnh báo quá nhiệt độ, có thể chọn khi điện có trở lại bằng cách chọn “Recovery Notification” (1) Sau đó bấm “Next step…” và bấm “OK” để hoàn tất. Hướng dẫn đổi tên thiết bị Trong mục “Settings” chọn “Profile”, bấm “Edit” để đổi tên  Nhập tên thiết bị, bấm “OK” để hoàn tất Cài đặt thời gian lấy mẫu và cập nhật dữ liệu Trong mục “Settings” chọn “Data Management” “Data Sync Interval”: Thời gian cập nhật dữ liệu lên Cloud, mặc định là 15 phút 1 lần Temperature & Humidity”: Thời gian lấy mẫu nhiệt độ và độ ẩm, cảm biến trên thiết bị chính, mặc định là 5 phút 1 lần “External Temperature (DS18B20)”: Dây nhiệt độ mở rộng CHÚ Ý: Thời gian “Data Sync” phải chọn lớn hơn thời gian cập nhật Sensor',
      img_blog: img3
    },
    {
      id: 4,
      name_blog: 'HƯỚNG DẪN CÀI ĐẶT THIẾT BỊ CẢNH BÁO NHIỆT ĐỘ GS1-AETH1RS-AL',
      short_description_blog: 'Tổng quan thiết bị cảnh báo nhiệt độ GS1-AETH1RS-AL',
      description_blog: 'Thiết bị sử dụng pin sạc 2,900mAh, cắm nguồn DC 12V đi kèm thiết bị, trường hợp kết nối với đèn còi hú tại chỗ, cần lắp nguồn DC này Nếu chỉ sử dụng nguồn pin, thời gian sử dụng từ 3-5 ngày Cắm angten Wifi, trường hợp dùng qua dây mạng LAN, cắm dây mạng LAN vào cổng. Bật nguồn: Nhấn và giữ nút nguồn trong 3 giây cho đến khi led nhấp nháy xanh Tắt nguồn: Nhấn và giữ nút nguồn trong 3 giây Chuyển đổi độ C hoặc độ F: Nhấn nhanh nút nguồn 2 lần để chuyển đổi. Khôi phục cài đặt gốc: Tắt nguồn thiết bị, nhấn giữ đồng thời nút nguồn và nút menu khoảng 8 giây, đến khi nghe thấy thiết bị đọc “The device will now reset” ',
      img_blog: img4
    }
  ])
  const [solusions, setSolusions] = useState([
    
    {
      id: 1,
      name_slusion: 'Chuông gọi nhà máy',
      link: 'chuong-goi-nha-may',
      short_description_slusion: 'Để giải quyết và ứng phó với các sự cố nhanh chóng và hiệu quả là một giải pháp quan trọng.',
      description_slusion: 'Trong môi trường công nghiệp hoặc các cơ sở sản xuất, sự cố là điều không thể tránh khỏi. Để giải quyết và ứng phó với các sự cố nhanh chóng và hiệu quả, báo gọi máy xảy ra sự cố là một giải pháp quan trọng. Hệ thống này giúp thông báo và gọi nhân viên kỹ thuật hoặc đội ngũ xử lý sự cố một cách nhanh nhất để đảm bảo sự vận hành liền mạch của các thiết bị và quy trình sản xuất',
      img_slusion: img5,
      solusion_for: "nha may"
    },
    {
      id: 2,
      name_slusion: 'Cảnh báo nhiệt độ',
      link:'canh-bao-nhiet-do',
      short_description_slusion: 'Đảm bảo rằng các điều kiện môi trường được duy trì trong phạm vi an toàn và tối ưu.',
      description_slusion: 'Hệ thống cảnh báo nhiệt độ và độ ẩm trong phòng server và tủ bảo quản thuốc đóng vai trò quan trọng trong việc bảo vệ thiết bị và hàng hóa quan trọng. Nó giúp đảm bảo rằng các điều kiện môi trường được duy trì trong phạm vi an toàn và tối ưu, từ đó nâng cao hiệu suất và đảm bảo chất lượng của các hệ thống và sản phẩm quan trọng.',
      img_slusion: img4,
      solusion_for: "nhiet do"
    },
    {
      id: 3,
      name_slusion: 'Camera an ninh',
      link:'camera-an-ninh',
      short_description_slusion: 'Camera an ninh là một giải pháp quan trọng để đảm bảo an toàn và giám sát trong nhiều lĩnh vực.',
      description_slusion: 'Hệ thống cảnh báo nhiệt độ và độ ẩm trong phòng server và tủ bảo quản thuốc đóng vai trò quan trọng trong việc bảo vệ thiết bị và hàng hóa quan trọng. Nó giúp đảm bảo rằng các điều kiện môi trường được duy trì trong phạm vi an toàn và tối ưu, từ đó nâng cao hiệu suất và đảm bảo chất lượng của các hệ thống và sản phẩm quan trọng.',
      img_slusion: img6,
      solusion_for: "camera"
    },  
    {
      id: 4,
      name_slusion: 'Bộ đàm',
      link:'bo-dam',
      short_description_slusion: 'Rất hữu ích trong các tình huống khẩn cấp hoặc khi cần phản ứng nhanh.',
      description_slusion: 'Hệ thống cảnh báo nhiệt độ và độ ẩm trong phòng server và tủ bảo quản thuốc đóng vai trò quan trọng trong việc bảo vệ thiết bị và hàng hóa quan trọng. Nó giúp đảm bảo rằng các điều kiện môi trường được duy trì trong phạm vi an toàn và tối ưu, từ đó nâng cao hiệu suất và đảm bảo chất lượng của các hệ thống và sản phẩm quan trọng.',
      img_slusion: img7,
      solusion_for: "bo dam"
    },
    {
      id: 5,
      name_slusion: 'Chuông gọi nhân viên y tế',
      link:'chuong-goi-nhan-vien-y-te',
      short_description_slusion: 'Bệnh nhân và nhân viên y tế có thể gọi ngay lập tức nhân viên y tế khi cần đến sự hỗ trợ.',
      description_slusion: 'Hệ thống cảnh báo nhiệt độ và độ ẩm trong phòng server và tủ bảo quản thuốc đóng vai trò quan trọng trong việc bảo vệ thiết bị và hàng hóa quan trọng. Nó giúp đảm bảo rằng các điều kiện môi trường được duy trì trong phạm vi an toàn và tối ưu, từ đó nâng cao hiệu suất và đảm bảo chất lượng của các hệ thống và sản phẩm quan trọng.',
      img_slusion: img8,
      solusion_for: "benh vien"
    },
   
    {
      id: 6,
      name_slusion: 'Chuông báo trong nhà vệ sinh',
      link:'chuong-bao-trong-nha-ve-sinh',
      short_description_slusion: 'Chuông gọi y tá trong nhà vệ sinh đã trở thành một giải pháp đáng chú ý trong các cơ sở y tế.',
      description_slusion: 'Hệ thống cảnh báo nhiệt độ và độ ẩm trong phòng server và tủ bảo quản thuốc đóng vai trò quan trọng trong việc bảo vệ thiết bị và hàng hóa quan trọng. Nó giúp đảm bảo rằng các điều kiện môi trường được duy trì trong phạm vi an toàn và tối ưu, từ đó nâng cao hiệu suất và đảm bảo chất lượng của các hệ thống và sản phẩm quan trọng.',
      img_slusion: img9,
      solusion_for: "benh vien"
    },
    {
      id: 7,
      name_slusion: 'Chuông báo khẩn cấp',
      link:'chuong-bao-khan-cap',
      short_description_slusion: 'Trong những tình huống khẩn cấp, phản ứng nhanh chóng là sự phân biệt giữa sự sống và cái chết.',
      description_slusion: 'Hệ thống cảnh báo nhiệt độ và độ ẩm trong phòng server và tủ bảo quản thuốc đóng vai trò quan trọng trong việc bảo vệ thiết bị và hàng hóa quan trọng. Nó giúp đảm bảo rằng các điều kiện môi trường được duy trì trong phạm vi an toàn và tối ưu, từ đó nâng cao hiệu suất và đảm bảo chất lượng của các hệ thống và sản phẩm quan trọng.',
      img_slusion: img10,
      solusion_for: "benh vien"
    },
    {
      id: 8,
      name_slusion: 'Hệ thống báo động đỏ',
      link:'he-thong-bao-dong-do',
      short_description_slusion: 'Giải pháp để đối phó với tình huống tấn công và đảm bảo sự an toàn cho bác sĩ.',
      description_slusion: 'Hệ thống cảnh báo nhiệt độ và độ ẩm trong phòng server và tủ bảo quản thuốc đóng vai trò quan trọng trong việc bảo vệ thiết bị và hàng hóa quan trọng. Nó giúp đảm bảo rằng các điều kiện môi trường được duy trì trong phạm vi an toàn và tối ưu, từ đó nâng cao hiệu suất và đảm bảo chất lượng của các hệ thống và sản phẩm quan trọng.',
      img_slusion: img11,
      solusion_for: "benh vien"
    },
    {
      id: 9,
      name_slusion: 'Chuông gọi nhân viên phục vụ',
      link:'chuong-goi-nhan-vien-phuc-vu',
      short_description_slusion: 'Giúp khách hàng dễ dàng liên lạc và yêu cầu hỗ trợ từ nhân viên một cách nhanh chóng và thuận tiện.',
      description_slusion: 'Hệ thống cảnh báo nhiệt độ và độ ẩm trong phòng server và tủ bảo quản thuốc đóng vai trò quan trọng trong việc bảo vệ thiết bị và hàng hóa quan trọng. Nó giúp đảm bảo rằng các điều kiện môi trường được duy trì trong phạm vi an toàn và tối ưu, từ đó nâng cao hiệu suất và đảm bảo chất lượng của các hệ thống và sản phẩm quan trọng.',
      img_slusion: img12,
      solusion_for: "nha hang"
    },
    {
      id: 10,
      name_slusion: 'Hệ thống gọi số thứ tự',
      link:'he-thong-goi-so-thu-tu',
      short_description_slusion: 'Hệ thống gọi số thứ tự được sử dụng để tối ưu hóa quá trình chờ đợi và phục vụ khách hàng.',
      description_slusion: 'Hệ thống cảnh báo nhiệt độ và độ ẩm trong phòng server và tủ bảo quản thuốc đóng vai trò quan trọng trong việc bảo vệ thiết bị và hàng hóa quan trọng. Nó giúp đảm bảo rằng các điều kiện môi trường được duy trì trong phạm vi an toàn và tối ưu, từ đó nâng cao hiệu suất và đảm bảo chất lượng của các hệ thống và sản phẩm quan trọng.',
      img_slusion: img13,
      solusion_for: "nha hang"
    },
    {
      id: 11,
      name_slusion: 'Thẻ rung tự phục vụ',
      link:'the-rung-tu-phuc-vu',
      short_description_slusion: 'Khách hàng không cần phải đứng chờ đợi mà có thể tự do di chuyển trong khu vực chờ đợi.',
      description_slusion: 'Hệ thống cảnh báo nhiệt độ và độ ẩm trong phòng server và tủ bảo quản thuốc đóng vai trò quan trọng trong việc bảo vệ thiết bị và hàng hóa quan trọng. Nó giúp đảm bảo rằng các điều kiện môi trường được duy trì trong phạm vi an toàn và tối ưu, từ đó nâng cao hiệu suất và đảm bảo chất lượng của các hệ thống và sản phẩm quan trọng.',
      img_slusion: img14,
      solusion_for: "quan cf"
    },
    




  ])


  const [products, setProducts] = useState([
    {
      id: 1,
      name_cdt: 'Lala S2306',
      name: 'Phòng 2 giường',
      phone: '0979 534 866',
      price: '1,400,000',
      max_guest: 4,
      soom_space: 32,
      bed: 2,
      view: 'Sea',
      img: avatar1,
      label: 'view biển',
      type: '2 giường',
      img_rooms: imageArray1,
      description: 'Tiêu chuẩn tối đa cho 4 NL , Giá ngày thường 1.4tr / đêm Giá cuối tuần 1.8tr/ đêm ( thứ 6 và thứ 7) Giá trên ko bao gồm ăn sáng Miễn phí bể bơi và trà nước lọc trong phòng (giá phòng có thể thương lượng theo số người và số ngày ở nếu ở từ 2 đêm trở lên )',
    },
    {
      id: 2,
      name_cdt: 'Hv D0726 và D0727',
      name: 'Phòng 2 giường',
      phone: '0932 208 255',
      price: '1,400,000',
      max_guest: 4,
      soom_space: 32,
      bed: 2,
      view: 'Sea',
      img: avatar2,
      label: 'view biển',
      type: '2 giường',
      img_rooms: imageArray2,
      description: 'Tiêu chuẩn tối đa cho 4 NL , Giá ngày thường 1.4tr / đêm Giá cuối tuần 1.8tr/ đêm ( thứ 6 và thứ 7) Giá trên ko bao gồm ăn sáng Miễn phí bể bơi và trà nước lọc trong phòng (giá phòng có thể thương lượng theo số người và số ngày ở nếu ở từ 2 đêm trở lên )',
    },
    {
      id: 3,
      name_cdt: 'Huyen Shopmeou M1222 ',
      name: 'Phòng 1 giường',
      phone: '0906 303 486',
      price: '1,200,000', 
      max_guest: 3,
      soom_space: 28,
      bed: 1,
      view: 'Sea',
      img: avatar3,
      label: 'view biển',
      type: '1 giường',
      img_rooms: imageArray3,
      description: '1 ghế sofa - view biển và nội khu',
    },
    {
      id: 4,
      name_cdt: 'Huyen Shopmeou M1222 ',
      name: 'Phòng 1 giường',
      phone: '0778 033 799',
      price: '1,200,000', 
      max_guest: 3,
      soom_space: 28,
      bed: 1,
      view: 'Sea',
      img: avatar4,
      label: 'view biển',
      type: '1 giường',
      img_rooms: imageArray4,
      description: '1 ghế sofa - view biển và nội khu',
    },
    {
      id: 5,
      name_cdt: 'Thân Thương M21.18',
      name: 'Phòng 1 giường',
      phone: '0908 199 200',
      price: '1,200,000',
      max_guest: 3,
      soom_space: 28,
      bed: 1,
      view: 'Sea',
      img: avatar5,
      label: 'view biển',
      type: '1 giường',
      img_rooms: imageArray5,
      description: 'Nội thất chủ đầu tư',
    },
    {
      id: 6,
      name_cdt: 'Tran Ngoc Tuyet M0202 và M0203',
      name: 'Phòng 2 giường',
      phone: '0908 645 078',
      price: '1,400,000',
      max_guest: 4,
      soom_space: 32,
      bed: 2,
      view: 'Sea',
      img: avatar6,
      label: 'view biển',
      type: '2 giường',
      img_rooms: imageArray6,
      description: 'Có thể ghép lại thành 1 giường 2.4m. Nội thất của chủ đầu tư ',
    },
    {
      id: 7,
      name_cdt: 'Dinhnga S1604',
      name: 'Phòng 2 giường',
      phone: '0986 674 660',
      price: '1,400,000',
      max_guest: 4,
      soom_space: 32,
      bed: 2,
      view: 'Sea',
      img: avatar7,
      label: 'view biển',
      type: '2 giường',
      img_rooms: imageArray7,
      description: 'Tiêu chuẩn tối đa cho 4 NL , Giá ngày thường 1.4tr / đêm Giá cuối tuần 1.8tr/ đêm ( thứ 6 và thứ 7) Giá trên ko bao gồm ăn sáng Miễn phí bể bơi và trà nước lọc trong phòng (giá phòng có thể thương lượng theo số người và số ngày ở nếu ở từ 2 đêm trở lên )',
    },
  ])

  useEffect(() => {
    if (localStorage.getItem('cart_list')) {
      setCart(JSON.parse(localStorage.getItem('cart_list')))
    }
  }, [])



  const [cart, setCart] = useState([])
  const addCart = (id) => {
    const kq = products.find((item) => item.id == id)
    const index = cart.findIndex((item) => item.id == id)
    if (index >= 0) {
      const newlist = cart;
      newlist[index]["qty"]++
      setCart(newlist)
      localStorage.setItem('cart_list', JSON.stringify(newlist))
    }
    else {
      setCart([...cart, { ...kq, qty: "1" }])
      localStorage.setItem('cart_list', JSON.stringify([...cart, { ...kq, qty: "1" }]))
    }
  }
  const delete1 = (id) => {
    const kq = cart.filter((item) => item.id !== id)
    setCart(kq)
    localStorage.setItem('cart_list', JSON.stringify(kq))
  }
  const changqty = (id, num) => {
    const kq = cart.map((item) => item.id == id && !(num == -1 && item["qty"] == 1) ? { ...item, qty: item["qty"] * 1 + num }
      // && !(item[]
      : item
    );
    setCart(kq)
    localStorage.setItem('cart_list', JSON.stringify(kq))
  };
  const quanlity = (cart.length)
  

  // const [searchText, setSearchText] = useState('');

  // const handleSearchChange = (event) => {
  //   setSearchText(event.target.value);
  // };

  // const handleSearchSubmit = (event) => {
  //   event.preventDefault();
  //   onSearch(searchText);
  // };



  return (
    <AppContext.Provider value={{
      handle_click, handle_click_close, show, setShow, handle_click_cart, handle_click_cart_close, showcart, setShowcart, handle_click_menu, close_menu, shownav, setShownav
      , backrgoudNav, setBackrgoudNav, products, goToTop, showTopBtn, setShowTopBtn, blog, setBlog, addCart, cart, setCart, quanlity, changqty, delete1
      ,solusions
    }}>
      {children}
    </AppContext.Provider>
  )

}