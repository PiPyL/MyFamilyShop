import { Col, Row } from "antd";
import "../App.css";
import { useEffect, useState } from "react";
function ProfileScreen() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const products = [
    { id: 1, name: "Sản phẩm 1", price: 100, description: "Mô tả sản phẩm 1" },
    { id: 2, name: "Sản phẩm 2", price: 150, description: "Mô tả sản phẩm 2" },
    { id: 3, name: "Sản phẩm 3", price: 200, description: "Mô tả sản phẩm 3" },
    { id: 4, name: "Sản phẩm 1", price: 100, description: "Mô tả sản phẩm 1" },
    { id: 5, name: "Sản phẩm 2", price: 150, description: "Mô tả sản phẩm 2" },
    { id: 6, name: "Sản phẩm 3", price: 200, description: "Mô tả sản phẩm 3" },
    { id: 7, name: "Sản phẩm 1", price: 100, description: "Mô tả sản phẩm 1" },
    { id: 8, name: "Sản phẩm 2", price: 150, description: "Mô tả sản phẩm 2" },
    { id: 9, name: "Sản phẩm 3", price: 200, description: "Mô tả sản phẩm 3" },
  ];

  // Tạo một hàm để cập nhật kích thước màn hình khi cửa sổ được thay đổi
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Sử dụng useEffect để thêm và loại bỏ event listener khi kích thước màn hình thay đổi
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ flex: 1 }}>
      <div>
        <div style={{ justifyContent: "center" }}>
          <h1 style={{ textAlign: "center" }}>Tài khoản</h1>
        </div>
        <Row style={{ paddingLeft: 12, paddingTop: 12 }}>
          {products.map((e) => (
            <Row
              style={{
                height: 100,
                width: (windowWidth - 12 * 5) / 4,
                marginRight: 12,
                marginBottom: 12,
                borderRadius: 10,
                flexDirection: "row",
                overflow: "hidden",
                boxShadow: "0px 0px 5px gray",
                background: "white",
              }}
              onClick={() => console.log(e)}
            >
              <img
                src={require("../assets/a.png")}
                style={{ height: 100, width: 100, objectFit: "cover" }}
              />
              <Col style={{ marginLeft: 12 }}>
                <p>{e.name}</p>
                <p>{e.price}</p>
                <p>{e.description}</p>
              </Col>
            </Row>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default ProfileScreen;
