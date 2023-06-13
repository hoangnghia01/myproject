import { createContext, useState, useEffect } from "react";
import st_100 from "../../myproject/src/components/imgs/st-100-w.jpg"
import st_200 from "../../myproject/src/components/imgs/st-200.jpg"
import st_300 from "../../myproject/src/components/imgs/st-300.jpg"
import st_300_2b from "../../myproject/src/components/imgs/st3002b.png"
import st_600 from "../../myproject/src/components/imgs/st600.png"
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
      type: 'Man hinh',
      img_product: logo,
      brand: 'Syscall',
      origin: 'Korea',

      quantity: 10,
      short_description: 'Thẻ rung có kích thước nhỏ gọn nằm gọn trong một bàn tay Nhôm được áp dụng cho bộ phận sạc làm cho thiết kế của nó sang trọng hơn.Tăng dung lượng pin và chức năng sạc nhanh.',
      description: 'Trạng thái sạc có thể nhận biết được với đèn LED khác nhau (Đỏ: Đang sạc, Xanh lam: Đã hoàn thành)Sạc dễ dàng theo mọi hướng mà không cần phân biệt tới lui trên SGP-100R.Dễ dàng vệ sinh ổ cắm sạc với vỏ sau có thể tháo rời bằng nam châm. Đệm chống trượt ở phía dưới giúp cố định và di chuyển sản phẩm dễ dàng.',


    },
  ])

  return (
    <AppContext.Provider value={{
      handle_click, handle_click_close, show, setShow, handle_click_cart, handle_click_cart_close, showcart, setShowcart, handle_click_menu, close_menu, shownav, setShownav
      , backrgoudNav, setBackrgoudNav, products, goToTop, showTopBtn, setShowTopBtn
    }}>
      {children}
    </AppContext.Provider>
  )

}