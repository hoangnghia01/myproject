import { createContext, useState, useEffect } from "react";

import img1 from "../../myproject/src/components/imgs/blog_img/img1.png"
import img2 from "../../myproject/src/components/imgs/blog_img/img2.png"
import img3 from "../../myproject/src/components/imgs/blog_img/img3.png"
import img4 from "../../myproject/src/components/imgs/blog_img/img4.png"
import img5 from "../../myproject/src/components/imgs/blog_img/img5.png"
import img6 from "../../myproject/src/components/imgs/blog_img/img6.png"
import img7 from "../../myproject/src/components/imgs/blog_img/img7.png"
import img8 from "../../myproject/src/components/imgs/blog_img/goi_y_ta.png"
import img9 from "../../myproject/src/components/imgs/blog_img/goi_trong_vs.png"
import img10 from "../../myproject/src/components/imgs/blog_img/bao_khan_cap.jpg"
import img11 from "../../myproject/src/components/imgs/blog_img/bao_dong_do.jpg"
import img12 from "../../myproject/src/components/imgs/blog_img/chuong-goi-phuc-vu.png"
import img13 from "../../myproject/src/components/imgs/blog_img/call_stt.jpg"
import img14 from "../../myproject/src/components/imgs/blog_img/the_rung.jpg"

import st_100 from "../../myproject/src/components/imgs/st-100-w.jpg"
import st_200 from "../../myproject/src/components/imgs/st-200.jpg"
import st_300 from "../../myproject/src/components/imgs/st-300.jpg"
import st_300_2b from "../../myproject/src/components/imgs/st3002b.png"
import st_600 from "../../myproject/src/components/imgs/st600.png"
import sr_a2003 from "../../myproject/src/components/imgs/sr-2003.jpg"
import sr_a303 from "../../myproject/src/components/imgs/sra330.jpg"
import SGP_100R_10C from "../../myproject/src/components/imgs/spg-100.png"



import logo from "../../myproject/src/components/logo/logo.png"




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
      name: 'Nút chuông gọi ST-100',
      price: 10,
      product_code: 'ST100',
      img: st_100,
      label: 'new',
      type: 'Nut chuong',
      img_product: logo,
      brand: 'Syscall',
      origin: 'Korea',
      quantity: 10,
      short_description: 'Thẻ rung có kích thước nhỏ gọn nằm gọn trong một bàn tay Nhôm được áp dụng cho bộ phận sạc làm cho thiết kế của nó sang trọng hơn.Tăng dung lượng pin và chức năng sạc nhanh.',
      description: 'Trạng thái sạc có thể nhận biết được với đèn LED khác nhau (Đỏ: Đang sạc, Xanh lam: Đã hoàn thành)Sạc dễ dàng theo mọi hướng mà không cần phân biệt tới lui trên SGP-100R.Dễ dàng vệ sinh ổ cắm sạc với vỏ sau có thể tháo rời bằng nam châm. Đệm chống trượt ở phía dưới giúp cố định và di chuyển sản phẩm dễ dàng.',


    },

    {
      id: 2,
      name: 'Nút chuông gọi ST-200',
      price: 10,
      type: 'Nut chuong',
      img: st_200,
      label: 'new',
      img_product: logo,
      brand: 'Syscall',
      origin: 'Korea',
      product_code: 'ST200',
      quantity: 10,
      short_description: 'Thẻ rung có kích thước nhỏ gọn nằm gọn trong một bàn tay Nhôm được áp dụng cho bộ phận sạc làm cho thiết kế của nó sang trọng hơn.Tăng dung lượng pin và chức năng sạc nhanh.',
      description: 'Trạng thái sạc có thể nhận biết được với đèn LED khác nhau (Đỏ: Đang sạc, Xanh lam: Đã hoàn thành)Sạc dễ dàng theo mọi hướng mà không cần phân biệt tới lui trên SGP-100R.Dễ dàng vệ sinh ổ cắm sạc với vỏ sau có thể tháo rời bằng nam châm. Đệm chống trượt ở phía dưới giúp cố định và di chuyển sản phẩm dễ dàng.',
    },
    {
      id: 3,
      name: 'Nút chuông gọi ST-300',
      price: 10,
      type: 'Nut chuong',
      img: st_300,
      label: 'new',
      img_product: logo,
      brand: 'Syscall',
      origin: 'Korea',
      product_code: 'ST300',
      quantity: 10,
      short_description: 'Thẻ rung có kích thước nhỏ gọn nằm gọn trong một bàn tay Nhôm được áp dụng cho bộ phận sạc làm cho thiết kế của nó sang trọng hơn.Tăng dung lượng pin và chức năng sạc nhanh.',
      description: 'Trạng thái sạc có thể nhận biết được với đèn LED khác nhau (Đỏ: Đang sạc, Xanh lam: Đã hoàn thành)Sạc dễ dàng theo mọi hướng mà không cần phân biệt tới lui trên SGP-100R.Dễ dàng vệ sinh ổ cắm sạc với vỏ sau có thể tháo rời bằng nam châm. Đệm chống trượt ở phía dưới giúp cố định và di chuyển sản phẩm dễ dàng.',


    },
    {
      id: 4,
      name: 'Nút chuông gọi ST-300-2B',
      price: 10,
      type: 'Nut chuong',
      img: st_300_2b,
      // label:'new',
      img_product: logo,
      brand: 'Syscall',
      origin: 'Korea',
      product_code: 'ST-300-2B',
      quantity: 10,
      short_description: 'Thẻ rung có kích thước nhỏ gọn nằm gọn trong một bàn tay Nhôm được áp dụng cho bộ phận sạc làm cho thiết kế của nó sang trọng hơn.Tăng dung lượng pin và chức năng sạc nhanh.',
      description: 'Trạng thái sạc có thể nhận biết được với đèn LED khác nhau (Đỏ: Đang sạc, Xanh lam: Đã hoàn thành)Sạc dễ dàng theo mọi hướng mà không cần phân biệt tới lui trên SGP-100R.Dễ dàng vệ sinh ổ cắm sạc với vỏ sau có thể tháo rời bằng nam châm. Đệm chống trượt ở phía dưới giúp cố định và di chuyển sản phẩm dễ dàng.',


    },
    {
      id: 5,
      name: 'Nút chuông gọi ST-600',
      price: 10,
      product_code: 'ST600',
      img: st_600,
      label: 'new',
      type: 'Nut chuong',
      img_product: logo,
      brand: 'Syscall',
      origin: 'Korea',
      quantity: 10,
      short_description: 'Thẻ rung có kích thước nhỏ gọn nằm gọn trong một bàn tay Nhôm được áp dụng cho bộ phận sạc làm cho thiết kế của nó sang trọng hơn.Tăng dung lượng pin và chức năng sạc nhanh.',
      description: 'Trạng thái sạc có thể nhận biết được với đèn LED khác nhau (Đỏ: Đang sạc, Xanh lam: Đã hoàn thành)Sạc dễ dàng theo mọi hướng mà không cần phân biệt tới lui trên SGP-100R.Dễ dàng vệ sinh ổ cắm sạc với vỏ sau có thể tháo rời bằng nam châm. Đệm chống trượt ở phía dưới giúp cố định và di chuyển sản phẩm dễ dàng.',
    },
    {
      id: 6,
      name: 'Màn hình hiển thị SR-A2003',
      price: 10,
      product_code: 'SRA2003',
      img: sr_a2003,
      label: 'new',
      type: 'Man hinh',
      img_product: logo,
      brand: 'Syscall',
      origin: 'Korea',
      quantity: 10,
      short_description: 'Thẻ rung có kích thước nhỏ gọn nằm gọn trong một bàn tay Nhôm được áp dụng cho bộ phận sạc làm cho thiết kế của nó sang trọng hơn.Tăng dung lượng pin và chức năng sạc nhanh.',
      description: 'Trạng thái sạc có thể nhận biết được với đèn LED khác nhau (Đỏ: Đang sạc, Xanh lam: Đã hoàn thành)Sạc dễ dàng theo mọi hướng mà không cần phân biệt tới lui trên SGP-100R.Dễ dàng vệ sinh ổ cắm sạc với vỏ sau có thể tháo rời bằng nam châm. Đệm chống trượt ở phía dưới giúp cố định và di chuyển sản phẩm dễ dàng.',
    },
    {
      id: 6,
      name: 'Màn hình hiển thị SR-A303',
      price: 10,
      product_code: 'SRA303',
      img: sr_a303,
      label: 'new',
      type: 'Man hinh',
      img_product: logo,
      brand: 'Syscall',
      origin: 'Korea',
      quantity: 10,
      short_description: 'Thẻ rung có kích thước nhỏ gọn nằm gọn trong một bàn tay Nhôm được áp dụng cho bộ phận sạc làm cho thiết kế của nó sang trọng hơn.Tăng dung lượng pin và chức năng sạc nhanh.',
      description: 'Trạng thái sạc có thể nhận biết được với đèn LED khác nhau (Đỏ: Đang sạc, Xanh lam: Đã hoàn thành)Sạc dễ dàng theo mọi hướng mà không cần phân biệt tới lui trên SGP-100R.Dễ dàng vệ sinh ổ cắm sạc với vỏ sau có thể tháo rời bằng nam châm. Đệm chống trượt ở phía dưới giúp cố định và di chuyển sản phẩm dễ dàng.',
    },
    {
      id: 6,
      name: 'Bộ thẻ rung SGP-100R-10C',
      price: 10,
      product_code: 'SGP-100R-10C',
      img: SGP_100R_10C,
      label: 'new',
      type: 'Man hinh',
      img_product: logo,
      brand: 'Syscall',
      origin: 'Korea',
      quantity: 10,
      short_description: 'Thẻ rung có kích thước nhỏ gọn nằm gọn trong một bàn tay Nhôm được áp dụng cho bộ phận sạc làm cho thiết kế của nó sang trọng hơn.Tăng dung lượng pin và chức năng sạc nhanh.',
      description: 'Trạng thái sạc có thể nhận biết được với đèn LED khác nhau (Đỏ: Đang sạc, Xanh lam: Đã hoàn thành)Sạc dễ dàng theo mọi hướng mà không cần phân biệt tới lui trên SGP-100R.Dễ dàng vệ sinh ổ cắm sạc với vỏ sau có thể tháo rời bằng nam châm. Đệm chống trượt ở phía dưới giúp cố định và di chuyển sản phẩm dễ dàng.',
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