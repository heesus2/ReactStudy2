import { Link } from 'react-router-dom'
// icon import----------------------------------
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaUserEdit } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaSlideshare } from "react-icons/fa";
// ---------------------------------------------
const Navbar = ({ show }) => {
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            <ul>
                <li>
                    <Link to='/' >
                        <IoHomeOutline />
                        홈
                    </Link>
                </li>
                <li>
                    <Link to='/profileChange'>
                        <FaUserEdit />
                        프로필 변경
                    </Link>
                </li>
                <li>
                    <Link to='/myInfo'>
                        <CgProfile />
                        내 정보
                    </Link>
                </li>
                <li>
                    <Link to='/myCalender'>
                        <SlCalender />
                        나의 일정
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <FaSlideshare />
                        나의 참여 그룹
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;