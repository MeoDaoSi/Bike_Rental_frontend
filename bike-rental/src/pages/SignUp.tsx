import { useState, useContext } from "react";
import { axiosClient } from "../apis/axiosClient";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/authContext";

export const SignUp = () => {

    const Navigate = useNavigate();
    const { regiser } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [confirmPassword, setComfirmPassword] = useState('');

    const regiser = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Mật khẩu không khớp");
            return;
        }
        try {
            const res = await axiosClient.post('/auth/register', {
                email,
                password,
                full_name: fullName,
            })
            localStorage.setItem('access_token', res.data.token);
            alert("Đăng ký thành công");
            Navigate('/');
        } catch (error) {
            alert("Đăng ký thất bại");
        }
    }

    return (
        <>
            <div className="maincontainer">
                <div className="firstcontainer">
                    <div className="titled"></div>
                    <div id="usersignin" style={{ display: "block" }} className="content">
                        <h2 className="pt-1">Đăng Ký</h2>
                        <form onSubmit={regiser} method="POST">
                            <div className="user-details">

                                <div className="input-box">
                                    <span className="details">Họ Tên Đầy Đủ</span>
                                    <input
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)} placeholder="Nhập Tên Đầy Đủ"
                                        required
                                    />
                                </div>

                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} placeholder="Nhập email của bạn"
                                        required
                                    />
                                </div>

                                <div className="input-box">
                                    <span className="details">Mật Khẩu</span>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} placeholder="Nhập mật khẩu"
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Xác Nhận Mật Khẩu</span>
                                    <input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setComfirmPassword(e.target.value)} placeholder="Nhập Lại Mật Khẩu"
                                        required
                                    />
                                </div>

                            </div>

                            <div className="button">
                                <button>Đăng Ký</button>
                            </div>
                        </form>

                        <h3>Đã Có Tài Khoản ?<a style={{ color: "#ff6a00" }} href="/signin"> Đăng Nhập</a></h3>
                    </div>


                </div>
            </div >
        </>
    )
}
